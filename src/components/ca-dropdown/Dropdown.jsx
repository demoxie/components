import React, {useState} from "react";
import "./dropdown.css";

const Dropdown = ({selected, setSelected, isSubject, setIsSubject, isSession, setIsSession}) => {
    const [isActive, setIsActive] = useState(false);
    const [subject, setSubject] = useState(false);
    const [session, setSession] = useState(false);
    const handleClick = (e) => {
        setIsActive(!isActive)
    }
    const handleClick2 = (e) => {
        setSubject(!subject)
    }
    const handleClick3 = (e) => {
        setSession(!session)
    }
    const options = ['jss1', 'jss2', 'jss3']
    const subjectOptions = ['mathematics', 'english', 'physics']
    const sessionOptions = ['2020/2021', '2021/2022', '2022/2023']
    return (
        <>
            {/*Select class Dropdown*/}
            <div className='dropdown'>
                <div className='dropdown-btn' onClick={handleClick}>
                    {selected || 'Select Class'}
                    <span className='fas fa-caret-down'></span>
                </div>

                <div className='dropdown-btn' onClick={handleClick2}>
                    {isSubject || 'Select Subject'}
                    <span className='fas fa-caret-down'></span>
                </div>

                <div className='dropdown-btn' onClick={handleClick3}>
                    {isSession || 'Select Session'}
                    <span className='fas fa-caret-down'></span>
                </div>

                {isActive && (
                    <div className='dropdown-content'>
                        {options.map(option => (
                           <div
                               onClick={(e) => {
                                setSelected(option)
                                setIsActive(false)
                               }}
                               className='dropdown-item'>{option}
                           </div>
                        ))}
                    </div>
                )}

                {subject && (
                    <div className='subject-dropdown-content'>
                        {subjectOptions.map(option => (
                            <div
                                onClick={(e) => {
                                    setIsSubject(option)
                                    setSubject(false)
                                }}
                                className='dropdown-item'>{option}
                            </div>
                        ))}
                    </div>
                )}

                {session && (
                    <div className='session-dropdown-content'>
                        {sessionOptions.map(option => (
                            <div
                                onClick={(e) => {
                                    setIsSession(option)
                                    setSession(false)
                                }}
                                className='dropdown-item'>{option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Dropdown;