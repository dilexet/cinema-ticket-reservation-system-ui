import React from 'react';
import {Container, Box} from '@mui/material';
import Slider from "react-slick";
import MovieCard from "../../MoviePage/component/MovieCard";
import '../style/style.css'
import Header from "./Header";

const Home = ({theme, moviesState, settings}) => {
    return (
        <Container component="main" sx={{mt: 8, mb: 2}}>
            <Header theme={theme}/>
            <Box style={{
                margin: '50px 0'
            }}>
                <Slider {...settings} >
                    {
                        moviesState?.dataList ?
                            moviesState?.dataList.movies?.map((movie, index) => (
                                <Box key={index}
                                     style={{
                                         display: 'flex',
                                         textAlign: 'center',
                                         flexDirection: 'column',
                                         maxWidth: '325px',
                                         margin: "40px 0",
                                     }}>
                                    <Box style={{width: '296px'}}>
                                        <MovieCard movie={movie} theme={theme}/>
                                    </Box>
                                </Box>
                            )) : <></>
                    }
                </Slider>
            </Box>
        </Container>
    );
}

export default Home;