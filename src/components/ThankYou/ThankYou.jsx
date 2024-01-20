import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


/* The thank you page is where the user can click the send new feedback button and be brought
     to the first page with the data clearedubmit new feedback */


const ThankYou = () => {
            // set useDispatch as dispatch to allow feedback button to clear input fields as the app
            // starts a new feedback form
        const dispatch = useDispatch()

        // set useHistory as history
        const history = useHistory()
    
        const feedbackButton = () => {
            dispatch({type: "RESET"});
            history.push('/')
        }
    return(

    <div className='Thanks'>
    <header>
      <h2>Thank You!</h2>
    </header>
    <button data-testid="next" onClick={feedbackButton}>Leave New Feedback</button>
  </div>

    )
}

export default ThankYou;

