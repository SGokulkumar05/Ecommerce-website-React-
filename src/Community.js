import React from "react";
import "./css/App.css";
function Community() {
  const blog = [
    {
      blink:
        "https://www.solostove.com/en-us/community/blog/p/top-off-your-smokeless-tabletop-fire-pit-with-mesa-accessory-pack",
      ilink:
        "https://media.solostove.com/transform/65faf936-7d88-4519-9f6d-217713f729a1/Solo-Jan23-MesaXL-47-jpg?io=transform:fill,width:907,height:510",
      name: "GEAR",
      title:
        "Top Off Your Smokeless Tabletop Fire Pit With Mesa Accessory Pack",
    },
    {
      blink:
        "https://www.solostove.com/en-us/community/blog/p/top-off-your-smokeless-tabletop-fire-pit-with-mesa-accessory-pack",
      ilink:
        "https://media.solostove.com/transform/65faf936-7d88-4519-9f6d-217713f729a1/Solo-Jan23-MesaXL-47-jpg?io=transform:fill,width:907,height:510",
      name: "GEAR",
      title:
        "Top Off Your Smokeless Tabletop Fire Pit With Mesa Accessory Pack",
    },
    {
      blink:
        "https://www.solostove.com/en-us/community/blog/p/top-off-your-smokeless-tabletop-fire-pit-with-mesa-accessory-pack",
      ilink:
        "https://media.solostove.com/transform/65faf936-7d88-4519-9f6d-217713f729a1/Solo-Jan23-MesaXL-47-jpg?io=transform:fill,width:907,height:510",
      name: "GEAR",
      title:
        "Top Off Your Smokeless Tabletop Fire Pit With Mesa Accessory Pack",
    },
    {
      blink:
        "https://www.solostove.com/en-us/community/blog/p/top-off-your-smokeless-tabletop-fire-pit-with-mesa-accessory-pack",
      ilink:
        "https://media.solostove.com/transform/65faf936-7d88-4519-9f6d-217713f729a1/Solo-Jan23-MesaXL-47-jpg?io=transform:fill,width:907,height:510",
      name: "GEAR",
      title:
        "Top Off Your Smokeless Tabletop Fire Pit With Mesa Accessory Pack",
    },
  ];

  return (
    <section
      class="container-fluid"
      style={{ marginTop: "9rem", borderBottom: ".5px solid grey" }}
    >
      <div class="row">
        <div class="col-md">
          <a
            href="https://www.solostove.com/en-us/community/blog/p/top-off-your-smokeless-tabletop-fire-pit-with-mesa-accessory-pack"
            style={{ textDecoration: "none" }}
          >
            <img
              class="img-fluid"
              src="https://media.solostove.com/transform/65faf936-7d88-4519-9f6d-217713f729a1/Solo-Jan23-MesaXL-47-jpg?io=transform:fill,width:907,height:510"
              alt=""
              style={{ width: "50rem", borderRadius: "5px" }}
            />

            <div class="gear-data">
              <div
                style={{
                  fontSize: "14px",
                  color: "grey",
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                GEAR
              </div>
              Top Off Your Smokeless Tabletop Fire Pit With Mesa Accessory Pack
            </div>
          </a>
        </div>
        <div class="col-md">
          <div
            style={{
              fontSize: "26px",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Features
          </div>
          <div>
            {blog.map((ele) => (
              <a
                href={ele.blink}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  marginBottom: "1.3rem",
                }}
              >
                <img
                  class="img-fluid"
                  src={ele.ilink}
                  alt=""
                  style={{ width: "85px", borderRadius: "5px" }}
                />

                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      color: "grey",
                      fontWeight: "bold",
                      marginTop: "15px",
                    }}
                  >
                    {ele.name}
                  </div>
                  {ele.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
