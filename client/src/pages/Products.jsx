import axios from "axios"
import { useEffect, useState } from "react"

const BASE_URL = import.meta.env.VITE_SERVER_URL

/* Never use res.status, that is backend code for request and response instead 
use console.log for frontend
*/

/* We save the product as an object with name, price and category so we need to initialize it first */

/*Initializing with {} is fine because an object can have any attribute to it later */

const Products = () => {

    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])

    const createProduct = async (req, res) => {
        try {
            await axios.post(`${BASE_URL}/api/products/createProduct`, {
                name: product.name,
                price: product.price,
                category: product.category
            })
            // res.status(201).json("Product added successfully")
            console.log("Product added successfully")
            


        }
        catch (error) {
            console.log(error)
        }
    }

    const getAllProducts = async (req, res) => {
        try {

            const response = await axios.get(`${BASE_URL}/api/products/getAllProducts`)
            setProducts(response.data)

        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getAllProducts()
    }, [,createProduct])

    /* We do {...product, name} because we want to destructure product using `spread syntax`, 
    and keep all the other fields unchanged instead of setting name as name and all the other fields blank
    */

    /*
    If we have name: "Fondalo", price: "20", category:"Chocolate"
    and we do ...product, name:"Mojo" it is essentially becoming name: "Mojo", price:"20"
    category: "Chocolate", keeping others as it is
    */

    return (
        <>
            <div>
                <p>Product Name:</p>
                <input onChange={(e) => setProduct({ ...product, name: e.target.value })} />

                <p>Product Price:</p>
                <input onChange={(e) => setProduct({ ...product, price: e.target.value })} />

                <p>Product Category:</p>
                <input onChange={(e) => setProduct({ ...product, category: e.target.value })} />

                <button onClick={() => createProduct()}>Create</button>

                <div>
                    <div className="products" >
                        <h2>Name</h2>
                        <h2>Price</h2>
                        <h2>Category</h2>
                    </div>
                    {products.map((p, index) => (
                        
/*The outer <> should have the key not the div so I removed <> </> as not more than one component present */
                            <div className="products" key={index}>
                                <h3>{p.name}</h3>
                                <h3>{p.price}</h3>
                                <h3>{p.category}</h3>
                            </div>
                        
                    ))}
                </div>
            </div>
        </>
    )
}

export default Products



/* We can't do product.name inside the axios as javascript expects key value pairs*/