import React from 'react';
import './app.css'
import Main from "../Main/main";
import Box from "@mui/material/Box";
import {Route, Routes} from 'react-router-dom'
import Channel from "../Channel/channel";
import Search from "../search/search";
import Navbar from "../navbar/navbar";
import VideoDetail from "../video-detail/video-detail";

const App = () => {
    return (
        <div>
            <Box>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='channel/:id' element={<Channel/>}/>
                    <Route path='search/:id' element={<Search/>}/>
                    <Route path='video/:id' element={<VideoDetail/>}/>
                </Routes>
            </Box>
        </div>
    );
}

export default App;