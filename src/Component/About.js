import React from 'react';

function About() {
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="display-3">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-6"><img class="rounded-circle" style={{ height: "250px", width: "250px" }} src={require("../../src/Asset/Deepak.jpg")} />
              <h1 style={{ marginTop: "30px", fontFamily: "monospace" }}>CA Deepak Choudhary</h1><em style={{ fontSize: "14px", fontFamily: "inherit" }}>Proprietor&nbsp;<br /><div style={{marginBottom: "30px"}}><i className="fa fa-phone"></i>+91-999999999 <br /> <i className="fa fa-envelope"></i> deepakchoudhary@gmail.com<br /></div></em></div>
            <div style={{textAlign: "justify"}} class="col-md-6">This firm was founded by CA Deepak Choudhary with the vision of providing consultancy and services in wide array of sectors. The firm deal in providing services in taxation, Audit, financial advisory etc. Currently Operational in Ahmedabad and Sirohi while providing service globally.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;