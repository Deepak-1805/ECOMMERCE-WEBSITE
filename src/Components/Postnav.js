import React from 'react';
import "./Postnav.css";
import { GiHamburgerMenu } from 'react-icons/gi'; 
import {AiOutlineSearch} from 'react-icons/ai';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import fashion1 from "./fashion1.PNG";
import fashion2 from "./fashion2.PNG";
import fashion3 from "./fashion3.PNG";
import fashion4 from "./fashion4.PNG";
export default function Postnav() {
    return (
        <>
        <div  className='nav'>
        <div className='logo'>
            <a href='https://www.amazon.in/s?k=amazon+com+amazon&hvadid=72567861283057&hvbmt=bp&hvdev=c&hvqmt=p&tag=msndeskstdin-21&ref=pd_sl_9nw9r35qtd_p'><GiHamburgerMenu /></a>
      </div>
          <a href="https://www.amazon.in/s?k=laptop&crid=1S874I9UVZ2TQ&sprefix=laptop%2Caps%2C439&ref=nb_sb_noss">LAPTOPS</a>
          <a href="https://www.amazon.in/s?k=Phone&crid=2YC7X244PIGFQ&sprefix=phone%2Caps%2C441&ref=nb_sb_noss">PHONE</a>
          <a href="https://www.amazon.in/s?k=washing+machine&crid=30XS7RQZHA983&sprefix=washing+machine+%2Caps%2C459&ref=nb_sb_noss">WASHING MACHINE</a>
         <a href="https://www.amazon.in/s?k=television+32+inch+smart+tv&rh=n%3A1389396031%2Cp_n_price%3A14076160031&crid=UEJ2V7HWEHUU&nav_sdd=aps&rnid=14076159031&sprefix=televis&ref=nb_sb_ss_w_sbl-tr-t1_television-32-inch-smart-tv_k0_1_7_0">TELEVISION</a>
         <a href="https://www.amazon.in/gp/browse.html?node=6648217031&ref_=nav_cs_fashion">FASHION</a>
         <a href='https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers'>BEST SELLERS</a>  
           <div className='searchbox'>
               <input type="text" name="search" placeholder='search...'/>
              <AiOutlineSearch/>
           </div>
        </div>
        <div className='space'></div>
   <div className='App'>
   <AliceCarousel autoPlay autoPlayInterval="1000">
 <img  src={fashion1} className='sliderimg' alt="sale" width="1200px" height="800px" />
   <img  src={fashion2} className='sliderimg' id ="backimg"alt="sale"  width="1200px" height="800px"/>
   <img src={fashion3} className='sliderimg' alt="sale"  width="1200px" height="800px"/>
   <img src={fashion4} className='sliderimg' alt="sale"  width="1200px" height="800px"/>
   </AliceCarousel>
   </div>
        </>
    )
}
