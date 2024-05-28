import React,{useState,useEffect} from "react";
import "./Home.css";

import axios from "axios";


const Home = props => {
 
  const [array,setArray] = useState([]) 
  useEffect(()=>{
      const {food,item} =  (props.location && props.location.state) || {};
      var url=`https://api.jikan.moe/v3/search/anime?q=${food}/Zero&page=1`
    
      const getData = async() =>{
        var result = await axios.get(url);
        console.log(url)
        console.log(result)
        result.data.results.filter(items=>items['title']===item?setArray(items):'')
        
      }
      getData()
  },[])
 
  console.log(array)

  const setData = (url) =>{
    window.location = url
  }

  

  return (
    <div className="body">
    {
      array['title'] ?
      <div className="cards">
      <div className="card home">
        <img key={array['image_url']} style={{width:'200px',padding:'20px',objectFit:'cover',maxWidth:'200px'}}src={array['image_url']}  alt=""/>
<div class="card-body">
<div>
<p className="title" key={array['title']} style={{display:'flex',alignContent:'center',fontWeight:'bold'}}>{array['title']}<p style={{display:'flex',marginLeft:'40px',color:'gold',fontSize:'15px'}}>IMDB {array['score']}</p></p>
  </div>
<p class="card-text">{array['synopsis']}</p>

  
   <button onClick={()=>setData(array['url'])} style={{width:'120px',outline:'0px',backgroundColor:'goldenrod',border:'none',color:'white',fontWeight:'bold'}}>More</button>
 

</div>
</div>

    
   
    </div>:null
    }
    </div>
  );
}

export default Home;
