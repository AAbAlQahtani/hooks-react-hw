import React, { useState } from 'react'
import Swal from 'sweetalert2';

export default function Application() {

    const [fname, setFname] = useState("")
    const [birthdate, setBirthDate] = useState("")
    const [city, setCity] = useState("")
    const [salary, setSalary] = useState("")
    const [reason, setReason] = useState("")
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");


    const calculateAge = (date) => {
        const today = new Date()
        const birth = new Date(date)
        let age = today.getFullYear() - birth.getFullYear()
        return age
    }

    const submit = (e) => {
        e.preventDefault();

        if (fname.length < 4) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Name must be at least four characters',
            });
            return
        }
        const age = calculateAge(birthdate)
        if (age < 18 || age >= 70) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Age must be between 18 and 70',
            });
            return
        }
        if (city == "") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please choose city',
            });
            return
        }
        if (!salary) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'please select expected salary',
            });
            return
        }
        if (reason.trim() == "") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'please enter your reason to apply',
            });
            return
        }
        if (!q1 || !q2 || !q3) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please answer all Yes/No questions',
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'form submitted successfully!',
        });

        setFname("")
        setBirthDate("")
        setCity("")
        setSalary("")
        setReason("")
        setQ1("");
        setQ2("");
        setQ3("");
    }

    return (

        <div className="min-h-screen bg-blue-100 flex items-center justify-center">
            <div className="p-6 md:max-w-xl w-full bg-white rounded-xl shadow-lg">

                <p className="text-2xl font-bold text-blue-800 mb-6 text-center">Apply Now</p>

                <label className="block font-semibold mb-1 text-gray-700">Name:</label>
                <input type="text" value={fname}
                    onChange={(e) => { setFname(e.target.value) }}
                    className='border rounded p-2 w-full mb-4' />

                <label className="block font-semibold mb-1 text-gray-700">Enter your birth date:</label>
                <input type="date" value={birthdate}
                    onChange={(e) => { setBirthDate(e.target.value) }}
                    className='border rounded p-2 w-full mb-4' />

                <label className="block font-semibold mb-1 text-gray-700">City:</label>
                <select value={city} id="city"
                    onChange={(e) => { setCity(e.target.value) }}
                    className="border rounded p-2 w-full mb-4">
                    <option value="">Choose city</option>
                    <option value="Riyadh">Riyadh</option>
                    <option value="Jeddah">Jeddah</option>
                    <option value="Dammam">Dammam</option>
                    <option value="Abha">Abha</option>
                    <option value="Tabouk">Tabouk</option>
                </select>

                <label className="block font-semibold mb-1 text-gray-700">Choose Your Expected Salary:</label>
                <div className="mb-4 text-gray-700">
                    <label className="block">
                        <input type="radio" value="3000-8000" name="salary"
                            checked={salary == "3000-8000"}
                            onChange={(e) => { setSalary(e.target.value) }} /> 3000-8000
                    </label>
                    <label className="block">
                        <input type="radio" value="9000-13000" name="salary"
                            checked={salary == "9000-13000"}
                            onChange={(e) => { setSalary(e.target.value) }} /> 9000-13000
                    </label>
                    <label className="block">
                        <input type="radio" value="15000orMore" name="salary"
                            checked={salary == "15000orMore"}
                            onChange={(e) => { setSalary(e.target.value) }} /> 15000 or more
                    </label>
                </div>

                <label className="block font-semibold mb-1 text-gray-700">Reason to apply:</label>
                <textarea name="reason" value={reason}
                    onChange={(e) => { setReason(e.target.value) }}
                    className="border rounded p-2 w-full mb-4"></textarea>

                <label className="block font-semibold mb-1 text-gray-700">Can you work overtime sometimes on weekends?</label>
                <div className="mb-4 text-gray-700">
                    <label className="mr-4">
                        <input type="radio" name="q1" value="Yes" checked={q1 === "Yes"}
                            onChange={(e) => setQ1(e.target.value)} /> Yes
                    </label>
                    <label>
                        <input type="radio" name="q1" value="No" checked={q1 === "No"}
                            onChange={(e) => setQ1(e.target.value)} /> No
                    </label>
                </div>

                <label className="block font-semibold mb-1 text-gray-700">Do you have strong soft skills?</label>
                <div className="mb-4 text-gray-700">
                    <label className="mr-4">
                        <input type="radio" name="q2" value="Yes" checked={q2 === "Yes"}
                            onChange={(e) => setQ2(e.target.value)} /> Yes
                    </label>
                    <label>
                        <input type="radio" name="q2" value="No" checked={q2 === "No"}
                            onChange={(e) => setQ2(e.target.value)} /> No
                    </label>
                </div>

                <label className="block font-semibold mb-1 text-gray-700">Can you work under pressure?</label>
                <div className="mb-6 text-gray-700">
                    <label className="mr-4">
                        <input type="radio" name="q3" value="Yes" checked={q3 === "Yes"}
                            onChange={(e) => setQ3(e.target.value)} /> Yes
                    </label>
                    <label>
                        <input type="radio" name="q3" value="No" checked={q3 === "No"}
                            onChange={(e) => setQ3(e.target.value)} /> No
                    </label>
                </div>

                <button type="submit"
                    onClick={submit}
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>
                    Submit
                </button>

            </div>
        </div>
    )
}
