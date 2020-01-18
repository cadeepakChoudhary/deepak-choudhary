import React from 'react';

function Navbar() {
    return (
        <nav class="navbar navbar-dark navbar-expand-md fixed-top bg-dark navbar--apple">
            <div class="container"><button data-toggle="collapse" class="navbar-toggler" data-target="#menu"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"><i class="la la-navicon"></i></span></button>
                <div class="collapse navbar-collapse" id="menu">
                    <ul class="nav navbar-nav flex-grow-1 justify-content-between">
                        <li class="nav-item d-none d-xs-block d-md-block" role="presentation"><a class="nav-link" href="#"><img style={{height: "45px"}}  src={require("../../src/Asset/ca-logo.png")}/></a></li>
                        <li class="nav-item" style={{marginRight: "auto"}} role="presentation"><a class="nav-link" href="#"><span style={{fontSize:"20px", lineHeight: "initial", fontFamily:"initial"}}>Deepak Choudhary & Co. </span><br/> <span style={{fontSize: "12px"}}>CHARTERED ACCOUNTANT</span></a></li>
                        <li class="nav-item d-none d-xs-block d-md-block" role="presentation"><a class="nav-link" href="#"><i class="icon fa fa-phone"></i>  +91-9999999999 |</a></li>
                        <li class="nav-item d-none d-xs-block d-md-block" role="presentation"><a class="nav-link" href="#"><i class="fa fa-envelope"></i> deepakchoudhary@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;