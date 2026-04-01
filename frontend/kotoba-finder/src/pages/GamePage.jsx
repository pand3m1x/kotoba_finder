import livingroomIcon from '../assets/livingroom/livingroom.svg';
import coffeeTableIcon from '../assets/livingroom/coffee_table.svg';
import characterIcon from '../assets/characters/Velma.svg'

function GamePage() {

//create hook for wrong answers

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
            <p>Hint/Conversation Box Here</p>
          </div>
          <img src={characterIcon} style={{maxWidth:"45%"}} />
          <h4>Velma</h4>
        </div>

        {/* Actual game renders here with room, location name, checklist, item icons */}

        <div className="gamePlay" style={{ border:"2px solid black", 
                                          borderRadius: "10px", 
                                          backgroundColor:"rgba(128, 128, 128, 0.75)",
                                          maxWidth: "65%" }}>
            <h2>Living Room</h2>

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
                  <li style={{listStyle:"none", marginLeft:"-35px"}}>
                  <input type="checkbox" id="task1" name="task1" value="task1" />
                  <label for="task1"> Task 1</label><br/></li>
                </ul>
              </div>
          </div>

          {/* items populate, one correct item */}
          <div className="roomItems" style={{ border: "2px solid green", display: "flex", justifyContent: "space-around" }} >
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