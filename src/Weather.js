import React, { Component } from 'react';
import axios from 'axios'
class Weather extends Component {

  state = {
    zipcode: '',
    city: ''
  }

  handleChange = (event) => {
    this.setState({zipcode: event.target.value});
    console.log('Your zip code is' + this.state.zipcode);
  }

  handleSubmit = (event) => {
    // Your fetch here
    const URL = 'http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98'
    let config = {
      city: {'Accept': 'application/json'}
    }
    //Make the call
    axios.get(URL, config)
    .then(response => {
      this.setState({
        zipcode: response.data.value,
        city: response.data.city
      })
      console.log(response.data)
    })
    .catch(err=>console.log('Oh noes', err))
    // Your state updates go under function(json)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <p>
          
        </p>
        <label>
          Please enter your zip code for the weather:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Get my forecast!" />
      </form>
      </div>
    )
  }
}


export default Weather;