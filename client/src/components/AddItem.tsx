import React, {useState} from 'react'
import {IState as IProps} from './interfaces/Items'
import '../styles/AddItem.css'

const AddToList: React.FC<IProps> = () => {

    const [input, setInput] = useState({
        name: "",
        brand: "",
        price: "",
        sex: "",
        sizes: [],
        description: "",
        details: [],
        images: []
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        setInput({
            name: "",
            brand: "",
            price: "",
            sex: "",
            sizes: [],
            description: "",
            details: [],
            images: []          
        })
        console.log(input)
    }

    return (
        <form className="add_item_form" onSubmit={e => e.preventDefault()}>
            <label htmlFor="name">Product Name</label>
            <input 
                type="text"
                onChange={handleChange}
                name="name"
                id="name"
                value={input.name}
                placeholder="Name"
                required
            />
            <label htmlFor="brand">Product Brand</label>
            <input 
                type="text"
                onChange={handleChange}
                name="brand"
                id="brand"
                value={input.brand}
                placeholder="Brand"
                required
            />
            <label htmlFor="price">Price</label>
            <input 
                type="text"
                onChange={handleChange}
                id="price"
                name="price"
                value={input.price}
                placeholder="Price"
                required
            />
            <fieldset>
                <legend>Who's it for?</legend>
                <p>
                   <input type="radio" id="men" name="sex"  value="men" onChange={handleChange} checked={input.sex === 'men'}/>
                    <label htmlFor="men">Men</label>  
                </p>
                <p>
                    <input type="radio" id="women" name="sex" value="women" onChange={handleChange} checked={input.sex === 'women'}/>
                    <label htmlFor="women">Women</label>
                </p>

            </fieldset>
            <label htmlFor="description">Product Description</label>
            <textarea
                onChange={handleChange}
                id="description"
                name="description"
                value={input.description}
                placeholder="Description"
            />
            <label htmlFor="details">Some Details</label>
            <input
                onChange={handleChange}
                id="details"
                name="details"
                value={input.details}
                placeholder="Details"
                required
            />
            <label htmlFor="images">Image Links</label>
            <input
                onChange={handleChange}
                id="images"
                name="images"
                value={input.images}
                placeholder="Images"
                required
            />
            <button
                type="submit"
                onClick={handleClick}
                className="submit_btn"
            >
                Add to List
            </button>
        </form>
            )
}

export default AddToList