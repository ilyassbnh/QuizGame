import './App.css'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import QuizPage from "./pages/QuizPage"
import ResultPage from './pages/ResultPage'


function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/QuizPage' element={<QuizPage />} />
        <Route path='/ResultPage' element={<ResultPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
