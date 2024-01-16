import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
        <div className="info-section">
          <div className='nav-container'>
            <div className="grid-container">
              <div className="grid-item">
                <h1>MANAGE <br></br> OPEREATIONS</h1>
                <div className="btn-img">
                  <button>LEARN MORE</button>
                  <img src="/images/Group 37619.png" alt="video" className="video-icon" />
                </div>
            </div>
          <div className="grid-item text-container">
            <div className="content-two-container">
              <div className="number-container">
                <h3>01.</h3>
              </div>
              <div className="flesh-icons-container">
                <img src="/images/Group 37565.png" alt="left" className="flesh-icon" />
                <img src="/images/Group 37564.png" alt="right" className="flesh-icon" />
              </div>
            </div>
            {/* <hr></hr> */}
            <p>
            Discover market access rules, check regulatory compliance, latest customs duties, 
            shipping requirements and other documentation. Africa-wide, harmonized, and aggregated trade
            and investment regulatory information i.e., Foreign Trade Regulations (e.g., Customs procedures, certification, licensing, etc.) and Market Access (trade agreements, tariffs, and non-tariff measures etc.)
            </p>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="numbers-container">
          <ul className="list-numbers">
            <li className="item-number">+800</li>
            <li className="item-number">+55</li>
            <li className="item-number">+4 500</li>
            <li className="item-number">+1 529</li>
          </ul>
          <ul className="list-description">
            <li className="item-description">Partners</li>
            <li className="item-description">Countries</li>
            <li className="item-description">Opportunities</li>
            <li className="item-description" >Companies</li>
          </ul>
        </div>
      </div>
      
      <div className="charts-container">
        <div className="grid-container2">
          <div className="grid-item2">
            <h3 className="services-title">OUR SERVICES</h3>
            <h1 className="service-subtitle"><span className="trade-title">Trade</span> <span className="simple-title">Simple,</span></h1>
            <p className="service-description">
            Discover a world of trade opportunities in one place with detailed  information about 
            imports, market dynamics, tariffs, regulatory requirements, potential buyers and more.</p>
            <button className="services-btn">Discover Now</button>
          </div>
          <div className="grid-item2">
            <div className="circle-chart">
              <div className="portion one">
                <div className="portion-text1" >Market Attractiveness </div>
              </div>
              <div className="portion two">
                <div className="portion-text2" >Connect with potential partners</div>
              </div>
              <div className="portion three">
                <div className="portion-text3" >Find business opportunities</div>
              </div>
              <div className="inner-circle">
                <img src="/images/Group 38263.svg"className="CriCle-iCon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutUs-section">
        <div className="grid-container3">
          <div className="grid-item3">
            <h3 className="aboutUs-title">ABOUT US</h3>
            <h1 className="aboutUs-subtitle">PEAQOCK is a member <br></br> driven network</h1>
            <p className="aboutUs-paragraph">The purpose of TRADAR Club is to be a network of international businesses and executives 
              dedicated to transforming Africa through the vehicles of trade and investment. TRADAR Club 
              Members are global industry leaders, African corporates, intergovernmental organisations, 
              policy makers and other influential stakeholders committed to the shared objective of unlocking
              growth and development for the African continent
            </p> <br></br>
            <button className="aboutUs-btn">LEARN MORE</button>
        </div>
        <div className="grid-item3">
          <img src="/images/Rectangle 123.png" className="aboutus-img"/>
        <div>
      </div>
        </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="membership-section">
        <h3 className="membership-title">MEMBERSHIP</h3>
        <h1 className="membership-subtitle">PEAQOCK Membership Packages</h1>
        <p  className="membership-paragraph">This page will highlight the different membership packages 
        and the benefits and costs of each package. The initial plans to be configured are as presented 
        below. The table should be configurable to update the sections with different feature, benefits 
        and costs from time to time.</p><br></br>
        <button className="membership-btn">PACKAGES DETAILS <img className="arrow-right" src="/images/Arrow - Right.png" alt="" /> </button>
      </div>
      <br></br>

      <div className="type-services">
        <div className="grid-container4">
          <div className="grid-item4">
            <div className="types-feild">
              <div className="type-img-container">
                <img className="types-feild-image"  src="/images/emoji-happy.png" alt=""/>
              </div>
            <div className="types-gold-infos">
              <h1 className="grid-basic-title">Basic</h1>
              <p className="type-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam 
                mollis at luctus nunc
              </p>
            </div>
              <button className="info-btn-green">View Details &nbsp;&nbsp; Free</button>
            </div>
          </div>

          <div className="grid-item4">
          <div className="types-feild">
            <div className="type-img-container">
                <img  src="/images/Shield Done.png" alt=""/>
            </div>
            <div className="types-gold-infos">
              <h1 className="grid-gold-title">Gold</h1>
              <p className="type-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam 
              mollis at luctus nunc
              </p>
            </div>
            <button className="info-btn-gold">View Details &nbsp;&nbsp;$ 2.500</button>
          </div>
          </div>

          <div className="grid-item4">
          <div className="types-feild">
              <div className="type-img-container">
                <img  src="/images/Time Circle.svg" alt=""/>
              </div>
              <div className="types-gold-infos">
                <h1 className="grid-standard-title">Standard</h1>
                <p className="type-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam 
                  mollis at luctus nunc
                </p>
              </div>
              <button className="info-btn-standard">View Details &nbsp;&nbsp;$ 1.500</button>
          </div>
          </div>

          <div className="grid-item4">
          <div className="types-feild">
              <div className="type-img-container">
                <img  src="/images/Lock.svg" alt=""/>
              </div>
              <div className="types-gold-infos">
             <h1 className="grid-platinum-title">Platinum</h1>
              <p className="type-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus pulvinar massa quam 
                mollis at luctus nunc
              </p>
              </div>
              <button className="info-btn-platinum">View Details &nbsp;&nbsp; $ 5.500</button>
          </div> 
          </div> 
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="newsLetter-section">
          <div className="grid-container5">
            <div className="grid-item5">
              <div className="newsletter-container">
                <h1 className="newsletter-title">NEWSLETTER</h1>
                <img className="newsletter-icon" src="/images/Vector 29.svg"/> 
              </div>
            </div>

            <div className="grid-item5">
              <form className="newsletter-form">
                <input className="newsletter-input" type="text" placeholder="Your email address"/>
                <button className="newsletter-btn">Subscribe &nbsp;&nbsp;
                  <img className="newsletter-icon" src="/images/Arrow - Right.svg"/>
                </button>
              </form>
            </div>
          </div>
      </div>

      <footer>
          <div className="support-container">
              <button className="support-btn"><img  className="support-icon" src="/images/Combined Shape.svg"/>Support</button>
              <div className="support-div-img"><img className="support-icon-above" src="/images/Arrow -above.svg"/></div>
          </div>
          <div className="footer-item">
            <h3 className="footer-title">Contact Us</h3>
            <p className="footer-paragraph"> <span >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum lectus nunc, sagittis, eros.</span></p>
            <p className="footer-paragraph"><img src="/images/Location.svg"/><span className="contact-p">Imm le Zenith II, Lotissement Attaoufik, Route de Nouacer, Sidi Maarouf, Casablanca, 20640, Maroc</span>  </p>
            <p className="footer-paragraph"><img src="/images/Message.svg"/><span className="contact-p">nfo@peaqock.com</span> </p>
            <p className="footer-paragraph"><img src="/images/Call.svg"/><span className="contact-p"> +20-2-24564100/1/2/3</span></p>
            <p className="footer-paragraph"><img src="/images/Call.svg"/><span className="contact-p"> +20-2-24515201/2</span></p>
          </div>
          <div className="footer-item">
            <h3 className="footer-title">About Peaqock</h3>
            <p className="footer-paragraph">Privacy Statement</p>
            <p className="footer-paragraph">Term and condition</p>
            <p className="footer-paragraph">Accessibility</p>
            <p className="footer-paragraph">F.A.Q.</p>
            <ul className="contacts-list">
              <li className="contact-item"><a href="#"><FontAwesomeIcon className="fontawseome-icon" icon={faFacebookF} style={{ color: "#99a5b5" }} /></a></li>
              <li className="contact-item"><a href="#"><FontAwesomeIcon className="fontawseome-icon" icon={faYoutube} style={{color: "#99a5b5",}} /></a></li>
              <li className="contact-item"><a href="#"><FontAwesomeIcon className="fontawseome-icon" icon={faTwitter} style={{color: "#99a5b5",}} /></a></li>
              <li className="contact-item"><a href="#"><FontAwesomeIcon className="fontawseome-icon" icon={faInstagram} style={{color: "#99a5b5",}} /></a></li>
              <li className="contact-item"><a href="#"><FontAwesomeIcon className="fontawseome-icon" icon={faLinkedin} style={{color: "#99a5b5",}} /></a></li>
            </ul>
          </div>
          
          <div className="footer-item">
            <h3 className="footer-title">Locations</h3>
            <img src="/images/Frame.svg" />
          </div>        

          <p className="footer-right">Copyright &copy;2023. All Rights Reserved.</p>

      </footer>
  </div>
</div>
);
};
