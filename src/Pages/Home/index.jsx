import { useDispatch,useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
 import { useEffect } from "react";
import { getMovies } from "../../api/movies";

const Home = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMovies())
    },[])
    const {Search} = useSelector((state)=>state.movies.movies);
    console.log(Search)
    return(
        <Navbar />
        
    )
}
export default Home;