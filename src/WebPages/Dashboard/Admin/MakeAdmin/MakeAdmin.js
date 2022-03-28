import React, { useState } from "react";
import { Button } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnSubmit = (e) => {
    const user= {email};
    fetch('http://localhost:5000/users/admin',{
      method: "PUT",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
    e.preventDefault();
  };
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="addProduct-image">
      <h1 className="pt-5"> Make Admin</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          name="email"
          id=""
          onBlur={handleOnBlur}
          placeholder="Your Email"
          required
        />
        <br />
        <br />
        <br />

        <br />
        <br />
        <Button type="submit" variant="outline-info">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
