import { memo } from "react";
import { Link, NavLink } from "react-router-dom";

import { HeaderWrapper } from "./style";

export default memo(function HYAppFooter() {
  return (
    <HeaderWrapper>
      <div className="content w1100">
   
      </div>
      <div className="divider"></div>

    </HeaderWrapper>
  );
});

{/* <NavLink to="/">Discover</NavLink>
<NavLink to="/mime">PlayList</NavLink>
<NavLink to="/friend">Friend</NavLink> */}