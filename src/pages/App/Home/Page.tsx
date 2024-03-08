import { useQuery } from '@tanstack/react-query'
import CardsCategory from './components/CardsCategory'
import { getCategories } from '../../../services/movie.service'
import CardCategorySkeleton from './components/CardCategorySkeleton'

const HomePage = () => {
  const { data = [], isFetching, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  })
  return (
    <>
      {
       isFetching && !isError && <CardCategorySkeleton/>
      }
      {
        !isFetching && !isError && Boolean(data.length) && <CardsCategory categories={data}  />
      }
      {
        !isFetching && !isError && Boolean(!data.length) && <h1>Not found categories</h1>
      }
      {
        !isFetching && isError && <h1>Error server :c </h1>
      }
    </>
  )
}

export default HomePage