import React from "react"
import Launch from "./Launch.js"
import Filter from "./Filter.js"
import Dropdown from "./Dropdown.js"

const URL = "https://api.spacexdata.com/v2/launches"

class LaunchList extends React.Component {
  constructor() {
    super()

    this.state = {
      launches: [],
      filter: "",
      filteredSearches: []
    }
  }

  componentDidMount() {
    this.fetchLaunches()
  }

  fetchLaunches() {
    fetch(URL)
    .then(res => res.json())
    .then(launches => this.setState({ launches }))
  }

  handleFilter = (event) => {
    this.setState({
      filter: event.target.value,
    }, () => {
      this.setState({
        filteredSearches: this.state.launches.filter((launch) => {return (launch.rocket.first_stage.cores["0"].core_serial.toLowerCase().includes(this.state.filter))})
      })
    })
  }

  render() {
    const { launches, filteredSearches } = this.state
    return(
      <div id="home-page">
        <h1>SpaceX Launches</h1> <br/>
          <Filter handleFilter={this.handleFilter}/><br/>
          <Dropdown launches={this.state.launches}/>
          <br/>
          <div className="ui vertically divided grid">
          <div className="two column row">
            {filteredSearches.length === 0 ? launches.map((launch) => {return <Launch key={launch.flight_number} id={launch.flight_number} details={launch.details} video_link={launch.links.video_link} core_serial={launch.rocket.first_stage.cores["0"].core_serial} rocket_type={launch.rocket.rocket_type}/>}) : filteredSearches.map((launch) => {return <Launch rocket_type={launch.rocket.rocket_type} key={launch.flight_number} id={launch.flight_number} details={launch.details} video_link={launch.links.video_link} core_serial={launch.rocket.first_stage.cores["0"].core_serial}/>})}
          </div>
        </div>
      </div>
    )
  }
}

export default LaunchList;
