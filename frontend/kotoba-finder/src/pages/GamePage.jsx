
import characterIcon from '../assets/characters/Velma.svg'

import { useEffect,useState } from 'react'
import { roomAPI } from "../clients/api"
import { useParams } from 'react-router-dom'
import WordImage from '../components/wordImage' // just hating for some reason

// let currentItemIndex = 0

function GamePage() {
  
  const [ currentItemIndex, setCurrentItemIndex] = useState(0)
  const { id } = useParams();
  //https://reactrouter.com/api/hooks/useParams
  
  //setting room and items for gamepage
  const [room,setRoom] = useState(null)
  const [items,setItems] = useState([])
  
  // game play dynamics of target items and finding target items
  const [ targetItem,setTargetItem ] =useState(null) // Character says
  const [ foundItems,setFoundItems ] = useState([]) // player successfully found
  
  // player makes choice from array of images
  const [playerChoices, setPlayerChoices] = useState([])

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

// for targeting the images (and make them rotate but always display the target Item)
// https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript
// https://coureywong.medium.com/how-to-shuffle-an-array-of-items-in-javascript-39b9efe4b567

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

  // the event listener for the image clicked
  function handleItemClick(item){
      console.log("Clicked me!", item) // this is where we check out conditional anything to do with checking if correct image/word, check box is checked, and useState for render is changed

       // if no item
      if(!targetItem) {
        console.log("no target item")
        return alert("Slow your horses! xD ")
        
      } 

      //if target found
      if (item._id === targetItem._id) {
        console.log("that is the target item!",targetItem.item_eng)
        
        //this is where found items live (making an array of found items :) )
        setFoundItems((prev) => [...prev, item._id])
        
        setKnownVocab((prev) => {
          if (prev.includes(item.item_eng)) 
            return prev
          return [...prev, item.item_eng]
        })
        // const nextItemIndex = currentItemIndex+1
        setCurrentItemIndex((prev) => prev + 1)
        // currentItemIndex++
        // setTargetItem(items[nextItemIndex])
        return alert("Good Job!")


      } else {
        
        //dang, answer no good
        console.log("not correct:", `${item.item_eng} is not ${targetItem.item_eng}`)
        return alert("try again!")

      }
    }
    
  // function determineTargetItem(){

  // }
  //character tells player what item to find: (currently set to start of array)
  useEffect(()=>{

    if (items.length > 0){
    setTargetItem(items[currentItemIndex])
      // return;
      }

  }, [ items, currentItemIndex ])
  


  

  // useState for saved/known vocab to update for login, pull from DB once at start of game
  // everyone is using using State Variables to "store" information locally instead of local storage
  // state Variable for non-signed in users would push to local storage
  // look new note/notes app jades code look at how we rerendered notes instead of constant pulls from database

  //persisting storage
  //https://medium.com/@roman_j/mastering-state-persistence-with-local-storage-in-react-a-complete-guide-1cf3f56ab15c
  // https://blog.logrocket.com/using-localstorage-react-hooks/
  
  const [ knownVocab, setKnownVocab ] = useState([])

  // load saved
  useEffect(() => {

    const storedVocab = localStorage.getItem("knownVocab")
    if (storedVocab) {
      setKnownVocab(JSON.parse(storedVocab))
    }
    console.log("last game:", storedVocab)
  }, [])

  // save to
  useEffect(() => {
    localStorage.setItem("knownVocab", JSON.stringify(knownVocab))
    console.log("Hey remember:",knownVocab)
  }, [knownVocab])

  // JSON.parse(localStorage.getItem("vocab")).includes(item.item_eng) ? item.item_eng : "???"

  console.log(currentItemIndex)
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
                                                   minWidth: "70%",
                                                   display: "flex",
                                                   flexDirection: "column",
                                                   alignItems:"center" }} >
                <p>identify the items in the room and add them to your checklist</p>
                <img src={room?.room_image} alt="Isometric view of a cute and cozy living room" 
                                            style={{width:"70%"}} />
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
                                          checked={foundItems.includes(item._id)} disabled />

                    <label htmlFor={item.item_eng}> 
                                   {item.item_eng}</label><br/></li>)}

                </ul>
              </div>
          </div>

          {/* items populate, one correct item */}
          <div className="roomItems" style={{ border: "2px solid green", 
                                              display: "flex", 
                                              justifyContent: "space-around" }} >

          {playerChoices.map((item) => <WordImage key={item._id} 
                                                     item={item} 
                                                     onClick={()=>handleItemClick(item)} /> )}

          </div> 
        </div>
      </div>
    </div> 
  )
}

export default GamePage

// {items.splice(2,2).map((item) => <img src={item?.item_image} alt="Coffee table" style={{ maxWidth:"25%"}}/>)}
//Nesting API information:

//https://www.moesif.com/blog/technical/api-design/REST-API-Design-Best-Practices-for-Sub-and-Nested-Resources/
//https://stackoverflow.com/questions/20951419/what-are-best-practices-for-rest-nested-resources
//https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/


// For conditional rendering:

//https://react.dev/learn/conditional-rendering

// when to use parenthesis()
 //https://javascript.plainenglish.io/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f 



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

                {/* <img src={coffeeTableIcon} alt="Coffee table" style={{ maxWidth:"25%"}}/>
            <img src={coffeeTableIcon} alt="Coffee table" style={{ maxWidth:"25%"}}/>
            <img src={coffeeTableIcon} alt="Coffee table" style={{ maxWidth:"25%"}}/> */}