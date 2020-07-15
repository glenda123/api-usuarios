import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    //Obtener los posts
    fetch(" https://academlo-api-users.herokuapp.com/users")
      .then(response => response.json())
      .then(results => this.setState({ users: results.data }))
      .catch(error => console.log(error));
  }
  

  addUser = event => {
    event.preventDefault();
    //Agregar un post
    fetch("https://academlo-api-users.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify()
    })
      .then(response => response.json())
      .then(results => console.log(results))
      .catch(error => console.log(error));
  };


  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    return (
      <div>
        <form onInput={this.handleInput} onSubmit={this.addUser}>
          <input name="name" type="text" placeholder="nombre del usuario" />
          <input name="lastname" type="text" placeholder="apellido" />
          <input name="email" type="text" placeholder="correo" />
          <input name="password" type="password" placeholder="contraseña" />
          <input type="submit" />
        </form>
        <div>
          {this.state.users.map(user => {
            return (
              <div>
                <div>{user.name}</div>
                <div>{user.lastname}</div>
                <div>{user.email}</div>
                <div>{user.password}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
}

export default App;

