import React from "react";
import {Stack, Box} from '@mui/material'
import VideoCard from "../videos-card/video-card";
import ChanelCard from "../chanel-card/chanel-card";
import Loader from "../loader/loader";

const Videos = ({videos}) => {
    if (!videos.length) return <Loader/>
   // console.log(videos)
    return (
        <Stack
            width={'100%'}
            direction={'row'}
            flexWrap='wrap'
            justifyContent='start'
            alignItems='start'
            gap={2}
        >
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item}/>}
                    {item.id.channelId && <ChanelCard video={item}/>}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos
