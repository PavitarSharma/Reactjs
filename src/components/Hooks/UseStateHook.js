import React, { useState } from 'react'

const UseStateHook = () => {
 
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    country: "",
    gender: "",
    password: ""
  })

  const { username, email, age, country, gender, password } = user

  const handleSubmit = (event) => {
    event.preventDefault()


    const userData = {
      username,
      email,
      age,
      country,
      gender,
      password
    }

    localStorage.setItem("user", JSON.stringify(userData))

  }

  let data = JSON.parse(localStorage.getItem("user"))


  const onChange = (event) => {
    setUser((prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    })))
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "2rem" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "2rem" }}>
        <input
          type="text"
          id="username"
          name="username"
          required
          autoComplete="off"
          placeholder='Username'
          value={username}
          onChange={onChange}
          style={{ margin: "1rem", padding: "0.8rem 0.3rem", width: "350px" }}
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          required
          value={email}
          onChange={onChange}
          autoComplete="off"
          style={{ margin: "1rem", padding: "0.8rem 0.2rem", width: "350px" }}
        />

        <input
          type="text"
          id="age"
          name="age"
          placeholder='Age'
          required
          value={age}
          onChange={onChange}
          autoComplete="off"
          style={{ margin: "1rem", padding: "0.8rem 0.2rem", width: "350px" }}
        />

        <input
          type="text"
          id="gender"
          name="gender"
          placeholder='Gender'
          required
          value={gender}
          onChange={onChange}
          autoComplete="off"
          style={{ margin: "1rem", padding: "0.8rem 0.2rem", width: "350px" }}
        />

        <input
          type="text"
          id="country"
          name="country"
          placeholder='Country'
          required
          value={country}
          onChange={onChange}
          autoComplete="off"
          style={{ margin: "1rem", padding: "0.8rem 0.2rem", width: "350px" }}
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder='Password'
          required
          value={password}
          onChange={onChange}
          autoComplete="off"
          style={{ margin: "1rem", padding: "0.8rem 0.2rem", width: "350px" }}
        />

        <button style={{ margin: "1rem", padding: "0.8rem 0.2rem", width: "350px", border: "none", background: "blue", color: "white" }}>Submit</button>
      </form>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem", marginTop: "2rem", fontWeight:"bold" }}>
        <p>{data.username}</p>
        <p>{data.email}</p>
        <p>{data.gender}</p>
        <p>{data.country}</p>
        <p>{data.age}</p>
        <p>{data.password}</p>
      </div>
    </div>
  )
}

export default UseStateHook