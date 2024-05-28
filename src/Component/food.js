import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Food (){

const [food,setFood] = useState();
const [receipe,setReceipe] = useState([]);

 

  var url=`https://api.jikan.moe/v3/search/anime?q=${food}/Zero&page=1`

  const getData = async(e) =>{
    e.preventDefault();
    localStorage.setItem('food',food)
    var result = await axios.get(url);
    console.log(result.data.results)
    setReceipe(result.data.results)
    
  }
 

  const data = localStorage.getItem('food')
  useEffect(()=>{
    const url=`https://api.jikan.moe/v3/search/anime?q=${data}/Zero&page=1`
  
    const getData = async() =>{
      var result = await axios.get(url);
      setReceipe(result.data.results)
      setFood(data)
      
    }
   getData()
    
  },[])

  
  

  return (
    <div className="App">
    
      
      
     <img src="https://www.anime-planet.com/inc/img/logo-white2.png" style={{padding:'30px',width:'280px',height:'100px',display:'grid',marginLeft:'auto',marginRight:'auto'}} alt="" />
      <form style={{display:'flex',justifyContent:'center',padding:'12px'}}>
      <input style={{display:'flex',padding:'5px',borderRadius:'5px',outline:'0px'}} type="text" placeholder="Enter Anime" value={food} onChange={(e)=>setFood(e.target.value)} />
      <button style={{width:'90px',marginLeft:'10px',backgroundColor:'blue',outline:'0px',border:'0px',color:'white',fontWeight:'bold'}} onClick={getData}>Submit</button>
      </form>

      <div style={{display:'flex',justifyContent:'center'}}>
      <div className="mobile" style={{ display: 'flex',flexWrap: 'wrap',justifyContent:'center',maxWidth:'700px'}}>
      {
        receipe.map((item,index)=>{
          return <div style={{maxHeight:'700px',padding:'10px'}}>
              <div class="card" style={{width: "18rem"}}>
                <img key={item['image_url']} style={{width:'200px',padding:'20px',objectFit:'cover',maxWidth:'200px'}}src={item['image_url']}  alt=""/>
  <div class="card-body">
  <p key={item['title']} style={{display:'flex',alignContent:'center',maxWidth:'200px',marginLeft:'20px',textAlign:'center',fontSize:'15px',fontWeight:'bold'}}>{item['title']}</p>
    <p class="card-text">{item['synopsis']}</p>
    <Link
          className="btn btn-primary"
          to={{
            pathname:`/anime/${item['title']}`,
            state:{food,item:item['title']}
          }}
      >
        <p style={{textAlign:'center',width:'40px',height:'10px'}}>click</p>
        </Link>
    
  </div>
</div>
       
            
           
            </div>
        })
      }
      

      </div>
      </div>
    </div>
  );
}
  export default Food;