import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar";
import NavigationBar from "../../components/navigation-bar/NavigationBar";

function CalendarPage() {
  const [value, onChange] = useState(new Date());
  return (
    
    <div className="h-screen">
      <NavigationBar />
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default CalendarPage;
