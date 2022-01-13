import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import { useNavigate } from "react-router-dom";
function Instructors() {
  const [instructors, setInstructors] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    const resp = await firebase.firestore().collection("Teacher");
    const snapshot = await resp.get();
    snapshot.forEach((s) => setInstructors((i) => [...i, s.data()]));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(instructors);
  return (
    <div>
      <NavigationBar />
      <div className="mt-24 gap-4 grid grid-cols-3">
        {instructors.map((i) => (
          <div className=" relative w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
            <p className="text-white">
              {i.name} {i.surname}
            </p>
            <p className="text-white">{i.email}</p>
            <button onClick={() => navigate("/calendar")} className="absolute top-2 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instructors;
