import { useState } from "react";
import { nanoid } from "nanoid";

export const Form = () => {
  const [form, setForm] = useState({
    username: "",
    age: "",
    address: "",
    department: "",
    married:"false",
    single:"false",
  });

  const handleChange = (e) => {
    const { name, value,type,checked } = e.target;
    setForm({
      ...form,
      [name]: type==="checkbox" ?checked :value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
        Name:{" "}
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter username"
        name="username" 
      />
      <br />
      <br />
      Age: {" "}
      <input onChange={handleChange} type="number" placeholder="Enter age" name="age" />
      <br />
      <br />
      Address: 
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter address"
        name="address"
      />
      <br />
      <br />
      <label>
        Department:{" "}
        <select onChange={handleChange} name="department" >
          <option value="Mechanical">Mechanical</option>
          <option value="Electrical">Electriecal</option>
          <option value="Civil">Civil</option>
          <option value="E&tc">E&TC</option>
          <option value="It">IT</option>
        </select>
      </label>
      <br />
      <br />
      Salary :{" "}
      <input
        onChange={handleChange}
        type="number"
        name="salary"
        placeholder="Enter salary"
      />
      <br />
      <br />
      <div >
        <label>
          <input onChange={handleChange} type="checkbox" name="single" />
          Single
        </label>
        <label>
          <input onChange={handleChange} type="checkbox" name="married" />
          Married
        </label>
        <br />
        <br />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;