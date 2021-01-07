import React from 'react'
import {useHistory} from 'react-router-dom'
import { OperatorHead, Logo, Navigation, NavLinks } from '../../styled-components'

const OperatorHeader = () => {
    const {push} = useHistory();
    const signOut = () => {
        localStorage.removeItem('token')
        push('/')
    }

    return(
        <OperatorHead>
            <NavLinks href='https://cranky-keller-308f13.netlify.app/'>
                <Logo src='https://i.ibb.co/kqw30n8/logo.png' />
            </NavLinks>
            <Navigation>
                <NavLinks href='https://cranky-keller-308f13.netlify.app/'>Home</NavLinks>
                <NavLinks href='/Operator/DashBoard'>Dashboard</NavLinks>
                <NavLinks onClick={signOut}>Sign Out</NavLinks>
            </Navigation>
        </OperatorHead>
    )
}

export default OperatorHeader