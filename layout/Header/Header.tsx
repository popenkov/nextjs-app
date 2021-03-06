import { HeaderProps } from "./Header.props";
/* import cn from "classnames"; */
const cn = require("classnames");
import styles from "./Header.module.css";

export const Header = ({ children, ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};
