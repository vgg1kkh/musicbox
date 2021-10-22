import { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/img/logo.jpg"

import { HeaderWrapper,HeaderLeft,HeaderRight } from "./style";

export default memo(function HYAppFooter() {
  return (
    <HeaderWrapper>
      <div className="content w1100">
            <HeaderLeft>
                <a href="#/" className="logo">
                    <img src={logo} alt=""></img>
                    <span>Birdy Music</span>
                </a>
            </HeaderLeft>
            <HeaderRight>
                right
            </HeaderRight>
      </div>
      <div className="divider"></div>

    </HeaderWrapper>
  );
});

{/* <NavLink to="/">Discover</NavLink>
<NavLink to="/mime">PlayList</NavLink>
<NavLink to="/friend">Friend</NavLink> */}