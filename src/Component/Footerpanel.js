import React from 'react';
function footerpanel(props) {
    return (
        <div>
            <footer style={{ margin: "0px" }}>
                <div class="row">
                    <div class="col-sm-6 col-md-4 footer-navigation">
                        <div className="row">
                            <div className="col-sm-2">
                        <h3><img style={{ height: "50px" }} src={require("../../src/Asset/ca-logo.png")} />
                        </h3>
                        </div>
                        <div className="col-sm-10">
                        <span style={{ fontSize: "20px", lineHeight: "initial", fontFamily: "initial" }}>Deepak Choudhary & Co. </span>
                        <br /> <span style={{ fontSize: "12px" }}>CHARTERED ACCOUNTANT</span>
                        </div>
                        </div>
                        <p class="links"><a href="#" style={{fontWeight: "Normal"}}>AHMEDABAD</a><strong> | </strong><a style={{fontWeight: "Normal"}} href="#">SIROHI</a></p>
                        <p class="company-name">Deepak Choudhary & Co © 2019 </p>
                    </div>
                    <div class="col-sm-6 col-md-4 footer-contacts">
                        <div><span class="fa fa-map-marker footer-contacts-icon"> </span>
                            <p><span class="new-line-span">Sirohi</span> Rajasthan</p>
                        </div>
                        <div><i class="fa fa-phone footer-contacts-icon"></i>
                            <p class="footer-center-info email text-left"> +919079888419</p>
                        </div>
                        <div><i class="fa fa-envelope footer-contacts-icon"></i>
                            <p> <a href="#" target="_blank">Cadeepakkchoudhary@gmail.com</a></p>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-4 footer-about">
                        <h4>About the company</h4>
                        <p> The firm deals in providing end to end solution to Accounting, Auditing, Taxation etc. Currently dealing with client globally with physical presence in two provision of the country. Serving Clients with utmost Honesty & Satisfaction. To know more please contact Us.</p>
                        <div class="social-links social-icons"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-github"></i></a></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default footerpanel;