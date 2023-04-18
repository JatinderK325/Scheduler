import React, { useState } from 'react';

const ScheduleCell = ({ day, timeSlot, staffList, onStaffSelect }) => {
    // state for selecting staff 
    const [selectedStaff, setSelectedStaff] = useState(null);

    // function to select staff in a cell of the table(Schedule).
    const handleStaffSelect = (event) => {
        const staffId = event.target.value;
        // updating the state
        setSelectedStaff(staffId);
        onStaffSelect(day, timeSlot, staffId);
    };

    return (
        <select value={selectedStaff} onChange={handleStaffSelect}>
            <option value={null}>Select Staff</option>
            {staffList.map((staff) => (
                <option key={staff.id} value={staff.id}>
                    {staff.name}
                </option>
            ))}
        </select>
    );
};

export default ScheduleCell;