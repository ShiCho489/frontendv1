// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

