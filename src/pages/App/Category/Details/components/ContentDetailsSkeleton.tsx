import { Skeleton } from '@mui/material'
import Grid from '@mui/material/Grid'

const ContentDetailsSkeleton = () => {
  return (
      <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
              <Skeleton variant="rounded" width={'100%'} height={500} />
          </Grid>
          <Grid item xs={12} md={4}>
              <Skeleton variant="rounded" width={'100%'} height={500} />
          </Grid>
          <Grid item xs={12}>
              <Skeleton variant="rounded" width={'100%'} height={500} />
          </Grid>
      </Grid>
  )
}

export default ContentDetailsSkeleton