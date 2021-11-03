import React, { memo } from 'react'

import { PlayerBarWrapper,Control,PlayerInfo } from './style.js'

export default memo(function HYAppPlayerBar() {
    return (
            <PlayerBarWrapper className="sprite_player">
                <div className="content w980">
                    <Control>
                        <button className="pre sprite_player"></button>
                        <button className="play sprite_player"></button>
                        <button className="next sprite_player"></button>
                    </Control>
                    <PlayerInfo >
                        <div className="image">
                            <a href="/#">
                                <img src="http://p3.music.126.net/ULq-rXEsWpicf8iyuxYdvw==/2399134371831533.jpg?param=34y34" alt=""></img>
                            </a>
                        </div>
                        <div className="play-detail">
                            <div className="song-info">
                                <span className="song-name">SongName</span>
                                <a className="singer-name">SingerName</a>
                            </div >
                            <div className="ant-slider">ANT_SLIDER</div>

                           
                        </div>
                    </PlayerInfo>


                </div>
            </PlayerBarWrapper>
            
        
    )
})
