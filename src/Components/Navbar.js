import React from 'react';
import "./Navbar.css";
import profilephoto from "./profilephoto.PNG";
import { FiShoppingCart } from 'react-icons/fi';
import {CgProfile} from 'react-icons/cg';
import cart from "./cart.PNG";

import {BiSearch} from 'react-icons/bi';
export default function Navbar() {
    return (
       <> 
       <div className="prenavbar">
       <div className='About'>
       <a href="https://www.mi.com/in/">MI INDIA</a>
       <span>|</span>
           <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a>
          
       </div>
        <div className='Info'>
        <i className="FiShoppingCart"> <button onclick="#">Cart<FiShoppingCart/></button></i>
       <span>|</span>
 <a href="https://account.xiaomi.com/fe/service/login/password?_locale=en_IN&checkSafePhone=false&sid=i18n_in_pc_pro&qs=%253Fcallback%253Dhttps%25253A%25252F%25252Fstore.mi.com%25252Fin%25252Flogin%25252Fcallback%25253Ffollowup%25253Dhttps%2525253A%2525252F%2525252Fwww.mi.com%2525252Fin%2525252F%252526sign%25253DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%25252C%25252C%2526sid%253Di18n_in_pc_pro%2526_locale%253Den_IN%2526checkSafePhone%253Dfalse&callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%252F%26sign%3DYWY1OGE5MmVkNWU0OWVmN2E1ZTUzNzhiOTY2OGVkMDU5ZDljNGRkNQ%2C%2C&_sign=y2X%2BJ2N3%2Fvyraa65wFdQfKWnXao%3D&serviceParam=%7B%22checkSafePhone%22%3Afalse%2C%22checkSafeAddress%22%3Afalse%2C%22lsrp_score%22%3A0.0%7D&showActiveX=false&theme=&needTheme=false&bizDeviceType=">Login/Signup</a>
 <span>|</span>
 <a href="https://www.mi.com/in/">Your Orders</a>
 <span>|</span>
   <i className="image"> <button onclick="#"><CgProfile/></button></i>
        </div>
       </div>
      

 </>
    )
}
