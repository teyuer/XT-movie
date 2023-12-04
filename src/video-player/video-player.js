 import React, { useState } from 'react';

const VideoPlayer = ({ videoUrl }) => {
    const [playCount, setPlayCount] = useState(0);

    const handleVideoClick = () => {  setPlayCount(playCount + 1); };

        return (
            <div>
                <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen onClick={handleVideoClick} >

        </iframe> <p>Video o'zgarganlar soni: {playCount}</p> </div> ); };

    export default VideoPlayer;