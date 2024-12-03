import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
      const newImages = await getGifts( category );
      setImages(newImages);
      setIsLoading(false)
    } 
  
    // if dependencies aren't established ([]), so, this hook is going to
    // be dispatched the first time the FC is rendered.
    useEffect(() => {
      getImages(category);
    }, [])

    return {
        images, 
        isLoading
    }
}
