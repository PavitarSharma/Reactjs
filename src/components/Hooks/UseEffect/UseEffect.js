import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./styles.css"

const UseEffect = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = React.useState("")

    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')

        const data = response.data
        // console.log(data);
        setProducts(data)
    }

    useEffect(() => {
        fetchProduct()

    }, [products])


    return (
        <>
            <div className="products">
                <div className="input">
                    <input
                        type="text"
                        placeholder='Search...'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        style={{ padding: "1rem", width: "350px" }}
                    />
                </div>
                <div className="productsWrapper">
                    {
                        products
                            .filter((value) => {
                                if (search === "") {
                                    return value
                                } else if (value.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                    return value
                                }
                            })
                            .map((product) => (
                                <div className="card" key={product.id}>
                                    <img src={product.image} alt="" />
                                    <h4>{product.title}</h4>
                                    <h5>{product.price}</h5>
                                    <button>Add to Cart</button>
                                </div>
                            ))}
                </div>
            </div>
        </>
    )
}

export default UseEffect