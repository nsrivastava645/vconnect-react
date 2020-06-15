import React from 'react';
import axios from 'axios';
import header_bg from './img/header_bg.jpg';
import about_three from './img/about/3.jpg' ;
import team_one from './img/team/1.jpg';
import team_two from './img/team/2.jpg';
import team_three from './img/team/3.jpg';

class App extends React.Component {

  
  render(){
  return (
    <div className= "App">
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">
          <div className="container"><a className="navbar-brand" href="index.html">VConnect</a><button data-toggle="collapse" data-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right" type="button" data-toogle="collapse" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="nav navbar-nav ml-auto text-uppercase">
                <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#About">About us</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#team">team</a></li>
                <li className="nav-item" role="presentation"><a className="nav-link js-scroll-trigger" href="#contact">contact us</a></li>
                <li className="nav-item" role="presentation" />
                <li className="nav-item" role="presentation" />
                <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Register</a>
                  <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="student_reg.html">Student</a><a className="dropdown-item" role="presentation" href="tpo_reg.html">TPO(placement head)</a></div>
                </li>
              </ul><a className="btn btn-primary" role="button" href="login.html">Login</a></div>
          </div>
        </nav>
        <header className="masthead" style={{backgroundImage: 'url('+ header_bg +')'}}>
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in"><span>Welcome To Our Website!</span></div>
              <div className="intro-heading text-uppercase"><span style={{color: 'rgb(228,176,42)'}}>want to get a job?</span></div><a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" role="button" href="#services">Tell me more</a></div>
          </div>
        </header>
        <section id="About">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="text-center">About Us</h1>
              </div>
            </div>
            <div className="row">
              <div className="col text-center"><img className="rounded-circle" src={about_three} width={200} height={200} /></div>
              <div className="col">
                <p className="text-left">Paragraph a bj BSKJ DBKQWJB DK&nbsp; WHQK DJQW DHKJQW DKWQH JDHWQ KJDHB KQJD Q DKJQ DKQJHD KJQHD KJQH DKJBD KJB&nbsp; DBBBBBBBB JW JJJJJJJJJJJJJJJ SWJ HSSSSSSSSSSSSSSJW DBJJJJJJJJJJJJJJJJJJJJJJWDB JWQ DDDDDDDDDDDDDDDDDBJWDB WQNBBBBBBBBBBBBBBBBBBBBDJWHBQ
                  JHB&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; JHWBD WBJD HWBQDJBWHD WHB</p>
              </div>
            </div>
          </div>
        </section>
        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="text-uppercase section-heading">Services</h2>
                <h3 className="text-muted section-subheading">Have an overview of the services that we will provide you !!</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4"><span className="fa-stack fa-4x"><i className="icon-screen-desktop m-auto text-primary" data-bs-hover-animate="pulse" /></span>
                <h4 className="section-heading">Job Opportunity</h4>
                <p className="text-muted">content aaega idhr</p>
              </div>
              <div className="col-md-4"><span className="fa-stack fa-4x"><i className="icon-layers m-auto text-primary" data-bs-hover-animate="pulse" /></span>
                <h4 className="section-heading">Training</h4>
                <p className="text-muted">content aega idhr</p>
              </div>
              <div className="col-md-4"><span className="fa-stack fa-4x"><i className="icon-check m-auto text-primary" data-bs-hover-animate="pulse" /></span>
                <h4 className="section-heading">Secured Job</h4>
                <p className="text-muted">content aega idhr</p>
              </div>
            </div>
          </div>
        </section>
        <section id="team">
          <div className="container">
            <h2 className="text-center mb-5">Meet our awesome team.....</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item mb-5 mb-lg-0"><img className="rounded-circle img-fluid mb-3" src={team_one} />
                  <h5>Anandha Krishna Menon</h5>
                  <p className="font-weight-light mb-0">"A Computer Science and Information Technology Engineering graduate from Dronacharya College of Engineering, Gurgaon affiliated to Maharishi Dayanand University, Rohtak. "</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item mb-5 mb-lg-0"><img className="rounded-circle img-fluid mb-3" src={team_two} />
                  <h5>Uddeshya Vishwakarma</h5>
                  <p className="font-weight-light mb-0">"I am a Mobile and Web App Designer and Developer currently working as a freelancer. I am currently into Google's new technology Flutter to develop mobile apps for both android and iOS. I am also a Technical Head in Developers
                    Student Club (DSC). My past working experience was with NodeJS and Java to build web applications using JSP. In my spare time I love to read books and blogs. Nothing can give me pleasure more than diving into a new technology.My
                    career preference would be as Mobile or Web App Developer."<br /></p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mx-auto testimonial-item mb-5 mb-lg-0"><img className="rounded-circle img-fluid mb-3" src={team_three} />
                  <h5>Shreya Kumari Pandey</h5>
                  <p className="font-weight-light mb-0">"I am a public speaker and a passionate developer, I have an experience in front-end development, UI/UX and python and<br /> <br /> I am currently exploring Backend Development and AI :)"</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="text-uppercase section-heading">Contact Us</h2>
                <h3 className="section-subheading text-muted">Fill this form to get in touch with us :)</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form id="contactForm" name="contactForm" noValidate="novalidate">
                  <div className="form-row">
                    <div className="col col-md-6">
                      <div className="form-group"><input className="form-control" type="text" id="name" placeholder="Your Name *" required /><small className="form-text text-danger flex-grow-1 help-block lead" /></div>
                      <div className="form-group"><input className="form-control" type="email" id="email" placeholder="Your Email *" required /><small className="form-text text-danger help-block lead" /></div>
                      <div className="form-group"><input className="form-control" type="tel" placeholder="Your Phone *" required /><small className="form-text text-danger help-block lead" /></div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group"><textarea className="form-control" id="message" placeholder="Your Message *" required defaultValue={""} /><small className="form-text text-danger help-block lead" /></div>
                    </div>
                    <div className="col">
                      <div className="clearfix" />
                    </div>
                    <div className="col-lg-12 text-center">
                      <div id="success" /><button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4"><span className="copyright">Copyright&nbsp;© VConnect 2020</span></div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                  <li className="list-inline-item"><a href="#">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}
}

export default App;
