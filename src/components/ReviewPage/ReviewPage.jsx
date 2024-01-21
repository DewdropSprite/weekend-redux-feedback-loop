    import { useSelector } from "react-redux"
    import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
    import axios from "axios"
    
//The review page is where all the inputs from the feedback form will be compiled into 1 list
//The submit button on this page pushes the  data 
    const ReviewPage = () => {
        const reduxStore = useSelector((store) => store)
        console.log('Redux State:', reduxStore)
        
// set useHistory as history
        const history = useHistory()
    
        const handleSubmit = () => {
            axios.post('/api/feedback', reduxStore)
            .then((response) => {
                history.push('/thankyou')
            })
            .catch(error => {
                console.log('error in POST', error)
            })
        }
    
//The return retrieves inormation from store.js and shows the user the inputs they made for
//feelings, understanding, support, and comments on their feedback form
//The submit button populates the database with the new feedback input
        return (
            <div>
 
                <h2>Review Your Feedback</h2>
                <p>Feelings: {reduxStore.feeling}</p>
                <p>Understanding: {reduxStore.understanding}</p>
                <p>Support: {reduxStore.support}</p>
                <p>Comments: {reduxStore.comments}</p>
                <button data-testid="next" onClick={handleSubmit}>SUBMIT</button>
            </div>
            
        )
    }

export default ReviewPage;