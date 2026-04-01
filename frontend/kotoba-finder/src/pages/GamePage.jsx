import livingroomIcon from '../assets/livingroom/livingroom.svg';
import coffeeTableIcon from '../assets/livingroom/coffee_table.svg';
import characterIcon from '../assets/characters/Velma.svg'

function GamePage() {
  return (
    <div>
        <h2>Game Page</h2>
      <div className="gameArea" style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px"}}>
        <div className="character">
          <img src={characterIcon} style={{maxWidth:"30%"}} />
        </div>
        <div className="gamePlay" style={{ border:"2px solid black", 
                                          borderRadius: "10px", 
                                          backgroundColor:"rgba(128, 128, 128, 0.75)",
                                          maxWidth: "60%" }}>
            <h2>Living Room</h2>

          <div className="roomInfo" style={{ border: "2px solid orange", display: "flex", justifyContent: "space-around" }} >

              <div className="roomRender" style={{ border: "2px solid white"}} >
                <p>identify the items in the room and add them to your checklist</p>
                <img src={livingroomIcon} alt="Isometric view of a cute and cozy living room" />
              </div>

              <div className="items" style={{ border: "2px solid red"}}>
                <p>Item Check List:</p>
                <ul>
                  <li style={{}}>
                  <input type="checkbox" id="task1" name="task1" value="task1" />
                  <label for="task1"> Task 1</label><br/></li>
                </ul>
              </div>
          </div>
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