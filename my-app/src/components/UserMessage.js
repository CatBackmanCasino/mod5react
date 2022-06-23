import React from 'react'

function UserMessage(props) {
  return (
    <div>     {props.isLoggedIn ? (
        <div>
            <p>Welcome. Please complete the steps bellow</p>
            <ol>
                <li>Confirm your email adress</li>
                <li>Complete your profile</li>
                <li>Subscribe to newletter</li>
            </ol>
        </div>
    ) : (
        <div>
            <p>Please sign in.</p>
        </div>
    ) };</div>
  )
}

export default UserMessage