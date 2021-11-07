import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Htag, Button, Ptag, Tag, Rating } from "../components/index";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    console.log("123");
  }, [counter]);
  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        primary button
      </Button>
      <Button appearance="ghost" arrow="right">
        ghost button
      </Button>
      <Ptag fontSize="14px">123</Ptag>
      <Ptag fontSize="16px">456</Ptag>
      <Ptag fontSize="18px">789</Ptag>
      <Tag href="#" color="primary">
        hi
      </Tag>
      <Rating rating={4} />
    </>
  );
}
