import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className="footer_container">
        <div className='footer_img'>
          <img  src='https://camo.githubusercontent.com/f49b5da57080b6dcc7304181e163262c3a11d0894858c2cc2f677be0fdb952ea/68747470733a2f2f6668736b6e696768746c6966652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032302f30342f755641535871764d7a795572415066536e39704d74784f4337733839756c7a64444b4264747143502e706e67' alt="icon" />
          <p className='clone'>CLONE</p>
        </div>
        <p className='copyright'>copyright by AJZ</p>
    </div>
    </>
  )
}

export default Footer