import SpaceJavaHome from "../img/SpaceJava.png";
const SpaceJava = (props) => {
  return (
    <div className="col d-flex flex-column align-items-center p-3">
      <h2 className="m-3">Space Travel</h2>
      <div className="d-flex projRow">
        <a
          href="https://space-java.surge.sh/"
          className="mobileHalf d-flex align-items-center"
        >
          <img
            src={SpaceJavaHome}
            className="shadow-lg projectImg rounded"
            alt="Space-Travel home page"
          />
        </a>
        <div className="m-3 about mw-50 mobileHalf p-3">
          <p>
            This application is built using <b>React</b> and serves data through
            a back-end <b>Java Spring</b> server.
          </p>
          <p>
            This application calculates the time it would take to travel from
            one planet to another by sending the planets and speed to the back
            end server. The back end server then calculates the time and sends a
            response in JSON back.
          </p>
          <p>
            This application is very basic but the first adventure into using an
            alternative server other than Javascript Node/Express.
          </p>
          <p>Click the image to browse the website.</p>
        </div>
      </div>
    </div>
  );
};

export default SpaceJava;
