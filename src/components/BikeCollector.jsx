import BikeCollectorHome from "../img/BikeCollector.png";

const BikeCollector = (props) => {
  return (
    <div className="col d-flex flex-column align-items-center p-3">
      <h2 className="m-3">Bike Collector</h2>
      <div className="d-flex projRow">
        <a
          href="https://myparx.surge.sh"
          className="projRow d-flex align-items-center"
        >
          <img
            src={BikeCollectorHome}
            className="shadow-lg projectImg rounded"
            alt="The Bike Collector app home page"
          />
        </a>
        <div className="m-3 about mw-50 projRow p-3">
          <p>
            Bike Collector is the web app to help out the bicycle enthusiasts of
            the world.
          </p>
          <p>
            It stores maintenance data, rides, and pictures of all of your
            bikes. It also helps keep track of costs.
          </p>
          <p>
            Bike Collector was built using <b>Django</b> and <b>Python</b> on
            the front end, and <b>PostgreSQL</b> and <b>AWS S3</b> on the back
            end.
          </p>
          <p>Click the image to browse the website.</p>
        </div>
      </div>
    </div>
  );
};

export default BikeCollector;
