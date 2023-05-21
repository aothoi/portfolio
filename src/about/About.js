import "./About.css"

export const About = () => {
  return (
    <div id="about" className="aboutMain">
      <p className="head">01. Experiences I Have Gained</p>
      <div className="aboutSectionCards">

      <div className="aboutSectionCard">
          <div className="title">
            <p className="jobTitle">Software Engineer Intern</p>
            <p className="company">Square Health Ltd. | Feb 2023 - May 2023</p>
            <p className="skills">Typescript · Angular · PrimeNG · Bootstrap · Git · Team work</p>
          </div>
          <p className="body">
            <li>Implemented responsive interfaces using Angular and Bootstrap</li>
            <li>Ensured secure and optimized frontend performance</li>
            <li>Designed the database and analyzed requirement specifications</li>
          </p>
        </div>

        <div className="aboutSectionCard">
          <div className="title">
            <p className="jobTitle">Software Engineer Intern</p>
            <p className="company">Penguin.com.bd | Mar 2021 - Jun 2021</p>
            <p className="skills">React · React Native · SpringBoot · Git · Web Development · Teamwork</p>
          </div>
          <p className="body">
            <li>Implemented restful APIs using Springboot</li>
            <li>Designed and developed microservices</li>
            <li>Created UI components using React</li>
          </p>
        </div>

        <div className="aboutSectionCard">
          <div className="title">
            <p className="jobTitle">Teaching Assistant</p>
            <p className="company">BRAC University | Feb 2022 - Dec 2022</p>
            <p className="skills">Mathematics · Teaching · Communication · Management · Python</p>
          </div>
          <p className="body">
            <li>Graded theory assignments & lab tasks</li>
            <li>Provided consultation to around 100 students/semester</li>
            <li>Maintained grade sheets & assisted in course management</li>
          </p>
        </div>

        <div className="aboutSectionCard">
          <div className="title">
            <p className="jobTitle">Graphic Designer</p>
            <p className="company">East West University | Jun 2018 - Dec 2020</p>
            <p className="skills">Graphic Design · Adobe Photoshop · Adobe Illustrator</p>
          </div>
          <p className="body">
            <li>Designed merchandise for conferences</li>
            <li>Conceptualize visuals based on requirements</li>
            <li>Designed posters, flyers, and banners for events</li>
          </p>
        </div>
      </div>
    </div>
  )
}