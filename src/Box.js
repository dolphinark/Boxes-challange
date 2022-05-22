import boxes from "./boxes";

function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  return (
    <div 
    className="box" 
    style={styles} 
    onClick={()=>props.toggle(props.id)}
    // onClick={props.toggle}
   >
    </div>
  );
}

export default Box;
