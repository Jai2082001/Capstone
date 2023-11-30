import classes from './HealthAidCard.module.css'
import { useHistory } from 'react-router-dom'


const HealthAidCard = ({legal}) => {

    const history = useHistory();

    const moreDetails = () => {
        history.push(`/healthAid/${legal._id}`)
    }


    return (
        <div className={classes.parent}>
        <div className={classes.parentDiv}>
            <div className={classes.imgDiv}>
                <img src={legal.ImageUrl}></img>
            </div>
            <div className={classes.contentDiv}>
                <h1>{legal.HealthName}</h1>
                <h4>{legal.HealthOrganization}</h4>

               
            </div>
        </div>
        <button onClick={moreDetails}>More Details</button>
        </div>
    )
}

export default HealthAidCard;