import { nanoid } from "nanoid";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { ProductDetail } from "../pages/product-detail";

export const routes = [
  {
    component: Home,
    path: "/",
    id: nanoid(),
  },
  {
    component: About,
    path: "/about",
    id: nanoid(),
  },
  {
    component: Contact,
    path: "/contact",
    id: nanoid(),
  },
  {
    component: ProductDetail,
    path: "/product/product-detail/:id",
    id: nanoid(),
  },
  
];
