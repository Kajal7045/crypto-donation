import React, { useState } from 'react'

function Donate() {

  const [name , setname] = useState("")
  const [email , setEmail] = useState("")
  const [message ,setmessage] = useState("")
  const [amount ,setAmount] = useState(0)
  const [disableBtn ,setDisablebtn] = useState(false)
  return (
    <section className='donate'>
      <form >
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <label > show your love for poors</label>
          <input type="number"
           value = {amount} onChange={(e)=> setAmount(e.target.value)} 
          placeholder='Enter Donation Amount (USD)'/>
        </div>
        <input type=""   value = {name} onChange={(e)=> setname(e.target.value)} 
          placeholder='Enter Your name'/>

        <input type="email"   value = {email} onChange={(e)=> setEmail(e.target.value)} 
          placeholder='Enter the email'/>
      
        <input type="text"  value = {message} onChange={(e)=> setmessage(e.target.value)} 
          placeholder='Message'/>

          <button type='submit' className='btn' disabled = {disableBtn}> Donate {amount ? `$${amount}`:"$0"} </button>
      </form>
    </section>
  )
}

export default Donate