import EMGHome from "../img/EMGHome.png";

const EMG = (props) => {
  return (
    <div className="col d-flex flex-column align-items-center p-3">
      <h2 className="m-3">Expeditionary Medical Group</h2>
      <div className="d-flex projRow">
        <a
          href="https://ukraine-fe.vercel.app/"
          className="mobileHalf d-flex align-items-center"
        >
          <img
            src={EMGHome}
            className="shadow-lg projectImg rounded"
            alt="Expeditionary Medical Group app home page"
          />
        </a>
        <div className="m-3 about mw-50 mobileHalf p-3">
          <p>
            This application was built using the <b>MERN</b> stack. The front
            end is deployed on <b>Vercel</b> and the back end is deployed with{" "}
            <b>Heroku</b>.
          </p>
          <p>
            EMG is a volunteer project that collaborates with a group of
            Physician Assistants.
          </p>
          <p>
            EMG provides traumatic care resources to those that may not have
            access to them in places of conflict such as Ukraine and Russia. The
            site is available in Ukrainian and Russian in order to help with
            accessability.
          </p>
          <p>Click the image to browse the website.</p>
        </div>
      </div>
    </div>
  );
};

export default EMG;
