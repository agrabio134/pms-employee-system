import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const {id} = useParams();
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

        axios.post(`http://localhost:80/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data)
            navigate('/')
        })
        
    }
    return (

        <div className="main-container">
            <div className="edit-container">
            <h1>Edit user</h1>
            
            
          
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>

                        <tr>
                            <th>
                                <label>Employee ID: </label>
                            </th>
                            <td>
                                <input value={inputs.employee_no} type="text" name="employee_no" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input value={inputs.fullname} type="text" name="fullname" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input value={inputs.email} type="text" name="email" onChange={handleChange} />                             
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Password: </label>
                            </th>
                            <td>
                                <input value={inputs.password} type="text" name="password" onChange={handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default EditUser