import React from 'react'
import CustomThemeProvider from './components/CustomThemeProvidor'
import UserDataProvider from './context/userDataContext'
import LoginPage from './pages/LoginPage'
// import RegistrationPage from './pages/RegistrationPage'

const App = () => {
    return (
        <CustomThemeProvider>
            <UserDataProvider>
                <LoginPage />
            </UserDataProvider>
        </CustomThemeProvider>
    )
}

export default App