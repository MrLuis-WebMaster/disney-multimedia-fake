import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Category } from '../../../../types/movie.types';

interface CardsCategoryProps {
    categories: Category[];
}

const CustomPaper = styled(Paper)({
    position: 'relative',
    textAlign: 'center',
    minHeight: '300px',
    maxHeight: '300px',
    overflow: 'hidden',
    display: 'flex',
    padding: '20px',
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    '& p': {
        position: 'relative',
        zIndex: 2,
        color: '#f3f3f3',
        fontSize: '2.5rem',
        textDecoration: 'none',
        textTransform: 'capitalize'
    },
});

const CardsCategory: React.FC<CardsCategoryProps> = ({ categories }) => {
    const containerAnimation = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    const itemAnimation = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <Grid container spacing={3} className="container" component={motion.ul} variants={containerAnimation}>
            {categories.map((category) => (
                <Grid item key={category.id} xs={12} md={6} component={motion.i} variants={itemAnimation}>
                    <Link to={`/app/category/${category.id}`}>
                        <CustomPaper>
                            <img
                                src={category.poster}
                                alt={category.name + 'fake'}
                            />
                            <p>{category.name}</p>
                        </CustomPaper>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default CardsCategory;
