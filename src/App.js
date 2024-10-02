import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Skill} from './skill/Skill';
import {Contact} from './contact/Contact';
import {Card, Container, Nav, Navbar} from "react-bootstrap";
import {MdLocationPin} from "react-icons/md";
import {HiMail} from "react-icons/hi";

const NavBar = () => {
    return (
        <Navbar fixed="top" expand="lg" className="bg-white">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto gap-lg-5 my-2 my-lg-1"
                        style={{maxHeight: '100px'}}
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
        // <div className='navMain'>
        //   <nav>
        //     <a href='#about'>01. About</a>
        //     <a href='#work'>02. Work</a>
        //     <a href='#skill'>03. Skill</a>
        //     <a href='#contact'>04. Contact</a>
        //   </nav>
        // </div>
    )
}

const About = () => {
    return (
        <div id="about" className='min-vh-100 d-flex flex-column justify-content-center align-items-center text-center'>
            <h1>Hey, I'm Mehzabin</h1>
            <h2 className="text-muted">Software Engineer @ Therap</h2>
            <p className="fs-4">
                My goal is to always craft secure, robust and reliable applications
            </p>
            <div className="row fs-6">
                <div className="col d-flex gap-1 align-items-center justify-content-center">
                    <MdLocationPin style={{fill: '#000'}}/>
                    <p className="m-0">Dhaka, Bangladesh</p>
                </div>
                <div className="col d-flex gap-1 align-items-center justify-content-center">
                    <HiMail style={{fill: '#000'}}/>
                    <p className="m-0">mehzabin.aothoi1@gmail</p>
                </div>
            </div>
        </div>
    )
}

const Industry = () => {
    return (
        <div id="industry" className='min-vh-100 text-center'>
            <h2>Industry Experience</h2>
            <div className="col d-flex flex-column align-items-center justify-content-center">
                <Card className="p-4 w-75 m-4 row">
                    <div>
                        <h4>Software Engineer</h4>
                        <p className="fs-5">Therap (BD) Ltd. | Oct 2023 - Present</p>
                        <p className="fs-6 text-muted">Spring Boot · JPA · Hibernate · Oracle Database · RabbitMQ · React · Thymeleaf</p>
                    </div>
                </Card>

                <Card className="p-4 w-75 m-4 row">
                    <div>
                        <h4>Software Engineer Intern</h4>
                        <p className="fs-5">Square Health Ltd. | Feb 2023 - May 2023</p>
                        <p className="fs-6 text-muted">Typescript · Angular · PrimeNG · Bootstrap · Git · Team work</p>
                    </div>
                </Card>

                <Card className="p-4 w-75 m-4 row">
                    <div>
                        <h4>Software Engineer Intern</h4>
                        <p className="fs-5">Penguin.com.bd | Mar 2021 - Jun 2021</p>
                        <p className="fs-6 text-muted">React · React Native · SpringBoot · Git · Web Development · Teamwork</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}

const Industry = () => {
    return (
        <div id="industry" className='min-vh-100 text-center'>
            <h2>Industry Experience</h2>
            <div className="col d-flex flex-column align-items-center justify-content-center">
                <Card className="p-4 w-75 m-4 row">
                    <div>
                        <h4>Software Engineer</h4>
                        <p className="fs-5">Therap (BD) Ltd. | Oct 2023 - Present</p>
                        <p className="fs-6 text-muted">Spring Boot · JPA · Hibernate · Oracle Database · RabbitMQ · React · Thymeleaf</p>
                    </div>
                </Card>

                <Card className="p-4 w-75 m-4 row">
                    <div>
                        <h4>Software Engineer Intern</h4>
                        <p className="fs-5">Square Health Ltd. | Feb 2023 - May 2023</p>
                        <p className="fs-6 text-muted">Typescript · Angular · PrimeNG · Bootstrap · Git · Team work</p>
                    </div>
                </Card>

                <Card className="p-4 w-75 m-4 row">
                    <div>
                        <h4>Software Engineer Intern</h4>
                        <p className="fs-5">Penguin.com.bd | Mar 2021 - Jun 2021</p>
                        <p className="fs-6 text-muted">React · React Native · SpringBoot · Git · Web Development · Teamwork</p>
                    </div>
                </Card>

                <Card className="p-4 w-75 m-4 row">
                    <div className="title">
                        <p className="jobTitle">Teaching Assistant</p>
                        <p className="company">BRAC University | Feb 2022 - Dec 2022</p>
                        <p className="skills">Mathematics · Python · Teaching · Communication · Management</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <About/>
            <Industry/>
            <Skill/>
            <Contact/>
        </div>
    );
}

export default App;
