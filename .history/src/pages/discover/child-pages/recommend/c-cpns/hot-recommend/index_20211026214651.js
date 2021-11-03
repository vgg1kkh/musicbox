import React, { memo } from 'react'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { HotRecommendWrapper } from './style'

export default memo(function HotRecommend(props) {

    //state
    const {history} = props



    return (
        <HotRecommendWrapper>
            <ThemeHeaderRcm
            title="Recommend"
            keywords={['华语', '流行', '摇滚', '民谣', '电子']}
            keywordsClick={(item) => handleKeyWordClick(item)}
            >

        </HotRecommendWrapper>
            
            
    )
})
