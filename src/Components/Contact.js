import React, { useState } from 'react';

const Contact = ({ data }) => {

   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');


   const scriptURL = 'https://script.google.com/macros/s/AKfycbxyP-ij5JYyis0trB3Ikn9ZA9JesXBYmRE85BZDNW0Pv7kZh6uj/exec'

   const form = document.forms['google-sheet']
   const onSumbit = (e) => {
      e.preventDefault()

      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
         .then(response => alert("Submitted Successfully..!"))
         .catch(error => console.error('Error!', error.message))
      setName("")
      setMessage("")
      setEmail("")
      setSubject("")
   }



   return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

               {/* <p className="lead">{data?.message}</p> */}

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form id="contactForm" method="post" autocomplete="off" name="google-sheet" onSubmit={onSumbit} netlify>
                  <fieldset>

                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input value={name} type="text" defaultValue="" size="35" id="contactName" name="Name" onChange={e => setName(e.target.value)} required />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input value={email} type="email" defaultValue="" size="35" id="contactEmail" name="Email" onChange={e => setEmail(e.target.value)} required />
                     </div>

                     <div>
                        <label htmlFor="contactPhone">Phone <span className="required">*</span></label>
                        <input value={subject} type="number" defaultValue="" size="35" id="contactPhone" name="Phone" onChange={e => setSubject(e.target.value)} required />
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15" id="contactMessage" name="Message" required ></textarea>
                     </div>

                     <div>
                        <button type='submit' name="Submit" className="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>

               <div id="message-warning"> Error boy</div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
               </div>
            </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>Address and Phone</h4>
                  <p className="address">
                     {data?.name}<br />
                     {data?.address.street} <br />
                     {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
                     <span>{data?.phone}</span>
                  </p>
               </div>

               <div className="widget widget_tweets">

               </div>
            </aside>
         </div>
      </section>
   );
}

export default Contact;
