import Box from '@mui/material/Box';
import Hero from './components/Hero';
import Divider from '@mui/material/Divider';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Box sx={{ bgcolor: 'background.default' }}>
                <Pricing />
                <Divider />
                <Footer />
            </Box>
        </>
    );
}

export default LandingPage