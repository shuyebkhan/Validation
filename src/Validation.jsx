import { useState } from "react";

function Validation() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function handleName(e) {
    let name = e.target.value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    setName(name);
  }

  function handleEmail(e) {
    let email = e.target.value;
    if (!email.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(email);
  }

  function handleSubmit(e) {
    e.preventDefault();

    //   NAME CONDITION
    let name = e.target[0].value;
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    //    EMAIL CONDITION
    let email = e.target[1].value;
    if (!email.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    // FINAL CONDITION.
          if((!name.length < 3) && (email.match(emailRegex)))
          {
               alert (`Form has been Submitted.`);
                alert('name= ' + name + " email= "+ email);
               }
            }
  return (
    <>
      <h1>Validation Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name:</label>
        <input type="text" name="name" onChange={handleName} value={name} />
        <br />
        {nameError ? <span style={{ color: "red" }}>Name Error</span> : ""}
        <br />
        <br />
        <label>Enter Email:</label>
        <input type="text" name="email" onChange={handleEmail} value={email} />
        <br />
        {emailError ? <span style={{ color: "red" }}>Invalid Email</span> : ""}
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Validation;
