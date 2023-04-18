import React from "react";
import ScheduleCell from "./ScheduleCell";
import './Schedule.css';

const Schedule = ({ day, timeSlot, staffList, onStaffSelect }) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const timeSlots = [
        'Morning UpStairs',
        'Morning Down Stairs',
        'Morning Parking Lot',
        'LunchA',
        'LunchB',
        'LunchC',
        'LunchD',
        'Afternoon Up Stairs',
        'Afternoon Down Stairs',
        'Afternoon Parking Lot',
    ];

    return (
        <div className="header">
            <h1>Schedule</h1>
            <table>
                <thead>
                    <tr>
                        {days.map((day) => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="body">
                    {timeSlots.map((timeSlot) => (
                        <tr key={timeSlot}>
                            <td>{timeSlot}</td>
                            {days.map((day) => (
                                <td key={`${day}-${timeSlot}`}>
                                    <ScheduleCell
                                        day={day}
                                        timeSlot={timeSlot}
                                        staffList={staffList}
                                        onStaffSelect={onStaffSelect}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
