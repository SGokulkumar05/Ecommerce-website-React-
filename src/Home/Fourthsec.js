import "./css/Thirdsec.css";
import {
  StarFill,
  Truck,
  EmojiSmile,
  ShieldCheck,
  CreditCard,
} from "react-bootstrap-icons";
function Fourthsec() {
  const links = [
    "https://images-cdn.ubuy.co.in/63400413c80f61732110b2e3-solo-stove-yukon-with-stand-portable.jpg",
    "https://reviewed-com-res.cloudinary.com/image/fetch/s--YX68GLu0--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_792/https://reviewed-production.s3.amazonaws.com/attachment/daef247f0a134d36/solostovegrill_burgers.jpg",
    "https://images.thdstatic.com/productImages/909f32b0-454a-4419-9c13-7c0eb533caf0/svn/stainless-steel-solo-stove-wood-burning-fire-pits-ssyuk-27-2-0-4f_600.jpg",
    "https://i0.wp.com/angrybbq.com/wp-content/uploads/2022/11/Solo-Stove-Bonfire-with-Cook-Top-Review-2-1024x768.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/60f6b01a4561c1e5956f1487/0x0.jpg?format=jpg&width=1200",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3pxMpOne6WNvNK_qO--4f5hAZXPFTmSP0w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRErEsgYxMnkmqigT-Nx0hJjbZlSzGRQF01cc7QJz2lx6gbZmhJ3CHFDZ5Esd857LB9j8I&usqp=CAU",
    "https://media.istockphoto.com/id/819949828/photo/late-evening-campfire-at-a-beatiful-canadian-chalet.jpg?s=612x612&w=0&k=20&c=sD663Ow_2NihMqeefmUiKW5xvBg-1C_ySA90CZuj17o=",
  ];
  const policy1 = [
    {
      icon: (
        <Truck
          style={{ color: "#e4531b", fontSize: "50px", fontWeight: "bolder" }}
        />
      ),
      h5: (
        <h5
          style={{
            fontSize: "17px",
            fontWeight: "600",
            padding: "12px 0 4px 0",
          }}
        >
          Free Shipping *
        </h5>
      ),
      p: (
        <p
          style={{
            fontSize: "14px",
            padding: "0 2rem",
          }}
        >
          Free shipping on orders $299+ & free returns.
        </p>
      ),
    },
    {
      icon: (
        <ShieldCheck
          style={{ color: "#e4531b", fontSize: "50px", fontWeight: "bolder" }}
        />
      ),
      h5: (
        <h5
          style={{
            fontSize: "17px",
            fontWeight: "600",
            padding: "12px 0 4px 0",
          }}
        >
          Lifetime Warranty
        </h5>
      ),
      p: (
        <p
          style={{
            fontSize: "14px",
            padding: "0 2rem",
          }}
        >
          We warranty every Solo Stove product.
        </p>
      ),
    },
  ];
  const policy2 = [
    {
      icon: (
        <EmojiSmile
          style={{ color: "#e4531b", fontSize: "50px", fontWeight: "bolder" }}
        />
      ),
      h5: (
        <h5
          style={{
            fontSize: "17px",
            fontWeight: "600",
            padding: "12px 0 4px 0",
          }}
        >
          30-Day Returns
        </h5>
      ),
      p: (
        <p
          style={{
            fontSize: "14px",
            padding: "0 2rem",
          }}
        >
          30-day returns if you’re not satisfied.
        </p>
      ),
    },
    {
      icon: (
        <CreditCard
          style={{ color: "#e4531b", fontSize: "50px", fontWeight: "bolder" }}
        />
      ),
      h5: (
        <h5
          style={{
            fontSize: "17px",
            fontWeight: "600",
            padding: "12px 0 4px 0",
          }}
        >
          Flexible Payments
        </h5>
      ),
      p: (
        <p
          style={{
            fontSize: "14px",
            padding: "0 2rem",
          }}
        >
          Flexible buy now, pay later options available.
        </p>
      ),
    },
  ];
  return (
    <div>
      <section className="container-fluid">
        <p className="header">Create Good Moments For Lasting Memories</p>
        <article className="text-center" style={{ marginBottom: "20px" }}>
          Tag us @SoloStove on Instagram to be featured.
        </article>
        <div className="grid">
          {links.map((ele) => (
            <div className="show-image">
              <img className="img-fluid" src={ele} alt="sample" />
              <div className="img-top">
                <div
                  style={{
                    color: "black",
                    fontSize: "1.25rem",
                    textAlign: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <StarFill />
                  &nbsp;
                  <StarFill />
                  &nbsp;
                  <StarFill />
                  &nbsp;
                  <StarFill />
                  &nbsp;
                  <StarFill />
                </div>
                <button type="submit" className="img-btn">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
          <button
            className="btn btn-outline-dark"
            style={{ margin: "6px auto" }}
            type="submit"
          >
            LOAD MORE
          </button>
        </div>
      </section>
      <section className="container-xxl">
        <p className="text-center header" style={{ marginTop: "3rem" }}>
          Why Choose Solo Stove?
        </p>
        <div
          style={{
            borderBottom: ".35rem solid #e4531b",
            width: "3.5rem",
            margin: "auto",
          }}
        ></div>
        <div className="row icons text-center" style={{ marginTop: "2rem" }}>
          <div className="col-md-6">
            <div className="row">
              {policy1.map((ele) => (
                <div className="col-6 ">
                  {ele.icon}
                  {ele.h5}
                  {ele.p}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              {policy2.map((ele) => (
                <div className="col-6 ">
                  {ele.icon}
                  {ele.h5}
                  {ele.p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fourthsec;
