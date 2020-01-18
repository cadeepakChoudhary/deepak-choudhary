import React from 'react';

function testimony() {
    return (
        <div class="carousel slide" data-ride="carousel" data-interval="10000" id="carousel-t">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="col-9 text-center mx-auto testimonial-content"><img class="rounded-circle" src="assets/img/test-man.jpg" width="100" />
                        <p class="text-center rating">5&nbsp;<i class="icon ion-star"></i></p>
                        <p class="text-center"><em>"Lorem ipsum dolor sit amet, nec cu omnium ponderum instructior, eligendi gubergren cotidieque te eam. Sed ceteros salutatus definiebas eu, ut modo argumentum reprimique quo. Per te convenire facilisis. Eu vel noster scaevola molestiae.&nbsp;Lorem ipsum dolor sit amet, nec cu omnium ponderum instructior, eligendi gubergren cotidieque te eam. Sed ceteros salutatus definiebas eu, ut modo argumentum reprimique quo. Per te convenire facilisis. Eu vel noster scaevola molestiae."</em><br /></p>
                        <p
                            class="signature">John D.</p>
                        <p class="text-center date">April 21, 2014<br /></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-9 offset-xl-1 text-center mx-auto testimonial-content"><img class="rounded-circle" src="assets/img/test-woman.jpg" width="100" />
                        <p class="text-center rating">5&nbsp;<i class="fa fa-star"></i></p>
                        <p class="text-center"><em>"Lorem ipsum dolor sit amet, nec cu omnium ponderum instructior, eligendi gubergren cotidieque te eam. Sed ceteros salutatus definiebas eu, ut modo argumentum reprimique quo. Per te convenire facilisis. Eu vel noster scaevola molestiae.&nbsp;Lorem ipsum dolor sit amet, nec cu omnium ponderum instructior, eligendi gubergren cotidieque te eam. Sed ceteros salutatus definiebas eu, ut modo argumentum reprimique quo. Per te convenire facilisis. Eu vel noster scaevola molestiae."</em><br /></p>
                        <p
                            class="signature">Jane D.</p>
                        <p class="text-center date">April 21, 2014<br /></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-9 text-center mx-auto testimonial-content"><img class="rounded-circle" src="assets/img/test-male-pic.jpg" width="100" />
                        <p class="text-center rating">5&nbsp;<i class="fa fa-star"></i></p>
                        <p class="text-center"><em>"Lorem ipsum dolor sit amet, nec cu omnium ponderum instructior, eligendi gubergren cotidieque te eam. Sed ceteros salutatus definiebas eu, ut modo argumentum reprimique quo. Per te convenire facilisis. Eu vel noster scaevola molestiae.&nbsp;Lorem ipsum dolor sit amet, nec cu omnium ponderum instructior, eligendi gubergren cotidieque te eam. Sed ceteros salutatus definiebas eu, ut modo argumentum reprimique quo. Per te convenire facilisis. Eu vel noster scaevola molestiae."</em><br /></p>
                        <p
                            class="signature">John D.</p>
                        <p class="text-center date">April 21, 2014<br /></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-9 offset-xl-1 text-center mx-auto testimonial-content"><img class="rounded-circle" src="assets/img/test-female-pic.jpg" width="100" />
                        <p class="text-center rating">5&nbsp;<i class="fa fa-star"></i></p>
                        <p class="text-center"><em>"Lorem ipsum dolor sit amet, nec cu omnium ponderum instructior, eligendi gubergren cotidieque te eam. Sed ceteros salutatus definiebas eu, ut modo argumentum reprimique quo. Per te convenire facilisis. Eu vel noster scaevola molestiae.&nbsp;Lorem ipsum dolor sit amet, nec cu omnium ponderum instructior, eligendi gubergren cotidieque te eam. Sed ceteros salutatus definiebas eu, ut modo argumentum reprimique quo. Per te convenire facilisis. Eu vel noster scaevola molestiae."</em><br /></p>
                        <p
                            class="signature">Jane D.</p>
                        <p class="text-center date">April 21, 2014<br /></p>
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