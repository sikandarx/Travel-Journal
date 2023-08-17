import '../App.css'
import globe_icon from '../assets/globe.png'
export default function Navbar(){
    return(
        <div className='navbar'>
            <div className='d-flex nav'>
            <img src={globe_icon} alt />
            <div className='nav-text'>my travel journal.</div>
            </div>
        </div>
    )
}