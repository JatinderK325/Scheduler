import React, { useState } from 'react';
import './Load.css';

const Load = () => {
    const data = [
        { staff: 'X1' },
        { staff: 'X2' },
        { staff: 'X3' },
        { staff: 'X4' },
        { staff: 'X5' },
        { staff: 'X6' },
        { staff: 'X7' },
    ];

    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const [state, setState] = useState(data.map(() => [null, null, null, null, null]));

    /* const onChangeHandler = (event, index) => {
        const { name, value } = event.target;
        const newState = [...state];
        newState[index][name] = parseInt(value, 10);
        setState(newState);
    }; */

    const onChangeHandler = (event, index) => {
        const { name, value } = event.target;
        const newState = [...state];
        newState[index][name] = parseInt(value, 10);

        // ... Checking for consecutive lunch slots on the same day
        const dayIndex = parseInt(name);
        if (dayIndex > 0 && value === '1' && newState[index][dayIndex - 1] === 1) {
            // Displaying a warning and reset the selection
            alert(`Warning: ${data[index].staff} has consecutive lunch slots on ${dayNames[dayIndex - 1]}.`);
            newState[index][dayIndex] = null;
        }
        if (dayIndex > 0 && value === '2' && newState[index][dayIndex - 1] === 2) {
            // Displaying a warning and reset the selection
            alert(`Warning: ${data[index].staff} has consecutive lunch slots on ${dayNames[dayIndex - 1]}.`);
            newState[index][dayIndex] = null;
        }
        if (dayIndex > 0 && value === '3' && newState[index][dayIndex - 1] === 3) {
            // Displaying a warning and reset the selection
            alert(`Warning: ${data[index].staff} has consecutive lunch slots on ${dayNames[dayIndex - 1]}.`);
            newState[index][dayIndex] = null;
        }

        // ... Checking for staff member has more than 2 shifts per day
        if (value === '3') {
            // Displaying a warning and reset the selection
            alert(`Warning: ${data[index].staff} has already 2 shifts on ${dayNames[dayIndex]}.`);
            newState[index][dayIndex] = null;
        }
        setState(newState);
    };


    // .... for their number of slots correct for each day, and the correct total for the week
    const calculateTotal = (index) => {
        const rowValues = state[index];
        if (!rowValues.every((value) => value !== null)) {
            return '';
        }
        const rowTotal = rowValues.reduce((acc, curr) => acc + curr, 0);
        // .... when a staff member has more than 7 shifts per week
        if (rowTotal > 7) {
            // Displaying a warning and reset the selection
            alert(`Warning: Staff has already 7 shifts in this week.`);
        }
        return rowTotal;
    };

    return (
        <div className='header'>
            <h1>Load</h1>
            <table>
                <thead>
                    <tr>
                        <th>Staff Member</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((staff, index) => (
                        <tr key={index}>
                            <td>{staff.staff}</td>
                            <td> <select name={0} onChange={(e) => onChangeHandler(e, index)}>
                                <option value="">select an option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select></td>
                            <td> <select name={1} onChange={(e) => onChangeHandler(e, index)}>
                                <option value="">select an option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select></td>
                            <td> <select name={2} onChange={(e) => onChangeHandler(e, index)}>
                                <option value="">select an option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select></td>
                            <td> <select name={3} onChange={(e) => onChangeHandler(e, index)}>
                                <option value="">select an option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select></td>
                            <td> <select name={4} onChange={(e) => onChangeHandler(e, index)}>
                                <option value="">select an option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select></td>
                            <td>total: {calculateTotal(index)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Load;
