import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const EditUser = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const {id} = useParams();

    // const users = useState([]);
    useEffect(() => {
        getUser();
    }, []);
    

    const getUser = () => {
        axios.get(`http://localhost:80/api/user/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value}))
    }
    const handleSubmit = (event) =>{
        event.preventDefault()

        axios.put(`http://localhost:80/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data)
            alert(response.data)
            navigate('/')
        })
        
    }
    return (

        <div className="main-container">
            <div className="edit-container">
            <h1>Edit Profile</h1>
            
            
          
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Fullname: </label>
                            </th>
                            <td>
                                <input type="text" name="fullname" onChange={handleChange} />
                            </td>
                        </tr>
                        {/* <tr>
                            <th>
                                <label>Employee Number: </label>
                            </th>
                            <td>
                                <input value={inputs.employee_no} type="text" name="employee_no" onChange={handleChange}/>
                            </td>
                        </tr> */}
                        <tr>
                            <th>
                                <label>Birthdate: </label>
                            </th>
                            <td>
                                <input type="date" name="birthdate" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Birthplace: </label>
                            </th>
                            <td>
                                <input type="text" name="birthplace" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Permanent Address: </label>
                            </th>
                            <td>
                                <input type="text" name="address" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Sex: </label>
                            </th>
                            <td>
                                <input type="text" name="sex" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Citezenship: </label>
                            </th>
                            <td>
                                <input type="text" name="citezenship" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={handleChange} />                             
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Password: </label>
                            </th>
                            <td>
                                <input type="password" name="password" onChange={handleChange}/>
                            </td>
                        </tr>
                        {/* <tr>
                            <th>
                                <label>Department: </label>
                            </th>
                            <td>
                                <input type="radio"  name="department" value="IT Department" onChange={handleChange}></input>
                                <label>IT</label>
                                <input type="radio"  name="department" value="HR Department" onChange={handleChange}></input>
                                <label>HR</label>       
                            </td>
                        </tr> */}
                        {/* <tr>
                            <th>
                                <label>User Type: </label>
                            </th>
                            <td>
                                <input type="radio"  name="type" value="admin" onChange={handleChange}></input>
                                <label>Admin</label>
                                <input type="radio"  name="type" value="staff" onChange={handleChange}></input>
                                <label>Staff</label>     
                            </td>
                        </tr> */}
                        {/* <tr>
                            <th>
                                <label>Salary Rate: </label>
                            </th>
                            <td>
                                <input type="number" name="salary" defaultValue ="520.00" onChange={handleChange}/>                             
                            </td>
                        </tr> */}
                    </tbody>
                </table>
                <button>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default EditUser