import { useEffect, useState } from 'react';
import classes from './VolunteerOppo.module.css'
import FilterBar from '../../Components/FilterBar/FilterBar';
import {Row,Col, Modal} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Sidebar } from 'semantic-ui-react';
import VolunteerCard from '../../Components/VolunteerCard/Card';
import loadingImg from '../../img/loading.gif'
import LoadingPage from '../LoadingPage/LoadingPage';


const ProductDisplay = (props) => {
    
    const [volunteers, changeVolunteers] = useState([]);
    const [loading, changeLoading] = useState(false);     
    

    useEffect(()=>{
        changeLoading(true);
        setTimeout(()=>{
            fetch(`${process.env.REACT_APP_FETCH_LINK}/displayVolunteer`).then((response)=>{
                return response.json();
            }).then((response)=>{
                changeVolunteers(response);
                changeLoading(false);
            })
        },3000 )

        
    }, [])
    return (
        <>
        {loading && <LoadingPage></LoadingPage>}
        {!loading && 
            <>

            {}
  
          <Modal 
                  style={{zIndex: '9000'}}
                  backdrop='static'
                  show={loading}
              >
           <img src={loadingImg}></img>
                  
              </Modal>
                
              <Row className={classes.row}>
              {volunteers.map((single)=>{
                  return (
                      <Col lg={'3'} className={classes.productContainer}>
  
                          <VolunteerCard element={single}></VolunteerCard>
  
                      </Col>
                  )
              })}
              </Row>
  
              
              
          </>
        }
        
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