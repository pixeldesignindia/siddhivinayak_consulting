import React, { useState } from 'react'
import './Footer.css'
import line from '../../../../public/images/line.svg'
import office from '../../../../public/images/Industry.svg'
import bmail from '../../../../public/images/gmail.svg'
import mobile from '../../../../public/images/phone.svg'
import profile from '../../../../public/images/profile.svg'
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { usePathname, useRouter } from 'next/navigation'
import ye from '../../../../public/images/ye.svg'
import yp from '../../../../public/images/yp.svg'


export default function Footer() {
    const [state, handleSubmit] = useForm("mvoeppnz");
    const [messageType, setMessageType] = useState('general');
    const pathname = usePathname()
    const handleMessageTypeChange = (event) => {
        setMessageType(event.target.value);
    };
    const handleCall = () => {
        window.location.href = 'tel:+918655811111'; 
      };
      const handleEmail = () => {
        window.location.href = 'mailto:d@dconsult.in'; 
      };
    return (
        <>
        <div className="question center">
            <h3 className="heading res-h">Have more questions? Reach out to us at</h3>
            <div className="c-at"><div onClick={handleCall} style={{cursor:'pointer'}}><Image src={yp} alt='img'height={22} width={22}/> <p>+91 - 8655811111</p> </div>
            <div onClick={handleEmail} style={{cursor:'pointer'}}><Image src={ye} alt='img' height={22} width={22}/> <p>d@dconsult.in</p> </div></div>
            <p className='bp'>Time : 10:00 AM to 6:00 PM</p>
        </div>
            <div className={`call-back ${(pathname === '/privateEqity/' || pathname === '/contact/' || pathname === '/demateAccount/' || pathname === '/dubaiProperty/' || pathname === '/billDiscounting/') ? 'm-b-4' : ''}`} >
                <div className='call-back-in'>
                    <div className="call-top">
                        <h3 className='heading'>REQUEST CALL BACK</h3>
                        <Image src={line} alt='line' />
                        <p>Would you like to speak to one of our financial advisers over the phone? Just submit your details and we'll be in touch shortly. You can also email us if you would prefer.</p>
                    </div>
                    <div className="form-bot">
                        <form className='row input-section' method='POST' action='https://formspree.io/f/mvoeppnz'>
                            <div class="input-fcontainer col-6">
                                <Image src={profile} alt='image' className='wIcon' />
                                <input type="text" placeholder='Name' name='userName' autoComplete='off' required />
                            </div>
                            <div class="input-fcontainer col-6">
                                <Image src={bmail} alt='image' className='wIcon' />
                                <input type="email" placeholder='Email' name='userEmail' autoComplete='off' required />
                            </div>
                            <div class="input-fcontainer col-6" >
                                <Image src={mobile} alt='image' className='wIcon' />
                                <input type="number" placeholder='Phone No' name='phoneNumber' autoComplete='off' required />
                            </div>
                            <div class="input-fcontainer col-6" >
                                <Image src={office} alt='image' className='wIcon' height={25} />
                                <select
                                    id="messageType"
                                    name="messageType"
                                    value={messageType}
                                    onChange={handleMessageTypeChange}
                                >
                                    <option value="general">General Inquiry</option>
                                    <option value="PrivateEquity">Private Equity</option>
                                    <option value="DematAccount">Demat Account</option>
                                    <option value="LuxuryProperty">Luxury Property</option>
                                    <option value="BusinessInsurence">Business Insurence</option>
                                </select>
                            </div>
                            <textarea id="message" rows="6" name="message" placeholder='Message' required />
                            <ValidationError prefix="Message" field="message" errors={state.errors} className='txt-contact' />
                            <input type="submit" value='SUBMIT' className='submit-btn pro-submit-btn' style={{ marginTop: '3rem' }} />
                        </form>
                    </div>
                </div>
                <div className='footer'>
                    <div >
                        <div className='footer-container'>
                            <div className="row footer-row" >
                                <div className='col-6'>
                                    <p>@ Coyright 2023. All rights reserved.</p>
                                </div>
                                <div className="col-6 develop-by" >
                                    <p>Website Design & Developed By <a target='_blank' href="https://pixeldesignindia.com/">Pixel Design India</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
