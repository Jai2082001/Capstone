import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Pages/Home/Home';
import { Switch, Route } from 'react-router';
import { Redirect } from 'react-router';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login'
import ShelterLocator from './Pages/ShelterLocator/ShelterLocator';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import VolunteerOppo from './Pages/VolunteerOppo/VolunteerOppo'
import Footer from './Components/Footer/Footer';
import Cookies from 'js-cookie';
import { userActions } from './store/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import ShelterLocatorDetails from './Pages/ShelterLocatorDetails/ShelterLocatorDetails'
import Profile from './Pages/Profile/Profile';
import BigBrother from './Pages/BigBrother/BigBrother';
import VolunteerPageDetails from './Pages/VolunteerPageDetails/VolunteerPageDetails'
import LegalOrganization from './Pages/LegalOrganization/LegalOrganization';
import LegalAidDetails from './Pages/LegalAidDetails/LegalAidDetails'
import HealthAid from './Pages/HealthAid/HealthAid'
import HealthAidDetails from './Pages/HealthAidDetails/HealthAidDetails';
import Donation from './Pages/Donation/Donation';
import Payment from './Pages/Payment/Payment';
import { PayPalScriptProvider} from '@paypal/react-paypal-js'
import StripeContainer from './Pages/Donation/DonationContainer';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import OurVision from './Pages/OurVision/OurVision';


const client_iD = '27898575177-28f8pfi0ib7vj524cat5s2k7jgte3q0e.apps.googleusercontent.com'

function App() {

  const dispatch = useDispatch();
  const [reload, changeReload] = useState(0);

  useEffect(() => {

    fetch(`${process.env.REACT_APP_FETCH_LINK}/userRet`, {
      method: 'GET',
      headers: {
        'jwt': Cookies.get('jwt')
      }
    }).then((response) => {
      return response.json();
    }).then((response) => {
      console.log(response);
      function start() {
        gapi.client.init({
          client_Id: client_iD,
          scope: ''
        })
      };
      gapi.load('client:auth2', start);

      if (response.status == 'loggedin') {
        dispatch(userActions.changeUser(response.profile));
      }
    })
  }, [reload])

  const user = useSelector((state) => {
    return state.user.user;
  })
  console.log()
  return (
    <>

        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact  >
            <Redirect to={'/home'}></Redirect>
          </Route>
          <Route path='/home' exact  >
            <Home></Home>
          </Route>
          <Route path='/login' exact  >
            <Login reload={changeReload}></Login>
          </Route>
          <Route path='/register' exact  >
            <Register reload={changeReload}></Register>
          </Route>
          <Route path='/shelterLocator' exact  >
            <ShelterLocator></ShelterLocator>
          </Route>










          
          <Route path='/shelterLocator/:id' exact>
            <ShelterLocatorDetails></ShelterLocatorDetails>
          </Route>
          <Route path='/volunteerOppportunities/:id' exact>
            <VolunteerPageDetails></VolunteerPageDetails>
          </Route>
          <Route path='/volunteerOpportunities' exact  >
            <VolunteerOppo></VolunteerOppo>
          </Route>
          <Route path='/legalAid/:id' exact>
            <LegalAidDetails></LegalAidDetails>
          </Route>
          <Route path='/healthAid/:id' exact>
            <HealthAidDetails></HealthAidDetails>
          </Route>
          <Route path='/Profile' exact  >
            <Profile></Profile>
          </Route>
          <Route path='/BigBrother' exact>
            <BigBrother></BigBrother>
          </Route>
          <Route path='/legalAid' exact>
            <LegalOrganization></LegalOrganization>
          </Route>
          <Route path='/healthAid' exact>
            <HealthAid></HealthAid>
          </Route>
          <Route path='/donate' exact>
            <StripeContainer></StripeContainer>
          </Route>
          <Route path='/ContactUs' exact>
            <ContactUs></ContactUs>
          </Route>
          <Route path='/AboutUs' exact>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/becomeContributor' exact>
            <OurVision></OurVision>
          </Route>
      
          {/* <Route path='/payment' exact>
        <Payment></Payment>
      </Route> */}
          <Route path='/' >
            <Redirect to={'/home'}></Redirect>
          </Route>
        </Switch>
        <Footer></Footer>

    </>



  );
}

export default App;
