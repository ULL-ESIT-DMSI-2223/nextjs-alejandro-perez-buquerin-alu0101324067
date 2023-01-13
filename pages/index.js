import Link from 'next/link'
import Head from "next/head";
import styles from "./index.module.css";

export default function Home() {

return (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/home_logo.png" />
    </Head>
    <main className={styles.main}>
      <img src="/openai.png" className={styles.icon} />
      <h1>OpenAI test page</h1>
      <img src="/dog.png" className={styles.icon} />
      <h2><Link href="/pet">Generate pet name</Link></h2>
      <br></br>
      <img src="/image.png" className={styles.icon} />
      <h2><Link href="/image">Generate image from text</Link></h2>
      <br></br>
      <h2><img src="/404.png" className={styles.icon} /></h2>
      <Link href="/404">Error 404 (why would you want to go here??)</Link>
    </main>
  </div>
)
};

