import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

const EditUser = () => {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [fullAddress, setFullAddress] = useState("");

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };
  const handleZipChange = (event) => {
    setZip(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    setFullAddress(`${street}, ${city}, ${province}, ${zip}, ${country}`);
  }, [street, city, zip, country]);

  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();

  // const users = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios.get(`http://localhost:80/api/user/${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:80/api/edit.php/user/${id}/edit`, inputs)
      .then(function (response) {
        console.log(response.data);
        alert(response.data);
        navigate("/");
      });
  };
  return (
    <div className="main-container">
      <div className="edit-container">
        <h1>Edit User</h1>

        <form onSubmit={handleSubmit}>
          <table cellSpacing="10">
            <tbody>
              <div className="edit-item-container">
                <div className="edit-item">
                  <tr>
                    <th>
                      <label>Full Name: </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        name="fullname"
                        onChange={handleChange}
                        required
                      />
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
                      <label>Date of Birth: </label>
                    </th>
                    <td>
                      <input
                        type="date"
                        name="birthdate"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>Place of Birth: </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        name="birthplace"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>Address: </label>
                    </th>
                    <input
                      type="text"
                      value={fullAddress}
                      name="address"
                      onChange={handleChange}
                      hidden
                    />
                    <td>
                      <div className="inputs">
                        <input
                          type="text"
                          name="street"
                          onChange={handleStreetChange}
                          id="inputStreet"
                          placeholder="Street"
                          class="form-control"
                          value={street}
                          required
                        />

                        <input
                          type="text"
                          name="city"
                          onChange={handleCityChange}
                          id="inputCity"
                          placeholder="City"
                          class="form-control"
                          value={city}
                          required
                        />

                        <input
                          type="text"
                          name="province"
                          onChange={handleProvinceChange}
                          id="inputProvince}"
                          placeholder="Province"
                          class="form-control"
                          value={province}
                          required
                        />

                        <input
                          type="number"
                          name="zip"
                          onChange={handleZipChange}
                          id="inputZip"
                          placeholder="Zip"
                          class="form-control"
                          value={zip}
                          required
                        />

                        <input
                          type="text"
                          name="country"
                          onChange={handleCountryChange}
                          id="inputCountry"
                          placeholder="Country"
                          class="form-control"
                          value={country}
                          required
                        />
                      </div>
                    </td>
                  </tr>
                </div>
                <div className="edit-item">
                  <tr>
                    <th>
                      <label>Sex: </label>
                    </th>
                    <td>
                    <div className="inputs">
                      <select name="sex" onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male" onChange={handleChange}>
                          Male
                        </option>
                        <option value="Female" onChange={handleChange}>
                          Female
                        </option>
                      </select>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <label>Citezenship: </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        name="citezenship"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>

                  <tr>
                    <th>
                      <label>Email: </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>Password: </label>
                    </th>
                    <td>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>Department: </label>
                    </th>
                    <td>
                    <div className="inputs">
                      <select
                        name="department"
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="IT department" onChange={handleChange}>
                          IT Department
                        </option>
                        <option value="HR department" onChange={handleChange}>
                          HR Department
                        </option>
                      </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>User Type: </label>
                    </th>
                    <td>
                    <div className="inputs">
                      <select name="type" onChange={handleChange} required>
                        <option value="">Select User Type</option>
                        <option value="admin" onChange={handleChange}>
                          Admin
                        </option>
                        <option value="staff" onChange={handleChange}>
                          Staff
                        </option>
                      </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>Salary Rate: </label>
                    </th>
                    <td>
                      <input
                        type="number"
                        name="salary"
                        defaultValue="520.00"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <div className="edit-sub-btn">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
