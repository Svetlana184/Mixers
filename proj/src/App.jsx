import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Categories from './components/categories/Categories'
import Sales from './components/sales/Sales'
import Company from './components/company/Company'
import Questions from './components/questions/Questions'
import Catalog from './components/catalog/Catalog'
import Adds from './components/adds/Adds'
import Listitems from './components/listItmes/Listitems';
import CollectionItems from './components/collectionItems/CollectionItems'
import InfoItem from './components/infoItem/InfoItem'
import DescItem from './components/descItem/DescItem'
import './App.scss'

function App() {

  return (
     <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={
            <>
              <About/>
              <Categories/>
              <Sales/>
              <Company/>
              <Questions/>
            </>    
          }/>
          <Route path='/catalog/{id}' element={
            <>
              <Catalog/>
              <Listitems/>
            </>
          }/>
          <Route path='/item/{id}' element={
            <>
              <InfoItem/>
              <DescItem/>
              <CollectionItems/>
              <Adds/>
              <Questions/>
            </>
          }/>
        </Routes>
        <Footer/>
     </BrowserRouter>
  )
}

export default App
