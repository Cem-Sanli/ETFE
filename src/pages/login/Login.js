import React from "react";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import LoginForm from "../../components/login-form/LoginForm"
function LoginPage() {
  return (
    <div className="h-screen bg-sky-800">
      <NavigationBar/>
      <LoginForm/>
    </div>
  )
}

export default LoginPage;