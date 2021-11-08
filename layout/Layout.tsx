import { LayoutProps } from "./Layout.props";
import cn from "classnames";
import styles from "./Layout.module.css";
import React, { FunctionComponent } from "react";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  return (
    <div {...props}>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  //возвращает новый функциональный компонент, те функцию.
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
