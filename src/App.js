import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username : '',
      userpassword : '',
      usergender : 0,
      userLang : "vi",
      userActive : false
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onHandleChange(event){
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value
    this.setState({
      [name] : value
    })
  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <form className="col-lg-3" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="username" className="form-control" onChange={ this.onHandleChange}/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" name="userpassword" className="form-control" onChange={ this.onHandleChange}/>
              </div>
              <div className="form-group">
                <label>Gender</label>
                  <select className="form-control" name="usergender" value={this.state.usergender} onChange={ this.onHandleChange}>
                    <option value={1}>Nữ</option>
                    <option value={0}>Nam</option>
                  </select>
              </div>
              <div className="form-group">
                  <label>
                    <input type="radio"name="userLang" value="en" onChange={ this.onHandleChange} checked={this.state.userLang === "en"}/>
                    English
                  </label>
                  <br/>
                  <label>
                    <input type="radio" name="userLang" value="vi" onChange={ this.onHandleChange} checked={this.state.userLang === "vi"}/>
                    Vietnamese
                  </label>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" name="userActive" onChange={ this.onHandleChange} value={true} checked={this.state.userActive === true} />
                  Active
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
    </div>
    );
  }
}

export default App;