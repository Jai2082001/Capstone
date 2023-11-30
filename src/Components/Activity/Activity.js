import classes from './Activity.module.css'
import VolunteerActivity from './VolunteerActivity/VolunteerActivity';
import LegalActivity from './LegalActivity/LegalActivity'


const Activity  = ({item}) => {
   
    return (
        <div className={classes.parentDiv}>
            {
            item.activity == 'shelter' && 
                <div className={classes.parentDiv}> 
                    Arranged a shelter for {item.name} in the {item.nameid}
                </div>
            }
            {item.activity == 'volunteer' && 
                <div>
                Volunteered in 
                    <VolunteerActivity id = {item.id}></VolunteerActivity>
                </div>
            }
            {item.activity == 'legal' && 
                <div>
                Asked for Legal help 
                    <LegalActivity id = {item.id}></LegalActivity>
                </div>
            }
            {item.activity == 'health' && 
                <div>
                Asked for Health related help 
                    <VolunteerActivity id = {item.id}></VolunteerActivity>
                </div>
            }
        </div>
    )
}

export default Activity;