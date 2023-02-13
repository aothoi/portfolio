import "./Work.css"
import { AiFillGithub } from 'react-icons/ai';

export const Work = () => {
  return (
    <div id="work" className="workMain">
      <p className="head">02. Featured Projects</p>
      <div className="workCards">
        <div className="workCard">
          <div className="projectTitle">
            <p className="projectName">RateMyResearch</p>
            <a href="https://github.com/suppaGonzal0/RateMyResearch" target="_blank" rel="noreferrer"><AiFillGithub className="projectIcon"/></a>
          </div>
          <p className="projectDesc">A website that allows users to rate, review, and add research papers.</p>
          <p className="projectTech">MongoDB · Express · React · Node · CSS</p>
        </div>

        <div className="workCard">
          <div className="projectTitle">
            <p className="projectName">Overseer</p>
            <a href="https://github.com/suppaGonzal0/Overseer" target="_blank" rel="noreferrer"><AiFillGithub className="projectIcon"/></a>
          </div>
          <p className="projectDesc">An order management project for large-scale production businesses.</p>
          <p className="projectTech">MySQL · SpringBoot · React · NextUI · CSS</p>
        </div>

        <div className="workCard">
          <div className="projectTitle">
            <p className="projectName">VaxTrak</p>
            <a href="https://github.com/suppaGonzal0/VaxTrak" target="_blank" rel="noreferrer"><AiFillGithub className="projectIcon"/></a>
          </div>
          <p className="projectDesc">A COVID-19 vaccine registration, management and case tracking website. </p>
          <p className="projectTech">MySQL · Express · React · Node · CSS</p>
        </div>
      </div>
    </div>
  )
}