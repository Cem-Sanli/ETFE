import React, { useState } from "react";
import firebase from "../../firebase";



function UserForm() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const handleAdd = async (e) => {

    e.preventDefault()
    await firebase.auth().createUserWithEmailAndPassword(email, password).then(async () => {
      await firebase.firestore().collection(role).add({
        name,
        surname,
        email,
        password,
        role
      })



      //Write code to use authData to add to Users
    }).catch((_error) => {
      console.log("Login Failed!", _error);
    });
  }

    console.log(role)

    return (
      <form onSubmit={handleAdd} className="flex flex-col items-center justify-center">
        <input
          onChange={(e) => setName(e.target.value)}
          className="rounded-sm my-6 focus:outline-none focus:ring-green-500 focus:ring-1"
          type="text"
          placeholder="Enter your name"

        />
        <input
          onChange={e => setSurname(e.target.value)}
          className="rounded-sm my-6 focus:outline-none focus:ring-green-500 focus:ring-1"
          type="text"
          placeholder="Enter your surname"

        />
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
export default UserForm;
