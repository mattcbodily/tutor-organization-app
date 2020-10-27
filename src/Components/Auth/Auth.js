import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer';

const Auth = props => {
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
                    props.getUser(res.data);
                    props.history.push('/dashboard');
                })
                .catch(err => console.log(err))
        }
    }

    const login = (e) => {
        e.preventDefault();
        axios.post('/api/login', {email, password})
            .then(res => {
                props.getUser(res.data);
                props.history.push('/dashboard');
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
                            <p>Have an account? <span onClick={() => setRegisterView(false)}>Sign in here</span></p>   
                        </>
                    )
                    : (
                        <>
                            <button onClick={e => login(e)}>Log in</button>
                            <p>Don't have an account? <span onClick={() => setRegisterView(true)}>Sign up here</span></p>
                        </>
                    )}
            </form>
        </main>
    )
}

export default connect(null, {getUser})(Auth);