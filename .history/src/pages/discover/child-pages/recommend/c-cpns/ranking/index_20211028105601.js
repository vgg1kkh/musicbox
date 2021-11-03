import React, { memo,useEffect } from "react";
import { useDispatch, const state = useSelector(state => state.state)}
import RankingWrapper from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm";
import TopRanking from "../../../../../../components/top-ranking";
import {getTopListAction} from "../../store/actionCreators"
export default memo(function Ranking() {


// local hooks

  // other hook
  useEffect(() => { 
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
  }, [dispatch])
  return (
    <RankingWrapper>
      <ThemeHeaderRcm title="Ranking" showIcon={true} right="more" />
      <div className="content">
        <TopRanking />
        <TopRanking />
        <TopRanking />
      </div>
    </RankingWrapper>
  );
});
