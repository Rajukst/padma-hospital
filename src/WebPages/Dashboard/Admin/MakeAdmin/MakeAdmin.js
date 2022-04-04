import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnSubmit = (e) => {
    const user= {email};
    fetch('https://protected-basin-36315.herokuapp.com/users/admin',{
      method: "PUT",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }
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
