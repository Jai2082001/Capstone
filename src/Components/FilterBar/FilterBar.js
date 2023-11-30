import classes from './FilterBar.module.css'
import { Accordion } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const FilterBar = ({ action }) => {


    const [loading, changeLoading] = useState(false)
    const [keys, changeKeys] = useState([]);
    const [keyValue, changekeyValue] = useState([]);
    
    useEffect(() => {

        fetch(`${process.env.REACT_APP_FETCH_LINK}/filter${action}`).then((response) => {
            
            return response.json();
        
        }).then((response) => {
            console.log(response);

            let keys = Object.keys(response[0]);

            keys.map((single)=>{
                let prevState = [];
                for(let i=0;i<response.length;i++){
                    prevState.push({[single]: []});
                    
                }
                changekeyValue(prevState);

            })
            changeKeys(keys);
        })

    }, [])
    console.log(keys);

    return (
        <div className={classes.filterBar}>
                    <Accordion defaultActiveKey={'0'}>

                        {
                            keys.map((singleItem, idx)=>{

                                if(singleItem  == '_id' || singleItem  == 'AddedBy' || singleItem  == 'ImageUrl' || singleItem  == '__v' ){

                                }else{
                                    return (
                                    <Accordion.Item eventKey={idx}>
                                        <Accordion.Header>{ `${singleItem}` }</Accordion.Header>
                                        <Accordion.Body>
                                            {/* <Checkbox></Checkbox> */}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    )   
                                }
                                
                            })
                        }
                        

                    </Accordion>
        </div>
    )
}

export default FilterBar





