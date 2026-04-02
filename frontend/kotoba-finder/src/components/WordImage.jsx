
// for the random image item finder render

function WordImage({ onClick, item }){

  function clickImage(){onClick(item._id)}
 
  return(
    <>
     <img onClick={clickImage}
                                                
                                                src={item?.item_image} 
                                                alt={item.item_eng} 
                                                style={{ maxWidth:"25%",
                                                         margin: "-5px" }} />
    </>
  );
}
export default WordImage