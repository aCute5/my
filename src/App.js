import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import Slider from "./Slider";
import axios from "axios";
import "./App.css";
function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Imposta l'URL dell'endpoint API di DatoCMS
    const apiUrl = "https://www.datocms.com/docs/content-delivery-api"; // Sostituisci con il tuo URL reale

    // Imposta la chiave API come header nell'oggetto di configurazione Axios
    const config = {
      headers: {
        Authorization: "23d68bb0bba7a845ee6e58c35fd841", // Sostituisci con la tua chiave API reale
      },
    };

    axios
      .get(apiUrl, config)
      .then((response) => {
        // I dati sono nella proprietà 'data'
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dati da DatoCMS:", error);
      });
  }, []);

  return (
    <div class="root">
      <Navbar></Navbar>
      <Slider></Slider>
    </div>
  );
}

export default App;
