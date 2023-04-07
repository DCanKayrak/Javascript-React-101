import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = {
        username : "",
        city : ""
    }

    onChangeHandler = (event)=>{
        //this.setState({username:event.target.value})
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name] : value})
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        alert(this.state.username+" - "+this.state.city);
    }

  render() {
    return (
      <div>
        <form  onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <input name='username' onChange={this.onChangeHandler} type='text'/>
            <h3>Username is {this.state.username}</h3>

            <h3>City</h3>
            <input name='city' onChange={this.onChangeHandler} type='text'/>
            <h3>City is {this.state.city}</h3>

            <input type='Submit' value='Save'/>
        </form>
      </div>
    )
  }
}
