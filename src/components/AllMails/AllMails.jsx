import React,{useState,useEffect} from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import { useGetAllPostsQuery } from '../../features/postApi'
import './AllMails.css'
import { useDispatch } from 'react-redux'
import { addFavourite } from '../../features/favouriteSlice'

const AllMails = () => {
    const {data,error,isLoading}=useGetAllPostsQuery()
    const [mails,setMails] = useState([])
    const [filter,setFilter] = useState('All')
    const [unread,setUnread] = useState(0)
    const [read,setRead] = useState(0)
    const dispatch =useDispatch();

    // useEffect(() => {
    //     fetch('https://flipkart-email-mock.vercel.app')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.list)
    //         setMails(data.list)
    //         // setUnread(data.filter(mail => mail.read === false).length)
    //         // setRead(data.filter(mail => mail.read === true).length)
    //     })
    // },[])

    const handleAddToFavourite=(mail)=>{
        dispatch(addFavourite(mail)) 
    }

  return (
    <div>
        {isLoading ? <p>Loading...</p> : error ? <p>An Error Occured{error.data}</p>: data?.list.map(mail => {
            return (
                <div className='mail_container'>
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
                    <button onClick={()=>handleAddToFavourite(mail)}>Add to Favourites</button>
                </div>
            )
        })}
    </div>
  )
}

export default AllMails