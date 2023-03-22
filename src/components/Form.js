import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  const [formData, setFormData] = useState({
    firstName: "John",
    middleInitial: "B",
    lastName: "Henry",
    admin: false,
  });

  // function handleFirstNameChange(event) {
  //   //setFirstName(event.target.value);
  //   setFormData({
  //     ...formData, firstName: event.target.value,
  //   })
  // }

  // function handleLastNameChange(event) {
  //   // setLastName(event.target.value);
  //   setFormData({
  //     ...formData, lastName: event.target.value,
  //   })
  // }

  function handleChange (event) {
    const name = event.target.name;
    let value = event.target.value;

    console.log(name) //key that's getting the change currently
    console.log(value) //value that's changing currently

    //use 'checked' property of checkboxes instead of 'value' captured above
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({...formData, [name]: value, })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="middleInitial" onChange={handleChange} value={formData.middleInitial} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;