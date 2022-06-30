import '../style/index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";


export default function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])



  return (
  <>
    <Helmet>
    <script src=
      "../js/script.js" 
    type="text/javascript" />
    </Helmet>
  <Component {...pageProps} />


  </>
  )
}
