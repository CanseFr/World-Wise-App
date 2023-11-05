import Sidebar from "../../component/side-bar/Sidebar.jsx";
import style from "./AppLayout.module.css"
import Map from "../../component/map/Map.jsx";
import User from "../../component/user/User.jsx";

export default function AppLayout(){
    return(
        <div className={style.app}>
            <Sidebar/>
            <Map/>
            <User/>
        </div>
)
}