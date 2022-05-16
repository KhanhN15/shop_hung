import List from "../components/List";
import axios from "axios";
import { useState, useEffect } from "react";

const ListTour = () => {
  const [listTour, setListTour] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://travelclone.herokuapp.com/")
      .then((response) => {
        if (response.status === 200) {
          setListTour(response.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleChangeParam = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`https://travelclone.herokuapp.com/search?q=${search}`)
      .then((response) => {
        if (response.status === 200) {
          setListTour(response.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2019/12/04/1575430518767-1fc642d45c0ab4008c1eba72a17a2780.jpeg?tr=h-242,q-75"
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
                      <div className="css-1dbjc4n">
                        <div className="css-1dbjc4n r-14lw9ot r-kdyh1x r-rkbeli r-18u37iz r-ymttw5 r-tvv088">
                          <div className="css-1dbjc4n r-1awozwy r-18u37iz r-16y2uox r-1777fci r-edyy15">
                            <div
                              className="css-1dbjc4n r-14lw9ot r-1l31rp8 r-kdyh1x r-rs99b7 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1wyyakw"
                              style={{ height: "calc(100% - 2)" }}
                            />
                            <div className="css-1dbjc4n r-1kb76zh">
                              <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9ce2df7066af89022702b2b17058582c.svg"
                                width={24}
                                height={24}
                              />
                            </div>
                            <input
                              type="text"
                              onChange={(e) => handleChangeParam(e)}
                              value={search}
                              placeholder="Tìm hoạt động hoặc điểm đến"
                              className="css-11aywtz r-cwxd7f r-13awgt0 r-1sixt3s r-ubezar r-135wba7 r-bcqeeo r-1ny4l3l r-10paoce r-13n6l4s"
                            />
                          </div>
                          <div
                            aria-live="polite"
                            role="button"
                            tabIndex={0}
                            className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-1ow6zhx r-qtfnoi r-10paoce r-1guathk r-5njf8e r-1otgn73 r-lrvibr"
                            style={{ backgroundColor: "rgba(1, 148, 243, 1)" }}
                          >
                            <div
                              className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1777fci"
                              style={{ opacity: 1 }}
                            >
                              <div
                                dir="auto"
                                onClick={handleSearch}
                                aria-hidden="true"
                                className="css-901oao css-bfa6kz r-jwli3a r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                              >
                                Search
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                {/* List */}
                <div className="css-1dbjc4n">
                  <div className="css-1dbjc4n r-6koalj r-pw2am6">
                    <div className="css-1dbjc4n">
                      <div className="css-1dbjc4n r-18u37iz r-1h0z5md">
                        <h1
                          aria-level={1}
                          dir="auto"
                          role="heading"
                          className="css-4rbku5 css-901oao css-bfa6kz r-1sixt3s r-1x35g6 r-b88u0q r-vrz42v r-fdjqy7"
                          style={{ color: "rgba(67, 67, 67, 1)" }}
                        >
                          Các tour du lịch
                        </h1>
                      </div>
                      <div
                        dir="auto"
                        className="css-901oao css-bfa6kz r-1sixt3s r-ubezar r-majxgm r-135wba7 r-1s2bzr4 r-fdjqy7"
                        style={{ color: "rgba(143, 143, 143, 1)" }}
                      >
                        Các điểm tham quan giải trí quốc tế
                      </div>
                    </div>
                    <div className="css-1dbjc4n r-1wzrnnt">
                      <div className="css-1dbjc4n r-6koalj r-18u37iz r-69vrnd">
                        <div className="css-1dbjc4n r-1udh08x r-13qz1uu">
                          <div className="css-1dbjc4n r-1e081e0 r-1yzf0co">
                            <div className="css-1dbjc4n r-150rngu r-18u37iz r-16y2uox r-1wbh5a2 r-lltvgl r-buy8e9 r-2eszeu r-1sncvnh">
                              <div className="css-1dbjc4n r-18u37iz"></div>
                            </div>
                          </div>
                          <div
                            className="css-1dbjc4n r-6koalj r-18u37iz r-13qz1uu"
                            style={{
                              WebkitTransform: "translateX(0%)",
                              transform: "translateX(0%)",
                            }}
                          >
                            {/* here */}
                            {listTour && <List list={listTour} />}
                            {/* here */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* List */}
              </div>
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTour;
