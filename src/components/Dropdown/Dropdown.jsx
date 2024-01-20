import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Dropdown = () => {
    const dispatch = useDispatch();
    let feedback = useSelector((store) => store.feedback)
    const formChange = (event) => {
        dispatch(feedback(event.target.value))
    }

    return(
        <select
        value={feedback}
        onChange={formChange}
        data-testid="input"
    >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
</select>
    )
}

export default Dropdown;