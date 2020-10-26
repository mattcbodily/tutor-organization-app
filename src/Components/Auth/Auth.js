import React, {useState} from 'react';
import axios from 'axios';

export default props => {
    let [fullName, setFullName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState(''),
        [verPassword, setVerPassword] = useState(''),
        [registerView, setRegisterView] = useState(false);

    const register = (e) => {
        e.preventDefault();
        if(password && password === verPassword){
            axios.post('/api/register', {fullName, email, password, tutor: true})
                .then(res => {

                })
                .catch(err => console.log(err))
        }
    }

    const login = (e) => {
        e.preventDefault();
        axios.post('/api/login', {email, password})
            .then(res => {

            })
            .catch(err => console.log(err))
    }

    return (
        <main>
            <form>
                {registerView
                    ? <input value={fullName} onChange={e => setFullName(e.target.value)}/>
                    : null}
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                {registerView
                    ? (
                        <>
                            <input type='password' value={verPassword} onChange={e => setVerPassword(e.target.value)}/>
                            <button onClick={e => register(e)}>Register</button>
                            <p>Have an account? <span>Sign in here</span></p>   
                        </>
                    )
                    : (
                        <>
                            <button onClick={e => login(e)}>Log in</button>
                            <p>Don't have an account? <span>Sign up here</span></p>
                        </>
                    )}
            </form>
        </main>
    )
}