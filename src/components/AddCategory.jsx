import { useState } from "react"
//import "./AddCategory.css"

const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('Call of the Night');

    const handleSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length<=1) return

        // using spred operator with an array to avoid an array mutation
        // setCategories(categories => [inputValue, ...categories]);

        setInputValue('');
        onAddCategory(inputValue.trim());
    }

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type="text" 
                onChange={onInputChange} 
                placeholder="Buscar Gifts"
                value={inputValue}/>
        </form>
    )
}
export default AddCategory;