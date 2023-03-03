import React, {useState} from 'react';
import './Ca.css';
import Dropdown from '../ca-dropdown/Dropdown';
import data from "../dummy-data/DummyData";
import $ from 'jquery';


const Ca = ()=>{
    $(document).ready(()=>{
        let table = $('.table');
        let tableBody = $('.ca-table-body');
        let tableRow = $('.table tbody tr');
        tableRow.each((index, element)=>{
            let sum = 0;
            let sum2 = 0;
            let sum3 = 0;
            let ca1 = $(element).find('td').eq(2).find('input');
            let ca2 = $(element).find('td').eq(3).find('input');
            let ca3 = $(element).find('td').eq(4).find('input');
            let caTotal = $(element).find('td').eq(5);
            let grade = $(element).find('td').eq(6);
            let position = $(element).find('td').eq(7);
            let comment = $(element).find('td').eq(8);
            ca1.on("change",()=>{
                $(this).text('');
                $(this).text($(this).val());
                let score = ca1.val();
                sum += parseFloat(score);
            })
            ca2.on("change",()=>{
                $(this).text('');
                $(this).text($(this).val());
                let score = ca2.val();
                sum2 += parseFloat(score);
            });
            ca3.on("change",()=>{
                $(this).text('');
                $(this).text($(this).val());
                let score = ca3.val();
                sum3 += parseFloat(score);
            });
            (ca1 && ca2 && ca3).on("change",()=>{
                caTotal.text(sum + sum2 + sum3);
            });
            
            (ca1 && ca2 && ca3).on("change",()=>{
                if (caTotal.text() >= 70) {
                    grade.text('A');
                } else if (caTotal.text() >= 60) {
                    grade.text('B');
                } else if (caTotal.text() >= 50) {
                    grade.text('C');
                } else if (caTotal.text() >= 40) {
                    grade.text('D');
                } else if (caTotal.text() >= 30) {
                    grade.text('E');
                } else {
                    grade.text('F');
                }
            })
        });
    });
    // drop down states
    const [selected, setSelected] = useState('')
    const [isSubject, setIsSubject] = useState('')
    const [isSession, setIsSession] = useState('')

    // ca states
    // const [caTotal, setCaTotal] = useState('')

    const initialValues = {
        ca1: 0,
        ca2: 0,
        ca3: 0
    }
    const [values, setValues] = useState(initialValues);

    const handleSubmit = (event) => {
        // event.preventDefault();
        // console.log(values)
    }
    return (
        <div className="ca-container">
           <div className='ca-form-entry-container'>

                <div className='school-name-container'>
                    <h1 className='school-name'>AG MODERN PRIMARY SECONDARY SCHOOL</h1>
                    <h2>Primary 2</h2>
                </div>
               <Dropdown
                   selected={selected}
                   setSelected={setSelected}
                   isSubject={isSubject}
                   setIsSubject={setIsSubject}
                   isSession={isSession}
                   setIsSession={setIsSession}
               />
                <div className='add-remove-ca'>
                    <button className='add-remove-ca-button'>
                        <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;
                        ADD CA
                    </button>
                    <button className='add-remove-ca-button'>
                        <i className="fa-solid fa-minus"></i>&nbsp;&nbsp;
                        REMOVE CA
                    </button>
                </div>

                <div className='ca-form'>
                    <form onSubmit={handleSubmit}>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>1st CA</th>
                                    <th>2nd CA</th>
                                    <th>3rd CA</th>
                                    <th>CA Total</th>
                                    <th>Grade</th>
                                    <th>Position</th>
                                    <th>Comment</th>
                                </tr>
                            </thead>
                            <tbody className='ca-table-body'>
                            {data.map((item, index) => {
                               return(
                                   <tr>
                                       <td>{item.id}</td>
                                       <td>{item.name}</td>

                                       <td>
                                           <input className='form-control' name='ca1' type='text'></input>
                                       </td>
                                       <td>
                                           <input type='text' name='ca2' className='form-control'></input>
                                       </td>
                                       <td>
                                           <input type='text' name='ca3' className='form-control'></input>
                                       </td>
                                       <td></td>
                                       <td></td>
                                       <td></td>
                                       <td></td>
                                   </tr>
                              )
                            })}
                            </tbody>
                        </table>
                        <input type='submit' className='submit-ca-button' value='SUBMIT'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Ca;