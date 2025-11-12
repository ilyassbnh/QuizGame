import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/Home';
import QuizPage from './Pages/Quiz';
import ResultPage from './Pages/Result';

function App() {

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/QuizPage' element={<QuizPage />} />
            <Route path='/ResultPage' element={<ResultPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
