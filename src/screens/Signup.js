import React,{useState} from "react";
import { Link } from "react-router-dom";


export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", Geolocation: "India" });
const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.Geolocation})
    });
    const json = await response.json();
    console.log(json)

    if(!json.success){
        alert("Enter Valid Credentials")
    }
}
const onChange = (event) => {
    if (event.target) {
        setCredentials({
        ...credentials,
        [event.target.name]: event.target.value
      });
    }
  };
  
  return (
    <>

    <div className="container">

      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
             Address
          </label>
          <input
            type="text"
            className="form-control"
            name="geolocation"
            value={credentials.Geolocation}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="m-3 btn btn-success">
          SignUp
        </button>
        <Link to="/Login" className="m-3 btn btn-danger">Already a User</Link>
      </form>
      </div>
    </>
  );
}