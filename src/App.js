// https://github.com/LinkedInLearning/react-creating-and-hosting-a-full-stack-site-3209140/tree/02_04b/my-blog
import './App.css';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id="page-body">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about-us' element={<AboutPage />}></Route>
        <Route path='/articles' element={<ArticleListPage />}></Route>
        <Route path='/articles/:articleId' element={<ArticlePage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
