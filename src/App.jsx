import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/form/form';
import Layout from './components/shared/layout';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';

function App() {
  return (
       <ThemeProvider>
              <BrowserRouter>

  <Layout>
   <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Form />} />
          </Routes>
    </Layout>
          </BrowserRouter>

       </ThemeProvider>
  
  );
}

export default App;
