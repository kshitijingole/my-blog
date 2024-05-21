// https://github.com/LinkedInLearning/react-creating-and-hosting-a-full-stack-site-3209140/tree/02_04b/my-blog
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about-us' element={<AboutPage />}></Route>
        <Route path='/articles' element={<ArticleListPage />}></Route>
        <Route path='/articles/:articleId' element={<ArticlePage />}></Route>
      </Routes>
        
    </div>
    </BrowserRouter>
    
  );
}

export default App;
