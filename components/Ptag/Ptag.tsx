import { PtagProps } from "./Ptag.props";
/* import cn from "classnames"; */
const cn = require("classnames");
import styles from "./Ptag.module.css";

export const Ptag = ({
  children,
  fontSize = "16px",
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.Ptag, {
        [styles.small]: fontSize == "14px",
        [styles.regular]: fontSize == "16px",
        [styles.large]: fontSize == "18px",
      })}
    >
      {children}
    </p>
  );
};
