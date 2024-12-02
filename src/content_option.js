const logotext = "TANUSH";
const meta = {
    title: "Tanush Shrivastava",
    description: "I’m Tanush Shrivastava, an avid software engineer attending the University of Wisconsin",
};

const introdata = {
    title: "I’m Tanush Shrivastava",
    animated: {
        first: "Full-Stack Developer",
        second: "Machine Learning Engineer",
        third: "Mobile Application Developer",
    },
    description: "I’m Tanush Shrivastava, a part-time software engineer at PNC Bank and senior at the University of Wisconsin",
    your_img_url: "https://i.gifer.com/origin/3e/3e16cabc8c3ba9318711392bd1491dcf_w200.gif",
};

const dataabout = {
    title: "About Myself",
    aboutme: "I am always striving to learn more and expand my knowledge. I have Interned at PNC Bank in the Summer of 2024 and continued part-time during my academic year. I created an internal automation tool usinf React.js, Python, and MongoDB. I have much expertise in artificial intelligece, databasing, and web development. I also hava a certification in Google Cloud's Machine Learning Pathway. ",
};

const skills = [{
        name: "Python",
        value: 100
    },
    {
        name: "MongoDB",
        value: 100
    },
    {
        name: "Javascript",
        value: 100
    },
    {
        name: "React",
        value: 100
    },
    {
        name: "Java",
        value: 100
    },
    {
        name: "C, C++, C#",
        value: 100
    },
];

const services = [{
        title: "AI/ML",
        description: "I can teach you about AI/ML concepts and integrate them within your application.",
    },
    {
        title: "Mobile Apps",
        description: "I can assist in developing your mobile application.",
    },
    {
        title: "Fullstack Websites",
        description: "I can assist in developing your own website or application.",
    },
];

import Project1 from "./assets/images/Project1.png";
import Project2 from "./assets/images/Project2.png";
import Project3 from "./assets/images/Project3.png";
import Project4 from "./assets/images/Project4.png";
import Project5 from "./assets/images/Project5.png";

const dataportfolio = [{
        img: Project1,
        description: "Self-Driving AI for Robotic Platforms",
        link: "https://drive.google.com/file/d/1EHgfWtKZrFG_htFLqM9mfvrQfC6BhPhr/view",
    },
    {
        img: Project2,
        description: "Study Focus Tracker Website",
        link: "https://studysmartapp.netlify.app/",
    },
    {
        img: Project3,
        description: "Device to help avoid deer/car crashes",
        link: "https://drive.google.com/file/d/1cZZBRv0JSBBN5xddsOltD2IRMOhR539z/view",
    },
    {
        img: Project4,
        description: "Device to prevent foot-drop in MS patients",
        link: "https://drive.google.com/file/d/1nVCRlrHNeqkY9-ngTpobZdb37HY3PIxl/view",
    },
    {
        img: Project5,
        description: "Website that explains medical bills to patients",
        link: "https://devfolio.co/projects/medicost-69f9",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "tanushsbuisness@gmail.com",
    YOUR_FONE: "(412)-980-6188",
    description: "Contact me for more information about myself or my projects!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_k0x1m0o",
    YOUR_TEMPLATE_ID: "template_sx5oq5m",
    YOUR_USER_ID: "w0ke1089ufaNVEE5L",
};

const socialprofils = {
    github: "https://github.com/tanushshrivastava",
    linkedin: "https://www.linkedin.com/in/tanush-shrivastava/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};