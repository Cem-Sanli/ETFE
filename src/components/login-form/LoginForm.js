import React, { useState } from 'react'
import firebase from "../../firebase";

function LoginForm() {
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [role, setRole] = useState();
    
    const handleLogin = async(e) => {
      e.preventDefault();
      await firebase.auth().signInWithEmailAndPassword(email, password).then((authCredentials) => {
          console.log("logged in successfully")
          localStorage.setItem("user", email)
        }).catch(e => console.error(e));
    }
    return (
        <form onSubmit={handleLogin} className="flex flex-col items-center justify-center">

            <input
                onChange={e => setEmail(e.target.value)}
                className="my-6"
                type="mail"
                placeholder="Enter your mail"

            />

            <input
                onChange={e => setPassword(e.target.value)}
                className="my-6"
                type="password"
                placeholder="Enter your password"

            />
            <div className="flex items-center justify center">
                <input onChange={e => setRole(e.target.value)} name="role" className="mx-3" id="std" type="radio" value="Student" />
                <label htmlFor="std">Student</label>
                <input onChange={e => setRole(e.target.value)} name="role" className="mx-3" id="tch" type="radio" value="Teacher" />
                <label htmlFor="tch">Teacher</label>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">submit</button>
        </form>
    );

}

export default LoginForm;