import {useState,useEffect} from 'react'
import { vocabClient } from '../clients/api'


function Vocab() {

  const [vocab,setVocab] = useState([])
  const [index,setIndex] = useState(0)

  useEffect(()=>{
     async function getData() {
       
      try {
      const { data } = await vocabClient.get(`${user_id}`) // /:id
      console.log(data)
      
      
      setVocab(data)

      } catch(err) {
  
        console.log('Error fetching data:', err.message)
      }
    }
    
    
      getData();  
      
    },[])
    // no cards founds
    // if (!vocab ||vocab.length === 0){
    //     console.log("Looking for vocab, but none found")
    //     return ( <p>No vocab found. Have you played the game yet? <br/> 
    //     <a href="/room/69cae83de20491b659e2d66f" >Kotoba Finder</a></p>)
    //   }

    //the buttons to increment and decrement the index of the vocab array, with wrap around
    function decrement(){

      index>0? setIndex(index-1):setIndex(vocab.length -1)
      
    }
    function increment(){

      index+1 == vocab.length ? setIndex(0):setIndex(index+1)

    }


  
  return(
    <div>
      <h1>Vocab Deck</h1>
      <div className="studySpace" style={{border:"2px solid blue",
                                          minWidth:"80%"}}>
        <div className="cardArea" style={{boder:"2px solid green",
                                          }}>
        </div>
        <div className="controlArea">
          <div className="infoTop" style={{border:"2px solid yellow",
                                          display:"flex",
                                          flexDirection:"column",
                                          alignItems:"center"}}>
          
            <div className="card" style={{border:"2px solid red",
                                          borderRadius:"10px",
                                          backgroundColor:"tan",
                                          width:"400px",
                                          height:"200px",
                                          display:"flex",
                                          flexDirection:"column",
                                          alignItems:"center"}}>

              {vocab.length === 0 ? (<p>No vocab found! Have you played the game yet? <br/> 
                                      <a href="/room/69cae83de20491b659e2d66f"><b>Kotoba Finder</b>🔍</a></p>) :
              (vocab.slice(index,index+1).map((word)=>{
                const { item } = word  
                return <div key={word._id} style={{border:"2px solid lightBlue",
                                                  }}>
                          <p>{item.item_eng}</p>
                          <img src={item.item_image} style={{maxWidth:"30%"}}/>
                          <p>description</p>
                        </div>}))
              }

            </div>
          </div>

          <div className="button" style={{ display:"flex",
                                            flexDirection:"row",
                                            justifyContent:"space-around"}}>
            <button onClick={decrement}>Shuffle Left</button>
            {/* <button> Flip Card </button> */}
            <button onClick={increment}>Shuffle Right</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vocab