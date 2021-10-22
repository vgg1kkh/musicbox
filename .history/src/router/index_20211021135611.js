import HYMime from "@/pages/mime";
import HYFriend from "@/pages/friend";
import HYDiscover from "@/pages/discover";
const routes = [
  {
    path: "/mime",
    component: HYMime,
  },
  {
    path: "/friend",
    component: HYFriend,
  },
  {
    path: "/",
    exact:true,
    component: HYDiscover,
  },
];

export default routes;
