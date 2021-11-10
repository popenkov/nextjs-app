import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";

export const Footer = ({ children, ...props }: FooterProps): JSX.Element => {
  return (
    <div {...props}>
      <div className={styles.footerContainer}>
        <p className={styles.copyright}>
          OwlTop © 2020 - 2021 Все права защищены
        </p>
        <div>
          <a href="#" className={styles.link}>
            Пользовательское соглашение
          </a>
          <a href="#" className={styles.link}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </div>
  );
};
