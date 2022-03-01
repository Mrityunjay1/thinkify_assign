import React from 'react'
import Avatar from 'react-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  removeFavourite } from '../../features/favouriteSlice'

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
            <div>
                <p>
                    No Emails In your Favourites
                </p>
            <div>
                <Link to='/'>
                    <p>Start adding to Favourites</p>
                </Link>
            </div>
            </div>
        ):(
            favourites.posts.map(mail => {
                return (
                    <div className='mail_container' key={mail.id}>
                    <div>
                        <Avatar name={mail.from.name} size={50} round={true} />
                    </div>
                    <Link to={`/mail/${mail.id}`}>
                    <div className='mail_all'>
                        <div className='mail_from'>From: <span className='mail_from_span'>{mail.from.name}{mail.from.email}</span></div>
                        <div className='mail_subject'>Subject: {mail.subject}</div>
                        <div className='mail_body'>{mail.short_description}</div>
                        <div className='mail_date'>{mail.date}</div>
                    </div>
                    </Link>
                    <p onClick={()=>handleRemoveFavourite(mail)}>Remove</p>
                </div>
                )
            })
        )}
    </div>
  )
}

export default Favourites