import React from 'react';

export default function() {
    return(
        <div className='about-wrapper'>
            <div className='image-wrapper'>
                <img src="http://via.placeholder.com/750x150" alt='Company Logo' />
            </div>

            <div className='about-info'>
            <p>
            Here at Sinners and Saints Studios, we believe in excellence for any and all video game types,
            whether they are 2D platformers to 3D role playing games to simple card and text games.
            </p>    
            
            <p>
            That is why we aim to make the best quality games that we can... Everything from a modern look to
            the retro games from the DOS era, all while implementing the strictest quality controls for your own
            personal enjoyment.  it is better to put out a game late with better quality and controls rather
            than games that are pushed out in a quick manner but are full of glitches for an extra couple of
            dollars.  We take pride in our products and our work, as our reputation is built on those factors and
            we want our employees to feel the same way.
            </p>    
             
            <p>
            So, if you ever have any issues with the games you play, or would like to make a suggestion, you may
            contact us <a href="mailto:megarbry@gmail.com">here.</a>
            </p>
            </div>

            <div className='about-credits'>

                <div className='about-title'>
                    <div>
                    <h3>Programmer and
                    Content Creator</h3>
                    </div>

                </div>


                <div className='about-name'>
                    <h2>Maurice E Garbry II</h2>
                </div>

            </div>
            
        </div>
    )
}