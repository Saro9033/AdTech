import React, { useEffect, useState } from 'react'

const Body = () => {
  const textOptions = [
    "marketing newbie",
    "established marketer",
    "e-commerce store owner",
    "one-person marketing team",
    "scrappy new entrepreneur",
    "big business marketing department",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(textOptions[0]);
  const [fadeIn, setFadeIn] = useState(false);

  const updateText = () => {
    setFadeIn(false); // Start the fade-out effect
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % textOptions.length);
      setCurrentText(textOptions[currentIndex]);
      setFadeIn(true); // Start the fade-in effect
    }, 500); // Adjust the delay to match your desired transition duration
  };

  useEffect(() => {
    const interval = setInterval(updateText, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='mbody'>

      <div className='row m-0' style={{ background: '#FFE8E0' }} >
        <div style={window.innerWidth > 990 ? { flexBasis: '50%', alignItems: 'start' } : { alignItems: 'center' }} className="col-lg-6 col-md-12  p-4 d-flex  justify-content-center flex-column">
          <h1 className='mb-3' style={{ textAlign: window.innerWidth < 990 && 'center', color: '#3C4858', fontFamily: 'sans-serif', fontWeight: 'bolder' }}>Smaller budgets need smarter dollars</h1>
          <p className='mb-3' style={{ textAlign: window.innerWidth < 990 && 'center', color: '#3C4858', fontSize: '14px' }}>Create, manage, and analyze your display, Facebook, Instagram, Pinterest, TikTok, and email campaigns from a single platform. AdRoll helps marketers do more with less.</p>

          <div style={window.innerWidth < 990 ? { justifyContent: 'space-around' } : null} className='d-flex w-100'>
            <button style={{ fontSize: 'small' }} className='btn px-3 py-2 rounded-2 btn-purp'>GET STARTED</button>
            <button style={{ fontSize: 'small' }} className='mx-3 btn px-3 py-2 rounded-2 btn-blue'>GET IN TOUCH </button>
          </div>

        </div>
        <div className="d-none d-lg-flex  align-items-center justify-content-center bgimg col-lg-6" >
          <img width='100%' src="https://www.adroll.com/assets/img/homepage/hero-machine.png?format=jpg&auto=webp&width=576&dpr=2" alt="" />
        </div>
      </div>

      <div className='container my-5 px-4 c2'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className="col-lg-6 col-md-12 d-flex flex-column " style={{ color: '#3C4858' }}>
            <h3 style={{ fontWeight: 'bold', lineHeight: '40px' }}>
              AdRoll works for the <br /><span style={{ textDecoration: 'underline' }} className={fadeIn ? 'fade-in' : 'fade-out'}>{currentText} </span> </h3>
            <p>Our industry-first automation builder gives you full control of campaigns across display, social, and email — all from one place.</p>
            <p style={{ color: 'darkpink' }}> Explore automation builder</p>
          </div>
          <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center" >
            <img width={ window.innerWidth > 990 ? '450px' : '250px'}  src="https://www.adroll.com/assets/img/ecommerce-marketing/img-automation_studio.png?format=jpg&auto=webp&width=400" alt="" />
          </div>
        </div>

        <div className='mt-5 d-flex align-items-center justify-content-between flex-wrap'>
          <img className='imge' src="https://www.adroll.com/assets/img/logos/lounge.png?format=png&auto=webp&width=209&dpr=2" alt="" />
          <img className='imge' src="https://www.adroll.com/assets/img/logos/topo-designs.png?format=png&auto=webp&width=209&dpr=2" alt="" />
          <img className='imge' src="https://www.adroll.com/assets/img/logos/peyton-jewelry.png?format=png&auto=webp&width=209&dpr=2" alt="" />
          <img className='imge' src="https://www.adroll.com/assets/img/logos/shady-rays.png?format=png&auto=webp&width=209&dpr=2" alt="" />
          <img className='imge' src="https://www.adroll.com/assets/img/logos/exploading-kittens.png?format=png&auto=webp&width=209&dpr=2" alt="" />
          <img className='imge' src="https://www.adroll.com/assets/img/logos/head-kandy.png?format=png&auto=webp&width=209&dpr=2" alt="" />
        </div>
      </div>

      <div className='row m-0 my-5 px-4' style={{
        background: '#F4F6F9', fontFamily: "'Open Sans', sans-serif",
        justifyContent: window.innerWidth > 990 && 'space-between'
      }}>
        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">

          <img width={ window.innerWidth > 990 ? '450px' : '300px'} src="https://www.adroll.com/assets/img/homepage/customers-find.png?format=png&auto=webp&width=398&dpr=2" alt="" />
        </div>

        <div className="col-lg-6 pt-4 col-md-12">
          <h2 style={{fontSize: window.innerWidth < 990 && '18px' , color: '#3C4858',  fontWeight: '600', fontFamily: "'Work Sans', sans-serif" }}>For 15 years, we've been the leader in helping our customers find their best customers</h2>
          <p className='py-3' style={{ fontSize: window.innerWidth < 990 ? '14px' : '16px' , color: '#3C4858' }}>The AdRoll platform is powered by 15+ years of data from hundreds of thousands of brands and billions of shoppers. Let our expertise find the right customers for your business.</p>
          <p className='plink' style={{ fontSize: window.innerWidth < 990 ? '14px' : '16px', letterSpacing: '2px' }}>Learn more</p>
        </div>
      </div>


      <div className='row m-0  px-4' style={{
        fontFamily: "'Open Sans', sans-serif",
        justifyContent: window.innerWidth > 990 && 'space-between'
      }}>

        <div className="col-lg-6 pt-4 col-md-12">
          <h2 style={{fontSize: window.innerWidth < 990 && '18px', fontWeight: '600', fontFamily: "'Work Sans', sans-serif", color: '#3C4858' }}>Save time and energy by running all your campaigns across millions of websites and mobile apps — from one place</h2>
          <p className='py-3' style={{fontSize: window.innerWidth < 990 ? '14px' : '16px' , color: '#3C4858' }}>When we say one-stop shop, we mean one-stop. Launch, pause, and edit ad campaigns across all the places you want to advertise, plus use that data to see your campaigns holistically and make improvements.</p>
          <p className='plink' style={{  fontSize: window.innerWidth < 990 ? '14px' : '16px' , letterSpacing: '2px' }}>Explore social ads manager</p>
        </div>

        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">

          <img width={ window.innerWidth > 990 ? '450px' : '250px'}  src="https://www.adroll.com/assets/img/homepage/save-time.png?format=png&auto=webp&width=398&dpr=2" alt="" />
        </div>
      </div>

      <div className='row m-0 px-4' style={{
        fontFamily: "'Open Sans', sans-serif",
        justifyContent: window.innerWidth > 990 && 'space-between'
      }}>
        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
          <img width={ window.innerWidth > 990 ? '450px' : '300px'}  src="https://www.adroll.com/assets/img/homepage/correct-choices.png?format=png&auto=webp&width=398&dpr=2" alt="" />
        </div>

        <div className="col-lg-6 pt-4 col-md-12">
          <h2 style={{fontSize: window.innerWidth < 990 && '18px', fontWeight: '600', fontFamily: "'Work Sans', sans-serif",  color: '#3C4858' }}>Our retargeting and brand awareness ads make billions of correct choices every day</h2>
          <p className='py-3' style={{fontSize: window.innerWidth < 990 ? '14px' : '16px' , color: '#3C4858' }}>Our AI does what even the most savvy marketer alone cannot. Our powerful machine learning makes more predictions per second than the NASDAQ to attract the right customers to your site and get them buying again and again.</p>
          <p className='plink'style={{ fontSize: window.innerWidth < 990 ? '14px' : '16px' , letterSpacing: '2px' }}>Explore retargeting ads</p>
          <p className='plink'style={{ fontSize: window.innerWidth < 990 ? '14px' : '16px' , letterSpacing: '2px' }}>Explore brand awareness ads</p>
        </div>
      </div>

      <div className='row m-0  px-4' style={{
        fontFamily: "'Open Sans', sans-serif",
        justifyContent: window.innerWidth > 990 && 'space-between'
      }}>
        <div className="col-lg-6 pt-4 col-md-12">
          <h2 style={{fontSize: window.innerWidth < 990 && '18px', fontWeight: '600', fontFamily: "'Work Sans', sans-serif", color: '#3C4858' }}>Experts to manage your advertising</h2>
          <p className='py-3' style={{ fontSize: window.innerWidth < 990 ? '14px' : '16px' , color: '#3C4858' }}>Want to run effective campaigns but don’t have the bandwidth to manage different platforms? AdRoll managed services can be an extension of your marketing team, providing you with a dedicated platform expert to partner with, helping you and your team achieve your marketing goals and maximize return from your campaigns.</p>
          <p  className='plink'style={{fontSize: window.innerWidth < 990 ? '14px' : '16px' , letterSpacing: '2px' }}>Get the support you deserve</p>
        </div>
        <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
          <img width={ window.innerWidth > 990 ? '450px' : '300px'}  src="https://www.adroll.com/assets/img/homepage/experts.png?format=png&auto=webp&width=398&dpr=2" alt="" />
        </div>
      </div>

      <div className='row m-0 my-5 p-0' style={{
        fontFamily: "'Open Sans', sans-serif",
        justifyContent: window.innerWidth > 990 && 'space-between', border:'15px solid #303273'
      }}>
           <div className="col-lg-6 px-5 pt-2 col-md-12 flex-column d-flex justify-content-center" style={{alignItems:window.innerWidth > 990 ? 'start': 'center' }}>
          <img width={ window.innerWidth > 990 ? '200px' : '150px'}  src="https://www.adroll.com/assets/img/homepage/logo-volcanica.png?format=png&auto=webp&width=150" alt="" />
          <p className='pt-4' style={{ fontSize: window.innerWidth < 990 ? '14px' : '16px' , color: '#3C4858' }}>
            "Since last year, our revenue has increased 191%,<b> our attributed conversions 177%,</b>  and our <b>  engagement 33%.</b>  We’re reaching and converting customers higher in the funnel." </p>
        </div>
        <div className="col-lg-6 p-0 col-md-12 pimg" >
        <p style={{fontSize: window.innerWidth < 990 ? '33px' : '30px' }}><b>AdRoll customers</b> make <br />
        <span style={{fontSize: window.innerWidth < 990 ? '58px' : '72px' }}><b>$165B</b></span><br />
        in sales <b>every year</b></p>
           </div>
      </div>  

            <div className='mt-5 d-flex align-items-center justify-content-center flex-wrap'>
              <img  width={window.innerWidth > 990 ? '150px' : '75px'} src="https://images.g2crowd.com/uploads/report_medal/image/1004323/medal.svg" alt="" />
              <img width={window.innerWidth > 990 ? '150px' : '75px'} src="https://images.g2crowd.com/uploads/report_medal/image/1004325/medal.svg" alt="" />
              <img width={window.innerWidth > 990 ? '150px' : '75px'} src="https://images.g2crowd.com/uploads/report_medal/image/1004342/medal.svg" alt="" />
              <img width={window.innerWidth > 990 ? '150px' : '75px'} src="https://www.g2.com/shared-assets/product-badges/users-love-us.svg" alt="" />
        </div> 

        <div style={{background:'#FFE8E0',fontWeight:'bolder', fontFamily:"Work Sans,sans-serif"}} className='p-5 d-flex flex-column align-items-center justify-content-center '>
          <h2 className='text-center'>
          Increase ROI. Learn from your data. <br /> Maximize sales.
          </h2>
          <div className='py-2 d-flex'>
            <button style={{ fontSize: 'small' }} className='btn p-2  rounded-2 btn-purp'>GET STARTED</button>
            <button style={{ fontSize: 'small' }} className='mx-3 btn p-2  rounded-2 btn-blue'>GET IN TOUCH </button>
          </div>
        </div>
    </div>
  )
}

export default Body