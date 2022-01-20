import Jarhead from "../img/jmHeadshot.jpg";

const About = (props) => {
  return (
    <div>
      <h1 className="mb-5 justify-left sectionName">About:</h1>
      <div className="about d-flex abtRow">
        <div className="d-flex headshotSpace align-items-center justify-content-center">
          <img src={Jarhead} className="headshot" />
        </div>
        <div className="aboutText">
          <p>
            I am experienced with: <br />
            <b>
              Javascript, React, MongoDB, Python, Django, PostgreSQL, HTML &
              CSS.
            </b>
          </p>
          <p>
            I am a software developer that understands the communication and
            critical thinking that goes into problem solving and delivering a
            solution as part of a team. From my previous background in
            mechanical engineering, I have experience in large team
            coordination, mentorship, problem solving, and client interface.
          </p>
          <p>
            Because I am working on transitioning career paths, I am constantly
            working on coding challenges using leetcode and other resources.
            View my{" "}
            <strong>
              <a href="https://github.com/jmalabed">Github repository</a>
            </strong>{" "}
            to see my latest learning efforts.
          </p>
          <p>
            In my free time, I enjoy mountain biking, road cycling,
            skimboarding, and photography.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
