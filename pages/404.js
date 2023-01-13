import Link from 'next/link'
import Head from "next/head";
import styles from "./index.module.css";

export default function Home() {
    return<>
    <div>
        <main className={styles.main}>
            <title>Error 404</title>
            <h3>Page not found</h3>
            <h2>But you can drink something with the camel brothers &#128526;</h2>
            <img src = "/camel.jpg" className={styles.main} />
        </main>
    </div>
    </>
}