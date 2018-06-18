import React from "react"

class Launch extends React.Component {
  constructor(){
    super()

    this.state = {
      clicked: false
    }
  }


  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
    }, () => console.log(this.state.clicked))
  }

  render() {
    const fetchDetails = this.props.details ? <p>{this.props.details}</p> : <p>No available launch details</p>
    return (
        <div className="column">
          <h2>{this.props.id}) Serial Number - {this.props.core_serial}</h2>
          <div><strong onClick={this.handleClick}>Click For Launch Description:</strong> {this.state.clicked ? fetchDetails : null}</div>
          {this.state.clicked ? <iframe title="x" width="500" height="315" src={this.props.video_link.replace("watch?v=","embed/")}></iframe> : null}
          <br/>
        </div>
    )
  }

}

export default Launch
