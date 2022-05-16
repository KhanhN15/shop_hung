import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [listTour, setListTour] = useState([]);
  const [detailTour, setDetailTour] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://travelclone.herokuapp.com/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setDetailTour(response.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

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

  const renderImg = (id) => {
    let img = " ";
    if (detailTour.images?.length > 0) {
      img = `https://travelclone.herokuapp.com/images/${detailTour?.images[id]}`;
    }
    return img;
  };

  const handleChooseTour = () => {
    axios
      .post(`https://travelclone.herokuapp.com/${id}`, {
        IdTour: id,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Đặt tour Thành Công");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="css-1dbjc4n r-391gc0 r-bnwqim r-13qz1uu r-1e2svnr">
      <div
        className="css-1dbjc4n r-6koalj r-18u37iz r-1777fci r-13qz1uu r-184en5c"
        style={{ backgroundColor: "#f2f2f3" }}
      >
        <div
          className="css-1dbjc4n r-jg6ec0"
          style={{ width: 960, marginTop: "100px" }}
        >
          <div
            className="css-1dbjc4n r-1awozwy r-18u37iz r-17s6mgv r-1f1sjgu"
            style={{ margin: "20px" }}
          >
            <div
              aria-label="Breadcrumb"
              className="css-1dbjc4n r-1d09ksm r-13awgt0 r-18u37iz r-1h0z5md r-ymttw5 r-5njf8e"
            >
              <a href="/vi-vn/activities" className="css-4rbku5" />
              <a
                dir="auto"
                role="link"
                className="css-4rbku5 css-18t94o4 css-901oao r-1loqt21 r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-iphfwy r-fdjqy7 r-1ddef8g"
                style={{ color: "rgb(28, 41, 48)" }}
              >
                Xperience
              </a>
              <div
                dir="auto"
                className="css-901oao r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-1jkjb r-1kb76zh r-fdjqy7"
                style={{ color: "rgba(28,41,48,1.00)" }}
              ></div>
              <a
                href="/vi-vn/activities/vietnam/country/vietnam-10009958"
                className="css-4rbku5"
              ></a>
              <a
                dir="auto"
                role="link"
                className="css-4rbku5 css-18t94o4 css-901oao r-1loqt21 r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-iphfwy r-fdjqy7 r-1ddef8g"
                style={{ color: "rgb(28, 41, 48)" }}
              >
                Việt Nam
              </a>
              <div
                dir="auto"
                className="css-901oao r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-1jkjb r-1kb76zh r-fdjqy7"
                style={{ color: "rgba(28,41,48,1.00)" }}
              >
                /
              </div>
              <a
                href="/vi-vn/activities/vietnam/region/ho-chi-minh-city-10009794"
                className="css-4rbku5"
              ></a>
              <a
                dir="auto"
                role="link"
                className="css-4rbku5 css-18t94o4 css-901oao r-1loqt21 r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-iphfwy r-fdjqy7 r-1ddef8g"
                style={{ color: "rgb(28, 41, 48)" }}
              >
                Thành phố Hồ Chí Minh
              </a>
              <div
                dir="auto"
                className="css-901oao r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-1jkjb r-1kb76zh r-fdjqy7"
                style={{ color: "rgba(28,41,48,1.00)" }}
              >
                /
              </div>
              <a
                href="/vi-vn/activities/vietnam/city/tan-binh-district-10010618"
                className="css-4rbku5"
              />
              <a
                dir="auto"
                role="link"
                className="css-4rbku5 css-18t94o4 css-901oao r-1loqt21 r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-iphfwy r-fdjqy7 r-1ddef8g"
                style={{ color: "rgb(28, 41, 48)" }}
              >
                Quận Tân Bình
              </a>
              <div
                dir="auto"
                className="css-901oao r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-1jkjb r-1kb76zh r-fdjqy7"
                style={{ color: "rgba(28,41,48,1.00)" }}
              >
                /
              </div>
              <a
                href="/vi-vn/activities/vietnam/area/ward-15-30010904"
                className="css-4rbku5"
              />
              <a
                dir="auto"
                role="link"
                className="css-4rbku5 css-18t94o4 css-901oao r-1loqt21 r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-iphfwy r-fdjqy7 r-1ddef8g"
                style={{ color: "rgb(28, 41, 48)" }}
              >
                phường 15
              </a>
              <div
                dir="auto"
                className="css-901oao r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-1jkjb r-1kb76zh r-fdjqy7"
                style={{ color: "rgba(28,41,48,1.00)" }}
              >
                /
              </div>
              <div
                aria-current="page"
                dir="auto"
                className="css-901oao r-1dqbpge r-1sixt3s r-1enofrn r-b88u0q r-1cwl3u0 r-iphfwy r-fdjqy7 r-13wfysu"
                style={{ color: "rgba(1,148,243,1.00)" }}
              >
                {detailTour.name}
              </div>
            </div>
            <div
              aria-live="polite"
              role="button"
              tabIndex={0}
              className="css-18t94o4 css-1dbjc4n r-1k97etb r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
            >
              <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1777fci"></div>
            </div>
          </div>
          <div className="css-1dbjc4n r-1peese0">
            <div className="css-1dbjc4n r-14lw9ot r-kdyh1x r-da5iq2 r-1udh08x r-nsbfu8">
              <div className="css-1dbjc4n r-1q52ik8 r-qklmqi r-6gpygo r-kzbkwu">
                <div className="css-1dbjc4n">
                  <h1
                    aria-level={1}
                    dir="auto"
                    role="heading"
                    className="css-4rbku5 css-901oao r-cwxd7f r-1sixt3s r-1x35g6 r-b88u0q r-vrz42v r-fdjqy7"
                  >
                    {detailTour.name}
                  </h1>
                  <div className="css-1dbjc4n r-1awozwy r-18u37iz r-knv0ih">
                    <div className="css-1dbjc4n r-1kb76zh">
                      <div
                        className="css-1dbjc4n r-oyd9sg"
                        style={{
                          backgroundColor: "rgba(236,248,255,1.00)",
                          borderTopLeftRadius: 14,
                          borderTopRightRadius: 14,
                          borderBottomRightRadius: 14,
                          borderBottomLeftRadius: 14,
                          paddingRight: 8,
                          paddingLeft: 8,
                        }}
                      >
                        <div
                          dir="auto"
                          className="css-901oao r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-q4m81j"
                          style={{ color: "rgba(2,100,200,1.00)" }}
                        >
                          Tour
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="css-1dbjc4n r-1awozwy r-18u37iz r-knv0ih">
                    <img
                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/0629a9ae0d41e994ff5043f52cbb1b2e.svg"
                      width={12}
                    />
                    <div
                      dir="auto"
                      className="css-901oao r-1ud240a r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-13hce6t r-fdjqy7"
                    >
                      {detailTour.address}
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-1dbjc4n">
                <div className="css-1dbjc4n r-6koalj r-18u37iz r-tzz3ar">
                  <div
                    tabIndex={0}
                    className="css-1dbjc4n r-1y80485 r-kdyh1x r-1loqt21 r-16y2uox r-1wbh5a2 r-d3gnfh r-1otgn73 r-1i6wzkk r-lrvibr"
                    style={{
                      WebkitTransitionDuration: "0s",
                      transitionDuration: "0s",
                    }}
                  >
                    <img
                      role="button"
                      importance="low"
                      loading="lazy"
                      src={renderImg("0")}
                      decoding="async"
                      height={512}
                      className="r-kdyh1x"
                      style={{
                        objectFit: "contain",
                        objectPosition: "50% 50%",
                      }}
                    />
                  </div>
                  <div className="css-1dbjc4n r-1wtj0ep r-19u6a5r">
                    <div
                      tabIndex={0}
                      className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"
                      style={{
                        WebkitTransitionDuration: "0s",
                        transitionDuration: "0s",
                      }}
                    >
                      <div className="css-1dbjc4n r-bnwqim r-184en5c">
                        <img
                          role="button"
                          importance="low"
                          loading="lazy"
                          src={renderImg("1")}
                          decoding="async"
                          width={148}
                          height={122}
                          className="r-kdyh1x"
                          style={{
                            objectFit: "cover",
                            objectPosition: "50% 50%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"
                      style={{
                        WebkitTransitionDuration: "0s",
                        transitionDuration: "0s",
                      }}
                    >
                      <div className="css-1dbjc4n r-bnwqim r-184en5c">
                        <img
                          role="button"
                          importance="low"
                          loading="lazy"
                          src={renderImg("2")}
                          decoding="async"
                          width={148}
                          height={122}
                          className="r-kdyh1x"
                          style={{
                            objectFit: "cover",
                            objectPosition: "50% 50%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"
                      style={{
                        WebkitTransitionDuration: "0s",
                        transitionDuration: "0s",
                      }}
                    >
                      <div className="css-1dbjc4n r-bnwqim r-184en5c">
                        <img
                          role="button"
                          importance="low"
                          loading="lazy"
                          src={renderImg("3")}
                          decoding="async"
                          width={148}
                          height={122}
                          className="r-kdyh1x"
                          style={{
                            objectFit: "cover",
                            objectPosition: "50% 50%",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"
                      style={{
                        WebkitTransitionDuration: "0s",
                        transitionDuration: "0s",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="css-1dbjc4n r-1r5su4o">
                <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-upkpct">
                  <div className="css-1dbjc4n" style={{ paddingTop: 24 }} />
                  <div className="css-1dbjc4n r-1habvwh">
                    <div className="css-1dbjc4n r-18u37iz r-9x3wrb">
                      <div className="css-1dbjc4n">
                        <div
                          dir="auto"
                          className="css-901oao r-cwxd7f r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-knv0ih r-fdjqy7"
                        >
                          Giá từ
                        </div>
                        <h1
                          aria-level={1}
                          dir="auto"
                          role="heading"
                          className="css-4rbku5 css-901oao r-1sixt3s r-1x35g6 r-b88u0q r-vrz42v r-1mnahxq r-fdjqy7"
                          style={{ color: "rgba(255,94,31,1.00)" }}
                        >
                          {detailTour.price} VND
                        </h1>
                      </div>
                      <div className="css-1dbjc4n r-1jj8364 r-knv0ih">
                        <div className="css-1dbjc4n">
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <img
                              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/42e4a7e6ed00f63a69daf8b5a980d0d6.svg"
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-live="polite"
                      role="button"
                      tabIndex={0}
                      className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-knv0ih r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr r-9x3wrb"
                      style={{ backgroundColor: "rgba(255,94,31,1.00)" }}
                    >
                      <div
                        className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1777fci"
                        style={{ opacity: 1 }}
                      >
                        <div
                          dir="auto"
                          aria-hidden="true"
                          className="css-901oao css-bfa6kz r-jwli3a r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                          onClick={handleChooseTour}
                        >
                          Đặt tour
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /chi tiet san pham */}
          <div>
            <h2
              aria-level={2}
              dir="auto"
              role="heading"
              className="css-4rbku5 css-901oao r-cwxd7f r-1sixt3s r-adyw6z r-b88u0q r-135wba7 r-fdjqy7"
            >
              Chi tiết sản phẩm
            </h2>
            <div
              className="css-1dbjc4n r-14lw9ot r-kdyh1x r-da5iq2 r-eqz5dr r-1ifxtd0 r-bztko3 r-1l7z4oj r-uwe93p"
              style={{ padding: "20px", marginTop: "20px" }}
            >
              <h3
                aria-level={3}
                dir="auto"
                role="heading"
                className="css-4rbku5 css-901oao css-cens5h r-cwxd7f r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-fdjqy7"
                style={{ WebkitLineClamp: 2 }}
              >
                Điểm nổi bật
              </h3>
              <div>
                <text
                  style={{
                    fontFamily:
                      "MuseoSans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  <ul>
                    <li style={{ lineHeight: 2 }}>{detailTour.description}</li>
                  </ul>
                </text>
              </div>
            </div>
          </div>

          {/* /chi tiet san pham */}

          <div className="css-1dbjc4n" style={{ marginBottom: 40 }}>
            <div className="css-1dbjc4n r-184en5c">
              <div className="css-1dbjc4n r-1awozwy r-6koalj">
                <div className="css-1dbjc4n" style={{}}>
                  <h2
                    aria-level={2}
                    dir="auto"
                    role="heading"
                    className="css-4rbku5 css-901oao r-cwxd7f r-1sixt3s r-adyw6z r-b88u0q r-135wba7 r-1peese0 r-fdjqy7"
                  >
                    Khả dụng vào ngày khác
                  </h2>
                  {listTour.map((e) => (
                    <div
                      className="css-1dbjc4n r-14lw9ot r-kdyh1x r-da5iq2 r-eqz5dr r-1ifxtd0 r-bztko3 r-1l7z4oj r-uwe93p"
                      style={{ padding: "20px" }}
                    >
                      <div className="css-1dbjc4n r-18u37iz r-1gzrgec r-ymttw5 r-ttdzmv r-xaq1zp" />
                      <div className="css-1dbjc4n r-ymttw5 r-95jzfe">
                        <h3
                          aria-level={3}
                          dir="auto"
                          role="heading"
                          className="css-4rbku5 css-901oao css-cens5h r-cwxd7f r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-fdjqy7"
                          style={{ WebkitLineClamp: 2 }}
                        >
                          {e.name}
                        </h3>
                        <div
                          dir="auto"
                          className="css-901oao css-bfa6kz r-cwxd7f r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-knv0ih r-fdjqy7"
                        />
                      </div>
                      <div className="css-1dbjc4n r-obd0qt r-1ihkh82 r-18u37iz r-1ydw1k6 r-1wzrnnt r-qn3fzs r-ymttw5 r-95jzfe">
                        <div className="css-1dbjc4n r-13awgt0">
                          <div className="css-1dbjc4n r-k200y r-5oul0u">
                            <div className="css-1dbjc4n">
                              <div
                                className="css-1dbjc4n r-kdyh1x r-u8s1d"
                                style={{
                                  backgroundColor: "rgb(255, 214, 144)",
                                  height: "calc(100% + 4px)",
                                  left: "-8px",
                                  opacity: 0,
                                  top: "-2px",
                                  width: "calc(100% + 16px)",
                                }}
                              ></div>
                              <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                <div className="css-1dbjc4n r-1kb76zh">
                                  <div
                                    className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                    style={{ height: 16, width: 16 }}
                                  >
                                    <div
                                      className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                      style={{
                                        filter: 'url("#tint-12")',
                                        backgroundImage:
                                          'url("https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455491487-083f2aa1250ed2145b0b41c4e1dba240.png")',
                                      }}
                                    />
                                    <img
                                      alt
                                      draggable="false"
                                      src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455491487-083f2aa1250ed2145b0b41c4e1dba240.png"
                                      className="css-9pa8cd"
                                    />
                                    <svg
                                      style={{
                                        position: "absolute",
                                        height: 0,
                                        visibility: "hidden",
                                        width: 0,
                                      }}
                                    >
                                      <defs>
                                        <filter id="tint-12">
                                          <feFlood floodColor="#687176" />
                                          <feComposite
                                            in2="SourceAlpha"
                                            operator="atop"
                                          ></feComposite>
                                        </filter>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div
                                  dir="auto"
                                  className="css-901oao r-1ud240a r-13awgt0 r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                                >
                                  <span className="css-901oao css-16my406 r-1ud240a r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7">
                                    Sử dụng vào{" "}
                                    <span className="css-901oao css-16my406 r-1ud240a r-1sixt3s r-ubezar r-ovu0ai r-135wba7 r-fdjqy7">
                                      ngày đã chọn
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="css-1dbjc4n r-k200y r-5oul0u">
                            <div className="css-1dbjc4n">
                              <div
                                className="css-1dbjc4n r-kdyh1x r-u8s1d"
                                style={{
                                  backgroundColor: "rgb(255, 214, 144)",
                                  height: "calc(100% + 4px)",
                                  left: "-8px",
                                  opacity: 0,
                                  top: "-2px",
                                  width: "calc(100% + 16px)",
                                }}
                              />
                              <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                <div className="css-1dbjc4n r-1kb76zh">
                                  <div
                                    className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                    style={{ height: 16, width: 16 }}
                                  >
                                    <div
                                      className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                      style={{
                                        filter: 'url("#tint-13")',
                                        backgroundImage:
                                          'url("https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455486715-9f445c68bf929b8ace8e744c568484f9.png")',
                                      }}
                                    />
                                    <img
                                      alt
                                      draggable="false"
                                      src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455486715-9f445c68bf929b8ace8e744c568484f9.png"
                                      className="css-9pa8cd"
                                    />
                                    <svg
                                      style={{
                                        position: "absolute",
                                        height: 0,
                                        visibility: "hidden",
                                        width: 0,
                                      }}
                                    >
                                      <defs>
                                        <filter id="tint-13">
                                          <feFlood floodColor="#00875A" />
                                          <feComposite
                                            in2="SourceAlpha"
                                            operator="atop"
                                          />
                                        </filter>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div
                                  dir="auto"
                                  className="css-901oao r-13awgt0 r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                                  style={{ color: "rgb(0, 135, 90)" }}
                                >
                                  <span
                                    className="css-901oao css-16my406 r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                                    style={{ color: "rgb(0, 135, 90)" }}
                                  >
                                    Không cần đặt chỗ
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="css-1dbjc4n r-k200y r-5oul0u">
                            <div className="css-1dbjc4n">
                              <div
                                className="css-1dbjc4n r-kdyh1x r-u8s1d"
                                style={{
                                  backgroundColor: "rgb(255, 214, 144)",
                                  height: "calc(100% + 4px)",
                                  left: "-8px",
                                  opacity: 0,
                                  top: "-2px",
                                  width: "calc(100% + 16px)",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="css-1dbjc4n r-173mn98">
                          <div className="css-1dbjc4n r-obd0qt r-18kxxzh r-1wbh5a2 r-17s6mgv">
                            <h2
                              aria-level={2}
                              dir="auto"
                              role="heading"
                              className="css-4rbku5 css-901oao r-1sixt3s r-adyw6z r-b88u0q r-135wba7 r-fdjqy7"
                              style={{ color: "rgb(255, 94, 31)" }}
                            >
                              {e.price} VND
                            </h2>
                          </div>
                        </div>
                      </div>
                      <div className="css-1dbjc4n r-18u37iz r-1wtj0ep r-ymttw5 r-95jzfe">
                        <div className="css-1dbjc4n r-18u37iz">
                          <div
                            aria-live="polite"
                            role="button"
                            tabIndex={0}
                            className="css-18t94o4 css-1dbjc4n r-1ihkh82 r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                          >
                            <div
                              className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1777fci"
                              style={{ opacity: 1 }}
                            >
                              <div
                                dir="auto"
                                aria-hidden="true"
                                className="css-901oao css-bfa6kz r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                                style={{ color: "rgb(1, 148, 243)" }}
                              >
                                <a
                                  href={`http://localhost:3000/detail/${e._id}`}
                                >
                                  Xem chi tiết
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-live="polite"
                          role="button"
                          tabIndex={0}
                          className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-f33ygr r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                          style={{ backgroundColor: "rgb(255, 94, 31)" }}
                        >
                          <div
                            className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1777fci"
                            style={{ opacity: 1 }}
                          >
                            <div
                              dir="auto"
                              aria-hidden="true"
                              className="css-901oao css-bfa6kz r-jwli3a r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                            >
                              Chọn
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
