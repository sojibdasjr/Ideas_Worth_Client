import React , { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const AllStudentsDashboard = () => {
    const [AllStudents, setAllStudents] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-sands-44312.herokuapp.com/students')
        .then(res=>res.json())
        .then(data=> setAllStudents(data))
    }, []);

    const handleDeleteStudent = id => {
        const procced = window.confirm('Are you sure, you want to delete ?');
        if(procced){
            const url = `https://afternoon-sands-44312.herokuapp.com/students/${id}`;
        fetch(url, {
            method:'delete'
        })
        .then(res=> res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully');
                const remainingStudent = AllStudents.filter(student => student._id !== id);
                setAllStudents(remainingStudent);
            }
        })
        }
    }
    return (
        <>
            <Container>
                <h1 className='text-center mt-5 text-uppercase'>Student Analysis</h1>
                <h2>Total Students : {AllStudents.length}</h2>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Class Roll</th>
                    <th>Gropu</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AllStudents.map(({_id, studentName, Class, group, roll,img })=> <tr key={_id}>
                            <td><img width="80px" height="50px" src={img} alt="" /></td>
                            <td>{studentName}</td>
                            <td>{Class}</td>
                            <td>{roll}</td>
                            <td>{group}</td>
                            <td><button style={{backgroundColor:"red" , border:"none", padding:'5px 10px', color:"white", borderRadius:"5px"}} onClick={()=> handleDeleteStudent(_id)}>Delete</button></td>
                            
                        </tr> )
                    }
                </tbody>

                </Table>
            </Container>
        </>
    );
};

export default AllStudentsDashboard;