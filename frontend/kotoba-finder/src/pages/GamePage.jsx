
//react
import { useEffect,useState } from 'react'
import { roomAPI, vocabClient } from "../clients/api"
import { useParams } from 'react-router-dom'

// components
import WordImage from '../components/WordImage' // fixed lol

// contexts
import { useUser } from '../context/UserContext'

// imagery
import characterIcon from '../assets/characters/Velma.svg'

// let currentItemIndex = 0

function GamePage() {
  
  const [ currentItemIndex, setCurrentItemIndex] = useState(0)
  const { id } = useParams();
  
  //setting room and items for gamepage
  const [room,setRoom] = useState(null)
  const [items,setItems] = useState([])
  
  // game play dynamics of target items and finding target items
  const [ targetItem,setTargetItem ] =useState(null) // Character says
  const [ foundItems,setFoundItems ] = useState([]) // player successfully found
  
  // player makes choice from array of images
  const [playerChoices, setPlayerChoices] = useState([])
  
  // for player (user/guest) to update tracked vocab
  const [ knownVocab, setKnownVocab ] = useState([])

  //user context 
  const { user,setUser } = useUser()

  // bring in client to populate stuff 
  useEffect(()=>{
    async function getData() {
     
    try {
      console.log("fetching data", id)
      const roomData = await roomAPI.getRoom(id);
      const itemData = await roomAPI.getItems(id);

      setRoom(roomData)
      setItems(itemData)
    } catch(err) {
      
      console.log('Error fetching data:', err.message)
    }
  }
  
  if (id) {
    getData();  
  }
},[id])



// to randomize images/array
function shuffleImages(array){
  // we don't want to do what I accidently did with splice and affect the original data, so make a copy - right?
  const newArray = [...array]

  //shuffle with fisher yate method
  for (let i = newArray.length - 1; i > 0; i--) { 
  const j = Math.floor(Math.random() * (i + 1)); 

  //so j is just like i, but we call it j so we don't confuse i with j lol
  [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; 

  console.log("shuffled", newArray); 
}
return newArray; 

}

// for the image player choice population
  useEffect(()=>{
    if( !targetItem || items.length < 3 ) return

    //set wrong items
    const wrongItems = items.filter(
      (item)=> item._id !== targetItem._id )

    //correct answer item with wrong items
    const randomWrongItems = shuffleImages(wrongItems).slice(0,2)

    const mixedPlayerChoices = shuffleImages([
      targetItem,
      ...randomWrongItems
    ])

    setPlayerChoices(mixedPlayerChoices) 
  }, [ targetItem, items ])


  // ## the event listener for the image clicked ## 
  async function handleItemClick(item){
      console.log("Clicked me!", item) // this is where we check out conditional anything to do with checking if correct image/word, check box is checked, and useState for render is changed

       // if no item
      if(!targetItem) {
        console.log("no target item")
        return alert("Slow your horses! xD ")
        
      } 

      //if target found
      if (item._id === targetItem._id) {
        console.log("that is the target item!",targetItem.item_eng)
        
        //this is where found items live, saving progress of session
        setFoundItems((prev) => [...prev, item._id])
        
        //from previous sessions, found items
        setKnownVocab((prev) => {
          if (prev.includes(item.item_eng)) 
            return prev
          return [...prev, item.item_eng]
        })

        // backend API call to push vocab
        if(user) {
          try{
            const { data } = await vocabClient.post('/',
              { userId: user._id,
                itemId: item._id
              })

              console.log(user)
              setUser(data)

          } catch(err) { 

            console.log("error saving vocab:", err.message)

          }
        }


        setCurrentItemIndex((prev) => prev + 1)

        return alert("Good Job!")


      } else {
        
        //dang, answer no good
        console.log("not correct:", `${item.item_eng} is not ${targetItem.item_eng}`)
        return alert("try again!")

      }
    }
    

  //character tells player what item to find: (currently set to start of array)
  useEffect(()=>{

    if (items.length > 0){
    setTargetItem(items[currentItemIndex])
      // return;
      }

  }, [ items, currentItemIndex ])
  

  // load saved
  useEffect(() => {

    const storedVocab = localStorage.getItem("knownVocab")
    if (storedVocab) {
      setKnownVocab(JSON.parse(storedVocab))
    }
    console.log("last game we:", storedVocab)
  }, [])

  // save to
  useEffect(() => {
    localStorage.setItem("knownVocab", JSON.stringify(knownVocab))
    console.log("Hey we learned that:",knownVocab)
  }, [knownVocab])



  console.log(currentItemIndex)

  return (
    <div>
        {/* Whole game play area(character room render vocab images) */}
      <div className="gameArea" style={{display:"flex", 
                                       justifyContent:"center", 
                                       alignItems:"center", 
                                       gap:"20px", 
                                       maxWidth: "80%"}}>

        {/* Character div with hint box, image, name */}
        <div className="character" style={{ backgroundColor:"rgba(196, 155, 200, 0.75)",
                                            boxShadow: "0 4px 10px rgba(149, 64, 128, 0.4)", 
                                            borderRadius:"10px",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            width: "40%"}}>

          <div className="hintBox" style={{border:"2px solid rgba(182, 135, 186, 0.75)",
                                           borderRadius:"10px",
                                           backgroundColor:"rgba(239, 212, 242, 0.75)",
                                           boxShadow: "0 4px 10px rgba(149, 64, 128, 0.4)",
                                           margin:"20px",
                                           padding:"10px"
          }}>
            <p> {targetItem? `Help me find the ${targetItem.item_eng}` : "Hmmmm"}
            </p> {/* Call random items */}
          </div>
          <img src={characterIcon} style={{maxWidth:"45%"}} />
          <h4>Velma</h4>

        </div>

        {/* Actual game renders here with room, location name, checklist, item icons */}

        <div className="gamePlay" style={{ border:"2px solid black", 
                                          borderRadius: "10px", 
                                          backgroundColor:"rgba(128, 128, 128, 0.75)",
                                          boxShadow: "0 4px 10px rgba(149, 64, 128, 0.75)",
                                          maxWidth: "65%",
                                          display: "flex",
                                          flexDirection: "column",
                                          alignItems: "center",
                                          padding:"5px",
                                          margin:"5px"}}>
            <h2>{room?.room_name}</h2>  {/* Call Room*/}

          {/* This is what is connected to the api */}
          <div className="roomInfo" style={{ 
                                            display: "flex", 
  justifyContent: "center",
  gap: "20px"}} >
                  
                  {/* the actual room render */}
              <div className="roomRender" style={{ 
                                                   flex: 2,
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems:"center"}} >
                <p><i>identify the items in the room and add them to your checklist</i></p>
                <img src={room?.room_image} alt="Isometric view of a cute and cozy living room" 
                                            style={{width:"70%",
                                                    maxWidth: "500px" 
                                            }} />
              </div>

                {/* check list for items, populates room items */}
              <div className="items" style={{ border: "2px solid rgba(101, 100, 100, 0.75)",
                                              backgroundColor:"rgba(176, 176, 176, 0.75)",
                                              boxShadow: "0 4px 10px rgba(82, 74, 80, 0.4)",
                                              borderRadius: "10px",
                                              padding:"10px",
                                              maxHeight: "350px",
                                              maxWidth: "250px"
                                          }}>
                <p><b>Item Check List:</b></p> 
                  <ul>
                    {items.map((item)=> <li key={item._id} 
                                            style={{listStyle:"none", 
                                                    marginLeft:"-45px"}}>

                    <input type="checkbox" id={item._id} 
                                         name={item.item_eng} 
                                          checked={foundItems.includes(item._id)} disabled />

                    <label htmlFor={item.item_eng}> 
                                   {item.item_eng}</label><br/></li>)}

                </ul>
              </div>
          </div>

          {/* items populate, one correct item */}
          <div className="roomItems" style={{ 
                                              display: "flex", 
                                              justifyContent: "space-around",
                                              margin:"5px" }} >

          {playerChoices.map((item) => <WordImage key={item._id} 
                                                     item={item} 
                                                     handleItemClick={handleItemClick} /> )}

          </div> 
        </div>
      </div>
    </div> 
  )
}

export default GamePage
