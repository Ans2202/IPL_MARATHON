import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Player/Home"
import PostPlayer from "../Player/PostPlayer"
import MatchStatistic from "../Player/MatchStatistic"
import TopPlayer from "../Player/TopPlayer"
import LoginPage from "../Player/Login"


const RouterConfig =()=>{
    return <>
        <BrowserRouter>
        
        <Routes>
           

            <Route path="/" element={<Home/>}/>
            <Route path="/loginpage" element={<LoginPage/>}/>

            <Route path="/addplayer" element={<PostPlayer/>}/>
            <Route path="/matchstatistic" element={<MatchStatistic/>}/>
            <Route path="/topplayer" element={<TopPlayer/>}/>
            
        </Routes>
        
        </BrowserRouter>
    </>
}

export default RouterConfig