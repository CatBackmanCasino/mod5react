import React, { useState } from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1, 2, 3])
    const addNum = () => {
        setNums([...nums, nums.length + 1]);
    }
    const removeNum = () => {
        setNums(
            nums.filter((item, i) => {
                return i !== nums.length - 1
            })
        )
    }
    return (
        <div>
            <button onClick={addNum}>
                Add item
            </button>

            <button onClick={removeNum}>Remove Item</button>
            <ul>
                {nums.map(num => {
                    return <li key={num}>{num}</li>
                })}
            </ul>
        </div>
    )
}

export default UseStateWithArrays