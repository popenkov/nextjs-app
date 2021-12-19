import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
/* import cn from "classnames"; */
const cn = require("classnames");
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
