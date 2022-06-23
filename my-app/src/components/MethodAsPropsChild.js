import React from 'react'

function MethodAsPropsChild(props) {
  return (
    <div>     {props.isLoggedIn ? (
        <div>
            <p>Welcome. Please complete the steps bellow</p>
            <ol>
                <li>Confirm your email adress</li>
                <li>Complete your profile</li>
                <li>Subscribe to newletter</li>
            </ol>
            <button onClick={props.ToggleIsLoggedIn}>Log Out</button>
        </div>
    ) : (
        <div>
            <p>Please sign in.</p>
            <button onClick={props.ToggleIsLoggedIn}>Log In</button>
        </div>
    ) }</div>
  )
}

export default MethodAsPropsChild