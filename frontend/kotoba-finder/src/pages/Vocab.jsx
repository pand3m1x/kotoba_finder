import {useState,useEffect} from 'react'
import { useUser } from '../context/UserContext'
import { vocabClient } from '../clients/api'


function Vocab() {

  const [vocab,setVocab] = useState([])
  const [index,setIndex] = useState(0)

  const { user } = useUser()

  useEffect(()=>{
     async function getData() {
       
      try {
        
        if (!user._id) return
        
        const { data } = await vocabClient.get(`/${user._id}`) // /:id
        console.log(data)
        
        if (data.length === 0){
           console.log("Looking for vocab, but none found")}

      setVocab(data)

      } catch(err) {
  
        console.log('Error fetching data:', err.message)
      }
    }
    
    
      getData();  
      
    },[user])
    
    //the buttons to increment and decrement the index of the vocab array, with wrap around
    function decrement(){

      index>0? setIndex(index-1):setIndex(vocab.length -1)
      
    }
    function increment(){

      index+1 == vocab.length ? setIndex(0):setIndex(index+1)
      // console.log(vocab.length, index)
    }


  
  return(
    <div style={{display:"flex", 
                justifyContent:"center", 
                alignItems:"center",
                flexDirection: "column" 
                }}>

      <h1>Vocab Deck</h1>
      <p><i>練習しましょう！</i></p>
      <div className="studySpace" style={{border:"2px solid black", 
                                          borderRadius: "10px", 
                                          backgroundColor:"rgba(128, 128, 128, 0.75)",
                                          width:"50%",
                                          height:"300px",
                                          margin:"10px"}}>
{/* 
        <div className="cardArea" style={{border:"2px solid green",
                                          }}>
        </div> */}
        <div className="controlArea">
          <div className="infoTop" style={{
                                          display:"flex",
                                          flexDirection:"column",
                                          alignItems:"center",
                                          alignContent:"center"}}>
          
            <div className="card" style={{
                                          borderRadius:"10px",
                                          backgroundColor:"tan",
                                          width:"400px",
                                          height:"40%",
                                          display:"flex",
                                          flexDirection:"column",
                                          alignItems:"center",
                                          marginTop:"5px"
                                          }}>

              {vocab.length === 0 ? (<p>No vocab found! Have you played the game yet? <br/> 
                                      <a href="/room/69cae83de20491b659e2d66f"><b>Kotoba Finder</b>🔍</a></p>) :
              (vocab.slice(index,index+1).map((word)=>{
                const { item } = word  
                return <div style={{display:"flex",
                                    flexDirection:"column",
                                    alignItems:"center",
                                    justifyContent:"center"
                }}
                            key={word._id} >
                          <p>{item.item_eng}</p>
                          <img src={item.item_image} style={{maxWidth:"30%"}}/>
                          <p>description</p>
                        </div>}))
              }

            </div>
          </div>

          <div className="button" style={{ display:"flex",
                                            flexDirection:"row",
                                            justifyContent:"space-around",
                                            margin:"10px"}}>
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

// add shadow and other elements to card deck: 
// boxShadow: "0 4px 10px rgba(82, 74, 80, 0.4)",