import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const AllTeachersDashboard = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-sands-44312.herokuapp.com/teachers')
        .then(res=> res.json())
        .then(data => setTeachers(data))
    }, []);

    const handleDeleteStudent = id => {
        const procced = window.confirm('Are you sure, you want to delete ?');
        if(procced){
            const url = `https://afternoon-sands-44312.herokuapp.com/teachers/${id}`;
        fetch(url, {
            method:'delete'
        })
        .then(res=> res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remainingStudent = teachers.filter(student => student._id !== id);
                setTeachers(remainingStudent);
            }
        })
        }
    }
    return (
        <>
            <Container>
                <h1 className='text-center mt-5 text-uppercase'>teachers Analysis</h1>
                <h2>Total Teachers : {teachers.length}</h2>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>From</th>
                    <th>Subject</th>
                    <th>Age</th>
                    <th>About</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        teachers.map(({ _id ,name, img, age, from, about, subject })=> <tr key={_id}>
                            <td><img width="80px" height="50px" src={img} alt="" /></td>
                            <td>{name}</td>
                            <td>{from}</td>
                            <td>{subject}</td>
                            <td>{age}</td>
                            <td>{about}</td>
                            <td><button style={{backgroundColor:"red" , border:"none", padding:'5px 10px', color:"white", borderRadius:"5px"}} onClick={()=> handleDeleteStudent(_id)}>Delete</button></td>
                            
                            
                        </tr> )
                    }
                </tbody>

                </Table>
            </Container>
        </>
    );
};

export default AllTeachersDashboard;