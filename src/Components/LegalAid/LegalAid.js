import classes from './LegalAid.module.css'
import { useHistory } from 'react-router-dom'



const LegalAid = ({ legal }) => {

    const history = useHistory();

    const moreDetails = () => {
        history.push(`/legalAid/${legal._id}`)
    }

    return (

        <div className={classes.parent}>
            <div className={classes.parentDiv}>
                <div className={classes.imgDiv}>
                    <img src={legal.ImageUrl}></img>
                </div>
                <div className={classes.contentDiv}>
                    <h3>{legal.LegalOrgName}</h3>
                    <h5>{legal.LegalorgDescription}</h5>
                    <h5>{legal.LegalProName}</h5>
                    <h5>{legal.LegalProDescription}</h5>
                </div>
            </div>
            <button onClick={moreDetails}>More Details</button>
        </div>
    )
}

export default LegalAid;        