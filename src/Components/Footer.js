import React from 'react'

const Footer = () => {
  return (
    <div className='d-flex mb-0 mt-3 p-5 flex-column align-items-center justify-content-center' style={{background:'#F4F6F9'}}>
        <img className='pb-4' width='200px' src="https://www.adroll.com/assets/svg/logo-nextroll.svg" alt="" />
        <div className='d-flex' >
            <img width='120px' className='px-2' src="https://www.adroll.com/assets/svg/logo-adroll.svg" alt="" />
            <img width='150px'className='px-2' src="https://www.adroll.com/assets/svg/logo-rollworks.svg" alt="" />
        </div>

        <div className=' w-100 pt-3 d-flex flex-wrap justify-content-center  px-2'>
            <a href="" className='fanchor' style={{fontSize:'10px'}}>Careers</a>
            <a href="" className='fanchor' style={{fontSize:'10px'}}>Trust Center</a>
            <a href="" className='fanchor' style={{fontSize:'10px'}}>Terms of Service</a>
            <a href="" className='fanchor' style={{fontSize:'10px'}}>Website Terms of Use </a>
            <a href="" className='fanchor' style={{fontSize:'10px'}}>Privacy Notice</a>
            <a href="" className='fanchor' style={{fontSize:'10px'}}>Infrignment Policy</a>
            <a href="" className='fanchor' style={{fontSize:'10px'}}>Ad Opt Out</a>
            <a href="" className='fanchor' style={{fontSize:'10px'}}>CCPA Notice at Collection</a>
            <a href="" className='fanchor' style={{fontSize:'10px'}}>AdChoices</a>
            <a href="" className='fanchor' style={{fontSize:'10px'}}>Your Privacy Choices</a>

        </div>
        <button className='my-3 p-2 rounded-2 btn-blue' style={{border:'none'}}>Do Not Sell or Share My Personal Information</button>
    </div>
  )
}

export default Footer