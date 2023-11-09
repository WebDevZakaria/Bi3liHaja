import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ResponsiveAppBar from './component/ResponsiveAppBar';
//import { Theme } from '@radix-ui/themes';
//import { ChakraProvider } from '@chakra-ui/react'
import AddToCard from './screens/AddToCard';
import Footer from './component/Footer';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {

  return (

<BrowserRouter>

<ResponsiveAppBar />

    <main className="">

      <Routes>

        <Route path='/' element = {<HomeScreen/>} />
        <Route path='/products/:id' element = {<ProductScreen/>} />
        <Route path='/addtocard/' element = {<AddToCard/>} />
        <Route path='/login/' element = {<LoginScreen/>} />
        <Route path='/Register/' element = {<RegisterScreen/>} />


      </Routes>

    </main>

    <Footer />

    </BrowserRouter>

    
  );
}

export default App;
