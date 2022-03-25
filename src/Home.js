import React from 'react';
import './index.css';

function Home() {
    return(
        <main>

    <div className="slideshow-container">
      <div className="slideshow">
        <img src="./assets/images/hype.jpeg" alt="Slide 4"/>
        <img src="./assets/images/nike_maxes.jpeg" alt="Slide 3"/>
        <img src="./assets/images/preme.jpg" alt="Slide 2" />
        <img src="./assets/images/rack.jpeg" alt="Slide 1" />
      </div>
    </div>

    <div class="row">
      <div class="column margin-normal">
        <h1>The Closet</h1>
        <p>Hi there. I'm Drew and welcome inside my closet. Just like you I'm just a regular guy who spends way to much
          money on clothes and sneakers but I can't help it because I love it! If you're anything like me you've
          probably spent a lot of extra money on clothes and sneakers through third party site. I'm here to help. I
          created this site to help the everyday reseller or just material junkie's like myself. I have a collection of
          pieces that I feel could be better used by someone else. Prices are strict but I love a good haggle. </p>

        <a href= "closet.html" class="button"> Shop Now! </a>

      </div>
      <div class="column margin-normal">
        <h1>We Buy And Sell!</h1>
        <p>Are you tired of selling you shoes through Third Party sites that charge and arm and a leg for hidden fees? Me too! Thats why I made this page. We buy your items at market price and we're ALWAYS buying. Checkout out our forms page to submit all your inquries on buying and
        </p>
        <a href= "contact.html" class="button">Contact Us Today </a>
      </div>
    </div>

  </main>
    )
}

export default Home