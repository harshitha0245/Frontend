// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   async function login(event) {
//     event.preventDefault();
//     try {
//       await axios
//         .post("http://localhost:5002/api/v1/auth/login", {
//           username: email,
//           password: password})
//         .then(
//           (res) => {
//             console.log(res.data);

//             if (res.data.message === "Email not exits") {
//               alert("Email not exits");
//             } else if (res.data.message === "Login Success") {
//               navigate("/home");
//             } else {
//               alert("Incorrect Email and Password not match");
//             }
//           },
//           (fail) => {
//             console.error(fail); // Error!
//           }
//         );
//     } catch (err) {
//       alert(err);
//     }
//     console.log(email);
//     console.log(password);
//   }
//   return (
//     <div>
//       <div class="container">
//         <div class="row">
//           <h2>Login</h2>
//           <hr />
//         </div>
//         <div class="row">
//           <div class="col-sm-6">
//             <form>
//               <div class="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="email"
//                   placeholder="Enter Name"
//                   value={email}
//                   onChange={(event) => {
//                     setEmail(event.target.value);
//                   }}
//                 />
//               </div>
//               <div class="form-group">
//                 <label>password</label>
//                 <input
//                   type="password"
//                   class="form-control"
//                   id="password"
//                   placeholder="Enter Fee"
//                   value={password}
//                   onChange={(event) => {
//                     setPassword(event.target.value);
//                   }}

//                 />
//               </div>
//               <button type="submit" class="btn btn-primary" onClick={login}>
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;





// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   async function login(event) {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5002/api/v1/auth/login", {
//         username: email,
//         password: password,
//       });

//       if (response.data.message === "Email not exists") {
//         alert("Email does not exist");
//       } else if (response.data.message === "Login Success") {
//         navigate("/home");
//       } else {
//         alert("Incorrect email and password combination");
//       }
//     } catch (err) {
//       alert(err);
//     }
//   }

//   return (
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
//       <div style={{ width: "400px", padding: "20px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#f8f8f8" }}>
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(event) => {
//                 setEmail(event.target.value);
//               }}
//               style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(event) => {
//                 setPassword(event.target.value);
//               }}
//               style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             onClick={login}
//             style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import image from "../images/back.jpg"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/api/v1/auth/login", {
        username: email,
        password: password,
      });

      if (response.data.message === "Email not exists") {
        alert("Email does not exist");
      } else if (response.data.token) {
        navigate("/home");
      } else {
        console.log(response.data)
        // alert("Incorrect email and password combination");
      }
    } catch (err) {
      console.log(err)
      if(err.response.status === 400){
        alert("Incorrect password")
      }else if(err.response.status === 404){
        alert("Email does not exists")
      }else
      alert(err.message);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",

        backgroundImage: 'linear-gradient(to right, rgb(222 164 220), rgb(44 39 107)',

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ width: "400px", padding: "20px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "rgb(232 219 223)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={login}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          >
            Login
          </button>
        </form>
        <a href="/register">Register</a>
      </div>
    </div>
  );
}

export default Login;
