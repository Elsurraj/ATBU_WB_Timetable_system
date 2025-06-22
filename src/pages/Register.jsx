import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Container, Row } from 'reactstrap';
import LoginImg from '../assest/images/hero4.jpeg';

import '../styles/form.css';

const Register = () => {
  const dataBase = [
    {
      RegNo: '17/47110u/1',
      password: 'password',
    },
    {
      RegNo: '17/50065u/1',
      password: 'password',
    },
    {
      RegNo: '17/47113u/1',
      password: 'password',
    },
    {
      RegNo: '17/47114u/1',
      password: 'password',
    },
    {
      RegNo: '17/47042u/1',
      password: 'password',
    },
  ];

  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Hook for navigation

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Find if the user exists in the database
    const user = dataBase.find((user) => user.RegNo === regNo && user.password === password);

    if (user) {
      // Successful login
      if (category === 'Student') {
        navigate('/loginTimetable'); // Redirect to timetable page for students
      } else if (category === 'Staff') {
        navigate('/adminpanel'); // Redirect to admin panel for staff
      } else {
        setErrorMessage('Please select a valid category.');
      }
    } else {
      // Error - Invalid credentials
      setErrorMessage('Invalid Registration Number or Password');
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <div className="account-page">
            <div className="container">
              <div className="row">
                <div className="col-2 account">
                  <img src={LoginImg} className="bg-image" alt="imag" />
                </div>
                <div className="col-2">
                  <div className="form-container">
                    <div className="form-btn">
                      <span>Login</span>
                      <hr id="Indicator" />
                    </div>
                    <form id="RegForm" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="ID"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)} // Capture RegNo input
                        required
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Capture password input
                        required
                      />
                      <div className="options-select">
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)} // Capture selected category
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="Student">Student</option>
                          <option value="Staff">Staff</option>
                        </select>
                      </div>
                      <div className="remember-me">
                        <input type="checkbox" />
                        <span>Remember Me</span>
                      </div>
                      <button type="submit" className="btnn">Login</button>
                    </form>
                    {/* Show error message if credentials are invalid or no category selected */}
                    <br />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
