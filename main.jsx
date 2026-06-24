
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
 return <div className="hero">
 <h1>Design Your Timepiece. Forge Your Legacy.</h1>
 <p>Luxury Without Limits.</p>
 <button>Join Founders Club</button>
 <section><h2>ChronoForge MVP</h2><p>Investor-ready prototype starter.</p></section>
 </div>
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
