import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../features/postApi";
import AllMails from "../AllMails/AllMails";
import "./Mails.css";

const Mails = () => {
  var [date, setDate] = useState(new Date());
  const { id } = useParams();
  const { data: list, isLoading, error } = useGetPostByIdQuery(id);
  console.log(list);

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="mails_container">
      <div className="mails_allMails_container">
        <AllMails />
      </div>
      <div className="mails_main_container">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An Error Occured{error.data}</p>
        ) : (
          <div className="mail_container" key={list.id}>
            <Avatar name={list.id} size={50} round={true} />
            
            <div className="mail_all">
            <div>
              <p> Time : <span style={{fontWeight:'bold',fontSize:'20'}}>{date.toLocaleTimeString()}</span></p>
              <p> Date : <span style={{fontWeight:'bold',fontSize:'20'}}>{date.toLocaleDateString()}</span></p>
            </div>
              <div className="mail_from">{list.body}</div>
              {/* <div className='mail_subject'>Subject: {data.list.subject}</div>
                        <div className='mail_body'>{data.short_description}</div>
                        <div className='mail_date'>{data.date}</div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mails;
