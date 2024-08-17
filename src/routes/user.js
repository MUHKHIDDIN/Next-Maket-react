import { nanoid } from "nanoid";
import { Profile } from "../pages/user/profile";
import { OrderList } from "../pages/user/order";
import { ChangeAcount } from "../pages/user/change"; 

export const userRoute = [
  {
    component: Profile,
    path: "Profile",
    id: nanoid(),
  },
  {
    component: OrderList,
    path: "orderList",
    id: nanoid(),
  },
  {
    component: ChangeAcount,
    path: "changeAcount", 
    id: nanoid(),
  },
];
