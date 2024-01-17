'use client'
import Footer from '../components/footer/Footer';
import './thankYou.css'
import Image from 'next/image';
import logo from '../../../public/images/blogo.svg'
import tick from '../../../public/images/tick.svg'
import { useRouter } from 'next/navigation';
function page() {
const router =useRouter()

    return (
        <div className='thank-you bg'>
            <div className="center"><Image src={logo} alt='logo'width={400} height={80} className='t-i-p'/></div>
<div className='tahnkYou_inner '>
<Image src={tick} alt='logo'width={200} height={200}/>
<h2>Thank You</h2>
<p>Our customer care representative will get in touch with you shortly.</p>
<button className='button' onClick={()=>{router.push('/')}}>Go To Home</button>
</div>
        </div>
    );
}


export default page;