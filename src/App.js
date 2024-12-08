import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Login/Register'
import ExplorePages from './Components/ExplorePages'
import HomePage from './Components/HomePage'
// import LoginNavBar from './NavBar/LoginNavBar'
import ExplorePage from './Components/ExplorePage' 
// import DashboardNavBar from './NavBar/DashboardNavBar'
import NearFoodPlace from './Components/NearFoodPlace'
import TemplePage from './Components/TemplePage'
import HistoricalPlace from './Components/HistoricalPlace'
import Trekking from './Components/Trekking'
import MisalSpot from './Components/MisalSpot'
import otherPlace from './Components/otherPlace'
import HotelRestorant from './Components/HotelRestorant'
// import KumbhNavBar from './KumbhPages/KumbhNavBar'
import KumbhPage from './KumbhPages/KumbhPage'
import UserProfile from './UserProfile'
import HeritEdgeDiary from './Components/HeritEdgeDiary'
import Feedback from './Feedback'
import VolunteerRegistration from './KumbhPages/VolunteerRegistration'
import Destination from './Destination'
import Schedule from './KumbhPages/Schedule'
// import VRBooking from './KumbhPages/VRBooking'
import PlanTrip from './KumbhPages/PlanTrip'
import About from './About'
import FAQ from './FAQ'
import VRBooking from './Components/VRBooking'
import GameSelection from './Components/GameSelection'
import WordSearch from './Components/WordSearch'
import CandyCrush from './Components/CandyCrush'
import Map from './Map'






 



 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" Component={VRBooking} /> */}
        <Route path="/Feedback" Component={Feedback} />
        <Route path="/PlanTrip" Component={PlanTrip} />
        <Route path="/Schedule" Component={Schedule} />
        <Route path="/Destination" Component={Destination} />
        <Route path="/VolunteerRegistration" Component={VolunteerRegistration} />
        <Route path="/HeritEdgeDiary" Component={HeritEdgeDiary} />
        <Route path="/UserProfile" Component={UserProfile} />
        <Route path="/KumbhPage" Component={KumbhPage} />
        <Route path="/HotelRestorant" Component={HotelRestorant} />
        <Route path="/otherPlace" Component={otherPlace} />
        <Route path="/MisalSpot" Component={MisalSpot} />
        <Route path="/Trekking" Component={Trekking} />
        <Route path="/HistoricalPlace" Component={HistoricalPlace} />
        <Route path="/TemplePage" Component={TemplePage} />
        <Route path="/NearFoodPlace" Component={NearFoodPlace} />
        <Route path="/ExplorePages" Component={ExplorePages} />
        <Route path="/HomePage" Component={HomePage} />
        <Route path="/" Component={ExplorePage} />
        <Route path="/Login" Component={Login} />
        <Route path="/Register" Component={Register} />
        <Route path="/About" Component={About} />
        <Route path="/FAQ" Component={FAQ} />
        <Route path="/VRBooking" Component={VRBooking} />
        <Route path="/GameSelection" Component={GameSelection} />
        <Route path="/WordSearch" Component={WordSearch} />
        <Route path="/CandyCrush" Component={CandyCrush} />
        <Route path="/Map" Component={Map} />
      </Routes>
    </BrowserRouter>
  )
}

export default App