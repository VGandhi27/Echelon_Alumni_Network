import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Form from './Components/Form'
import Events from './Components/Events'
import PostDiscussion from './Components/PostDiscussion'
import PostInternship from './Components/PostInternship'
import PostJob from './Components/PostJob'
import ViewJob from './Components/ViewJob'
import Members from './Components/Members'
import MeetUps from './Components/MeetUps'
import MembershipCard from './Components/MembershipCard'
import More from './Components/More'
import Notification from './Components/Notification'
import UpdateProfile from './Components/UpdateProfile'
import CreateEvent from './Components/CreateEvent'
import CreateGroup from './Components/CreateGroup'
import CareerCenter from './Components/CareerCenter'
import SideNavbar from './Components/SideNavbar'
import MyGroup from './Components/MyGroup'
import Message from './Components/Message'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 
} from "react-router-dom";


export default function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <SideNavbar/>
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
           <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/sideNavbar">
            <SideNavbar/>
          </Route>
          <Route exact path="/viewJob">
            <ViewJob />
          </Route>
          <Route exact path="/meetUps">
            <MeetUps />
          </Route>
          <Route exact path="/myGroup">
            <MyGroup />
          </Route>
          <Route exact path="/postDiscussion">
            <PostDiscussion />
          </Route>
          <Route exact path="/careerCenter">
            <CareerCenter/>
          </Route>
        
          <Route exact path="/createGroup">
            <CreateGroup />
          </Route>
        
          <Route exact path="/createEvent ">
            <CreateEvent />
          </Route>
          <Route exact path="/more">
            <More/>
          </Route>
          <Route exact path="/notification">
            <Notification />
          </Route>
          <Route exact path="/updateProfile">
            <UpdateProfile />
          </Route>
          <Route exact path="/postInternship">
            <PostInternship />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/">
            <About />
          </Route>

          <Route exact path="/members">
            <Members />
          </Route>

          <Route exact path="/membershipCard">
            <MembershipCard/>
          </Route>

          <Route exact path="/postJob">
            <PostJob />
          </Route>

          <Route exact path="/message">
            <Message />
          </Route> 
        </Switch>
        </Router>
    </>
    
  )
}
