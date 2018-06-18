import React from "react"

class Dropdown extends React.Component {
  constructor() {
    super()

    this.state = {
      rocket_types: [],
      rockets: []
    }
  }

  mapRockets = (nextProps) => {
    let arr2 = []
    let arr = nextProps.launches.map((launch) => {return launch.rocket.rocket_type})

    for (let i = 0; i < arr.length; i++) {
      let type = arr[i]

      if (!arr2.includes(type)){
        arr2.push(type)
      }
    }
    // console.log(arr2);
    this.setState({
      rocket_types: arr2,
      rockets: arr
    })
  }

  componentWillReceiveProps(nextProps) {
    this.mapRockets(nextProps)
  }

  onChange = (event) => {
    console.log(this.state.rockets);
  }

  render() {
    return (
      <div>
        Search By Rocket Type: <select onChange={this.onChange}>
          {this.state.rocket_types.map((rocket, index) => <option key={index}>{rocket}</option>)}
        </select>
      </div>
    )
  }
}

export default Dropdown;
