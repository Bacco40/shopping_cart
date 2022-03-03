import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faFacebookF, faInstagram, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
library.add(faGithub, faFacebookF, faInstagram, faTwitter, faWhatsapp);

function Contacts() {
  return (
    <div className="pages">
      <div className="welcome">Contact us on your favourite platform!</div>  
      <div className="socials">
        <a className="social" href="https://github.com/Bacco40" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
        <a className="social" href="https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=44s" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        </a>
        <a className="social" href="https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=44s" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </a>
        <a className="social" href="https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=44s" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </a>
        <a className="social" href="https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=44s" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
        </a>
      </div>
      <img className="background" src={require('./back.jpg')} alt="shop"/>
    </div>
  );
}

export default Contacts;