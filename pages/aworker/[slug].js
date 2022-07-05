// import { useRouter } from 'next/router'
// import React, { useState ,useEffect} from 'react'
// import axios from 'axios'


// export default function Worker() {
//   const [data, setData] = useState([]);

//     const {query} = useRouter()
//     const {slug} = query
//     console.log("slug",slug)

//   const GetData = async () => {
//     await axios
//       .get("https://fanni-jo.herokuapp.com/api/signup/service-provider")
//       .then((res) => {
//         setData(res.data);
//         console.log("service data", res.data);
//       })
//       .catch((e) => {
//         console.log("service data error", e);
//       });
//   };
//   useEffect(() => {
//     GetData();
//   }, []);


//   return(

//  data.map((data) => {
//     if (data.username == slug) {
//       return (
//         <div class="container">
//           <div class="row">
//             <div class="col-md-6">
//               <div class="card">
//                 <div class="card-body mt-5">
//                   <h5 class="card-title">{data.username}</h5>
//                   <p class="card-text">{data.category}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
//  )

//   )
// }
