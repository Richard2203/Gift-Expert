import { useState } from "react"
// it's unnecesary to write "index.js" because
// React already infers it
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(
        ['Residet Evil 4']
    );

    const onAddCategory = (inputValue) => {
        if (categories.includes(inputValue)) return;
        setCategories([inputValue, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Sending a function to the son to receive a value through of it*/}
            { /* <AddCategory onAddCategory = {onAddCategory}/> */ }
            <AddCategory onAddCategory = {onAddCategory}/>


            {/* Sending a hook to the son. This is an impractical 
                way to change the hook value */}
            { /* <AddCategory onAddCategory = {onAddCategory}/> */ }
            

            {
            categories.map( category => (
                <GifGrid 
                    key={category} 
                    category={category}/>
                ) 
            )
            }
        </>
    )
}