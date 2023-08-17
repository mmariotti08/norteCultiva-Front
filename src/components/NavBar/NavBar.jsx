import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar =()=>{
    return(
        <div className={style.navBar}>
            <div>
                <Link to='/home'>
                    <span className={style.namePage}>EL NORTE CULTIVA</span>
                </Link>
                <Link to="/">
                    <button> Landing </button>
                </Link>
            </div>

        </div>
    )
};
export default NavBar