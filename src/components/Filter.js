import React from "react"

class Filter extends React.Component {

  render() {
    return (
      <div>
        Filter Launches: <input text="text"  placeholder="Filter by Name" onChange={this.props.handleFilter} /> <br />
      </div>
    )
  }
}

export default Filter
