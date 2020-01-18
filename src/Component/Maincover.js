import React from 'react';

function Maincover() {
  return (
    <div class="parallax">
      <div class="container d-flex justify-content-center align-items-center parallax-content" style={{ height: "100vh" }}>
        <div class="col-12 col-md-10 col-lg-8 d-flex justify-content-center flex-column">
          <div class="caption v-middle text-center">
            <h1 class="cd-headline clip">
              <span class="blc">Having Trouble <br /> </span>
              <span class="cd-words-wrapper">
                <b class="is-visible">Tax Filing.</b>
                <b>GST.</b>
                <b>Business Planning.</b>
              </span>
            </h1>
          </div>
          <h1></h1>
        </div>
        <img src={require("./../Asset/MainBackground.jpg")} />
      </div>
      <div
        class="parallax-placeholder">
      </div>
    </div>
  );
}

export default Maincover;