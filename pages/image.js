import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {

    const [textInput, setTextInput] = useState("");
    const [imageResult, setImageResult] = useState();
  
    async function onTextSubmit(event) {
      event.preventDefault();
      const imageResponse = await fetch("/api/generateImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: textInput }),
      });
      
      const imageData = await imageResponse.json();
      setImageResult(imageData.imageResult);
      setTextInput("");
  };

return (
    <div>
        <Head>
            <title>OpenAI Quickstart</title>
            <link rel="icon" href="/dog.png" />
        </Head>
        <main className={styles.main}>
            <img src="/dog.png" className={styles.icon} />
                <h3>Genera una imagen a partir de texto</h3>
                <form onSubmit={onTextSubmit}>
                  <input
                    type="text"
                    name="image"
                    placeholder="Texto a convertir"
                    value={textInput}
                    onChange={(i) => setTextInput(i.target.value)}
                  />
                  <input type="submit" value="Generar Imagen" />
                </form>
            <div className={styles.result}><img src={imageResult} />  </div>
        </main>
    </div>
    );
}