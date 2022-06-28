import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("network");
    const [comment, setComment] =useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comment)
    }

    return (
        <div>
            <h2>Please fill out the form:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        id="id-name"
                        name="name"
                        type="text" />
                </div>
                <div>
                    <label htmlFor="id-category">Query Category:</label>
                    <select
                        id="id-category"
                        value={category}
                        name="category"
                        onChange={
                            (e) => setCategory(e.target.value)
                        }>
                        <option value="mobile">Mobile</option>
                        <option value="network">Network</option>
                        <option value="other ">other</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="comments">Comment:</label>
                    <input
                        onChange={
                            (e) => setComment(e.target.value)
                        }
                        type="text"
                        name="comment"
                        value={comment}
                        id="id-comment" />
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default ControlledFormHooks