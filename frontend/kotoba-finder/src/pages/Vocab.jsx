

function Vocab() {

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
          <div clasName="infoTop" style={{border:"2px solid yellow",
                                          display:"flex",
                                          flexDirection:"column",
                                          alignItems:"center"}}>
          <p>Buttons that affect the cards be here</p>
          <div className="card" style={{border:"2px solid red",
                                        backgroundColor:"tan",
                                        maxWidth:"400px"}}>
            <p>item</p>
            <p>picture of item</p>
            <p>description</p>
            </div>
          </div>
          <div className="button">
            <button>Shuffle Left</button>
            <button> Flip Card </button>
            <button>Shuffle Right</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vocab