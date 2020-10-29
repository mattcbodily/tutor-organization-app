import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import StudentModal from '../StudentModal/StudentModal';

const StudentList = props => {
    let [students, setStudents] = useState([]),
        [modalView, setModalView] = useState(false);

    const getStudents = () => {
        axios.get(`/api/students/${props.user.user_id}`)
            .then(res => {
                setStudents(res.data)
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getStudents();
    }, [])

    return (
        <section>
            <button onClick={() => setModalView(true)}>Add Student</button>
            {modalView
                ? <StudentModal id={props.user.user_id} toggleFn={setModalView}/>
                : null}
        </section>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(StudentList);