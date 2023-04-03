import "./css/Thirdsec.css";

function Thirdsec() {
  const links = [
    {
      link: "https://media.solostove.com/transform/c4948abb-fc81-4767-86fa-129b9246a051/SOLO_FALL22-3778?io=transform:fill,width:473,height:473",
      h3: (
        <h3 style={{ fontSize: "24px", fontWeight: "bolder" }}>
          A Pop Of Color
        </h3>
      ),
      p: <p>New hues to suit every ocasion.</p>,
      button: (
        <button className="deal-btn" type="submit">
          SHOP COLOR FIRE PITS
        </button>
      ),
    },
    {
      link: "https://media.solostove.com/transform/b7675bc2-d171-46c5-941f-a82d0ddce913/YUKON-STAND-SHIELD_Fall_Winter-Lifestyle-November-2021-4?io=transform:fill,width:473,height:473",
      h3: (
        <h3 style={{ fontSize: "24px", fontWeight: "bolder" }}>
          Bundle Up & Save
        </h3>
      ),
      p: <p>Magnify good moments for less.</p>,
      button: (
        <button className="deal-btn" type="submit">
          SHOP BUNDLES
        </button>
      ),
    },
    {
      link: "https://media.solostove.com/transform/7915ebd3-ff9e-4ce4-9c7a-5cc0177ea52c/Jack-Wolfsin-Collab-Ranger-FPCS-33?io=transform:fill,width:473,height:473",
      h3: (
        <h3 style={{ fontSize: "24px", fontWeight: "bolder" }}>
          Gather, Greet, And Eat-Together
        </h3>
      ),
      p: <p>The essential cooking collection.</p>,
      button: (
        <button className="deal-btn" type="submit">
          SHOP COOKING
        </button>
      ),
    },
  ];
  return (
    <div>
      <section className="container-fluid meetpi">
        <div className="row">
          <div
            className="col-lg-6"
            style={{ padding: "7rem", color: "white", textAlign: "justify" }}
          >
            <h1 style={{ fontWeight: "bolder" }}>Meet Pi</h1>
            <p>
              The pizza oven for everyone. Make wood-fired pizzas that impress,
              or bake with propane by adding on the gas burner. Pull good
              moments fresh from the fire with authentic design reinvented for
              the modern backyard.
            </p>
            <button className="meetpi-btn" type="submit">
              SHOP PIZZA OVEN
            </button>
          </div>
          <div
            className="col-lg-6"
            style={{ padding: "0", borderRadius: "5px" }}
          >
            <img
              className="img-fluid"
              src="https://media.solostove.com/transform/b92cb96b-bba0-4600-9fcd-4157f0b8fef8/Pi-Backyard-Arizona?io=transform:fill,width:800,height:800&quality=80"
              alt="sample"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </section>
      <section className="container-fluid ">
        <p className="header">The Hottest Deals Of The Year Are Here Now</p>
        <div
          className="row mt-3"
          style={{ fontFamily: " 'din-2014',sans-serif" }}
        >
          {links.map((ele) => (
            <div className="col-lg-4 mt-3">
              <img
                className="img-fluid"
                style={{ borderRadius: "5px" }}
                src={ele.link}
                alt="sample"
              />
              <br />
              <br />
              <div>
                {ele.h3}
                {ele.p}
                {ele.button}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Thirdsec;
