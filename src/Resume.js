import './Resume.css'
import profile_pic from './profile_pic.jpg'
function Resume1() {
    return (
        <>
            <h1>PALLAVI PRITI</h1>
            <h2>A Passionate Front-end Developer</h2>
            <p>As a passionate and motivated Frontend Developer, I am eager to leverage my skills in web development and design to contribute to innovative projects. With a solid foundation in HTML, CSS, and JavaScript,React I am dedicated to creating user-friendly and visually appealing websites.</p>
        </>

    )

}

export function Projects() {

    return (

        <>
            <h4 className='heading' >Projects and Achievents : </h4><hr color='black' ></hr>
            <h3 className='project-head' >⚫ Hand Gesture Robot</h3>
            <p className='project-desc'>A hand gesture-controlled robot car that can be controlled through the movement of the hand. we used a band that was worn
                on the hand and connected to the car via Bluetooth. The band had an accelerometer and gyroscope that detected the
                movement Of the hand and sent signals to the car. This project required a lot Of prograrnming and calibration, but the end
                result was worth it. It was amazing to see the car move in response to the movement of the hand.</p>
            <h3 className='project-head' >⚫ Groccery-Website</h3>
            <p className='project-desc' >
                My-Grocery is an eCommerce based web application for my Web Programming project.
                The website is developed by using only frontend languages HTML & CSS .
                It is my personal project .I applied my learnings to make this website responsive.
                
            </p>
        </>
    )
}


export function Internship() {
    return (

        <>
        <h4  className='heading'>Internship:</h4>
           <hr color='black' ></hr>
            <h3 className='project-head' >⚫Front-end development</h3>
            <h3>Preego Digital India Private limited</h3>
            <p className='project-desc'>

                I did an Internship  based on frontend development at Preego Digital India Private limited ,Delhi from march 2022 to may 2022. My work was to buld a contact page  for the company and as well as to designe  a logo for the same .  The technology used or creating the web page were  HTML,CSS and JAVASCRIPT . During my Internship period I learnt  to work  in a group project. i learnt how to perform under pressure and complte the project ontime.
            </p>

            <h3 className='project-head' >⚫WEb development</h3>
            <h3>Bharat Intern</h3>
            <p className='project-desc'>
                <ul>
                    <li>Portfolio Website </li>
                    <li> Homepage of Netflix: </li>
                    <li> Temperature Converter </li>
                </ul>


            </p>
            <h3 className='project-head' >⚫Java Programming</h3>
            <h3>Codsoft</h3>
            <p className='project-desc'>
                <ul>
                    <li>Number Game</li>
                    <li> ATm Interface</li>
                    <li>Student Course Registraton System</li>
                    <li>Student Grade Calculator</li>
                </ul>
            </p>
        </>
    )
}

export function Certificate() {
    return (

        <>
         <h4  className='heading'>Certificates:</h4>
          <hr color='black' ></hr>
            <h3 className='project-head' >Web Development bootstrap</h3>

            <p>The course was at Udemy platform which contain all the frontend web
                development technologies explained in details.</p>
            <h3 className='project-head' >Data Structure and Algorithm</h3>
            <p>I opted this course from Udemy itself. The course contains all the aspects of
                Data Structure</p>
        </>
    )
}

export function Contact() {
    return (
        <>
            <nav className='sidebar'>
                <img className='image' src={profile_pic} alt='' />
                <div>
                <h3  className='cnct-head' >CONTACT</h3>
                <hr></hr>
                <ul>Phone
                    <li>940637636</li>
                </ul>
                <br></br>
                <ul>Email
                    <li>pallavipriti016@gmail.com</li>
                </ul>

                <ul>Social-links
                    <li><a href="https://github.com/Pallavipriti" >pallavipriti</a></li>
                    <li><a href="https://www.linkedin.com/in/pallavi-priti-326196209/" >pallavi-priti-326196209</a> </li>
                    <li><a href="https://twitter.com/pallavipriti162" >@pallavipriti162</a></li>

                </ul>
                <ul>Address
                    <li>TULAS Institute ,Dehradun</li>
                    <li>248011(Uttrakhand)</li>
                </ul></div>
                
                <div>

                    <h3 className='cnct-head' >EDUCATION</h3>
                    <hr></hr>
                    <ul>2020-2024
                        <li>Batchlor of Computer Science Engineering</li>
                        <li>TULAS Institute,Dehradun</li>
                    </ul>

                    <ul>2017-2019
                        <li>Higher Secondary Schooling</li>
                        <li>Saraswati Vidya Mandir,Bettiah Bihar</li></ul>

                    <ul>2016-1017
                        <li>Secondary Schooling</li>
                        <li>Saraswati Vidya Mandir,Bettiah Bihar</li>
                    </ul>
                </div>
                <div>
                    <h3 className='cnct-head' >SKILLS</h3>
                    <hr></hr>
                    <ul>
                        <li>C</li>
                        <li>JAVA</li>
                        <li>PYTHON</li>
                        <li>HTML5-CSS3</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT</li>
                        <li>BOOTSTRAP</li>
                        

                    </ul>
                
                </div>

            </nav>
        </>
    )
}

export default Resume1