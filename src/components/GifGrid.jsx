import GifItem from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);
    
  return (
    <>
      {/* isLoading ? <h4>Loading...</h4> : null */}
      { isLoading && <h4>Loading...</h4> }
      <h3>{ category }</h3>
      <div className="card-grid">
        {
          //{...image} allows to spred all its props to the son component
          images.map((image) => (
            <GifItem key={image.id} {...image}/>
          ))
        }
      </div>
    </>
  )
}
export default GifGrid;