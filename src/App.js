import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import logo from './icons_assets/Logo.svg'

function App() {

  const meta = {
    title: 'Little Lemon Mexico',
    description: 'A super cool page about the best fictional restaurant in Mexico!',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  };
  return (
    <>
      <HelmetProvider>
        <Helmet defer={false}>
          <title>{meta.title}</title>
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={logo} />
          <meta property="description" content={meta.description} />
        </Helmet>
      </HelmetProvider>
      <BrowserRouter>
        <Nav/>
        <Main/>
        <Menu/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
