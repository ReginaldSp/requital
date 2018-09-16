import React, { Component } from 'react';
import fetch from 'cross-fetch';

class AdminArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    console.log(this.state)
    fetch('/api/some').then(res => res.json())
      .then(locations => {
        console.log(locations)
        this.setState({data: locations})
      });

      fetch('/api/somes', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        //make sure to serialize your JSON body
        body: JSON.stringify({
          name: 'Zakhar',
          password: '123456'
        })
      })
      .then( (response) => { 
         console.log(response)
      });
  }

  render() {
    return (
      <div>
        <h1>Hello Admin!</h1>
        {this.state.data.some ? this.state.data.some : 'none'}
      </div>
    );
  }

}

export default AdminArea;
