import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { SubMenuWrapper } from "./style";
import { dicoverMenu } from "../../common/local-data";
import instance from "../../services/request"


export default memo(function HYDiscover(props) {

//   useEffect(() => {
//       instance({
//         url:'/banner'
//       }).then(res=>console.log(res))
//   }, [])  

  const showDiscoverMenu = (item, index) => {
    return (
      <li key={index} className="submenu-item">
        <Link className="submenu-item-link" to={item.link}>
          {item.title}
        </Link>
      </li>
    );
  };
  return (
    <div>
      <SubMenuWrapper>
        <div className="submenu-content w1100">
          <div className="submenu-list">
            {dicoverMenu.map((item, index) => {
              return showDiscoverMenu(item, index);
            })}
          </div>
        </div>
      </SubMenuWrapper>
      <div>{renderRoutes(props.route.routes)}</div>
    </div>
  );
});
