const sampleUserData = {
    id: 1,
    firstName: 'Aaron',
    lastName: 'Russell',
    email: 'cpl.adrusselljr@mail.com',
    userName: 'adrusselljr',
    password: 'Password1!'
}

export const logInUserRequest = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({ data: sampleUserData })
    }, 1000)
})

export const logOutUserRequest = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Sign out successfully')
    }, 1000)
})