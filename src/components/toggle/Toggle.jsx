
import { useContext } from "react"
import { ThemeContext } from "../../context"
import "./toggle.css"


const Toggle = () => {
 const theme=useContext(ThemeContext);
    
const handleClick=()=>{
    theme.dispatch({type:"TOGGLE"});
};

    return (
    <div className="t">
      <img src="https://cdn4.vectorstock.com/i/1000x1000/90/08/flat-sun-icon-symbol-vector-24009008.jpg" alt="" className="t-icon" />
    <img src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-moon-icon-png-image_516458.jpg" alt="" className="t-icon" />
    <div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode ? 0:25}}>

    </div>
    </div>
  )
}

export default Toggle
