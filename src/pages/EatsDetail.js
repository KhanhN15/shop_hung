import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Review from "../components/Review";
import Photos from "../components/Photos";

const EatsDetail = () => {
  const [eats, setEats] = useState([]);
  const [detailEats, setDetailEats] = useState({});
  const [activePage, setActivePage] = useState("all");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://travelclone.herokuapp.com/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setDetailEats(response.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });

    axios
      .get("https://travelclone.herokuapp.com/")
      .then((response) => {
        if (response.status === 200) {
          setEats(response.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [activePage]);

  const renderImg = (id) => {
    let img = " ";
    if (detailEats.images?.length > 0) {
      img = `https://travelclone.herokuapp.com/images/${detailEats?.images[id]}`;
    }
    return img;
  };

  const handleActive = (type) => {
    setActivePage(type);
  };

  const renderTab = () => {
    switch (activePage) {
      case "reviews":
        return <Review />;
      case "photos":
        return <Photos />;
      default:
        return <Review />;
    }
  };

  return (
    <div>
      <div
        className="css-1dbjc4n r-14lw9ot r-bnwqim r-13qz1uu r-1e2svnr"
        style={{ marginTop: "100px" }}
      >
        {/* code here */}
        <div className="_2XbV5 _b6-k">
          <div />
          <div>
            <div />
            <div className="_2phds">
              <div
                className="_2PKKH"
                style={{ flexBasis: "66.66666666666666%" }}
              >
                <div className="_1sSXm _3xGQt">
                  <div className="_3o9EF">
                    <div>
                      <div className="_3nDqC">
                        <h1 className="_9bYhU">{detailEats.name}</h1>
                      </div>
                      <span className="_8ATD_">Delivery</span>
                      <span className="_2Un6b">{detailEats.description}</span>
                      <div className="_3GJFs">
                        <span className="_22DxW">Share via</span>
                        <div className="_1J4j7">
                          <svg
                            strokeWidth={0}
                            className="ZaZfr"
                            fill="none"
                            height={24}
                            stroke="currentColor"
                            strokeLinecap="round"
                            viewBox="0 0 24 24"
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path
                              fill="#fff"
                              d="M7,8.60454545 L9.35682098,8.60454545 L9.35682098,6.29545455 C9.35682098,5.27727273 9.38385907,3.70454545 10.1138878,2.73181818 C10.8889799,1.7 11.9479721,1 13.7730438,1 C16.7472347,1 18,1.42727273 18,1.42727273 L17.4096682,4.95 C17.4096682,4.95 16.4272839,4.66363636 15.5124949,4.66363636 C14.5977059,4.66363636 13.7730438,4.99545455 13.7730438,5.91818182 L13.7730438,8.60454545 L17.5313396,8.60454545 L17.2744777,12.0454545 L13.7775502,12.0454545 L13.7775502,24 L9.35682098,24 L9.35682098,12.0454545 L7,12.0454545 L7,8.60454545 Z"
                            />
                          </svg>
                        </div>
                        <div className="_1J4j7">
                          <svg
                            strokeWidth={0}
                            className="yRsYw"
                            fill="none"
                            height={24}
                            stroke="currentColor"
                            strokeLinecap="round"
                            viewBox="0 0 24 24"
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M24,5.24619616 C23.1381518,5.63362472 22.2244738,5.88871437 21.2888889,6.00311095 C22.2743441,5.40355599 23.011565,4.45990053 23.362963,3.34826055 C22.4368334,3.90715977 21.4234284,4.30071681 20.3666667,4.51187583 C18.9039309,2.93095261 16.5800458,2.54420482 14.697916,3.56846568 C12.8157862,4.59272653 11.8433969,6.77331701 12.3259259,8.88767181 C8.4037037,8.68808731 4.92962963,6.77885447 2.6,3.87546489 C1.35009518,6.06882613 1.99033783,8.8721064 4.06296296,10.2809976 C3.31387525,10.2573637 2.58118508,10.0520791 1.92592593,9.68224406 L1.92592593,9.74249598 C1.92403325,12.02712 3.50820818,13.9955926 5.71111111,14.4459118 C5.30589257,14.5601073 4.88715867,14.6171271 4.46666667,14.6153703 C4.16833737,14.6152689 3.87069617,14.5862671 3.57777778,14.5287582 C4.19372273,16.4838865 5.96631993,17.8227307 7.98518519,17.857677 C6.31435628,19.1921316 4.25059961,19.916333 2.12592593,19.9137739 C1.74962306,19.914049 1.3736416,19.8914141 1,19.8459905 C3.15819874,21.2541055 5.66899891,22.0017939 8.23333333,21.9999968 C16.9148148,21.9999968 21.6592593,14.6906852 21.6592593,8.34917024 C21.6592593,8.14205425 21.6555556,7.93117252 21.6444444,7.72782228 C22.5702475,7.05164173 23.3682544,6.2109251 24,5.24619616"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="_34njG">
                    <div className="hM7EY">
                      <svg
                        className="_23MHR"
                        stroke="none"
                        fill="none"
                        height={24}
                        strokeLinecap="round"
                        viewBox="0 0 24 24"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          fill="none"
                          fillRule="evenodd"
                          transform="translate(0 2)"
                          fillOpacity={1}
                        >
                          <path
                            fill="#1BA0E2"
                            d="M24,2.97387637 C24,2.97387637 17.9085447,9.9106988 16.4192056,13.1155965 C15.9686335,14.085179 16.4889188,14.9816473 16.7427565,15.3942092 C18.3609669,18.0242833 21.0000221,19 20.6401998,19 C20.2803774,19 19.0199836,17.8706415 15.757682,16.9460598 C12.4953805,16.021478 9.95011816,15.8799789 8.39303111,14.9939551 C7.04930089,14.2293371 7.15528107,13.3563338 6.58541702,12.8628725 C4.71336403,11.2418093 -0.0333974338,10.5614596 0.000177191119,10.5600858 C1.46864789,10.5 3.11012089,11.2220174 4.05513058,11.2220174 C5.00014028,11.2220174 5.50013658,10 6.84143921,10.7770155 C7.19322569,10.9808051 7.13077285,11.0542003 8.28272652,11.3787906 C9.43468019,11.7033809 10.0001034,10 9.1804948,7.79193814 C8.87698937,6.97428102 8.61532006,6.13212456 8.61532005,4.70396341 C8.61532003,2.74559775 11.9447535,0.656164411 13.9739579,0 C13.7615161,2.75099588 13.7501791,4.7651663 13.8587012,6.33769465 C18.4023804,3.51926226 24,2.97387637 24,2.97387637 Z"
                          />
                          <path
                            fill="#1694DC"
                            d="M16.4191496,13.1155965 C16.1759759,13.6388762 16.2155876,14.1408598 16.3434811,14.5569716 C16.0904679,14.10614 15.8742984,13.6412562 15.7501625,13.3944116 C15.4666264,12.8305996 15.1716194,12.1600334 14.8958447,11.3813115 C14.4548033,9.9718172 14.0276967,8.76384991 13.8586263,6.33769465 C14.5112657,5.93286712 15.1856493,5.57493531 15.862066,5.25877949 C15.8113997,8.12264637 16.1497844,11.1052291 16.4529596,13.04385 C16.4414405,13.0679669 16.4301691,13.0918838 16.4191496,13.1155965 Z"
                          />
                        </g>
                      </svg>
                      <span className="_2fqFL">
                        4.8{/* */}/{/* */}5{/* */}{" "}
                        <span className="w9cko">
                          ({/* */}50{/* */})
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{ width: "100%", height: 450 }}
                  className="_346B6 _3DVlD"
                >
                  <img
                    style={{ height: "100%" }}
                    className="_1AXXJ"
                    src={renderImg("0")}
                    alt
                  />
                </div>
                <div className="A6Vnh">
                  <div
                    className={
                      activePage === "all" ? "_1N4aJ _2aox1" : "_1N4aJ"
                    }
                    onClick={() => handleActive("all")}
                  >
                    All
                  </div>
                  <div
                    className={
                      activePage === "reviews" ? "_1N4aJ _2aox1" : "_1N4aJ"
                    }
                    onClick={() => handleActive("reviews")}
                  >
                    Reviews
                  </div>
                  <div
                    className={
                      activePage === "photos" ? "_1N4aJ _2aox1" : "_1N4aJ"
                    }
                    onClick={() => handleActive("photos")}
                  >
                    Photos
                  </div>
                </div>
                {/* tab */}
                {renderTab()}
                {/* tab */}
              </div>
              <div
                className="_2PKKH"
                style={{ flexBasis: "33.33333333333333%" }}
              >
                <div className="_2DJxL">
                  <h2 className="_1aqYa">Restaurant Details</h2>
                  <div className="U8fiz">
                    <svg
                      strokeWidth={0}
                      fill="#0770CD"
                      height={24}
                      stroke="currentColor"
                      strokeLinecap="round"
                      viewBox="0 0 24 24"
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g>
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g fill="#0770CD">
                            <g>Opening Hours</g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="_3XInA">
                    <div className="_2DLP-">
                      <span className="_2o-wy">Today</span>
                      <span className="yAWQq">•</span>
                      <span className="_3-ne9">Closed</span>
                    </div>
                    <p className="_3jFty">08.00 - 23.30</p>
                    <div>
                      <div className="_2eCs0" />
                    </div>
                    <div className="B6o4h">SHOW MORE</div>
                  </div>
                  <div className="_3XInA _2Lafg">
                    <div className="z78ZD">
                      <h2 className="_3ccN1 _2pw91">Dishes &amp; Cuisines</h2>
                      <ul>
                        <li className="_23sGQ">Indonesian</li>
                        <li className="_23sGQ">Fried Chicken</li>
                        <li className="_23sGQ">Yakiniku</li>
                      </ul>
                    </div>
                    <div className="_2qx0i">
                      <h2 className="_3ccN1 _2pw91">Dietary Restrictions</h2>
                      <p className="_1UnMt">Info Not Available</p>
                    </div>
                  </div>
                  <div className="_3XInA _1_3qt">
                    <div className="_17LOC">
                      <h2 className="_3ccN1 _1CguJ">Price Range</h2>
                      <div style={{ position: "relative" }}>
                        <svg
                          strokeWidth={0}
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          className="_jG8R"
                          fill="#696969"
                          stroke="currentColor"
                          strokeLinecap="round"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path
                            fill="#696969"
                            fillRule="evenodd"
                            d="M8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 Z M8,14 C8.55228475,14 9,13.5522847 9,13 C9,12.4477153 8.55228475,12 8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 Z M12,6 C12,3.790861 10.209139,2 8,2 C6.92557447,2 5.91622834,2.42691741 5.17157288,3.17157288 C4.80069616,3.54244959 4.50524612,3.98305357 4.30388793,4.46864929 C4.09234236,4.97881291 4.33442012,5.5638738 4.84458374,5.77541937 C5.35474736,5.98696494 5.93980825,5.74488718 6.15135382,5.23472356 C6.251828,4.99241988 6.39975256,4.77182032 6.58578644,4.58578644 C6.95908733,4.21248555 7.46145959,4 8,4 C9.1045695,4 10,4.8954305 10,6 C10,7.1045695 9.1045695,8 8,8 C7.44771525,8 7,8.44771525 7,9 L7,10 C7,10.5522847 7.44771525,11 8,11 C8.55228475,11 9,10.5522847 9,10 L9,9.87398251 C10.7252272,9.42993972 12,7.86383943 12,6 Z"
                          ></path>
                        </svg>
                        <div className="pzRKx">
                          <div
                            className="_2yDXC _15NbX LKTRB"
                            style={{ minWidth: 220, cursor: "" }}
                            aria-live="off"
                          >
                            Price stated is only an estimation.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_2Vz3j">
                      <span className="_3_nAz">$$</span>
                      <span className="yAWQq">•</span>
                      <span className="_22WYn">{detailEats.price}</span>
                    </div>
                  </div>
                  <div className="_3XInA _2EZGX">
                    <div className="_1qwhF">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        strokeWidth={0}
                        className="_2d1_d"
                        fill="#0770CD"
                        stroke="currentColor"
                        strokeLinecap="round"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          fill="#0770CD"
                          d="M15.2443548,10.4952158 C14.5187131,10.2097325 13.9897271,9.96159681 13.6355736,9.73309578 C12.8682263,9.2380007 12.4161954,8.51852707 13.1921839,7.74253858 L18.6418293,2.29289322 C19.0323536,1.90236893 19.6655186,1.90236893 20.0560428,2.29289322 C23.5310912,5.76794162 22.1902394,12.472201 17.3312202,17.3312202 C12.472201,22.1902394 5.76794162,23.5310912 2.29289322,20.0560428 C1.90236893,19.6655186 1.90236893,19.0323536 2.29289322,18.6418293 L7.95043245,12.9842901 C8.76676054,12.167962 9.50762992,12.6878219 9.95008096,13.505254 C10.1497426,13.8741306 10.3563295,14.4224639 10.5864803,15.1746882 C11.4523056,14.5106441 12.2673672,13.7964332 13.0319002,13.0319002 C13.8232371,12.2405633 14.5606652,11.395089 15.2443548,10.4952158 Z M4.49967011,19.2634795 C7.27337728,20.9524284 12.1389237,19.6950895 15.9170066,15.9170066 C19.6950895,12.1389237 20.9524284,7.27337728 19.2634795,4.49967011 L15.3774142,8.38573545 C15.5618169,8.46702462 15.7757878,8.55557477 16.018035,8.65033716 C17.0278606,9.04536144 17.5262557,10.1842174 17.1312314,11.194043 C17.0655798,11.3618723 16.9771343,11.5198638 16.8683862,11.6635671 C16.1212597,12.6508448 15.3137763,13.5784513 14.4461138,14.4461138 C13.6062986,15.285929 12.710322,16.0693694 11.7584303,16.7962721 C10.8966338,17.4543745 9.66451223,17.2892478 9.0064098,16.4274513 C8.86410008,16.2410943 8.75632313,16.0307521 8.68818513,15.8063903 C8.62615127,15.602128 8.56687412,15.4171623 8.51088141,15.2522682 L4.49967011,19.2634795 Z"
                          transform="translate(-2 -2)"
                        />
                      </svg>
                      <h2 className="_3ccN1 _1dXhA">Phone Number</h2>
                    </div>
                    <p className="_1UnMt">Info Not Available</p>
                  </div>
                  <div className="_3XInA _3GHVY">
                    <div className="noUac">
                      <svg
                        strokeWidth={0}
                        fill="#0770CD"
                        className="FIV40"
                        height={24}
                        stroke="currentColor"
                        strokeLinecap="round"
                        viewBox="0 0 24 24"
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path d="M12,22 C11.1424045,22 8.84780487,20.2930157 7.00957977,18.3402736 C4.52838018,15.7045012 3,12.8457995 3,10 C3,5.02943725 7.02943725,1 12,1 C16.9705627,1 21,5.02943725 21,10 C21,12.724911 19.4815749,15.5596483 17.0255149,18.2267241 C15.1588505,20.2537655 12.8869061,22 12,22 Z M11.9578218,19.8983847 C11.9727353,19.9070499 11.9872231,19.9153586 12.0012561,19.923301 C12.0179843,19.9136461 12.0353769,19.9034391 12.0533854,19.8926959 C12.2982156,19.7466389 12.6151234,19.5271401 12.9667448,19.2568811 C13.8019853,18.6149087 14.7186006,17.7794076 15.554299,16.871909 C17.7026474,14.5389823 19,12.1169638 19,10 C19,6.13400675 15.8659932,3 12,3 C8.13400675,3 5,6.13400675 5,10 C5,12.2366687 6.30052449,14.6691863 8.46584941,16.9694057 C9.29802456,17.8534234 10.2109711,18.6614735 11.0517991,19.286977 C11.399382,19.5455488 11.7141657,19.7568134 11.9578218,19.8983847 Z M8,10 C8,9.44771525 8.44771525,9 9,9 C9.55228475,9 10,9.44771525 10,10 C10,11.1045695 10.8954305,12 12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C11.4477153,8 11,7.55228475 11,7 C11,6.44771525 11.4477153,6 12,6 C14.209139,6 16,7.790861 16,10 C16,12.209139 14.209139,14 12,14 C9.790861,14 8,12.209139 8,10 Z" />
                      </svg>
                      <h2 className="_3ccN1 _1bmqL">Address</h2>
                    </div>
                    <div>
                      <span className="gwFqz">{detailEats.address}</span>
                      <div
                        className="_3rZvz"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(255, 255, 255, 0.39), rgba(255, 255, 255, 0)), url(https://ik.imagekit.io/tvlk/image/imageResource/2020/05/05/1588652640226-c4b38c7e26d1739af59d27435a66ec41.png?tr=q-75)",
                        }}
                      >
                        <span className="_13qYs">SHOW DIRECTIONS</span>
                      </div>
                    </div>
                  </div>
                  <div className="_3XInA _3QyBB">
                    <h2 className="_3ccN1 _1sCSM">Other Facilities</h2>
                    <div>
                      <ul className="_1YvpO">
                        <li className="_1IsYM">
                          <img
                            className="_2pGvE"
                            src="https://ik.imagekit.io/tvlk/image/imageResource/2018/05/02/1525248620829-e01459d461385d71e3e3a9685bfe3be0.png?tr=q-75"
                          />
                          <span className="_3HZiO">Takeaway</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="_38UvB">
              <div className="_1Q-bZ">
                <h2>Nearby Restaurants</h2>
              </div>
              <div className="_1Sogs">
                <div className="_2phds">
                  {eats?.map((e) => (
                    <div className="_2PKKH" style={{ flexBasis: "20%" }}>
                      <div className="_2l6qz">
                        <a href={`/eat/detail/${e._id}`}>
                          <div className="_1EyN8">
                            <div className="_3KS-d">
                              <img
                                className="D71FY"
                                src={`https://travelclone.herokuapp.com/images/${e.images[0]}`}
                                alt="Bakmi Sanming (Miming) - Kelapa Gading"
                              />
                              <span className="_3SBzY">4.3</span>
                            </div>
                            <h3 className="_2BmJc">{e.name}</h3>
                            <span className="_3ASWg">{e.price}</span>
                            <span className="_2pJM6">{e.description}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* code here */}
      </div>
    </div>
  );
};

export default EatsDetail;
