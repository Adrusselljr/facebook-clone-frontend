import React, { useState } from 'react'
import LayoutOne from '../components/LayoutOne'
import { logInUserRequest } from '../dataFetching'
import { useUserData } from '../context/userDataContext'
import { Box, TextField, Button } from '@mui/material'

function LoginPage() {
    const { user, addUser } = useUserData()
    const [signInForm, setSignInForm] = useState({ email: '', password: '' })

    const onSubmit = () => {
        logInUserRequest()
        .then(response => {
            console.log('user sign in response: ', response)
            addUser(response.data)
        })
    }

    return (
        <LayoutOne>
            <Box p={ 4 }>
                <h1>Sign in</h1>
                <Box mb={ 3 }>
                    <TextField
                        id="email"
                        label="Email"
                        variant="standard"
                        value={ signInForm.email }
                        onChange={ e => setSignInForm({ ...signInForm, email: e.target.value }) }
                    />
                </Box>
                <Box mb={ 3 }>
                    <TextField
                        id="password"
                        type="password"
                        label="Password"
                        variant="standard"
                        value={ signInForm.password }
                        onChange={ e => setSignInForm({ ...signInForm, password: e.target.value }) }
                    />
                </Box>
                <Button variant="contained" onClick={ onSubmit }>Sign in</Button>
            </Box>
        </LayoutOne>
    )
}

export default LoginPage