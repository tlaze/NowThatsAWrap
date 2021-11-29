import React from "react";
import {SiFacebook, SiInstagram,SiTwitter,SiYoutube} from 'react-icons/si';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="bg-dark" className="font-small text-white lighten-3 pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="my-4">
          <MDBCol md="5" lg="5">
            <h5 className="text-uppercase mb-4 font-weight-bold">
            Now That's A Wrap
            </h5>
            <ul className="list-unstyled">
                    <li><strong>Open Daily</strong> &bull; Monday, Wednesday, Thursday 10am-6PM</li>
                    <li><strong>Open Late</strong> &bull; Tuesday and Friday 10am-9:30PM</li>
                    <li><strong>Open for Private Bookings</strong> &bull; Saturday and Sunday</li>
             </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="5" lg="3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
            <p>
              <i className="fa fa-home mr-3" /> 801 NW 3rd Ave, Suite 101
            </p>
            <p>
                 Miami, FL 33136
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> now_thatsawrap@yahoo.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> 786.955.5241
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="text-center">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Follow us
            </h5>
            
            <div className="mt-2 ">

            <a href="https://www.facebook.com/nowthatsawrap2016/" target="_blank" rel="noopenner noreferrer">< SiFacebook /></a>

            <br/>

              <a href="https://www.instagram.com/now_thatsawrap/?hl=en" target="_blank" rel="noopenner noreferrer"><SiInstagram/></a>

              <br/>

              <a href="https://twitter.com/now_thatsawrap?s=11" target="_blank" rel="noopenner noreferrer"><SiTwitter/></a>

              <br/>

              <a href="https://www.youtube.com/channel/UCMSSMKY1XTU2ExN-dkN5zAA" target="_blank" rel="noopenner noreferrer"><SiYoutube/></a>

            </div>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <hr/>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          Now That's A Wrap
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;