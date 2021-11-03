import { memo } from "react"
import { RcmHeaderWrapper, RcmHeaderLeft,RcmHeaderRight } from "./style"



const ThemeHeaderRmc = (props)=>{

    const {keywords,}

    return(
        <RcmHeaderWrapper>
            <RcmHeaderLeft>
                Left
            </RcmHeaderLeft>
            <RcmHeaderRight>
                Right
            </RcmHeaderRight>
        </RcmHeaderWrapper>
    )

}

export default memo(ThemeHeaderRmc)