import TheAdministratorHome from "../img/TheAdministrator.png";
const TheAdministrator = (props) => {
  return (
    <div className="col d-flex flex-column align-items-center p-3">
      <h2 className="m-3">The Administrator</h2>
      <div className="d-flex projRow">
        <a
          href="http://office-culture.surge.sh/"
          className="mobileHalf d-flex align-items-center"
        >
          <img
            src={TheAdministratorHome}
            className="shadow-lg projectImg rounded"
            alt="The Administrator app home page"
          />
        </a>
        <div className="m-3 about mw-50 mobileHalf p-3">
          <p>
            This application is built using the <b>MERN</b> stack and completes
            SMS notifications using <b>Twilio's SMS API</b>.
          </p>
          <p>
            The Administrator was a solo project that was completed in one week.
          </p>
          <p>
            This application takes office scheduling and resource management
            software, and adds in COVID notifications.
          </p>
          <p>Click the image to browse the website.</p>
        </div>
      </div>
    </div>
  );
};

export default TheAdministrator;
