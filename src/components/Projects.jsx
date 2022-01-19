import TheAdministrator from "./TheAdministrator";
import MyParx from "./MyParx";
import BikeCollector from "./BikeCollector";
import SpaceJava from "./SpaceJava";

const Projects = (props) => {
  return (
    <div>
      <h1 className="mb-5 justify-left sectionName">My Projects</h1>
      <TheAdministrator />
      <hr className="pageDivide" />
      <SpaceJava />
      <hr className="pageDivide" />
      <MyParx />
      <hr className="pageDivide" />
      <BikeCollector />
    </div>
  );
};

export default Projects;
