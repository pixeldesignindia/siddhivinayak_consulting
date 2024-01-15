import React,{useState} from 'react'
import office from '../../../../public/images/office.svg'
import gmail from '../../../../public/images/gmail.svg'
import mobile from '../../../../public/images/mobile.svg'
import profile from '../../../../public/images/profile.svg'
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'
const Enquiry = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Modal
                className='contactModal'
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter center" >
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body >

                  <div className=" center">

                    <div className="property-contact-form">
                      <form className='popup' method='POST' action='https://formspree.io/f/xayrnbvv'>
                        <h3 style={{ textAlign: 'center' }}>EXPRESS YOUR INTEREST</h3>
                        <h6 style={{ marginTop: '1.2rem', textAlign: 'center' }}>Please fill the form to know more</h6>
                        <div className="row">
                          <div className='input-contact-property col-6' >
                            <Image src={profile} width={35} height={20} alt='image' />
                            <input type="text" placeholder='Name' name='userName' autoComplete='off' required />
                          </div>
                          <div className='input-contact-property col-6'>
                            <Image src={gmail} width={35} height={16} alt='image' className='mail-height' />
                            <input type="email" placeholder='Email' name='userEmail' autoComplete='off' required />
                          </div>
                          <div className='input-contact-property col-6'>
                            <Image src={mobile} width={35} height={20} alt='image' />
                            <input type="number" placeholder='Phone No' name='phoneNumber' autoComplete='off' required />
                          </div>
                          <div className='input-contact-property col-6'>
                            <Image src={office} width={35} height={20} alt='image' />
                            <input type="text" placeholder='Message' name='message' autoComplete='off' required />
                          </div>
                        </div>
                        <div className='in-btn'><input style={{ marginTop: '1.5rem', }} type="submit" value='SUBMIT' className='submit-btn pro-submit-btn' /></div>

                        {/* <button type='submit' className='submit-btn' >SUBMIT</button> */}
                      </form>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            <div><button className='enquery res-none' onClick={() => { setModalShow(true) }}>Enquiry Now</button></div>
        </div>
    )
}

export default Enquiry
