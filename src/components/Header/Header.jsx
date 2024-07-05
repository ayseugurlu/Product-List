import "./Header.scss"
import "../scss/_variables.scss"


const Header = (props) => {

  return (
    <div className="container" >
    {props.categories.map((category,index)=> {
        return (<button key={index}>{category}</button>)
    })
        
    }
        
    </div>
  )
}

export default Header