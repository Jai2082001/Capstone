import { useEffect } from 'react'
import HealthAidCard from '../../Components/HealthAidCard/HealthAidCard';
import classes from './HealthAid.module.css'
import { useState } from 'react';
import Slider from 'react-slick';
import LoadingPage from '../LoadingPage/LoadingPage';

const LegalOrganization = () => {

  const [loading, changeLoading] = useState(false);
  const [legal, changeLegal] = useState([]);

  useEffect(() => {
    changeLoading(true)
    fetch(`${process.env.REACT_APP_FETCH_LINK}/displayHealthCare`).then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response);
      changeLegal(response);
      changeLoading(false)
    })
  }, [])




  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <>
      {loading &&
        <LoadingPage></LoadingPage>
      }

      {!loading &&
      
        <div className={classes.parentDiv}>
          {
            legal.length > 0 &&
            <>
              <h1>Slide to know more</h1>
              <Slider {...settings}>
                {legal.map((single) => {
                  return (

                    <HealthAidCard legal={single}></HealthAidCard>

                  )
                })}
              </Slider>
            </>
          }
          <Slider>

          </Slider>

        </div>

      }

    </>

  )
}

export default LegalOrganization