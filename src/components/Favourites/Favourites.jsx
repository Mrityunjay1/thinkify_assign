import React from 'react'
import Avatar from 'react-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  removeFavourite } from '../../features/favouriteSlice'
import './Favourites.css'

const Favourites = () => {
    const favourites = useSelector(state => state.favourite)
    const dispatch = useDispatch()

    const handleRemoveFavourite=(mail)=>{
        dispatch(removeFavourite(mail)) 
    }
  return (
    <div className='favourites_contaner'>
        <h2>Favourites</h2>
        {favourites.posts.length === 0 ? (
            <div className='favourites_nothing'>
            <div>
                <p>
                    No Emails In your Favourites
                </p>
            <div>
                <Link to='/'>
                    <p className='start_adding'>
                    <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-3.png" alt='arrow'/>
                    Start adding to Favourites</p>
                </Link>
            </div>
            </div>
            </div>
        ):(
            favourites.posts.map(mail => {
                return (
                    <div className='mail_container' key={mail.id}>
                    <div>
                        <Avatar name={mail.from.name} size={50} round={true} />
                    </div>
                    
                    <div className='mail_all'>
                    <Link to={`/mail/${mail.id}`}>
                        <div className='mail_from'>From: <span className='mail_from_span'>{mail.from.name}{mail.from.email}</span></div>
                        <div className='mail_subject'>Subject: {mail.subject}</div>
                        <div className='mail_body'>{mail.short_description}</div>
                    </Link>
                        <div className='mail_date'>{mail.date}
                        <p onClick={()=>handleRemoveFavourite(mail)} className='remove_button'>Remove</p></div>
                       

                    </div>
                    
                    
                </div>
                )
            })
        )}
    </div>
  )
}

export default Favourites