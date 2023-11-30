import classes from './Navbar.module.css'
import { Navbar, Container, Nav, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Sticky from 'react-sticky-el'
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap';
import { useHistory } from 'react-router';
import logo  from '../../img/logo2-modified.png';


const NavBar = ({ changeLocation, productNames, changeSidebar, cycleBrand, categories }) => {

    const [search, changeSearch] = useState('');
    const [productType, changeProductType] = useState([])
    const history = useHistory()

    const cartHandler = () => {
        history.push('/checkout')
    }

    const user = useSelector((state) => {
        return state.user.user
    })

    console.log(user);


    const conditionHandler = (event) => {

        console.log(event.target.id);
        history.push('/support')
    }


    const loginHandler = () => {
        if (user && user.status !== 'not logged in') {
            history.push('/profile')
        } else {
            history.push('/login')
        }
    }

    const changeLoc = (singleItem) => {
        history.push(`/productDisplay/${singleItem.name}/category/${singleItem.name}`)
    }

    const userHandler = () => {
        history.push(`/register`)
    }

    const profileHandler = () => {
        history.push(`/profile`)

    }


    return (
        <div className={classes.NavbarPar}>
<img src={logo} /> 
<h4>HomeCare Compass</h4>

            <div className={classes.navbar1}>
                
                <Navbar expand="lg">
                    <div className={classes.divFlex}>
                        <p style={{ margin: '0' }} className={classes.iconLinkHead}>{"Contribute with us"}</p>
                        <div className={classes.divFlexChild}>
                            {!user && <p onClick={userHandler} className={classes.iconLink2}> Login / Register</p>}
                            {user && <p onClick={profileHandler} className={classes.iconLink2}><i class="far fa-user-circle me-2"></i>Helllo {user.name}</p>}
                        </div>
                    </div>
                </Navbar>
                {/*  */}
            </div>
            <div className={classes.secondNavBar}>
                <Sticky>
                    <Navbar expand="lg" className={classes.parentNavContainer}>
                        <Container>
                            <Navbar.Brand>
                                <NavLink to='/home'>

                                    {/* <img className={classes.logoImg} src={logo1}></img> */}
                                </NavLink>
                            </Navbar.Brand>

                            <div className={classes.parentContainer}>
                                <button style={{ marginRight: '10px' }} className={classes.btnContainer} onClick={() => {
                                    changeSidebar(true)
                                }}><i class="fas fa-bars"></i></button>
                                <Dropdown>
                                    {!user.name &&
                                        <>
                                            <DropdownButton title={<i class="far fa-user"></i>} drop={'start'} className={classes.btnContainer3}>
                                                <Dropdown.Item><NavLink to='/login'>Login</NavLink></Dropdown.Item>
                                                <Dropdown.Item><NavLink to='/register'>Register</NavLink></Dropdown.Item>
                                            </DropdownButton>
                                            <Dropdown.Menu>
                                            </Dropdown.Menu>
                                        </>
                                    }

                                    {user.name && <button onClick={loginHandler} className={classes.btnInfo}><i class="far fa-user"></i></button>}
                                </Dropdown>
                            </div>
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-center">
                                <Nav className={classes.cycleAccessoriesDiv}>

                                    <div className={classes.navbarParent}>
                                        <p style={{ margin: '0px 20px' }} className={classes.navbarP}>
                                            <NavLink to='/home'>Home</NavLink>
                                            <div className={classes.subCategoryContainerDiv}>
                                                {/* <SubCategoryContainer changeLocation={changeLocation} categories={categories} brand={cycleBrand.Cycle}></SubCategoryContainer> */}
                                            </div>
                                        </p>
                                        <p style={{ margin: '0px 20px' }} className={classes.navbarP}>
                                            <NavLink to='/AboutUs'>About us</NavLink>
                                            <div className={classes.subCategoryContainerDiv}>
                                                {/* <SubCategoryContainer changeLocation={changeLocation} categories={categories} brand={cycleBrand.Cycle}></SubCategoryContainer> */}
                                            </div>
                                        </p>


                                        <p style={{ margin: '0px 20px' }} className={classes.navbarP}>
                                            <NavLink to='/ContactUs'>Contact Us</NavLink>
                                            <div className={classes.subCategoryContainerDiv}>
                                                {/* <SubCategoryContainer changeLocation={changeLocation} categories={categories} brand={cycleBrand.Cycle}></SubCategoryContainer> */}
                                            </div>
                                        </p>
                                      
                                        <p style={{ margin: '0px 20px' }} className={classes.navbarP}>
                                            <NavLink to='/becomeContributor'>Become a Contributor</NavLink>
                                            <div className={classes.subCategoryContainerDiv}>
                                                {/* <SubCategoryContainer changeLocation={changeLocation} categories={categories} brand={cycleBrand.Cycle}></SubCategoryContainer> */}
                                            </div>
                                        </p>
                                        
                                    </div>

                                    <>

                                    </>
                                </Nav>
                            </Navbar.Collapse>

                        </Container>
                    </Navbar>

                </Sticky>
                <Container fluid className={classes.homeDiver}>
                    <div className={classes.navbar}>
                        <div className={classes.iconAndDesc}>
                            <div className={classes.iconContainer}>
                                <i class="fas fa-plane"></i>
                            </div>
                            <div className={classes.contentContainer}>
                                <p className={classes.secondP}>Operable everywhere</p>
                            </div>
                        </div>
                        <div className={classes.iconAndDesc}>
                            <div className={classes.iconContainer}>
                                <i class="fas fa-wallet"></i>
                            </div>
                            <div className={classes.contentContainer}>
                                <p className={classes.secondP}>Donate Anytime</p>
                            </div>
                        </div>
                        <div className={classes.iconAndDesc}>
                            <div className={classes.iconContainer}>
                                <i class="fas fa-headphones"></i>
                            </div>
                            <div className={classes.contentContainer}>
                                <p className={classes.secondP}>Call Us At <a href="tel:+14375226300">+1-437-522-6300</a></p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default NavBar