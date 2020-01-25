import React from 'react';

function testimony() {
    return (
        <div class="carousel slide" data-ride="carousel" data-interval="10000" id="carousel-t">
            <div style={{marginTop: "40px", marginBottom: "40px"}} class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="col-9 text-center mx-auto testimonial-content">
                        <p class="text-center rating">5&nbsp;<i class="icon ion-star"></i></p>
                        <p class="text-center"><em>"The Services provided by this firm under the guidance of Mr. Deepak has enabled me to focus on growing my business while taking complete care of my taxation and audit."</em><br /></p>
                        <p
                            class="signature">A maufacturing sector client based in Sirohi </p>
                        <p class="text-center date">December, 2019<br /></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-9 offset-xl-1 text-center mx-auto testimonial-content">
                        <p class="text-center rating">5&nbsp;<i class="fa fa-star"></i></p>
                        <p class="text-center"><em>"I was pretty impress with the quality and knowledge of the domain Mr. Deepak and his associates possess. Dealing with them was a seamless experience."</em><br /></p>
                        <p
                            class="signature">A Retails Client Based in Sirohi</p>
                        <p class="text-center date">November 21, 2019<br /></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-9 text-center mx-auto testimonial-content">
                        <p class="text-center rating">5&nbsp;<i class="fa fa-star"></i></p>
                        <p class="text-center"><em>"This firm provides a flawless experience with a very efficient cost compared to their "Big 4" counterpart with efficient quality."</em><br /></p>
                        <p
                            class="signature"> A client based in Ahmedabad.</p>
                        <p class="text-center date">November, 2019<br /></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-9 offset-xl-1 text-center mx-auto testimonial-content">
                        <p class="text-center rating">5&nbsp;<i class="fa fa-star"></i></p>
                        <p class="text-center"><em>"Having Dealt with a number of clients and service provider, I personally feel the services provided by Deepak choudhary and Charatered Accountants is very smooth"</em><br /></p>
                        <p
                            class="signature">Jane D.</p>
                        <p class="text-center date">October, 2019<br /></p>
                    </div>
                </div>
            </div>
            <div><a class="carousel-control-prev" href="#carousel-t" role="button" data-slide="prev"><i class="icon ion-android-arrow-dropleft-circle d-flex d-lg-flex justify-content-center align-items-center"></i><span class="sr-only">Previous</span></a><a class="carousel-control-next"
                href="#carousel-t" role="button" data-slide="next"><i class="icon ion-android-arrow-dropright-circle d-flex d-lg-flex justify-content-center align-items-center"></i><span class="sr-only">Next</span></a></div>
            <ol class="carousel-indicators">
                <li data-target="#carousel-t" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-t" data-slide-to="1"></li>
                <li data-target="#carousel-t" data-slide-to="2"></li>
                <li data-target="#carousel-t" data-slide-to="3"></li>
            </ol>
        </div>
    );
}

export default testimony;