// import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
import Head from './Components/Head'
import Navbar from './Components/Navbar'
import Main from './Landing/Main'
import Header from './Landing/Header'
import Services from './Services'
import Footer from './Components/Footer'
import Team from './Landing/Team'
import ContactUs from './Landing/ContactUs'
import About from './Landing/About'
import Models from './Landing/Models'
import Login from './Login'
import OneService from './WorkerReview'
export default function Home() {

  
  return (
    <>
    <Head/>
    <Navbar/>
    <Header/>
    
    <Main/>
    <Services/>
    <Models/>
    <About/>
    <Team/>
    <ContactUs/>

    <Footer/>

    {/* <Login/> */}
    <OneService/>
    
    
    </>
  )
}
