import React, {useState} from 'react';
import axios from 'axios';

export default props => {
    let [oldPassword, setOldPassword] = useState(''),
        [newPassword, setNewPassword] = useState(''),
        [verNewPassword, setVerNewPassword] = useState('');

    return (
        <main>
            <h2>Welcome! Change your password below</h2>
            <form>
                <input type='password' value={oldPassword} onChange={e => setOldPassword(e.target.value)}/>
                <input type='password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                <input type='password' value={verNewPassword} onChange={e => setVerNewPassword(e.target.value)}/>
            </form>
        </main>
    )
}