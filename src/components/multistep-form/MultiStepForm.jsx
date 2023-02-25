import MultiStepFormChild from "./MultiStepFormChild";
import style from './multi-stepform-style.module.css';
import FormStepLabel from "../../utils/FormStepLabel";
import stepProgressBarIcon from "../../utils/StepIconDispatcher";

const MultiStepForm = (props) => {
    const {FORM_STEPS} = FormStepLabel();


    return (
      <>
        <form className={`${style.formStepContainer}`}>
            <div className={`${style.stepProgressBar}`}>
                {
                    FORM_STEPS?.map((step, index) => {
                        return (
                            <div className={`${style.stepProgressBarItem}`} key={index}>
                                {
                                    stepProgressBarIcon(step)
                                }
                            </div>
                        )
                    })
                }
            </div>
            {
                FORM_STEPS?.map((step, index) => {
                    return (
                        <MultiStepFormChild step={step} key={index} />
                    )
                })
            }
        </form>
      </>
    );
}
export default MultiStepForm;