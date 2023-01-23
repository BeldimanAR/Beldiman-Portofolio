import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/alexandru-r-beldiman-b60699156/">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://www.instagram.com/roberto_beldiman/">
        <div>
          <BsInstagram />
        </div>
      </a>
      <a href="https://www.facebook.com/beldiman.roberto">
        <div>
          <FaFacebookF />
        </div>
      </a>
    </div>
  );
};
export default SocialMedia;
