import { useParams } from "react-router-dom"
import { MOVIES } from "../home/movies.data"
import { lazy, Suspense, useMemo } from "react"

const LazyMovieComments = lazy(() => import('./MovieComments'))

export function MovieDetails(){
  
  const { id } = useParams()
  
  const movie = useMemo(()=>{
    return MOVIES.find(movie=>movie.trailerYoutubeId === id)
  }, [id])

  if(!movie) return <p className="text-center mt-10 text-gray-400">Фильм не найден :(</p>

  return(
    <div>
      <img src={movie.image} alt="Карточка фильма" className="w-2/3 md:1/3 rounded-xl shadow-lg object-cover"/>

      <div className="flex-1 space-y-4">
        <h1 className="text-4xl font-bold mt-10">{movie.name}</h1>
        <p className="text-sm text-gray-400">IMDb: {movie.rating}</p>

        <p className="text-gray-300 text-sm">Краткое описание фильма. Здесь можно добавить жанр и т.п. Бла бла бла бла эт NETFLIX</p>

        <Suspense fallback={<div>Загрузка...</div>}>
          <LazyMovieComments />
        </Suspense>
      </div>
    </div>
  )
}