import styled from "styled-components";

export const HotRecommendWrapper= styled.div``
export const HotRecommendNavWrapper = styled.div`
    width: 100%;
    height: 35px;
    padding:0px 10px 2px 0px;
    border-bottom: 2px solid #C10D0C;
    
    .icon{
        display: inline-block;
        width:14px;
        height:14px;
        margin: 10px 5px 0px 5px;

        /* background-color: #ccc; */
        background: url(${require('@/assets/img/sprite_02.png').default}) -235px -164px no-repeat;
    }
`

export const HotRecommendContentWrapper = styled.div`
    width: 100%;
    
`



