import React from "react";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import UserForm from "../../components/user-form/UserForm";

export default function LoginPage() {
  return (
    <div className="h-screen bg-sky-800">
      <NavigationBar />
      <UserForm />
    </div>
  );
}
