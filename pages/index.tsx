import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Htag, Button, Ptag, Tag, Rating } from "../components/index";
import { Layout, withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">hi</Htag>
      <Button appearance="primary">primary button</Button>
      <Button appearance="ghost" arrow="right">
        ghost button
      </Button>
      <Ptag fontSize="14px">123</Ptag>
      <Ptag fontSize="16px">456</Ptag>
      <Ptag fontSize="18px">789</Ptag>
      <Tag href="#" color="primary">
        hi
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  category: number;
}
