import React from 'react'
import './Footer.css'
import line from '../../../../public/images/line.svg'
import office from '../../../../public/images/boffice.svg'
import bmail from '../../../../public/images/bmail.svg'
import mobile from '../../../../public/images/bphone.svg'
import profile from '../../../../public/images/bpro.svg'
import Image from 'next/image';
export default function Footer() {
    return (
        <>
        <div className='call-back'>
            <div className='call-back-in'>
            <div className="call-top">
            <h3 className='heading'>REQUEST CALL BACK</h3>
            <Image src={line} alt='line'/>
            <p>Would you like to speak to one of our financial advisers over the phone? Just submit your details and we'll be in touch shortly. You can also email us if you would prefer.</p>
        </div>
        <div className="form-bot">
        <form className='row input-section' method='POST' action='https://formspree.io/f/mvoeppnz'>
                                    <div class="input-fcontainer col-6">
                                        <Image src={profile} alt='image' className='wIcon'/>
                                        <input type="text" placeholder='Name' name='userName' autoComplete='off' required/>
                                    </div>
                                    <div class="input-fcontainer col-6">
                                        <Image src={bmail} alt='image' className='wIcon'/>
                                        <input type="email" placeholder='Email' name='userEmail' autoComplete='off' required/>
                                    </div>
                                    <div class="input-fcontainer col-6" >
                                        <Image src={mobile} alt='image' className='wIcon'/>
                                        <input type="number" placeholder='Phone No' name='phoneNumber' autoComplete='off' required  />
                                    </div>
                                    <div class="input-fcontainer col-6" >
                                        <Image src={office} alt='image' className='wIcon'/>
                                        <input type="text" placeholder='Message' name='message' autoComplete='off' required />
                                    </div>
                                    <input type="submit" value='SUBMIT' className='submit-btn pro-submit-btn' style={{marginTop:'3rem'}}/>
                                    
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
