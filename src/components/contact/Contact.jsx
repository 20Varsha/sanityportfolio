import "./contact.css";

import emailjs from "emailjs-com";
  import {useContext, useRef, useState} from "react"
import { ThemeContext } from "../../context";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      "service_ow7z7kl",
      "template_sp7vcej",
      formRef.current,
      "user_7mrYhkt6wzhDwYE0KFsW4"
    )
    .then(
      (result) => {
        console.log(result.text);
        setDone(true)
      },
      (error) => {
        console.log(error.text);
      }
    );
};

  

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="https://thumbs.dreamstime.com/b/phone-icon-telephone-icon-which-i-going-to-present-you-unique-you-totally-different-any-other-icons-you-111739308.jpg" alt="" className="c-icon" />
              +9 8590319793
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="" />
              varsha@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="https://cdn1.vectorstock.com/i/1000x1000/15/85/location-icon-gps-marker-symbol-map-pin-icon-vector-28471585.jpg" alt="" />
              Pulincheril(H) Chengalam S.P.O Kottayam
            </div>
        
      </div>
    </div>
<div className="c-right">
<p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.

          </p>
        
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backGroundColor:darkMode && "#333"}}  type="text" placeholder="Name" name="user_name" /><br/>
            <input  style={{backGroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backGroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
          <textarea style={{backGroundColor:darkMode && "#333"}} class="textarea" row="5" placeholder="Message" name="message"></textarea>
          <button>Submit</button>
          {done && "Thank you..."}
            
        </form>
 

		

  </div>
  </div>
</div>

  )
}

export default Contact