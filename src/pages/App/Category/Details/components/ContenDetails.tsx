import YoutubreIframe from './YoutubeIframe'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { MovieDetails } from '../../../../../types/movie.types'
import { Typography } from '@mui/material'
import DateRangeIcon from '@mui/icons-material/DateRange';
import StarIcon from '@mui/icons-material/Star';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import PublicIcon from '@mui/icons-material/Public';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

const ContenDetails = ({ movie }: { movie: MovieDetails | undefined}) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
                <YoutubreIframe youtubeId={movie?.youtubeId as string} />
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        height: '100%',
                        padding: 3
                    }}
                >
                    <Typography variant='h6'>
                        {movie?.title || 'Test'}
                    </Typography>
                    <Typography component='p'>
                        {movie?.sipnosis}
                    </Typography>
                    <Typography variant='h6'>
                        Year
                    </Typography>
                    <Typography component='p'>
                        <DateRangeIcon sx={{ fontSize: 16, marginRight: 1 }} color='secondary' />
                        {movie?.year}
                    </Typography>
                    <Typography variant='h6'>
                        Genre
                    </Typography>
                    <Typography component='p'>
                        <MovieFilterIcon sx={{ fontSize: 16, marginRight: 1 }} color='secondary' />
                        {movie?.genre}
                    </Typography>
                    <Typography variant='h5'>
                        Duration
                    </Typography>
                    <Typography component='p'>
                        <TimelapseIcon sx={{ fontSize: 16, marginRight: 1 }} color='secondary' />
                        {movie?.duration} minutes
                    </Typography>
                    <Typography variant='h5'>
                        Country
                    </Typography>
                    <Typography component='p'>
                        <PublicIcon sx={{ fontSize: 16, marginRight: 1 }} color='secondary' />
                        {movie?.country} 
                    </Typography>
                    <Typography variant='h6'>
                        Ranking
                    </Typography>
                    <Typography component='p'>
                        <StarIcon sx={{ fontSize: 16, marginRight: 1 }} color='secondary'/>
                        {movie?.ranking} / 5
                    </Typography>
                    <Typography variant='h6'>
                        Actors
                    </Typography>
                    <Typography component='p'>
                        <RecentActorsIcon sx={{ fontSize: 16, marginRight: 1 }} color='secondary' />
                        {movie?.actors} 
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        height: '100%',
                        padding: 3
                    }}
                >
                    <Typography component="p" dangerouslySetInnerHTML={ {__html: movie?.resume as string } } />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default ContenDetails