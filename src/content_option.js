import photo from "./assets/images/your-photo.png"

const logotext = "TANUSH";
const meta = {
    title: "Tanush Shrivastava",
    description: "I’m Tanush Shrivastava, an avid software engineer attending the University of Wisconsin",
};

const introdata = {
    title: "I’m Tanush Shrivastava",
    animated: {
        first: "SDE Intern @ Amazon",
        second: "Junior at UW-Madison",
    },
    description: "I am a highly motivated individual who is always striving to expand my knowledge and skillset. I am an incoming SDE Intern at Amazon on the Supply Chain Forecasting team. During the Summer of 2024, I had the opportunity to intern at PNC Bank, where I gained hands-on experience and also continued contributing part-time during the academic year. In this role, I developed an internal automation tool utilizing React.js, Python, and MongoDB, showcasing my technical proficiency and ability to create impactful solutions.",
    descriptionTwo: "My expertise spans across artificial intelligence, database management, and web development. Additionally, I hold a certification in Google Cloud's Machine Learning Pathway, further demonstrating my commitment to staying at the forefront of technological advancements.",
    descriptionThree: "In my free time, I like to 3D Print, using Fusion 360 as my CAD software. I also enjoy watching and playing football",
    your_img_url: photo,
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
        name: "JavaScript",
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

import Project1 from "./assets/images/Project1.png";
import Project2 from "./assets/images/Project2.png";
import Project3 from "./assets/images/Project3.png";
import Project4 from "./assets/images/Project4.png";
import Project5 from "./assets/images/Project5.png";
import Project6 from "./assets/images/Project6.png";


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
    {
        img: Project6,
        description: "Website that meal plans based on nutrition needs",
        link: "https://mhacks2024.netlify.app",
    },
    
];

const contactConfig = {
    Email: "tanushsbusiness@gmail.com",
    Phone: "(412)-980-6188",
    description: "Contact me for more information about myself or my projects!",
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
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};