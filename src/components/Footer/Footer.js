import React from 'react';
import './Footer.scss';

class Footer extends React.Component{

    render(){
        return(
            <div id="footer" className='footer'>
                <div className='footer__info'>
                      <div className='internal-links'>
                         <h3 className='internal-links__cloud'>Movies Lobby</h3>
                         <div className='internal-links__page'>
                         <a href='/'>Home</a>
                         <a href='/'>Profile</a>
                         <a href='/'>Discover</a>
                         </div>
                      </div>
                      <div className='contacts'>
                          <div className='contacts__title'>
                              <h3>portofolio:</h3>
                              <h3>phone number:</h3>
                          </div>
                          <div className='contacts__actual'>
                               <a href='/'>www.MlTechnologies.com</a>
                               <h3>+37368767688</h3>
                          </div>
                      </div>
                </div>

                <div className='footer__social'>
                   <img alt='dblogo' className='footer__social__img' src={require('../../img/DBLogo.png')}/>
                   <div className='footer__social__main'>
                        <a className='footer__social__main__links' href='https://github.com/MoiseiLiviu?tab=repositories'>
                            <i className="github alternate icon footer__social__main__links__icons"></i>
                        </a>
                        <a className='footer__social__main__links' href='/'>
                            <i className="code icon footer__social__main__links__icons"></i>
                        </a>
                        <a className='footer__social__main__links' href='/'>
                            <i className="facebook icon footer__social__main__links__icons"></i>
                        </a>
                   </div>
                   <p className='footer__social__main__copy'>©2019 Code and design by Moisei Liviu.</p>
                </div>
            </div>
        )
    }
};

export default Footer;