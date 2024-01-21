
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import Header from "../Header/Header"



const FeedbackForm = ({ text, title, property, nextPath, type }) => {

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

    const inputType = () => {
        if (type === "number") {
            return (
                <select data-testid="input"
                    onChange={(event) => setFeedbackInput(event.target.value)}
                    required>
                    <option value="">Select an option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            ) 
        }
        else if (type === "text") {
            return (
                <input type="text" data-testid="input"
                    onChange={(event) => setFeedbackInput(event.target.value)} />
            )}}

    return (
        <>
            <Header />
            <h2>{text}</h2>
            <form onSubmit={nextButton}>
                <label>{title}</label>
                <div>
                    {inputType()}
                    <button type="submit" data-testid="next">Next</button>
                </div>
            </form>

        </>
    )
}

export default FeedbackForm;