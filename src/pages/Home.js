import Experience from "../components/Experience";
import Promotion from "../components/Promotion";
import Arrow from "../components/Arrow";
import Covid from "../components/Covid";
import NearHome from "../components/NearHome";
import TraiNghiem from "../components/TraiNghiem";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  return (
    <div>
      <div className="css-1dbjc4n" data-testid="StandarizedOTPFlow" />
      <div
        className="css-1dbjc4n r-14lw9ot r-bnwqim r-13qz1uu r-1e2svnr"
        style={{ marginTop: "100px" }}
      >
        <div className="css-1dbjc4n r-184en5c">
          <div className="css-1dbjc4n r-1ifxtd0">
            <div className="css-1dbjc4n">
              <div className="css-1dbjc4n r-6koalj r-18u37iz r-1777fci r-1wzrnnt r-u8s1d r-13qz1uu r-184en5c">
                <div className="css-1dbjc4n r-jg6ec0 r-9bullz" />
              </div>
              <div className="css-1dbjc4n">
                <div className="css-1dbjc4n r-kul7p6 r-1udh08x">
                  <img
                    importance="low"
                    loading="lazy"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2019/11/26/1574782343873-4868281cc1be2523f5d5cc575a3c1daa.jpeg?tr=h-400,q-75"
                    decoding="async"
                    height={400}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />
                  <div className="css-1dbjc4n r-1awozwy r-1pi2tsx r-1777fci r-1rb1i5q r-u8s1d r-uwe93p r-136ojw6" />
                </div>
              </div>
              <div className="css-1dbjc4n r-obd0qt r-6koalj r-18u37iz r-1mvsivf r-1777fci r-u8s1d r-13qz1uu r-184en5c">
                <div className="css-1dbjc4n">
                  <div className="css-1dbjc4n" style={{ top: "-16px" }} />
                  <div className="css-1dbjc4n r-1jgb5lz r-l0gqae">
                    <div>
                      <div className="css-1dbjc4n"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-1dbjc4n r-6koalj r-18u37iz r-1777fci r-u8s1d r-gaxom6 r-13qz1uu">
                <div className="css-1dbjc4n r-6koalj r-18u37iz r-1777fci r-13qz1uu">
                  <div className="css-1dbjc4n r-jg6ec0 r-9bullz" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ex */}
        <div className="css-1dbjc4n r-6koalj r-18u37iz r-1777fci r-13qz1uu">
          <div className="css-1dbjc4n r-jg6ec0 r-9bullz">
            <div className="css-1dbjc4n" id="merchandising">
              <div className="css-1dbjc4n" data-testid="merch-section">
                {/* experience */}
                <Experience />
                <Promotion />
                {/* experience */}
                <Arrow />
                <Covid />
                <NearHome />
              </div>
              <span />
            </div>
          </div>
        </div>
        {/* ex */}
        <TraiNghiem />
      </div>
    </div>
  );
};
export default Home;
