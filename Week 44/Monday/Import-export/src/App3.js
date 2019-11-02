import React from "react";
import {names} from './file2';


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function WelcomePerson(props) {
    const person = props.person;
    const {firstName, lastName, email} = person;
    return (
      <div>
      <p>person: </p> 
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>email: {email}</p>
      <br></br>
      </div>
    )
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Sara" />
      <Welcome name="Cahal" />
        <Welcome name="Edite" />
      <WelcomePerson person={names[0]} />
      <WelcomePerson person={names[1]} />
      <WelcomePerson person={names[2]} />
      </div>
    );
  }
  export default App;
