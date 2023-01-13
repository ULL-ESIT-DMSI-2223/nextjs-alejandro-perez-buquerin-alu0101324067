import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
    const [animalInput, setAnimalInput] = useState("");
    const [result, setResult] = useState();

    async function onSubmit(event) {
        event.preventDefault();
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ animal: animalInput }),
        });
        console.log(`Valor de animal = ${animalInput}`);
        const data = await response.json();
        setResult(data.result);
        setAnimalInput("");
    }

return (
    
    <div>
        <Head>
            <title>OpenAI Quickstart</title>
            <link rel="icon" href="/dog.png" />
        </Head>
        <main className={styles.main}>
            <img src="/dog.png" className={styles.icon} />
            <h3>Quiero ponerle nombre a mi mascota</h3>
            <form onSubmit={onSubmit}>
                <input
                type="text"
                name="animal"
                placeholder="Introduce un animal"
                value={animalInput}
                onChange={(e) => setAnimalInput(e.target.value)}
                />
                <input type="submit" value="Generar nombres" />
            </form>
            <div className={styles.result}>{result}</div>            
        </main>
    </div>
    );
}