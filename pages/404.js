import Link from 'next/link'
import Head from "next/head";
import styles from "./index.module.css";

export default function Home() {
    return<>
    <div>
        <main className={styles.main}>
            <title>Error 404</title>
            <h1>404 - Page not found</h1>
            <h2>But you can drink something with the camel brothers &#128526;</h2>
            <img src = "/camel.jfif" className={styles.main} />
        </main>
    </div>
    </>
}
