import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import { Link, useParams } from 'react-router-dom';
import { Movie } from '../../../../types/movie.types';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface CardsContentCategoryProps {
    movies: Movie[];
}

const CustomPaper = styled(Paper)({
    position: 'relative',
    textAlign: 'center',
    minHeight: '220px',
    maxHeight: '220px',
    overflow: 'hidden',
    display: 'flex',
    padding: '15px',
    '&:hover': {
        '& img': {
            transform: 'scale(1.2)',
        },
    },
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
        position: 'absolute',
        inset: '0'
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1,
    },
    '& p': {
        position: 'relative',
        zIndex: 2,
        color: '#f3f3f3',
        fontSize: '14px',
        textDecoration: 'none',
        textTransform: 'capitalize',
        marginTop: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
    },
});

const CardsContentCategory: React.FC<CardsContentCategoryProps> = ({ movies }) => {
    const { categoryId } = useParams()
    return (
        <Grid container spacing={3} className="container">
            {movies.map((movie) => (
                <Grid item key={movie.id} xs={12} md={3}>
                    <Link to={`/app/category/${categoryId}/details/${movie.id}`} style={{ color: "#f3f3f3"}}>
                        <CustomPaper>
                            <img
                                src={movie.poster}
                                alt={movie.title}
                            />
                            <p>
                                {movie.title}
                                <Typography component="span" fontSize={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                   (<StarIcon color='secondary' />
                                    {movie.ranking})
                                </Typography>
                            </p>
                        </CustomPaper>
                        <Box sx={{ marginTop: 1 }}>
                            <Typography fontSize={14}>
                                {movie.description}
                            </Typography>
                        </Box>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default CardsContentCategory;
