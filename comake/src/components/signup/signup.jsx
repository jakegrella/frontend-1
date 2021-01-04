import React from 'react'

function Signup(props){
    const { onChange, newUser, onSubmit } = props
    return(
        <div>
            <form>
                <input name="username" type="text" placeholder="username" value={newUser.username} onChange={onChange}/>
                <input name="password" type="password" placeholder="password" value={newUser.password} onChange={onChange}/>
                <input name="confirmPassword" type="password" placeholder="confirm your password" value={newUser.confirmPassword} onChange={onChange}/>
                <input name="zip" type="text" placeholder="Zip Code" value={newUser.zip} onChange={onChange}/>
                <button onClick={onSubmit}>Join!</button>
            </form>
        </div>
    )
}
export default Signup