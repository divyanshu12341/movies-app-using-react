import { useDispatch,useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
 import { useEffect } from "react";
import { getMovies } from "../../api/movies";
import MovieCard from "../../Components/MovieCard";
import { Box, Grid } from "@mui/material";

const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMovies())
    },[dispatch])
    const {Search} = useSelector((state)=>state.movies.movies);
    console.log(Search);
    return(
        <>
        <Navbar />
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                {Search?.length > 0 &&
                    Search.map((movie) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={movie.imdbID}>
                            <MovieCard movie={movie} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
        </>
    )
    
}
export default Home;