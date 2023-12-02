import './App.css';
import './components/variables.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Footer from './components/mainPage/Footer';
import Header from './components/mainPage/Header';
import WordList from './components/mainPage/WordList';
import WordCardConteiner from './components/wordCard/WordCardConteiner';
import MissingPage from './components/mainPage/MissingPage.jsx';

import { Words } from './components/Words.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      {Words && Words.length > 0
      ?
      <main>
        <Routes>
          <Route path="/" element={<WordList />} />
          <Route path="/game" element={<WordCardConteiner />} />
          <Route path='*' element={<MissingPage />}></Route>
        </Routes>
      </main>
      :<main className='errorWordlist'>
        <div>К сожалению, мы не смогли получить список слов</div>
        <div>Попробуйте обновить страницу</div>
        <div>Или напишите нам на почту:</div>
        <div>lalala@mail.ru</div>
      </main>
      }
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
