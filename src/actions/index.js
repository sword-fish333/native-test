import axios from 'axios';

const URL=`https://jsonplaceholder.typicode.com`;
export const getArticles=async()=>{

    let request=await axios.get(`${URL}/posts`);

    return {
        type:'GET_ARTICLES',
        payload:request.data
    }
}