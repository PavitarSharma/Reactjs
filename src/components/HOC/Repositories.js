import React from 'react'
import withDataFetching from "./WithDataFetching"

function Repositories({ loading, results, error }) {

    if (loading || error) {
        return loading ? "Loading..." : error.message;
    }
    return (
        <>
            <h1>My Github repos</h1>
            <ul style={{ margin: "10px"}} >
                {results.map(({ id, html_url, full_name }) => (
                    <li key={id} style={{ margin: "10px", listStyle: "circle"}}>
                        <a href={html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none",color: "blue", fontWeight: "bold" }}>
                            {full_name}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default withDataFetching({
    dataSource: "https://api.github.com/users/royderks/repos"
})(Repositories);
