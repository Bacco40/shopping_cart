import React from "react";
import back from './back.jpg';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import{faAnglesRight} from '@fortawesome/free-solid-svg-icons';
library.add(faAnglesRight);

function Home() {
  return (
    <div className="pages">
      <div className="welcome">The shop you've been always looking for, now online! </div>
      <img className="background" src={back} alt="shop"/>
      <Link className="back" to='/products'>
        <button className="homeBtn">Go to shop &nbsp;&nbsp;<FontAwesomeIcon icon="fa-solid fa-angles-right" /></button>
      </Link>
    </div>
  );
}

export default Home;