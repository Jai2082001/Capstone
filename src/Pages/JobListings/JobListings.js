import { useState } from 'react'
import classes from './JobListings.module.css'
import { useEffect } from 'react';
import JobListingsCard from '../../Components/JobListingsCard/JobListingsCard';

const JobListings = () => {

    const [listings, changeListings] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/jobListings`).then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response);
            changeListings(response);
        })
    }, [])

    return (
        <div className={classes.parentDiv}>
            {listings.length == 0 && <div>No Job listings</div>}
            {listings.map((single) => {
                return (
                    <div className={classes.parentDiv}>
                        <JobListingsCard  element={single}></JobListingsCard>
                    </div>
                )
            })}
        </div>
    )
}

export default JobListings