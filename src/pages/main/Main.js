import { useState, useEffect } from "react";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import firebase from "../../firebase";
import { doc, getDocs } from "firebase/compat/firestore";

function Main() {
  const [students, setStudents] = useState();

  const getStudents = async () => {
    const studentsRef = firebase.firestore().collection('Student')
    const snapshot = await studentsRef.get();
    console.log(snapshot)
    snapshot.forEach(s=>{console.log(s.id, " -> " , s.data())})
  }

  useEffect(() => {
    getStudents();
  }, [])

  
  return (
    <div>
      <NavigationBar />
      <img
        className="-z-10 relative h-screen w-full object-fill"
        src="https://wallpapercave.com/wp/wp8168786.jpg"
      />
      <p className="-z-10 text-4xl font-extrabold text-white absolute top-52 left-1/2">
        AMBITION IS THE FIRST STEP TOWARDS{" "}
        <span className="text-7xl ml-4">SUCCESS</span>
      </p>

    </div>
  );
}

export default Main;
