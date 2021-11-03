import React, { memo } from 'react'
import SettleSingerWrapper from './style'

export default memo(function SettleSinger() {
    return (
        <SettleSingerWrapper>
            <div className="header">
                <div>Exclusive Singers</div>
                <div>See All</div>
            </div>
            <div>Singer List</div>
        </SettleSingerWrapper>
    )
})
