import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Nav, Navbar } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaExternalLinkAlt } from 'react-icons/fa';
import logo from "./logo512.png"
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const NavBar = () => {
    return (
        <Navbar fixed="top" expand="lg" className="bg-white">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto gap-lg-5 my-2 my-lg-1"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#about" className="navLink">01. About</Nav.Link>
                        <Nav.Link href="#industry" className="navLink">02. Industry</Nav.Link>
                        <Nav.Link href="#academia" className="navLink">03. Academia</Nav.Link>
                        <Nav.Link href="#skills" className="navLink">04. Skills</Nav.Link>
                        <Nav.Link href="#contact" className="navLink">05. Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const About = () => {
    return (
        <div id="about" className='min-vh-100 d-flex flex-column justify-content-center align-items-center text-center'>
            <h1>Hey, I'm Mehzabin</h1>
            <h2 className="text-muted">Software Engineer @ <a href="https://therapbd.com/" target='_blank' rel='noreferrer' className='text-muted'>Therap</a></h2>
            <p className="fs-4">
                My goal is to always craft secure, robust and reliable applications
            </p>
            <div className="row fs-6">
                <div className="col d-flex gap-1 align-items-center justify-content-center">
                    <IoLocationSharp />
                    <p className="m-0">Dhaka, Bangladesh</p>
                </div>
                <div className="col d-flex gap-1 align-items-center justify-content-center">
                    <SiGmail />
                    <a href='mailTo:mehzabin.aothoi1@gmail.com' className="m-0 text-black">mehzabin.aothoi1@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

const Industry = () => {
    return (
        <div id="industry" className='min-vh-100 d-flex flex-column justify-content-center align-items-center text-center'>
            <h2>Industry Experience</h2>
            <Card className="p-4 w-75 m-4 row">
                <div>
                    <h4>Software Engineer</h4>
                    <p className="fs-5"><a href="https://therapbd.com/" target='_blank' rel='noreferrer' className='text-black'>Therap (BD) Ltd.</a> | Oct 2023 - Present</p>
                    <p className="fs-6 text-muted">Spring Boot · JPA · Hibernate · Oracle Database · Microservices · RabbitMQ · React · Thymeleaf</p>
                </div>
            </Card>

            <Card className="p-4 w-75 m-4 row">
                <div>
                    <h4>Software Engineer Intern</h4>
                    <p className="fs-5"><a href="https://squarehealth.com.bd/" target='_blank' rel='noreferrer' className='text-black'>Square Health Ltd.</a> | Feb 2023 - May 2023</p>
                    <p className="fs-6 text-muted">Typescript · Angular · PrimeNG · Bootstrap · Git · Team work</p>
                </div>
            </Card>

            <Card className="p-4 w-75 m-4 row">
                <div>
                    <h4>Software Engineer Intern</h4>
                    <p className="fs-5"><a href="https://penguin.com.bd/" target='_blank' rel='noreferrer' className='text-black'>Penguin.com.bd</a> | Mar 2021 - Jun 2021</p>
                    <p className="fs-6 text-muted">React · React Native · SpringBoot · Git · Web Development · Teamwork</p>
                </div>
            </Card>
        </div>
    )
}

const Academia = () => {
    return (
        <div id="academia" className='min-vh-100 d-flex flex-column justify-content-center align-items-center text-center'>
            <h2>Academic Experience</h2>
            <Card className="p-4 w-75 m-4 row">
                <div>
                    <h4>Conference Publication</h4>
                    <p className="fs-5">Supervised Hybrid Model for Rumor Classification:
                        A Comparative Study of Machine and Deep Learning Approaches</p>
                    <p className="fs-6"><b>Mehzabin Sadat Aothoi</b>*, Samin Ahsan*, Najeefa Nikhat Choudhury, Annajiat Alim Rasel</p>
                    <a href="https://link.springer.com/chapter/10.1007/978-3-031-39831-5_25" target="_blank" rel='noreferrer'
                        className="fs-6 text-muted">https://doi.org/10.1007/978-3-031-39831-5 25</a>
                </div>
            </Card>
            <Card className="p-4 w-75 m-4 row">
                <div>
                    <h4>Teaching Assistant</h4>
                    <p className="fs-5"><a href="https://www.bracu.ac.bd/" target='_blank' rel='noreferrer' className='text-black'>BRAC University</a> | Feb 2022 - Dec 2022</p>
                    <p className="fs-6 text-muted">Mathematics · Python · Teaching · Communication · Management</p>
                </div>
            </Card>
            <Card className="p-4 w-75 m-4 row">
                <div>
                    <h4>B.Sc. in Computer Science & Engineering</h4>
                    <p className="fs-5"><a href="https://www.bracu.ac.bd/" target='_blank' rel='noreferrer' className='text-black'>BRAC University</a> | Jan 2019 - Jan 2023</p>
                    <p className="fs-6 text-muted">Highest Distinction · VC's List · Dean's List · 3.82/4.00</p>
                </div>
            </Card>
        </div>
    )
}

const Skills = () => {
    return (
        <div id="skills" className='min-vh-100 d-flex flex-column justify-content-center align-items-center text-center'>
            <h2>Technical Skills</h2>
            <div className="w-50 gap-3 mb-4 mt-5 d-flex flex-wrap justify-content-center">
                <Card className="p-2">Spring</Card>
                <Card className="p-2">Spring Boot</Card>
                <Card className="p-2">Hibernate</Card>
                <Card className="p-2">RabbitMQ</Card>
                <Card className="p-2">WebSocket</Card>
                <Card className="p-2">React</Card>
                <Card className="p-2">OracleDB</Card>
                <Card className="p-2">SSE</Card>
                <Card className="p-2">Microservices</Card>
                <Card className="p-2">Event-Driven</Card>
                <Card className="p-2">Java</Card>
                <Card className="p-2">JavaScript</Card>
                <Card className="p-2">Python</Card>
                <Card className="p-2">MySQL</Card>
                <Card className="p-2">PostgreSQL</Card>
                <Card className="p-2">Angular</Card>
                <Card className="p-2">Express</Card>
                <Card className="p-2">Thymeleaf</Card>
                <Card className="p-2">Bootstrap</Card>
                <Card className="p-2">HTML</Card>
                <Card className="p-2">CSS</Card>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <div class="d-flex flex-column min-vh-100"> <div id="contact" className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
            <h2>Let's Connect!</h2>
            <Card className="p-4 w-75 m-4 d-flex justify-content-between">
                <i className='fs-4'>I am open to project collaboration and research opportunities on software engineering</i>
                <div className="d-flex gap-3 mt-3 align-items-center justify-content-center">
                    <a href="mailTo:mehzabin.aothoi1@gmail.com">
                        <SiGmail style={{ fontSize: '1.5em' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/mehzabin/" target="_blank" rel="noreferrer"
                    ><BsLinkedin style={{ fontSize: '1.4em' }} />
                    </a>
                    <a href="https://github.com/aothoi" target="_blank" rel="noreferrer">
                        <AiFillGithub style={{ fontSize: '1.7em' }} />
                    </a>
                </div>
            </Card>
        </div>

            <footer class="mt-auto my-5 text-muted text-center">
                <div>
                    <p className="text-muted">Made With</p>
                    <img src={logo} alt="logo" style={{ width: '5em' }} />
                    <p className="text-muted">
                        <a href="https://github.com/aothoi/portfolio" target="_blank" rel="noreferrer">Source Code</a> <FaExternalLinkAlt style={{ fontSize: '0.8em' }} /> - Mehzabin Sadat Aothoi
                    </p>
                </div>
            </footer>

        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <About />
            <Industry />
            <Academia />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
