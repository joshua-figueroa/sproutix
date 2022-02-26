import React from 'react'
import { format } from 'date-fns'
import { Event } from 'model/event'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import "styles/card.scss"

const Card: React.FC<Event> = (props) => {
    const date = new Date(props.date)
    return (
        <div className='event-card'>
            <div className='event-header'>
                <img src={props.image} alt={props.title} />
                <div className='event-price'>{props.price === 0 ? "FREE" : `$${props.price}.00`}</div>
                <div className='event-icon icon-upload'>
                    <FileUploadIcon />
                </div>
                <div className='event-icon icon-heart'>
                    <FavoriteIcon />
                </div>
            </div>
            <div className='event-body d-flex'>
                <div className='event-date d-flex flex-column align-items-center'>
                    <span className='event-month'>{format(date, "MMM")}</span>
                    <span className='event-day'>{format(date, "dd")}</span>
                </div>
                <div className='event-desc d-flex flex-column'>
                    <span className='event-title'>{props.title}</span>
                    <span className='event-location'>{props.location1}</span>
                    <span className='event-location'>{props.location2}</span>
                </div>
            </div>
        </div>
    )
}

export default Card