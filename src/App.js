import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      formulario:{}
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
    
    fetch("https://academlo-api-users.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(this.state.formulario)
    })
      .then(response => response.json())
      .then(results => console.log(results))
      .catch(error => console.log(error));
  };


  handleInput = event => {
    this.setState({
      formulario: {
        ...this.state.formulario,[event.target.name]: event.target.value
      }
    });
  };

  render(){
    return (
      <div>
        <form onInput={this.handleInput} onSubmit={this.addUser}>
          <br></br>
          <div className="nombre">Nombre :</div> &nbsp; &nbsp;
          <input className="name" name="name" type="text" placeholder="nombre del usuario" /> <br></br><br></br>
          <div className="apellido">Apellido :</div> &nbsp; &nbsp;
          <input  className="lastname" name="lastname" type="text" placeholder="apellido" /><br></br><br></br>
          <div className="correo">Correo :</div> &nbsp; &nbsp;
          <input className="email" name="email" type="text" placeholder="correo" /> <br></br><br></br>
          <div className="contrasenia">Contraseña :</div> &nbsp; &nbsp;
          <input className="password" name="password" type="password" placeholder="contraseña" /> <br></br><br></br>
          <input type="submit" /><br></br><br></br>
        </form>
        <div>
          {this.state.users.map(user => {
            return (
              <div className="grid-container">
                  <div className="tarjeta">
                       <br></br>
                        <div>{user.name}</div> <br></br>
                        <div>{user.lastname}</div><br></br>
                        <div>{user.email}</div> <br></br>
                        <div>{user.password}</div><br></br>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
}

export default App;

