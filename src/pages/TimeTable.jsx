import React from 'react'
import '../styles/timetable.css'

const TimeTable = () => {
    return (
        <div class="container">
        <div class="row">
           <div class="timetable">
               <div class="heading">
                   <h1>Abubakar Tafawa <span>balewa</span> University <span>Bauchi</span></h1>
                   <h2>faculty of Science</h2>
                   <h3>Department of <span>computer</span> Science <span>Timetable</span></h3>
               </div> <br />
               <div class="500L">
                        <div class="heading-2">
                            <p>500Level</p>
                            <p>Fisrt Semester</p>
                        </div>
                        <table>
                            <tr>
                                <th>Day</th>
                                <th>8-10</th>
                                <th>10-12</th>
                                <th>2-4</th>
                                <th>4-6</th>
                            </tr>
                            <tr>
                                <td>Monday</td>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>EEE502</td>
                                <td>EEE513</td>
                                <td>EEE417</td>
                                <td>FREE</td>
                            </tr>
                            <tr>
                                <td>Wednessday</td>
                                <td>CS511</td>
                                <td>CS512</td>
                                <td>CS513</td>
                                <td>CS514</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>CS515</td>
                                <td>FREE</td>
                                <td>FREE</td>
                                <td>FREE</td>
                            </tr>
                        </table>
                   </div>
                    </div>
                    </div>
                    </div>
    )
}

export default TimeTable
