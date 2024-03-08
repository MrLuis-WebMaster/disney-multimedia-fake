import { useQuery } from "@tanstack/react-query"
import CardsContentCategory from "./components/CardsContentCategory"
import { getMoviesByCategory } from "../../../services/movie.service"
import { useParams } from "react-router-dom";
import CardsContentCategorySkeleton from "./components/CardsContentCategorySkeleton";
import { Typography } from "@mui/material";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const { data, isFetching, isError } = useQuery({
    queryKey: ['MovieByCategory', categoryId],
    queryFn: () => getMoviesByCategory(categoryId!),
    enabled: Boolean(categoryId?.length)
  })

  return (
    <>
      <Typography variant="h2" sx={{ marginBottom: 5 }}>
        {data?.name}
      </Typography>
      {
        isFetching && !isError && <CardsContentCategorySkeleton />
      }
      {
        !isFetching && !isError && Boolean(data?.movies.length) && <CardsContentCategory movies={data?.movies || []} />
      }
      {
        !isFetching && !isError && Boolean(!data?.movies.length) && <h1>Not found movies</h1>
      }
      {
        !isFetching && isError && <h1>Error server :c </h1>
      }
    </>
  )
}

export default CategoryPage