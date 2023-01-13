import Link from 'next/link'
import Head from "next/head";
import styles from "./index.module.css";
import styled from "styled-components";

const GreenButton = styled.button`
background-color: #00cc99;
color: white;
font-size: 20px;
padding: 10px 20px;
border-color: white;
border-radius: 10px;
margin: 10px 10px;
cursor: pointer;
`;
const RedButton = styled.button`
background-color: red;
color: white;
font-size: 20px;
padding: 10px 20px;
border-color: white;
border-radius: 10px;
margin: 10px 0px;
cursor: pointer;
`;

export default function Home() {

return (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/home_logo.png" />
    </Head>
    <main className={styles.main}>
      <img src="/openAI.png" className={styles.icon} />
      <h1>OpenAI test Web</h1>
      <br></br><br></br>
      <img src="/dog.png" className={styles.icon} />
      <h2>Generate pet name</h2>
      <Link href="/pet">
        <GreenButton>Go</GreenButton>
      </Link>
      <br></br><br></br>
      <img src="/image.png" className={styles.icon} />
      <h2>Generate image from text</h2>
      <Link href="/image">
        <GreenButton>Go</GreenButton>
      </Link>
      <br></br><br></br>
      <h2><img src="/404.png" className={styles.icon} /></h2>
      <h2>Error 404 (why would you want to go here??)</h2>
      <Link href="/404">
        <RedButton>404</RedButton>
      </Link>
    </main>
  </div>
)
};

