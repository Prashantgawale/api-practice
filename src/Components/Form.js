import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  function saveUser() {
    console.warn(name, email, mobile);
    let data = { name, email, mobile };
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        Accept: "applicatio/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result);
    });
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="Name"
      ></input>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="Email"
      ></input>
      <input
        type="number"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        name="Mobile No"
      ></input>
      <button type="submit" onClick={saveUser}>
        {" "}
        Submit
      </button>
    </div>
  );
}

export default Form;
