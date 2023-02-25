import style from './form-step-style.module.css';
import './style.scss'
const MultiStepFormChild = (prop) => {
    const step = prop?.step;

    return <>
        <div className={`${style.formContainer} ${prop.active}`}>
            <h1>{step}</h1>
            <div className={`${style.form}`}>
                <div className={`${style.formRow}`}>
                    <label htmlFor="firstName" className={`${style.formLabel}`}>First Name</label>
                    <input type="text" id="firstName" className={`${style.formInput}`} placeholder="First name" />
                </div>
                <div className={`${style.formRow}`}>
                    <label htmlFor="middleName" className={`${style.formLabel}`}>Middle Name</label>
                    <input type="text" id="middleName" className={`${style.formInput}`} placeholder="Middle name" />
                </div>
                <div className={`${style.formRow}`}>
                    <label htmlFor="lastName" className={`${style.formLabel}`}>Last Name</label>
                    <input type="text" id="lastName" className={`${style.formInput}`} placeholder="Last name" />
                </div>
                <div className={`${style.formRow}`}>
                    <label htmlFor="name" className={`${style.formLabel}`}>Date of birth</label>
                    <input type="date" id="name" className={`${style.formInput}`} />
                </div>
            </div>
        </div>
    </>
}
export default MultiStepFormChild;