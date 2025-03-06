import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Placeholder components - you'll create these files later
const Home = () => <div className="page-container"><h1>Welcome to Heroes of the Crown</h1></div>;
const QuestLog = () => <div className="page-container"><h1>Quest Log</h1></div>;
const Characters = () => <div className="page-container"><h1>Characters</h1></div>;
const DMTools = () => <div className="page-container"><h1>DM Tools</h1></div>;
const Maps = () => <div className="page-container"><h1>Maps</h1></div>;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Heroes of the Crown</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/quests">Quests</Link></li>
              <li><Link to="/characters">Characters</Link></li>
              <li><Link to="/dm-tools">DM Tools</Link></li>
              <li><Link to="/maps">Maps</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quests" element={<QuestLog />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/dm-tools" element={<DMTools />} />
            <Route path="/maps" element={<Maps />} />
          </Routes>
        </main>
        <footer>
          <p> {new Date().getFullYear()} Heroes of the Crown</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;