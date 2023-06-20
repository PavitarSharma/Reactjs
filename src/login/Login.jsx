import { useEffect, useState } from "react";
import "./Login.css";
import bcrypt from "bcryptjs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const initialValue = {
  username: "",
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialValue);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, email, password } = formData;
    const hashPassword = await bcrypt.hash(password, 10);
    const requestBody = {
      id: Date.now(),
      username,
      email,
      password: hashPassword,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/users",
        requestBody,
        config
      );

      localStorage.setItem("token", JSON.stringify(data));
      setFormData(initialValue);
      navigate("/");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="login-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
