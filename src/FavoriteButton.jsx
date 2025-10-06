import { memo, useEffect, useState } from "react"

function FavoriteButton(){

  const [isFavorite, setIsFavorite]=useState(false)
  
  useEffect(()=>{
    console.log('Изменилось состояние!')
  }, [isFavorite])

  return (
    <button onClick={()=>{setIsFavorite(!isFavorite)}} className="btn">
      {isFavorite ? '❤️' : '🤍'}
    </button>
  )
}

export default memo(FavoriteButton)