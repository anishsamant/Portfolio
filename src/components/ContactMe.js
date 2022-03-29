import { React } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faTwitter,
    faGithub,
    faInstagram,
    faFacebook
} from "@fortawesome/free-brands-svg-icons";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import '../stylesheets/contactme.css';


function ContactMe() {
    const socialMedia = [
        {
            type: 'linkedin',
            link: 'https://www.linkedin.com/in/anishsamant/',
        },
        {
            type: 'twitter',
            link: 'https://twitter.com/anishsamant'
        },
        {
            type: 'github',
            link: 'https://github.com/anishsamant'
        },
        {
            type: 'instagram',
            link: 'https://www.instagram.com/anish_samant/'
        },
        {
            type: 'facebook',
            link: 'https://www.facebook.com/anish.samant.9'
        },
    ]

    const items = [];
    socialMedia.forEach(social => {
        let icon;
        let classType = social.type + " social";
        switch(social.type) {
            case 'linkedin': icon = faLinkedin; break;
            case 'twitter': icon = faTwitter; break;
            case 'github': icon = faGithub; break;
            case 'instagram': icon = faInstagram; break;
            case 'facebook': icon = faFacebook; break;
            default: break;
        }
        let htmlToDisplay;
        if (social.type === 'instagram') {
            htmlToDisplay = <img className="insta-image-style" src='/assets/instagram.png' alt="instagram-icon" />;
        } else {
            htmlToDisplay = <FontAwesomeIcon icon={icon} size="2x" className="social-icons-style"/>;
        }
        items.push(
            <a key={social.type} href={social.link}
                className={classType}>
                {htmlToDisplay}
            </a>
        )
    })

    function sendEmail(e) {
        e.preventDefault();
        let data = {
            from_name: e.target.from_name.value,
            from_email: e.target.from_email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID, 
            process.env.REACT_APP_TEMPLATE_ID, data, 
            process.env.REACT_APP_USER_ID
        ).then((result) => {
            document.getElementById("contact-form-id").reset();
            toast.success('Email sent successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }, (error) => {
            toast.error('Email not sent. Please try again!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error(error.text);
        });
    }

    return (
        <div className="contact-me-section mt-4" id="contactme">
            <div className="d-flex flex-column">
                <span className="contactme-heading">CONTACT ME</span>
                <div className="social-container">
                    {items}
                </div>
                <div className="contactme-container-style row justify-content-center shadow-lg contact-me-form-x-margins my-3">                    
                    <div className="m-1 p-4 n-box">
                        <div className="contact-form-title center-alignment">
                            <span>Get In Touch</span>
                        </div>
                        <form name="contact-form" className="contact-form" method="post" onSubmit={sendEmail} id="contact-form-id"> 
                            <input type="hidden" name="form-name" value="contact-form" />
                            <div className="d-flex flex-column mt-4"> 
                                <label className="required label-style">Name</label>
                                <input type="text" className="form-control fields-custom-style" placeholder="Enter your name" name="from_name" required/>
                            </div>
                            <div className="d-flex flex-column mt-4"> 
                                <label className="required label-style">Email</label>
                                <input 
                                    type="email" 
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    className="form-control fields-custom-style" placeholder="Enter your email" name="from_email" required/>
                            </div>  
                            <div className="d-flex flex-column mt-4"> 
                                <label className="required label-style">Subject</label>
                                <input type="text" className="form-control fields-custom-style" placeholder="Enter subject" name="subject" required/>
                            </div>  
                            <div className="d-flex flex-column mt-4"> 
                                <label className="required label-style">Message</label>
                                <textarea type="text" className="form-control fields-custom-style" rows={5} defaultValue={""} 
                                    placeholder="Type your message" name="message" required/>
                            </div>
                            <div className="center-alignment">
                                <input type="submit" value="Send" className="submit-btn mt-4" />
                            </div>  
                        </form>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
