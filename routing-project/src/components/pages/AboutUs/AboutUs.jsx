import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
    return (
        <div>
            <div>
          <h2>About Us</h2>
            <p>From the mountains of Colorado to the beaches of California, and Portlands in Maine and Oregon,
                to main streets across the country, there’s a Toad just about everywhere these days. But like most great things,
                it all started with humble beginnings: just one woman in a garage in Telluride, CO making handmade toque hats for
                her friends. It was 1991 and fleece hats were all the rage – right up there with REM singles and two-way pagers.
            </p>
            <img src={img} alt="Toad&Co Logo" />
            </div>
            
           

            <section>
                <p>1995: the first Horny Toad store opens in downtown Telluride, expanding the line to include fleece vests and jackets. While things are heating up in Telluride, we move our headquarters 
                    to Chicago where three Toads operate the business out of the living room. One of our proudest moments comes in 1997 when we partner with Search, Inc. to co-found the Planet Access Company, 
                    a logistics warehouse that provides career opportunities for adults with developmental disabilities. We kick things off with the Camping Pillow Program: Toad provides 
                    fleece scraps from production and Search clients sew the scraps into camping pillowcases to be shipped to outdoor stores across the country. All proceeds from the pillowcases 
                    go back to PAC to offer more career development opportunities and send crew members on much deserved vacations to the great outdoors.</p>
            </section>
            <img src={img2} alt="" />
            <section>
                <p>In 2015 we changed our name from Horny Toad to Toad&Co to better reflect our commitment to creating global 
                    change through meaningful partnerships. From our manufacturers to our retailers, we’ve committed to finding 
                    partners who work toward social and environmental progress. In the last 20 years, together we have helped to fund 
                    120 environmental protection organizations, employed roughly 400 adults with disabilities, and sent 500 people on 
                    once-in-a-lifetime trips to the great outdoors. And we’re just getting started.</p>
            </section>
        </div>
    );
};


export default AboutUs;
