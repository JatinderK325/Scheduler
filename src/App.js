import React, { useState } from 'react';
import Schedule from './components/Schedule';
import Load from './components/Load';
import './App.css';

function App() {
  const [schedule, setSchedule] = useState([
    { day: 'Monday', timeSlot: 'Morning Upstairs', staff: null },
    { day: 'Monday', timeSlot: 'Morning Downstairs', staff: null },
    { day: 'Monday', timeSlot: 'Morning Parking Lot', staff: null },
    { day: 'Tuesday', timeSlot: 'Morning Upstairs', staff: null },
    { day: 'Tuesday', timeSlot: 'Morning Downstairs', staff: null },
    { day: 'Tuesday', timeSlot: 'Morning Parking Lot', staff: null },
    { day: 'Wednesday', timeSlot: 'Morning Upstairs', staff: null },
    { day: 'Wednesday', timeSlot: 'Morning Downstairs', staff: null },
    { day: 'Wednesday', timeSlot: 'Morning Parking Lot', staff: null },
    { day: 'Thursday', timeSlot: 'Morning Upstairs', staff: null },
    { day: 'Thursday', timeSlot: 'Morning Downstairs', staff: null },
    { day: 'Thursday', timeSlot: 'Morning Parking Lot', staff: null },
    { day: 'Friday', timeSlot: 'Morning Upstairs', staff: null },
    { day: 'Friday', timeSlot: 'Morning Downstairs', staff: null },
    { day: 'Friday', timeSlot: 'Morning Parking Lot', staff: null },
    { day: 'Monday', timeSlot: 'LunchA', staff: null },
    { day: 'Monday', timeSlot: 'LunchB', staff: null },
    { day: 'Monday', timeSlot: 'LunchC', staff: null },
    { day: 'Monday', timeSlot: 'LunchD', staff: null },
    { day: 'Tuesday', timeSlot: 'LunchA', staff: null },
    { day: 'Tuesday', timeSlot: 'LunchB', staff: null },
    { day: 'Tuesday', timeSlot: 'LunchC', staff: null },
    { day: 'Tuesday', timeSlot: 'LunchD', staff: null },
    { day: 'Wednesday', timeSlot: 'LunchA', staff: null },
    { day: 'Wednesday', timeSlot: 'LunchB', staff: null },
    { day: 'Wednesday', timeSlot: 'LunchC', staff: null },
    { day: 'Wednesday', timeSlot: 'LunchD', staff: null },
    { day: 'Thursday', timeSlot: 'LunchA', staff: null },
    { day: 'Thursday', timeSlot: 'LunchB', staff: null },
    { day: 'Thursday', timeSlot: 'LunchC', staff: null },
    { day: 'Thursday', timeSlot: 'LunchD', staff: null },
    { day: 'Friday', timeSlot: 'LunchA', staff: null },
    { day: 'Friday', timeSlot: 'LunchB', staff: null },
    { day: 'Friday', timeSlot: 'LunchC', staff: null },
    { day: 'Friday', timeSlot: 'LunchD', staff: null },
    { day: 'Monday', timeSlot: 'Afternoon Upstairs', staff: null },
    { day: 'Monday', timeSlot: 'Afternoon Downstairs', staff: null },
    { day: 'Monday', timeSlot: 'Afternoon Parking Lot', staff: null },
    { day: 'Tuesday', timeSlot: 'Afternoon Upstairs', staff: null },
    { day: 'Tuesday', timeSlot: 'Afternoon Downstairs', staff: null },
    { day: 'Tuesday', timeSlot: 'Afternoon Parking Lot', staff: null },
    { day: 'Wednesday', timeSlot: 'Afternoon Upstairs', staff: null },
    { day: 'Wednesday', timeSlot: 'Afternoon Downstairs', staff: null },
    { day: 'Wednesday', timeSlot: 'Afternoon Parking Lot', staff: null },
    { day: 'Thursday', timeSlot: 'Afternoon Upstairs', staff: null },
    { day: 'Thursday', timeSlot: 'Afternoon Downstairs', staff: null },
    { day: 'Thursday', timeSlot: 'Afternoon Parking Lot', staff: null },
    { day: 'Friday', timeSlot: 'Afternoon Upstairs', staff: null },
    { day: 'Friday', timeSlot: 'Afternoon Downstairs', staff: null },
    { day: 'Friday', timeSlot: 'Afternoon Parking Lot', staff: null },
  ]);

  const [staffList, setStaffList] = useState([
    { id: 1, name: 'X1', selected: false },
    { id: 2, name: 'X2', selected: false },
    { id: 3, name: 'X3', selected: false },
    { id: 4, name: 'X4', selected: false },
    { id: 5, name: 'X5', selected: false },
    { id: 6, name: 'X6', selected: false },
    { id: 7, name: 'X7', selected: false }
  ]);

  const onStaffSelect = (day, timeSlot, selectedStaff, id) => {
    // Find the index of the time slot in the schedule
    const dayIndex = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].indexOf(day);
    const timeSlotIndex = ['Morning UpStairs', 'Morning Down Stairs', 'Morning Parking Lot', 'LunchA', 'LunchB', 'LunchC', 'LunchD', 'Afternoon Up Stairs', 'Afternoon Down Stairs', 'Afternoon Parking Lot'].indexOf(timeSlot);

    // Creating a copy of the schedule state to modify
    const newSchedule = [...schedule];

    // Updating the selected staff member for the given time slot
    newSchedule[dayIndex][timeSlotIndex] = selectedStaff;

    // Setting the updated schedule state
    setSchedule(newSchedule);
    const updatedStaffList = staffList.map(staff => {
      if (staff.id === id) {
        return { ...staff, selected: true };
      } else {
        return { ...staff, selected: false };
      }
    });
    setStaffList(updatedStaffList);
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <Schedule day={schedule.day} timeSlot={schedule.timeSlot} staffList={staffList} onStaffSelect={onStaffSelect} />
        <br /><br /><br />
        <Load />
      </div>
    </div>
  );
}

export default App;
