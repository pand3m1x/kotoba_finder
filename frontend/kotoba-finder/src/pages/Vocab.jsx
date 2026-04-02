import {useState,useEffect} from 'react'
import { vocabClient } from '../clients/api'

function Vocab() {

  const [vocab,setVocab] = useState([])
  const [index,setIndex] = useState(0)

  useEffect(()=>{
     async function getData() {
       
      try {
      const { data } = await vocabClient.get('/69cbe3abb03793bb77a07ea1') // /:id
      console.log(data)
      
      setVocab(data)

      } catch(err) {
  
        console.log('Error fetching data:', err.message)
      }
    }
    
  
    
      getData();  
      
    },[])

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
          <p>Cards with vocab be here</p>

        </div>
        <div className="controlArea">
          <div className="infoTop" style={{border:"2px solid yellow",
                                          display:"flex",
                                          flexDirection:"column",
                                          alignItems:"center"}}>
          
            <div className="card" style={{border:"2px solid red",
                                          backgroundColor:"tan",
                                          maxWidth:"400px"}}>

              {vocab.slice(index,index+1).map((word)=>{
              const { item } = word  
              return <div key={word._id} style={{border:"2px solid lightBlue",
                                                          display:"flex",
                                                          flexDirection:"column",
                                                          alignItems:"center"}}>
              <p>{item.item_eng}</p>
              <img src={item.item_image} style={{maxWidth:"30%"}}/>
              <p>description</p>
              </div>})}

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