import axios from 'axios'
import store from '../store/store';
import { setMovies } from '../slices/moviesSlice';
export const getMovies = ()=>async dispatch=>{
    const url = 'http://www.omdbapi.com/?apikey=635eadeb&s=avengers'
;
try{
    const {data} = await axios.get(url);
    dispatch(setMovies(data));
    return data;
}catch(err){
    return err;
}
}