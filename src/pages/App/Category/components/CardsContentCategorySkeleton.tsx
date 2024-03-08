import Grid from '@mui/material/Grid'
import Skeleton from '@mui/material/Skeleton'

const CardsContentCategorySkeleton = () => {
    return (
        <Grid container spacing={3} className="container">
            {[...Array(10)].map((_, index) => (
                <Grid item key={index} xs={12} md={3}>
                    <Skeleton variant="rounded" height={300} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardsContentCategorySkeleton