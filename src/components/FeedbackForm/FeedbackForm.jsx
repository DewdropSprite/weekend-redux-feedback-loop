
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



const FeedbackForm = ({ text, title, property, nextPath }) => {

    const [feedbackInput, setFeedbackInput] = useState('')

    // set useDispatch as dispatch to allow next button to send info to store.js
    const dispatch = useDispatch()

    // set useHistory as history
    const history = useHistory()

    // Function to run when "next" is clicked
    // The inputs should be stored in store.js and 
    // the next button will bring the user to the ReviewPage component
    const nextButton = (event) => {
        event.preventDefault();
        dispatch({
            type: "ADD_FEEDBACK",
            payload: {
                [property]: feedbackInput
            }
        })
        history.push(nextPath)

    }
    return (
        <>
        <h2>{text}</h2>
        <form onSubmit={nextButton}>
            <label>{title}</label>
            <input type="text" data-testid="input" onChange={(event)=>setFeedbackInput(event.target.value)}/>
            <button type="submit" data-testid="next">Next</button>
        </form>
    </>
    )
}

export default FeedbackForm;