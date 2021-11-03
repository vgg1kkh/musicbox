import React, { memo } from "react";

import HYTopBanner from "./c-cpns/topbanner";
import RecommendWrapper from "./style";
import HYHotRecommend from "./c-cpns/hot-recommend";
import { Content, RecommendLeft, RecommendRight } from "./style";

function Recommend() {
  return (
    <RecommendWrapper>
      <HYTopBanner />
      <Content>
        <RecommendLeft>
          <HYHotRecommend />
          <New
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

// lines for connecting to the store with connect,modified by using hooks
/* const mapStateToProps= (state)=>({
    topBanner: state.recommend.topBanner,
})

const mapDispatchToProps = dispatch =>(
    {
        getTopBanner: function(){
            dispatch(getTopBannerAction())
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))
 */

export default memo(Recommend);
