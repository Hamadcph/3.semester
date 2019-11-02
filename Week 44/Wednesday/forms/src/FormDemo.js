import React, {useState} from "react";
 
const NameForm = () => {
    const initialState = {name: ""};

  const [name,setName] = useState(initialState);

  function handleChange(event) {
    const target = event.target; 
    const id = target.id;
    const value = target.value;
    setName(value);
  }


  function handleSubmit(evt) {
    evt.preventDefault();
    window.alert(JSON.stringify(name))
    setName(initialState)

  }
 
  return (
    <div>
      <form  >
      <input type="text" id="name"  value={name.name}  placeholder="enter name" onChange={handleChange}/>
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
      </form>
      <p>{JSON.stringify(name)}</p>
    </div>
  );
};
 
export default function FormDemo() {
    return (
      <div style={{ marginTop: 25 }}>
        <NameForm />
      </div>
    );
  }
  