import React from 'react'
import axios from "axios"

const PostDataForm = () => {
    const [post, setPost] = React.useState({
        userId: "",
        title: "",
        body: ""
    })

    const [search, setSearch] = React.useState("")

    const [posts, setPosts] = React.useState([])
    const [success, setSuccess] = React.useState(false)
    const [error, setError] = React.useState(false)

    const fetchPosts = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data);
        const data = await response.data
        setPosts(data)
    }
    React.useEffect(() => {
        fetchPosts()
    }, [posts])

    const { userId, title, body } = post

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError(false)
        const postData = {
            userId,
            title,
            body
        }
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", postData)
            setSuccess(true)
            setPost(response.data)
            console.log(post);
        } catch (error) {
            setError(error.response.data)
            setSuccess(false)

        }

    }

    const handleChange = (event) => {
        setPost(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value

        }))
    }
    return (
        <div>
            <input
                type="text"
                value={search}
                placeholder="Search..."
                onChange={e => setSearch(e.target.value)}
                style={{ width: "350px", padding: "1rem 0.5rem", margin: "1rem 0" }}
            />
            <form onSubmit={handleSubmit} style={{ width: "750px", display: "flex", flexDirection: "column", margin: "2rem 0" }}>
                <input
                    type="text"
                    name="userId"
                    placeholder='User Id'
                    autoComplete="off"
                    value={userId}
                    onChange={handleChange}
                    style={{ width: "350px", padding: "1rem 0.5rem", margin: "1rem 0" }}
                />

                <input
                    type="text"
                    name="title"
                    placeholder='Title'
                    autoComplete="off"
                    value={title}
                    onChange={handleChange}
                    style={{ width: "350px", padding: "1rem 0.5rem", margin: "1rem 0" }}
                />

                <input
                    type="text"
                    name="body"
                    placeholder='Description'
                    autoComplete="off"
                    value={body}
                    onChange={handleChange}
                    style={{ width: "350px", padding: "1rem 0.5rem", margin: "1rem 0" }}
                />

                <button type="submit" style={{ width: "350px", padding: "1rem 0.5rem", margin: "1rem 0" }}>Post</button>
            </form>

            <div>
                <h1>{success ? "Success": ""}</h1>
            </div>

            <div>
                <h1>{error ? "Error": ""}</h1>
            </div>

            <div style={{ margin: "2rem"}}>
                {
                    posts && posts
                        .filter((value) => {
                            if (search === "") {
                                return value
                            } else if (value.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                return value
                            }
                        })
                        .map(p => (
                            <div key={p.id}>
                                <h4>{p.userId}</h4>
                                <h5>{p.title}</h5>
                                <p>{p.body}</p>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default PostDataForm