import React, { memo } from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { SubMenuWrapper } from "./style";
import { dicoverMenu } from "../../common/local-data";
import request from "../../services/request";



export default memo(function HYDiscover(props) {
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
      <div>
              {
                  renderRoutes(props.route.routes)
              }
       </div>
    </div>
  );
});
