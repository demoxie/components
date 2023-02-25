import './style.css';
const stepProgressBarIcon  = (step) => {
    switch (step) {
        case "Bio Data":
            return <i className="fas fa-user"></i>
        case "Contact Details":
            return <i className="fas fa-phone"></i>
        case "Education Details":
            return <i className="fas fa-graduation-cap"></i>
        case "Employment Details":
            return <i className="fas fa-briefcase"></i>
        case "Skills":
            return <i className="fas fa-tasks"></i>
        case "Upload Documents":
            return <i className="fas fa-file-upload"></i>
        case "Review":
            return <i className="fas fa-eye"></i>
    }
}
export default stepProgressBarIcon;