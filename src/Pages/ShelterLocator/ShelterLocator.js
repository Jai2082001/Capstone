import { useEffect, useState } from 'react';
import classes from './ShelterLocator.module.css'
import FilterBar from '../../Components/FilterBar/FilterBar';
import {Row,Col} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Sidebar } from 'semantic-ui-react';
import VolunteerCard from '../../Components/VolunteerCard/CardShelter';
import LoadingPage from '../LoadingPage/LoadingPage';



const ProductDisplay = (props) => {
    
    const [volunteers, changeVolunteers] = useState([]);
    const [loading, changeLoading] = useState(false);     
 
    useEffect(()=>{
        changeLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_LINK}/displayShelter`).then((response)=>{
            return response.json();
        }).then((response)=>{
            changeVolunteers(response);
            changeLoading(false);
        })
        
    }, [])
    return (
        <>

        {loading && 
        <>
            <LoadingPage></LoadingPage>
        </>}
     
     {!loading &&
     <>
     <Row className={classes.row}>


 {volunteers.map((single)=>{
     return (
         <Col lg={'5'} className={classes.productContainer}>

             <VolunteerCard element={single}></VolunteerCard>
</Col>
     )
 })}

     </Row>

 
 
</>
     }
        
        {/* } */}
        </>
    )
}

export default ProductDisplay












// fetch(`${process.env.REACT_APP_FETCH_LINK}/productDisplayWithFilter`, {
        //     headers: {
        //         stockType: params.stockType,
        //         filterType: params.filterType,
        //         filter: params.filter
        //     }    
        // }).then((response)=>{
        //     return response.json()
        // }).then((response)=>{
        //     changeProducts(response);
        //     changeOriginal(response);
        //     changeParentProducts(response);
        //     fetch(`${process.env.REACT_APP_FETCH_LINK}/productNames`).then((response)=>{
        //             return response.json()
        //     }).then((response)=>{
        //         changeProductNames(response)
        //             fetch(`${process.env.REACT_APP_FETCH_LINK}/categoryDisplay`).then((response) => {
        //                 return response.json()
        //             }).then((response) => {
        //                 changeCategories(response);
        //                 changeLoading(false);
        //             })           
        //     })
        // })