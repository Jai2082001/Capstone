import classes from './SmallRevealCard.module.css'

import { NavLink } from 'react-router-dom'


const SmallRevealCard = (props) => {
    return (
        <div className={classes.productContainer}>
            <div className={classes.pDisplay}>
                <NavLink className={classes.cardDisplayer}
                    to={`/singleDisplay/${props.name}`}>

                    <div className={classes.contentDiv1}>
                        <div className={classes.contentDiv}>
                            <h1>{props.PageTitle}</h1>
                            <h2>{props.PageSubtitle}</h2>
                        </div>
                        

                       
                        <div>
                            <img src={props.ImageUrl}></img>
                        </div>
                    </div>
                    <p className={classes.pageDesc}>
                            {props.PageDescription.slice(0,250)}
                        </p>
                </NavLink>
        

            </div>
        </div>
    )
}

export default SmallRevealCard
