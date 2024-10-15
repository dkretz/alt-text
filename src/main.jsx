import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// const siteurl = window.location.search;
// const params = new URLSearchParams(siteurl);
// const teicode = params.get("tei");
// const edition = params.get("edition") ?? teicode.substring(0,4);
// const volume = params.get("volume") ?? teicode.substring(4,2) ?? "eb03";
// const pgseq = params.get("pgseq") ?? teicode.substring(7,4) ?? "1";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App edition={edition} volume={volume} /> */}
    <App />
  </React.StrictMode>,
)
