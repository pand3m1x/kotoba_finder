import livingroomIcon from '../assets/livingroom/livingroom.svg';
import coffeeTableIcon from '../assets/livingroom/coffee_table.svg';
import characterIcon from '../assets/characters/Velma.svg'

import { useEffect,useState } from 'react'
import { roomAPI } from "../clients/api"
import { useParams } from 'react-router-dom'

function GamePage() {

  const { id } = useParams();
  //https://reactrouter.com/api/hooks/useParams

  //setting room and items for gamepage
 const [room,setRoom] = useState(null)
 const [items,setItems] = useState([])

 
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

  // game play dynamics of target items and finding target items
  const [ targetItem,setTargetItem ] =useState(null) // Character says
  const [ foundItem,setFoundItem ] = useState(null) // player successfully found

  //character tells player what item to find:
  useEffect(()=>{

    if(!items.length) return;
    setTargetItem(items[0])

  }, [items])
  //create hook for wrong answers
   

  // useState for saved/known vocab to update for login, pull from DB once at start of game
  // everyone is using using State Variables to "store" information locally instead of local storage
  // state Variable for non-signed in users would push to local storage
  // look new note/notes app jades code look at how we rerendered notes instead of constant pulls from database
  const [ knownVocab, setKnownVocab ] = useState(null)

  return (
    <div>
        <h2>Game Page</h2>

        {/* Whole game play area(character room render vocab images) */}
      <div className="gameArea" style={{display:"flex", 
                                       justifyContent:"center", 
                                       alignItems:"center", 
                                       gap:"20px", 
                                       maxWidth: "80%"}}>

        {/* Character div with hint box, image, name */}
        <div className="character" style={{ border:"2px solid lightBlue", 
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            width: "40%"}}>

          <div className="hintBox" style={{border:"2px solid green"}}>
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
                                          maxWidth: "65%",
                                          display: "flex",
                                          flexDirection: "column",
                                          alignItems: "center",
                                          padding:"5px"}}>
            <h2>{room?.room_name}</h2>  {/* Call Room*/}

          {/* This is what is connected to the api */}
          <div className="roomInfo" style={{ border: "2px solid orange", 
                                             display: "flex", 
                                             justifyContent: "space-around"}} >
                  
                  {/* the actual room render */}
              <div className="roomRender" style={{ border: "2px solid white",
                                                   maxWidth: "70%",
                                                   display: "flex",
                                                   flexDirection: "column",
                                                   alignItems:"center" }} >
                <p>identify the items in the room and add them to your checklist</p>
                <img src={livingroomIcon} alt="Isometric view of a cute and cozy living room" style={{width:"70%"}} />
              </div>

                {/* check list for items, populates room items */}
              <div className="items" style={{ border: "2px solid red"}}>
                <p>Item Check List:</p> 
                  <ul>
                    {items.map((item)=> <li key={item._id} 
                                            style={{listStyle:"none", 
                                                    marginLeft:"-35px"}}>

                  <input type="checkbox" id={item._id} 
                                         name={item.item_eng} 
                                         value="task1" />

                  <label htmlFor={item.item_eng}> {item.item_eng}</label><br/></li>)}

                </ul>
              </div>
          </div>

          {/* items populate, one correct item */}
          <div className="roomItems" style={{ border: "2px solid green", 
                                              display: "flex", 
                                              justifyContent: "space-around" }} >
                                                
            <img src={coffeeTableIcon} alt="Coffee table" style={{ maxWidth:"25%"}}/>
            <img src={coffeeTableIcon} alt="Coffee table" style={{ maxWidth:"25%"}}/>
            <img src={coffeeTableIcon} alt="Coffee table" style={{ maxWidth:"25%"}}/>
          </div> 
        </div>
      </div>
    </div> 
  )
}

export default GamePage

//Nesting API information:

//https://www.moesif.com/blog/technical/api-design/REST-API-Design-Best-Practices-for-Sub-and-Nested-Resources/
//https://stackoverflow.com/questions/20951419/what-are-best-practices-for-rest-nested-resources
//https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/


// For conditional rendering:

//https://react.dev/learn/conditional-rendering


// Old Data/Code Graveyard :
    // //  fetch(`${import.meta.env.VITE_BASE_URL}/api/rooms/69cae83de20491b659e2d66f/items`)
    // //  .then(response => response.json())
    // //  .then(data => {
    // //    console.log(data)
    // //    setRoom(data.room)
    // //    setItems(data)
    //     })
    //     .catch(error => console.error('Error fetching items:', error))
    //   // const { data } = await roomClient.get('/69cae83de20491b659e2d66f') // /:id
    //   // const { data } = await roomClient.get('/69cae83de20491b659e2d66f/items')
    //   // console.log(data)
    //   // setRoom(data.room)
    //   // setItems(data)