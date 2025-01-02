import React, { useState } from "react";

function Contact() {
  const [name, setname] = useState(" ");
  const [email, setemail] = useState(" ");
  const [phone, setphone] = useState(" ");
  const [message, setmessage] = useState(" ");

  const handlesendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <section className="contact">
      <div className="container">
        <div className="banner">
          <form onSubmit={handlesendMessage}>
            <h2>CONTACT US</h2>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Your name"
                onChange={(e) => setname(e.target.value)}
              />

              <input
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setemail(e.target.value)}
              />

              <input
                type="number"
                value={phone}
                placeholder="Phone number"
                onChange={(e) => setphone(e.target.value)}
              />
              <textarea
                rows="10"
                value={message}
                placeholder="Message"
                onChange={(e) => setmessage(e.target.value)}
              />
            </div>
            <button className="btn" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
