import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import ReviewPage from '../ReviewPage/ReviewPage';
import ThankYou from '../ThankYou/ThankYou';




function App() {

  return (

    // FeedbackForm is the component and it is used for the feeling, understanding, support, and comments pages. 
    // The things changing between the 4 pages are the text titles properties and paths. Also, the comments section
    // takes in a string where
    // feeling, understanding, and support are dropdowns with the option of choosing 1-5
    <Router>

      <Route path='/' exact>
        <FeedbackForm
          text="How are you feeling today?"
          title="Feeling?"
          property="feeling"
          nextPath="/understanding"
          type="number"
        />
      </Route>

      <Route path='/understanding'>
        <FeedbackForm
          text="How well are you understanding the content?"
          title="Understanding?"
          property="understanding"
          nextPath="/support"
          type="number" />

      </Route>

      <Route path='/support'>
        <FeedbackForm
          text="How well are you being supported?"
          title="Supported?"
          property="support"
          nextPath="/comments"
          type="number" />
      </Route>

      <Route path='/comments'>
        <FeedbackForm
          text="Any comments you want to leave?"
          title="Comments?"
          property="comments"
          nextPath="/review"
          type="text" />
      </Route>

      {/* The review page is where all the inputs from the feedback form will be compiled into 1 list */}

      <Route path='/review'>
        <ReviewPage 
        property="review" 
        nextPath="/thankyou" />
      </Route>

      {/* The thank you page is where the user can click the send new feedback button and be brought
     to the first page with the data clearedubmit new feedback */}

      <Route path='/thankyou'>
        <ThankYou 
        property="submission success"
        nextPath="/" />
      </Route>

    </Router>


  );
}
export default App;