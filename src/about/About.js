import "./About.css"

export const About = () => {
  return (
    <div id="about" className="aboutMain">
      <p className="head"> <span>01.</span> Experiences I Have Gained</p>
      <div className="aboutSections">

        <div className="aboutSection">
          <p className="jobTitle">Software Engineer (Internship)</p>
          <p className="body">
          <b>Penguin.com.bd | Mar 2021 - Jun 2021</b>
          <br />
            <li>Designed and developed Spring Boot microservices</li>
            <li>Wrote testable codes and test cases</li>
            <li>Created UI components using React.js & React Native</li>
          </p>
          <p className="skills">React · React Native · SpringBoot · Git · Web Development · Teamwork</p>
        </div>

        <div className="aboutSection">
          <p className="jobTitle">Student Tutor (Part-time)</p>
          <p className="body">
          <b>BRAC University (MNS Department) | Feb 2022 - Dec 2022</b>
          <br />
            <li>Checked theory assignment scripts & lab tasks</li>
            <li>Provided consultation to around 100 students every semester</li>
            <li>Maintained grade sheets & assisted in course management</li>
          </p>
          <p className="skills">Mathematics · Teaching · Communication · Management · Python</p>
        </div>

        <div className="aboutSection">
          <p className="jobTitle">Graphic Designer (Part-time)</p>
          <p className="body">
          <b>East West University (ISLM) | Jun 2018 - Dec 2020</b>
          <br />
            <li>Designed merchandise for conferences</li>
            <li>Designed posters, flyers, and banners for events</li>
            <li>Created social media contents</li>
          </p>
          <p className="skills">Graphic Design · Adobe Photoshop · Adobe Illustrator</p>
        </div>
      </div>
    </div>
  )
}