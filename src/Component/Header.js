import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Fish from './Fish'
import Bhola from './Bhola'
import BhetkiMedium from './BhetkiMedium'
import KatlaLarge from './KatlaLarge'
import Meat from './Meat'
import DesiEggs from './DesiEggs'
import CountryDuckMeat from './CountryDuckMeat'
import DesiChikenWhole from './DesiChikenWhole'
import Vegitables from './Vegitables'
import Rosemary from './Rosemary'
import Lettuce from './Lettuce'
import Tomato from './Tomato'
import Fruits from './Fruits'
import RedGrapes from './RedGrapes'
import SingapuriBanana from './SingapuriBanana'
import Pears from './Pears'
import AboutUs from './AboutUs'
import LoginPage from './LoginPage'
import ContactUs from './ContactUs'
import RegistrationPage from './RegistrationPage'
import User from './User'
// import Cart from '../Screens/Cart'

export default function Header() {

    return (
        <BrowserRouter>
            <div>
                <header className="sticky-top">
                    { /* Navbar*/}
                    <nav className="navbar navbar-expand-lg navbar-light bg-success">
                        <div className="container-fluid justify-content-between">
                            { /* Left elements */}
                            <div className="d-flex">
                                { /* Brand */}
                                <Link className="navbar-brand me-2 mb-1 d-flex align-items-center" to={"/Home"}>
                                    <img src="LOGO/Black logo - no background.png" height="50" width="100" alt="MDB Logo" loading="lazy" style={{ marginTop: 2 }} />
                                </Link>

                                { /* Search form */}
                                <form className="input-group w-auto my-auto d-none d-sm-flex">
                                    <input autoComplete="off" type="search" className="form-control rounded ms-5" placeholder="Search" style={{ width: 600 }} />
                                    <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search" /></span>
                                </form>
                            </div>
                            { /* Left elements */}

                            { /* Right elements */}
                            <ul className="navbar-nav flex-row">
                                <li className="nav-item me-3 me-lg-1">
                                    <Link className="nav-link" to={"/LoginPage"}>
                                        <span><i className="fa-solid fa-user fa-beat fa-xl" style={{ color: "#141414" }} /></span>
                                    </Link>
                                </li>
                                <li className="nav-item me-3 me-lg-1">
                                    <Link className="nav-link" to={"/Cart"}>
                                        <span><i className="fa-solid fa-cart-shopping fa-beat fa-xl" style={{ color: "#131313" }} /></span>
                                    </Link>
                                </li>

                                <li className="nav-item me-3 me-lg-1">
                                    <a className="nav-link" href="#">
                                        <span><i className="fa-solid fa-bell fa-beat fa-xl" style={{ color: "#131313" }} /><span className="badge rounded-pill badge-notification bg-danger">12</span></span>
                                    </a>
                                </li>
                                
                            </ul>
                            { /* Right elements */}
                        </div>
                    </nav>
                    { /* Navbar */}
                    { /* NAVBAR */}
                    <div>
                        <nav className="navbar navbar-expand-lg bg-body-green" style={{ backgroundColor: "#6cc07c", fontSize: 18, padding: 0 }}>
                            <div className="container-fluid justify-content-end">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to={"/Home"}>HOME</Link>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                                                CONTENT
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link className="dropdown-item" to={"/Fish"}>Fish</Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to={"/Meat"}>Meat & Eggs</Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to={"/Vegitables"}>Vegitables</Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to={"/Fruits"}>Fruits</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="http://127.0.0.1:5501/Fish.html" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                                                FISH
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">Fresh Water | Sea Water Fish</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Prawn</a></li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Dry Fish</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="http://127.0.0.1:5501/Meat.html" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                                                MEAT, EGGS
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">Chicken and other Birds</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Eggs</a></li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Mutton</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="http://127.0.0.1:5501/Vegitables.html" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                                                VEGITABLES
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">Potatoes | Onions | Tomatoes</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Cabbage | Cauliflower | Broccoli | Capsicum</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Leafy Vegetables</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Beans | Brinjals | Okra</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Gourds | Cucumbers</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Chillies | Lemons | Garlic | Ginger | Amla</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Peas | Corn | Mashrooms</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Root Vegetables</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Exotic Vegetables</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Others Vegetable</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="http://127.0.0.1:5501/Fruits.html" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                                                FRUITS
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">Apples | Pears | Plums & Peaches</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Bananas | Guavas | Sapotas</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Mangoes | Melons</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Oranges | Sweet Limes & Other Citrus</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Grapes | Berries | Cherries & Kiwis</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Papayas | Pineapples | Pomegranates</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Dry Fruits</a></li>
                                                <li>
                                                    <a className="dropdown-item" href="#">Other Fruits</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to={"/ContactUs"}>CONTACT US</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to={"/AboutUs"}>ABOUT US</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link active" style={{ color: "white" }} aria-current="page" to={"/User"}>PROFILE</Link>
                                        </li>

                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
            <Routes>
                <Route path="/" element={<LoginPage></LoginPage>} />
                <Route path="/Home" element={<Home></Home>} />
                <Route path="/Fish" element={<Fish></Fish>} />
                <Route path="/Bhola" element={<Bhola></Bhola>} />
                <Route path="/BhetkiMedium" element={<BhetkiMedium></BhetkiMedium>} />
                <Route path="/KatlaLarge" element={<KatlaLarge></KatlaLarge>} />
                <Route path="/Meat" element={<Meat></Meat>} />
                <Route path="/DesiEggs" element={<DesiEggs></DesiEggs>} />
                <Route path="/CountryDuckMeat" element={<CountryDuckMeat></CountryDuckMeat>} />
                <Route path="/DesiChikenWhole" element={<DesiChikenWhole></DesiChikenWhole>} />
                <Route path="/Vegitables" element={<Vegitables></Vegitables>} />
                <Route path="/Rosemary" element={<Rosemary></Rosemary>} />
                <Route path="/Lettuce" element={<Lettuce></Lettuce>} />
                <Route path="/Tomato" element={<Tomato></Tomato>} />
                <Route path="/Fruits" element={<Fruits></Fruits>} />
                <Route path="/RedGrapes" element={<RedGrapes></RedGrapes>} />
                <Route path="/SingapuriBanana" element={<SingapuriBanana></SingapuriBanana>} />
                <Route path="/Pears" element={<Pears></Pears>} />
                <Route path="/ContactUs" element={<ContactUs></ContactUs>} />
                <Route path="/LoginPage" element={<LoginPage></LoginPage>} />
                <Route path="/RegistrationPage" element={<RegistrationPage></RegistrationPage>} />
                <Route path="/AboutUs" element={<AboutUs></AboutUs>} />
                <Route path="/User" element={<User></User>} />
                {/* <Route path="/Cart" element={<Cart></Cart>} /> */}
            </Routes>
        </BrowserRouter>
    )
}
