import React, {useState} from 'react';
import axios from 'axios';

const StudentModal = props => {
    let [fullName, setFullName] = useState(''),
        [email, setEmail] = useState('');

    const addStudent = (e) => {
        e.preventDefault()

        axios.post('/api/student', {fullName, email, id: props.id})
            .then(() => {
                props.toggleFn(false);
            })
            .catch(err => console.log(err));
    }

    return (
        <section>
            <h3>Add Student</h3>
            <form>
                <input value={fullName} onChange={e => setFullName(e.target.value)}/>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <button onClick={e => addStudent(e)}>Add</button>
            </form>
        </section>
    )
}

export default StudentModal;