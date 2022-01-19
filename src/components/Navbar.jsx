import linkedIn from "../img/linkedinLogo.png";
import github from "../img/github.png";

const Navbar = (props) => {
  return (
    <div className="d-flex justify-content-between w-100 align-items-center">
      <h1 className="justify-left m-3 myName">JARED MALABED</h1>
      <div className="d-flex align-items-center justify-content-center flex-column m-3">
        <p className="text-center">Connect with me:</p>
        <div className="row justify-content-center linkedIn"></div>
        <a
          href="https://www.linkedin.com/in/jaredmalabed/"
          className="row justify-content-center linkedIn"
        >
          <img src={linkedIn} className="m-1" />
        </a>
        <a
          href="https://github.com/jmalabed"
          className="row justify-content-center linkedIn"
        >
          <img src={github} className="m-1" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
