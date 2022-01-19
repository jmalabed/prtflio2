import MyParxHome from "../img/MyParx.png";

const MyParx = (props) => {
  return (
    <div className="col d-flex flex-column align-items-center p-3">
      <h2 className="m-3">MyParx</h2>
      <div className="d-flex projRow">
        <a
          href="https://myparx.surge.sh"
          className="mobileHalf d-flex align-items-center"
        >
          <img
            src={MyParxHome}
            className="shadow-lg projectImg rounded"
            alt="The Administrator app home page"
          />
        </a>
        <div className="m-3 about mw-50 mobileHalf p-3">
          <p>
            MyParx was a four person group project that was lead by myself. It
            was designed for the people that have National Parks on their bucket
            lists.
          </p>
          <p>
            It utilizes the National Parks Services <b>API</b> to allow a
            visitor to search National Parks, build a bucket list, and build a
            packing list to accompany them on that journey.
          </p>
          <p>
            MyParx was built using the <b>MERN</b> stack and hosts data on{" "}
            <b>MongoDB/Mongo Atlas </b>.
          </p>
          <p>Click the image to browse the website.</p>
        </div>
      </div>
    </div>
  );
};

export default MyParx;
