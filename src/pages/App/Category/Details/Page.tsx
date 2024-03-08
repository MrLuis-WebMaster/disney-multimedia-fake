import Box from "@mui/material/Box"
import { useParams } from "react-router-dom"
import { getDetailsByMovie } from "../../../../services/movie.service"
import ContenDetails from "./components/ContenDetails"
import ContentDetailsSkeleton from "./components/ContentDetailsSkeleton"
import { useQuery } from "@tanstack/react-query"

const DetailsPage = () => {
  const { contentId } = useParams();
  const { data, isFetching, isError } = useQuery({
    queryKey: ['details', contentId],
    queryFn: () => getDetailsByMovie(contentId!),
    enabled: Boolean(contentId?.length)
  })
  return (
    <Box>
      {
        isFetching && !isError && <ContentDetailsSkeleton />
      }
      {
        !isFetching && !isError && Boolean(data) && <ContenDetails movie={data} />
      }
      {
        !isFetching && !isError && Boolean(!data) && <h1>Not found details</h1>
      }
      {
        !isFetching && isError && <h1>Error server :c </h1>
      }
    </Box>
  )
}

export default DetailsPage