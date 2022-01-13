import React from "react";
import { useNavigate } from "react-router-dom";
import firebase from "../../firebase"
function NavigationBar() {
  const handleLogout = async () => {
    
    await firebase.auth().signOut();
    localStorage.removeItem("user")
  }
  const navigate = useNavigate();
  return (
    <nav className="bg-white flex justify-evenly items-center my-3">
      <div
        onClick={() => navigate("/")}
        className="ml-8 flex items-center justify-evenly flex-col"
      >
        <h2 className="text-4xl font-extrabold">ETFE</h2>
        <p>English Teacher for Everyone</p>
      </div>

      <div className="flex items-center justify-evenly">
        <button
          onClick={() => navigate("/")}
          role="none"
          className="text-xl mx-4 hover:underline underline-offset-1"
        >
          Home
        </button>
        <button className="text-xl mx-4 hover:underline underline-offset-1"
         onClick={() => navigate("/instructors")}
        >
          
          Instructors
        </button>

        <button className="text-xl mx-4 hover:underline underline-offset-1"
        onClick={() => navigate("/Calendar")}>
          Calendar
        </button>
        <button className="mx-4 hover:underline underline-offset-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </button>
        <button className="mx-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {localStorage.getItem("user")}
      </div>

      <div class="relative inline-block text-left">
        <div>
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Sign Options
            <svg
              class="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <a
              href="/login"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              Log In
            </a>
            <a
              href="/register"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Register
            </a>
            <a
              onClick={handleLogout}
              href="/"
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
