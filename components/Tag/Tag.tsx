import { TagProps } from "./Tag.props";
/* import cn from "classnames"; */
const cn = require("classnames");
import styles from "./Tag.module.css";

export const Tag = ({
  size = "m",
  children,
  color = "ghost",
  className,
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.grey]: color == "grey",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
      })}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
