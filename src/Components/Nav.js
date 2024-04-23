import React, { useState } from 'react'

const Nav = () => {
    const [activeDrop, setActiveDrop] = useState(false)
    const [activeDrop2, setActiveDrop2] = useState(false)
    const [activeDrop3, setActiveDrop3] = useState(false)
    const [activeDrop4, setActiveDrop4] = useState(false)

                 //   <img src="https://www.adroll.com/assets/svg/logo-adroll.svg" width='80' alt="" />

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: 'rgb(255,255,255)', zIndex: '2', padding: window.innerWidth < 990 ? '0 0' : '5px 12px', position:'sticky', top:'0' }} >
            <div className="container-fluid p-1"  >
                <a className="navbar-brand" href="#">
    <h4>AdTech</h4>
                </a>
                <div className="navbar-toggler" style={{ border: 'none' }}>
                    <button className='mx-2 btn p-2 rounded-2 btn-purp'>GET STARTED</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="offcanvas offcanvas-end " style={{ background: '#333333' }} tabIndex="-1" id="offcanvasNavbar" data-bs-scroll="true">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">
                            <img src="https://www.adroll.com/assets/svg/logo-adroll-white.svg" width='80' alt="" /></h5>
                        <button style={{ fontSize: 'large', color: 'white' }} type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body"  >
                        <ul className="navbar-nav"  >


                            {/* dropdown 1 */}


                            <li className="nav-item dropdown" onMouseEnter={() => setActiveDrop(true)} onMouseLeave={() => setActiveDrop(false)}>

                                {window.innerWidth > 990 ? <>   <a
                                    type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" className='nav-link pc' href="#">
                                    Why AddRoll?&nbsp;
                                    {window.innerWidth > 990 && (
                                        activeDrop ? (
                                            <i style={{ fontSize: 'small' }} className="change-icon fa-solid fa-angle-up"></i>
                                        ) : (
                                            <i style={{ fontSize: 'small' }} className="change-icon fa-solid fa-angle-down"></i>
                                        )
                                    )}</a>


                                    <ul style={{ minWidth: '0px', width: '115px', display: activeDrop ? 'block' : 'none' }} className="m-0 py-2 p-0 dropdown-menu shadow"
                                        aria-labelledby="dropdownMenuButton">
                                        <li ><span className="dropdown-item text-center" href="#"><strong>Why Addroll</strong></span></li>
                                        <li ><a className=" dropdown-item" href="#">Managed Services</a></li>
                                        <li ><a className=" dropdown-item" href="#">Case Studies</a></li>
                                    </ul>  </> :
                                    <>
                                        <h6 className='shead'>Why AdRoll?</h6>
                                        <ul className='sbody'>
                                            <li ><a href="#">Managed Services</a></li>
                                            <li ><a href="#">Case Studies</a></li>
                                        </ul> </>
                                }

                            </li>

                            {/* dropdown 2 */}

                            <li className="nav-item dropdown" onMouseEnter={() => setActiveDrop2(true)} onMouseLeave={() => setActiveDrop2(false)} >
                                {window.innerWidth > 990 ? <>  <a style={{ position: 'relative' }}
                                    type="button" id="dropdownMenuButton2" data-mdb-toggle="dropdown" aria-expanded="false" className='nav-link pc' href="#">
                                    Marketing Platform&nbsp;
                                    {window.innerWidth > 990 && (
                                        activeDrop2 ? (
                                            <i style={{ fontSize: 'small', transition: 'transform 1s ease-in' }} className="fa-solid fa-angle-up"></i>
                                        ) : (
                                            <i style={{ fontSize: 'small', transition: 'transform 1s ease-in' }} className="fa-solid fa-angle-down"></i>
                                        )
                                    )}</a>


                                    <ul style={{
                                        minWidth: '0px', width: '100%', position: 'fixed', left: '0',
                                        transformOrigin: 'top center', transform: activeDrop2 ? 'scaleY(1)' : 'scaleY(0)',
                                        transition: 'transform 0.3s ease-in', display: activeDrop2 ? 'block' : 'none'
                                    }} className="m-0  p-0 dropdown-menu shadow " aria-labelledby="dropdownMenuButton2">

                                        <div className='row justify-content-center mx-3 my-5'>

                                            <div className="col-lg-2 mx-3">
                                                <strong>Marketing Platform</strong>
                                                <a href="">Audience & Segmentation</a>
                                                <a href="">Marketing Automation</a>
                                                <a href="">Cutomer Privacy</a>
                                            </div>
                                            <div className="col-lg-2 mx-3 ">
                                                <strong>Campaigns</strong>
                                                <a href="">Retargeting Ads</a>
                                                <a href="">Brand Ads</a>
                                            </div>
                                            <div className="col-lg-2 mx-3">
                                                <strong>Marketing Channels</strong>
                                                <a href="">Display Advertising</a>
                                                <a href="">video Advertising</a>
                                                <a href="">Native Advertising</a>
                                                <a href="">Email Advertising</a>
                                            </div>
                                            <div className="col-lg-2 mx-3">
                                                <strong>Connected Channels</strong>
                                                <a href="">Facebook Advertising</a>
                                                <a href="">Instagram Advertising</a>
                                                <a href="">TikTOk Advertising</a>
                                                <a href="">Google Advertising</a>
                                            </div>
                                            <div className="col-lg-2 mx-3">
                                                <strong>Analytics</strong>
                                                <a href="">Cross-channel Performance</a>
                                                <a href="">Cross-channel Attribution</a>
                                            </div>

                                        </div>
                                        <div className='row '>
                                            <div className='col-lg-12 rbg'> </div>
                                        </div>

                                    </ul>  </> :
                                    <>
                                        <h6 className='shead'>Marketing Platform</h6>
                                        <ul className='sbody'>
                                            <li ><a href="#">Platform Overview</a></li>
                                            <li ><a href="#">Retargeting Ads</a></li>
                                            <li ><a href="#">Brand Awareness</a></li>
                                            <li ><a href="#">Connected Channels</a></li>
                                            <li ><a href="#">Email Marketing</a></li>
                                            <li ><a href="#">Reporting & Insights</a></li>

                                        </ul>  </>}
                            </li>


                            {/* dropdown 3 */}
                            <li className="nav-item dropdown" onMouseEnter={() => setActiveDrop3(true)} onMouseLeave={() => setActiveDrop3(false)} >
                                {window.innerWidth > 990 ? <> <a type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" className='nav-link pc' href="#">
                                    For Ecommerce&nbsp;
                                    {window.innerWidth > 990 && (
                                        activeDrop3 ? (
                                            <i style={{ fontSize: 'small', transition: 'transform 1s ease-in' }} className="fa-solid fa-angle-up"></i>
                                        ) : (
                                            <i style={{ fontSize: 'small', transition: 'transform 1s ease-in' }} className="fa-solid fa-angle-down"></i>
                                        )
                                    )}</a>


                                    <ul style={{
                                        minWidth: '0px', width: '175px',
                                        transformOrigin: 'top center', transform: activeDrop3 ? 'scaleY(1)' : 'scaleY(0)',
                                        transition: 'transform 0.3s ease-in', display: activeDrop3 ? 'block' : 'none'
                                    }} className="m-0 py-2 p-0 dropdown-menu shadow " aria-labelledby="dropdownMenuButton">
                                        <li ><span className="dropdown-item text-center" href="#"><strong>Addroll  for Ecommerce</strong></span></li>
                                        <li ><a className=" dropdown-item" href="#">Shopify</a></li>
                                        <li ><a className=" dropdown-item" href="#">Shopify Plus</a></li>
                                        <li ><a className=" dropdown-item" href="#">WooCommerce</a></li>
                                        <li ><a className=" dropdown-item" href="#">Wix</a></li>
                                        <li ><a className=" dropdown-item" href="#">BigCommerce</a></li>
                                        <li ><a className=" dropdown-item" href="#">Magento</a></li>


                                    </ul> </> :
                                    <>  <h6 className="shead">Addroll  for Ecommerce</h6>
                                        <ul className="sbody">
                                            <li ><a href="#">Shopify</a></li>
                                            <li ><a href="#">Shopify Plus</a></li>
                                            <li ><a href="#">WooCommerce</a></li>
                                            <li ><a href="#">Wix</a></li>
                                            <li ><a href="#">BigCommerce</a></li>
                                            <li ><a href="#">Magento</a></li>
                                        </ul> </>}
                            </li>

                            <li className="nav-item">
                                <a className={window.innerWidth > 990 ? 'nav-link pc' : 'shead'} href="#">Pricing</a>
                            </li>

                            <li className="nav-item dropdown" onMouseEnter={() => setActiveDrop4(true)} onMouseLeave={() => setActiveDrop4(false)}>
                                {window.innerWidth > 990 ? <>     <a type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" className='nav-link pc' href="#">
                                    Why AddRoll?&nbsp;
                                    {window.innerWidth > 990 && (
                                        activeDrop4 ? (
                                            <i style={{ fontSize: 'small', transition: 'transform 1s ease-in' }} className="fa-solid fa-angle-up"></i>
                                        ) : (
                                            <i style={{ fontSize: 'small', transition: 'transform 1s ease-in' }} className="fa-solid fa-angle-down"></i>
                                        )
                                    )}</a>


                                    <ul style={{
                                        minWidth: '0px', width: '100%', position: 'fixed', left: '0',
                                        transformOrigin: 'top center', transform: activeDrop4 ? 'scaleY(1)' : 'scaleY(0)',
                                        transition: 'transform 0.3s ease-in', display: activeDrop4 ? 'block' : 'none'
                                    }} className="m-0  py-2 p-0 dropdown-menu shadow " aria-labelledby="dropdownMenuButton">

                                        <div className='row justify-content-center mx-3 mt-5'>

                                            <div className="col-lg-2">
                                                <strong>Marketing Resources</strong>
                                                <a href="">Resources Library</a>
                                                <a href="">Addroll blog</a>
                                                <a href="">Holiday Marketing Resources </a>
                                                <a href="">What is retargeting?</a>
                                                <a href="">Marketing Gloserry </a>
                                                <a href="">State of Digital Marketing Resources </a>

                                            </div>
                                            <div className="col-lg-2 ">
                                                <strong>Free Tools</strong>
                                                <a href="">Return on Ad spend Calculator</a>
                                                <a href="">AdRoll UTM Link Builder</a>
                                                <a href="">Discound Profit Margin Calculator</a>
                                            </div>
                                            <div className="col-lg-2 ">
                                                <strong>Community</strong>
                                                <a href="">Growth Gorrila </a>
                                                <a href="">Small Business</a>
                                                <a href="">Events</a>

                                            </div>
                                            <div className="col-lg-2 ">
                                                <strong>Customer Supports</strong>
                                                <a href="">Getting Started </a>
                                                <a href="">Help center </a>
                                                <a href="">Research Panel</a>

                                            </div>
                                            <div className="col-lg-4 d-flex">
                                                <div className='w-100 py-3 px-2 box' style={{ height: '100%', background: '#303273' }}>
                                                    <div className='mx-2 rounded-3 h-100 flex-column d-flex justify-content-center align-items-center' style={{ background: '#FFE8E0' }}>
                                                        <img className='m-3 rounded-3 border' width='90%' src="https://www.adroll.com/assets/img/promo/holiday-marketing-hero.png?auto=webp&fm=png&width=393" alt="" />
                                                        <h6 className='text-center'>Power up your holiday marketing</h6>
                                                        <p className='text-center px-3'> It might seem early, but the race to holiday revenue is on! 🏃We’re here to guide you through your mission to generate brand awareness, maximize budget, and create campaigns your target audience can’t ignore.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row p-0'>
                                            <div className='col-lg-12 rbgNew'> </div>
                                        </div>
                                        </div>
                                    
                                    </ul>
                                </> : <>
                                    <h6 className='shead'>Resources </h6>

                                    <ul className='sbody'>
                                        <li ><a href="#">AddRoll Blog</a></li>
                                        <li ><a href="#">Marketing Glossery</a></li>
                                        <li ><a href="#">Events</a></li>
                                        <li ><a href="#">Wix</a></li>
                                        <li ><a href="#">Getting Started</a></li>
                                        <li ><a href="#">Help center</a></li>
                                    </ul>

                                    <h6 className='shead'>Login</h6>
                                    <button className='btn px-1 w-100 rounded-2 btn-purp'>GET STARTED</button>
                                </>
                                }
                            </li>
                        </ul>
                    </div>
                </div>


                <div className='rightNav d-none d-lg-flex align-items-center'>
                    <a className='mx-4 m-0 p-0' href="">Login</a>
                    <button className='btn p-3 rounded-2 btn-purp'>GET STARTED</button>
                </div>

            </div>
        </nav>
    )
}

export default Nav
