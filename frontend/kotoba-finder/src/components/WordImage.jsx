
// for the random image item finder render

function WordImage({ handleItemClick, item }){

  function clickImage(){handleItemClick(item)}
 
  return(
    <>
     <img                                       onClick={clickImage}
                                                className="clickImage"
                                                src={item?.item_image} 
                                                alt={item.item_eng} 
                                                style={{ 
                                                         maxWidth:"22%",
                                                         margin: "-5px",
                                                         cursor: "pointer" }} />
    </>
  );
}
export default WordImage

// add shadow and circle border