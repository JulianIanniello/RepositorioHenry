import SearchBar from "../SearchBar/SearchBar"
import {Link} from "react-router-dom"

const Nav = (props) => {
    const {onSearch} = props;

  return (
    <div>
      <Link to={"/Home"}>Home</Link>
      <Link to={"/About"}>About</Link>

        <SearchBar onSearch={onSearch}/>
    </div>
  )
}

export default Nav