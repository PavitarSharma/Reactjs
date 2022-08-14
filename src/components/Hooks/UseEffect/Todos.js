import React, { useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState("")

    const addTodo = (e) => {
        e.preventDefault()
        
        setTodos([...todos, value])
        setValue("")

    }

    const handleChange = (e) => {
        setValue(e.target.value)
        
        
    }

   
    
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem', gap: "1rem" }}>
                <input 
                    type="text" 
                    placeholder="Add a Todos" 
                    value={value}
                    onChange={handleChange}
                    style={{ padding: "0.8rem 0.5rem", width: "300px" }} />
                <button style={{ width: "100px" }} onClick={addTodo}>Add</button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center',  flexDirection: "column", marginTop: '4rem', gap: "1rem", alignItems: "center" }}>
                {todos.map((todo, index) => (
                    <h4 key={index}>{todo}</h4>
                ))}
              
            </div>
        </>
    )
}

export default Todos