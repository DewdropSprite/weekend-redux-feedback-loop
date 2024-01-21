import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Dropdown from '../Dropdown/Dropdown';
import FeedbackForm from '../FeedbackForm/FeedbackForm';
import ReviewPage from '../ReviewPage/ReviewPage';
import ThankYou from '../ThankYou/ThankYou';



function App() {

  return (
    // FeedbackForm is the component and it is used for the feeling, understanding, support, and comments pages. 
    // The only thing changing between the 4 pages are the titles and comments takes in a string where
    // feeling, understanding, and support are dropdowns with the option of choosing 1-5
    <Router>

      <Route path='/' exact>
        <FeedbackForm
          text="How are you feeling today?"
          title="Feeling?"
          property="feeling"
          nextPath="/understanding"
          input="number"
        />
      </Route>

      <Route path='/understanding'>
        <FeedbackForm
          text="How well are you understanding the content?"
          title="Understanding?"
          property="understanding"
          nextPath="/support/"
          input="number" />

      </Route>

      <Route path='/support'>
        <FeedbackForm
          text="How well are you being supported?"
          title="Supported?"
          property="supported"
          nextPath="/comments/"
          input="number" />
      </Route>

      <Route path='/comments'>
        <FeedbackForm
          text="Any comments you want to leave?"
          title="Comments?"
          property="comments"
          nextPath="/review/"
          input="text" />
      </Route>

      {/* The review page is where all the inputs from the feedback form will be compiled into 1 list */}

      <Route path='/review' exact>
        <ReviewPage property="review" nextPath="/thankyou/" />
      </Route>

      {/* The thank you page is where the user can click the send new feedback button and be brought
     to the first page with the data clearedubmit new feedback */}

      <Route Path='/thankyou' exact>
        <ThankYou nextPath="/" />
      </Route>

    </Router>


  );
}
export default App;