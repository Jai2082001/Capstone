import { NavLink } from 'react-router-dom'
import {useEffect, useState} from 'react'
import classes from './NewsDisplayer.module.css'
import Slider from 'react-slick';
import {Row, Col} from 'react-bootstrap'
import NewsHolder from '../NewsHolder/NewsHolder';
import SmallRevealCard from '../SmallRevealCard/SmallRevealCard';



const ProductDisplayer  = () => {
    
const [products, changeProducts] = useState([]);

useEffect(()=>{
    fetch(`${process.env.REACT_APP_FETCH_LINK}/randomDisplay`).then((response)=>{
        return response.json()
    }).then((response)=>{
        console.log(response)
        changeProducts(response)
    })
}, [])

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  
  
  function SampleNextArrow(props){    
      const { className, style, onClick } = props;
      return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "red" }}
          onClick={onClick}
      />
      );
  }
  

    const [categories, changeCategories] = useState([]);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow:  2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 890,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div className={classes.productContainer}>
        <h2 style={{textAlign: 'left', color: 'white'}}>Our Recent Work</h2>
        <hr></hr>

        <Slider {...settings}>
            {products.map((singleItem)=>{
                return <SmallRevealCard {...singleItem}></SmallRevealCard>
            })}
        </Slider>
        
      </div>
    );
  
}
export default ProductDisplayer

