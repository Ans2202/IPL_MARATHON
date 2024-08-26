import axios from "axios";

const URL='http://localhost:5064/api/IPL'

const addPlayer = async (player) => {
    try {
        const response = await axios.post(URL, player);
        return { data: response.data, loading: false, error: null };
    } catch (error) {
        return { data: null, loading: false, error: error };
    }
}

const GetMatchStatistic=async ()=>{
    let url=`${URL}/MatchStatistic`
    try {
        const response = await axios.get(url);
        return { data: response.data, loading: false, error: null };
    } catch (error) {
        return { data: null, loading: false, error: error };
    }
}

const GetTopPlayer=async ()=>{
    let url=`${URL}/TopPlayer`
    try {
        const response = await axios.get(url);
        return { data: response.data, loading: false, error: null };
    } catch (error) {
        return { data: null, loading: false, error: error };
    }
}

export {addPlayer, GetMatchStatistic, GetTopPlayer}