import React, { useState } from 'react';
import LoginForm from '../../components/login/LoginForm';
import './LoginPage.scss'
import ResetPassword from '../../components/reset-password/ResetPassword'

function LoginPage(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loadForm, setloadForm] = useState('login')

    const handleOnchange = e => {
        const { name, value } = e.target
        switch (name) {
            case 'email':
                setEmail(value)
                break;

            case 'password':
                setPassword(value)
                break;
        
            default:
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(!email || !password){
            alert('Please fill the form')
        } else {
            console.log(email, password)
        }
    }

    const handleResetSubmit = e => {
        e.preventDefault()
        if (!email) {
            alert('Please enter email')
        } else {
            console.log(email)
        }
    }

    const formSwich = formType => {
        setloadForm(formType)
    }

    return (
        <div className="loginPage">
            <div className="formContainer">
                {loadForm === 'login' && <LoginForm
                    handleOnchange={handleOnchange}
                    handleSubmit={handleSubmit}
                    formSwich={formSwich}
                    email={email}
                    password={password}
                />}
                
                {loadForm === 'reset' && <ResetPassword
                    handleOnchange={handleOnchange}
                    handleResetSubmit={handleResetSubmit}
                    formSwich={formSwich}

                    email={email}
                />}
                 
            </div>
        </div>
    );
}

export default LoginPage;