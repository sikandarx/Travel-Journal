import '../App.css'
import loc_icon from '../assets/loc_icon.svg'
export default function Card(props){
    return (
        <>
        <div className='mcard'>
        {(props.id!=1 && <hr/>)}
            <div className='d-flex'>

                <div><img src={`${props.imageUrl}`} alt='Mount Fuji' className='card-img'/></div>

                 <div className='subcard'>
                    <div className='d-flex maps'>
                         <div className='d-flex icon'>
                             <img src={loc_icon} alt='location icon'/>
                             <div className='card-location'>{props.location}</div>
                         </div>
                         <a href={`${props.googleMapsUrl}`} target='_blank' className='card-link'>view on google maps</a>
                     </div>
                     <div className='card-title'>{props.title}</div>
                     <div className='card-date'>{props.startDate} - {props.endDate}</div>
                     <div className='card-des mt-1'>{props.description}</div>
                 </div>

            </div>
        </div>
        </>
    )
}