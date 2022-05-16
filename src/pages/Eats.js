import { useState, useEffect } from "react";
import axios from "axios";

import ListEat from "../components/ListEat";

const Eats = () => {
  const [eats, setEats] = useState([]);
  const [search, setSearch] = useState("");
  const [activePage, setActive] = useState("populate");

  useEffect(() => {
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
  }, []);

  const changeParamSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`https://travelclone.herokuapp.com/search?q=${search}`)
      .then((response) => {
        if (response.status === 200) {
          setEats(response.data);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div
        className="css-1dbjc4n r-14lw9ot r-bnwqim r-13qz1uu r-1e2svnr"
        style={{ marginTop: "100px" }}
      >
        {/* here */}
        <div id="" className="" style={{ backgroundColor: "#e6eaed" }}>
          <div className="_2XbV5">
            <div className="_3C1pz">
              <div className="mMmI2 _3O7aS" data-elevation={1}>
                <div className="_4bY2K">
                  <div className="_2phds">
                    <div className="_217O7 _2PKKH" style={{ flexBasis: "10%" }}>
                      <svg
                        fill="#8F8F8F"
                        width={87}
                        height={48}
                        viewBox="0 0 87 48"
                        stroke="currentColor"
                        strokeLinecap="round"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs>
                          <polygon
                            id="path-1"
                            points="0 0.0221111111 47.8656111 0.0221111111 47.8656111 47.8888889 0 47.8888889"
                          ></polygon>
                        </defs>
                        <g
                          id="Flow"
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="1---Restaurant-List---Loading-State"
                            transform="translate(-188.000000, -124.000000)"
                          >
                            <g
                              id="search-bar"
                              transform="translate(160.000000, 100.000000)"
                            >
                              <g
                                id="eats-brand"
                                transform="translate(28.000000, 24.000000)"
                              >
                                <rect
                                  id="bound"
                                  x={0}
                                  y={0}
                                  width={87}
                                  height={48}
                                />
                                <path
                                  d="M62.7115778,0.111111111 C49.4941333,0.111111111 38.7790222,10.8262222 38.7790222,24.0454444 C38.7790222,37.2624444 49.4941333,47.9778889 62.7115778,47.9778889 C75.9294667,47.9778889 86.6445778,37.2624444 86.6445778,24.0454444 C86.6445778,10.8262222 75.9294667,0.111111111 62.7115778,0.111111111"
                                  id="Fill-1"
                                  fill="#E05823"
                                />
                                <path
                                  d="M55.5811556,23.9761222 C53.8262667,23.1457889 52.0976,20.8929 52.0976,18.2439 C52.0976,14.8895667 53.7896,10.9554556 56.9564889,10.9554556 C60.1233778,10.9554556 61.8153778,14.8895667 61.8153778,18.2439 C61.8153778,20.8929 60.0868222,23.1457889 58.3318222,23.9761222 L59.1997111,35.2571222 C59.2949333,36.4960111 58.3679333,37.5775667 57.1290444,37.6729 C57.0717111,37.6773444 57.0140444,37.6794556 56.9564889,37.6794556 C55.7140444,37.6794556 54.7068222,36.6722333 54.7068222,35.4296778 C54.7068222,35.3721222 54.7089333,35.3145667 54.7133778,35.2571222 L55.5811556,23.9761222 Z"
                                  id="Fill-3"
                                  fill="#FFFFFF"
                                />
                                <path
                                  d="M71.5332444,12.1702444 C70.8623556,12.1702444 70.3184667,12.7141333 70.3184667,13.3850222 L70.3184667,19.4586889 C70.3184667,20.1283556 69.7735778,20.6732444 69.1038,20.6732444 L69.1038,12.1702444 C69.1038,11.4993556 68.5599111,10.9554667 67.8890222,10.9554667 C67.2182444,10.9554667 66.6743556,11.4993556 66.6743556,12.1702444 L66.6743556,20.6732444 C66.0045778,20.6732444 65.4595778,20.1283556 65.4595778,19.4586889 L65.4595778,13.3850222 C65.4595778,12.7141333 64.9156889,12.1702444 64.2449111,12.1702444 C63.5740222,12.1702444 63.0301333,12.7141333 63.0301333,13.3850222 L63.0301333,19.4586889 C63.0301333,21.4366889 64.6146889,23.0506889 66.5810222,23.1004667 L65.6459111,35.2571333 C65.6415778,35.3145778 65.6393556,35.3721333 65.6393556,35.4296889 C65.6393556,36.6722444 66.6465778,37.6794667 67.8890222,37.6794667 C67.9466889,37.6794667 68.0042444,37.6772444 68.0615778,37.6728 C69.3004667,37.5775778 70.2274667,36.4960222 70.1321333,35.2571333 L69.1971333,23.1004667 C71.1633556,23.0506889 72.7479111,21.4366889 72.7479111,19.4586889 L72.7479111,13.3850222 C72.7479111,12.7141333 72.2040222,12.1702444 71.5332444,12.1702444"
                                  id="Fill-5"
                                  fill="#FFFFFF"
                                />
                                <g
                                  id="Group-9"
                                  transform="translate(0.000000, 0.089000)"
                                >
                                  <mask id="mask-2" fill="white">
                                    <use xlinkHref="#path-1" />
                                  </mask>
                                  <g id="Clip-8" />
                                  <path
                                    d="M23.9325,0.0221111111 C10.7150556,0.0221111111 -5.55555556e-05,10.7372222 -5.55555556e-05,23.9564444 C-5.55555556e-05,37.1734444 10.7150556,47.8888889 23.9325,47.8888889 C37.1505,47.8888889 47.8656111,37.1734444 47.8656111,23.9564444 C47.8656111,10.7372222 37.1505,0.0221111111 23.9325,0.0221111111"
                                    id="Fill-7"
                                    fill="#1BA0E2"
                                    mask="url(#mask-2)"
                                  />
                                </g>
                                <path
                                  d="M13.4743778,25.7890556 C13.4743778,25.7890556 13.7929333,25.7950556 14.1380444,25.6406111 C14.5259333,25.4778333 14.9768222,25.1496111 15.7012667,25.1496111 C16.5169333,25.1569444 17.4711556,25.6383889 18.0448222,25.9348333 C18.4886,26.1561667 19.1388222,25.8290556 19.1388222,25.8290556 C19.1388222,25.8290556 20.0226,24.7436111 19.7818222,23.3942778 C19.4451556,21.5102778 18.0436,18.9721667 18.9030444,17.0601667 C20.4236,13.6773889 25.1376,12.5019444 25.1376,12.5019444 C25.1376,12.5019444 24.9479333,15.1760556 24.8749333,17.3943889 C24.8409333,18.5163889 24.9041556,19.9883889 24.9041556,19.9883889 C24.7764889,20.6485 26.8866,29.5268333 28.9567111,31.3537222 C30.6378222,33.3946111 33.8092667,34.7560556 33.8092667,34.7560556 C33.8092667,34.7560556 33.0530444,34.5237222 32.9910444,34.6125 C32.9594889,34.6551667 32.9874889,34.9335 33.2233778,35.0623889 C32.4744889,34.6587222 30.0556,33.4177222 27.0338222,32.5207222 C24.1189333,31.6672778 21.1784889,31.5081667 18.9286,30.5271667 C16.6773778,29.5438333 16.8537111,27.6025 14.1697111,26.5681667 C11.8661556,25.6807222 8.02871111,24.9392778 8.02871111,24.9392778 L13.4743778,25.7890556 Z"
                                  id="Fill-10"
                                  fill="#FFFFFF"
                                />
                                <path
                                  d="M27.9757889,28.4134111 C28.0961222,27.7618556 29.8574556,24.8481889 32.0199,22.0767444 C34.4485667,18.9747444 37.2965667,16.0125222 37.2965667,16.0125222 C37.2965667,16.0125222 34.1009,16.3710778 30.8274556,17.4260778 C29.5620111,17.8296333 28.2760111,18.3680778 27.2210111,18.8458556 C27.2210111,18.8458556 26.9511222,24.9599667 27.9333444,28.8934111 C27.9333444,28.7343 27.9454556,28.5726333 27.9757889,28.4134111"
                                  id="Fill-12"
                                  fill="#EDEDED"
                                />
                                <path
                                  d="M27.2209667,18.8458111 L27.2209667,18.8458111 C25.8546333,19.4658111 24.8884111,19.9883667 24.8884111,19.9883667 C24.7583,20.6460333 26.8708556,29.5219222 28.9421889,31.3537 C28.3234111,30.6133667 27.9186333,29.7808111 27.9333,28.8934778 C26.9511889,24.9599222 27.2209667,18.8458111 27.2209667,18.8458111"
                                  id="Fill-14"
                                  fill="#DAD9D9"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="_27EsO _2PKKH" style={{ flexBasis: "30%" }}>
                      <div>
                        <div className="_1IGGD">
                          <div className="_39fQR ivxVS _2lEn7 _3ayl6 _3MAbS">
                            <label>
                              <label className="_2Qv2M">
                                Mall, area, region or city
                              </label>
                            </label>
                            <label className="lKyxz" />
                            <input type="text" className="_1cRq1" disabled />
                            <div className="_3Hpw-">
                              <svg
                                strokeWidth={0}
                                fill="#8F8F8F"
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
                            </div>
                          </div>
                          <div />
                        </div>
                      </div>
                    </div>
                    <div className="_2ND7A _2PKKH" style={{ flexBasis: "40%" }}>
                      <div>
                        <div className="_1IGGD">
                          <div className="_39fQR ivxVS _2lEn7 _3MAbS">
                            <label>
                              <label className="_2Qv2M">
                                Cuisine, dish, or restaurant name (Optional)
                              </label>
                            </label>
                            <label className="lKyxz" />
                            <input
                              type="text"
                              className="_1cRq1"
                              value={search}
                              onChange={(e) => changeParamSearch(e)}
                            />
                            <div className="_3Hpw-">
                              <svg
                                strokeWidth={0}
                                fill="#8F8F8F"
                                height={24}
                                stroke="currentColor"
                                strokeLinecap="round"
                                viewBox="0 0 24 24"
                                width={24}
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <path d="M15.0621204,16.4934476 L15.0621204,16.4934476 C13.6597496,17.5834526 11.9256074,18.1936194 10.0968097,18.1936194 C5.62489,18.1936194 2,14.5684355 2,10.0968097 C2,5.62462119 5.62462119,2 10.0968097,2 C14.5684355,2 18.1936194,5.62489 18.1936194,10.0968097 C18.1936194,11.9254725 17.5835426,13.6594938 16.4934131,15.0620858 L21.7035624,20.2722352 C22.0988125,20.6674853 22.0988125,21.3083123 21.7035624,21.7035624 C21.3083123,22.0988125 20.6674853,22.0988125 20.2722352,21.7035624 L15.0621204,16.4934476 Z M14.3909337,14.391398 C15.5229022,13.258695 16.1694169,11.730041 16.1694169,10.0968097 C16.1694169,6.74286286 13.4505361,4.02420242 10.0968097,4.02420242 C6.74255731,4.02420242 4.02420242,6.74255731 4.02420242,10.0968097 C4.02420242,13.4505361 6.74286286,16.1694169 10.0968097,16.1694169 C11.730041,16.1694169 13.258695,15.5229022 14.3909337,14.391398 Z" />
                              </svg>
                            </div>
                          </div>
                          <div />
                        </div>
                      </div>
                    </div>
                    <div className="_3GlXs _2PKKH" style={{ flexBasis: "18%" }}>
                      <button
                        className="_37NB1 _22K0g gLbQ- _90_75"
                        type="button"
                        onClick={handleSearch}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="_67X6s" style={{ marginTop: "20px" }}>
                Indonesian Food Around <strong>Jakarta</strong>
              </h1>
            </div>
            <div className="_2phds">
              <div className="_2PKKH" style={{ flexBasis: "25%" }}>
                <div>
                  <div
                    className="css-1dbjc4n r-14lw9ot r-kdyh1x r-da5iq2 r-1udh08x"
                    style={{}}
                  >
                    <div className="css-1dbjc4n r-6koalj r-18u37iz r-1wtj0ep r-ymttw5 r-23eiwj">
                      <div
                        dir="auto"
                        className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                        style={{ color: "rgb(3, 18, 26)" }}
                      >
                        Filter
                      </div>
                      <div
                        tabIndex={0}
                        className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"
                        style={{ transitionDuration: "0s" }}
                      >
                        <div
                          dir="auto"
                          className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                          style={{ color: "rgb(2, 100, 200)" }}
                        >
                          Reset
                        </div>
                      </div>
                    </div>
                    <div className="css-1dbjc4n r-1xlxj57 r-5kkj8d">
                      <div
                        tabIndex={0}
                        className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"
                        style={{ transitionDuration: "0s" }}
                      >
                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-ymttw5 r-23eiwj">
                          <div
                            dir="auto"
                            className="css-901oao r-1sixt3s r-1b43r93 r-b88u0q r-1cwl3u0 r-fdjqy7"
                            style={{ color: "rgb(3, 18, 26)" }}
                          >
                            Quick Filter
                          </div>
                          <div
                            className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                            style={{
                              height: 24,
                              transform: "rotateZ(0deg)",
                              width: 24,
                            }}
                          >
                            <div
                              className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                              style={{
                                filter: 'url("#tint-0")',
                                backgroundImage:
                                  'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/ic-sys-chevron-up-699937e26b969a1750827ea58ee0b276.png")',
                              }}
                            ></div>
                            <svg
                              style={{
                                position: "absolute",
                                height: 0,
                                visibility: "hidden",
                                width: 0,
                              }}
                            >
                              <defs>
                                <filter id="tint-0">
                                  <feFlood floodColor="#0194f3" />
                                  <feComposite
                                    in2="SourceAlpha"
                                    operator="atop"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="css-1dbjc4n r-ymttw5 r-5njf8e ">
                        <div className="css-1dbjc4n display__none">
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                ></div>
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              Clean Dining
                            </div>
                          </div>
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                />
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              Eats Vouchers
                            </div>
                          </div>
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                />
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              Open Now
                            </div>
                          </div>
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                />
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              Treats Partner
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="css-1dbjc4n r-1xlxj57 r-5kkj8d">
                      <div
                        tabIndex={0}
                        className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"
                        style={{ transitionDuration: "0s" }}
                      >
                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-ymttw5 r-23eiwj">
                          <div
                            dir="auto"
                            className="css-901oao r-1sixt3s r-1b43r93 r-b88u0q r-1cwl3u0 r-fdjqy7"
                            style={{ color: "rgb(3, 18, 26)" }}
                          >
                            Price Range
                          </div>
                          <div
                            className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                            style={{
                              height: 24,
                              transform: "rotateZ(0deg)",
                              width: 24,
                            }}
                          >
                            <div
                              className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                              style={{
                                filter: 'url("#tint-5")',
                                backgroundImage:
                                  'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/ic-sys-chevron-up-699937e26b969a1750827ea58ee0b276.png")',
                              }}
                            />
                            <img
                              alt
                              draggable="false"
                              src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/ic-sys-chevron-up-699937e26b969a1750827ea58ee0b276.png"
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
                                <filter id="tint-5">
                                  <feFlood floodColor="#0194f3" />
                                  <feComposite
                                    in2="SourceAlpha"
                                    operator="atop"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="css-1dbjc4n r-ymttw5 r-5njf8e">
                        <div className="css-1dbjc4n">
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                />
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              $ • Below Rp75.000/person
                            </div>
                          </div>
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                ></div>
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              $$ • Rp75.000 - 200.000/person
                            </div>
                          </div>
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                />
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              $$$ • Rp200.000 - 500.000/person
                            </div>
                          </div>
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                />
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              $$$$ • Over Rp500.000/person
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="css-1dbjc4n r-1xlxj57 r-5kkj8d">
                      <div
                        tabIndex={0}
                        className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"
                        style={{ transitionDuration: "0s" }}
                      >
                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-ymttw5 r-23eiwj">
                          <div
                            dir="auto"
                            className="css-901oao r-1sixt3s r-1b43r93 r-b88u0q r-1cwl3u0 r-fdjqy7"
                            style={{ color: "rgb(3, 18, 26)" }}
                          >
                            Dishes
                          </div>
                          <div
                            className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                            style={{
                              height: 24,
                              transform: "rotateZ(0deg)",
                              width: 24,
                            }}
                          >
                            <div
                              className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                              style={{
                                filter: 'url("#tint-17")',
                                backgroundImage:
                                  'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/ic-sys-chevron-up-699937e26b969a1750827ea58ee0b276.png")',
                              }}
                            />
                            <img
                              alt
                              draggable="false"
                              src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/ic-sys-chevron-up-699937e26b969a1750827ea58ee0b276.png"
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
                                <filter id="tint-17">
                                  <feFlood floodColor="#0194f3" />
                                  <feComposite
                                    in2="SourceAlpha"
                                    operator="atop"
                                  />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="css-1dbjc4n r-ymttw5 r-5njf8e">
                        <div className="css-1dbjc4n">
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                />
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              Angsle
                            </div>
                          </div>
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                ></div>
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              Asinan Betawi
                            </div>
                          </div>
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                />
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              Asinan Bogor
                            </div>
                          </div>
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                />
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              Ayam Betutu
                            </div>
                          </div>
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-1loqt21 r-6koalj r-18u37iz r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"
                            style={{ transitionDuration: "0s" }}
                          >
                            <div className="css-1dbjc4n r-1awozwy r-1l31rp8 r-kdyh1x r-rs99b7 r-z80fyv r-1777fci r-1b7u577 r-1udh08x r-19wmn03">
                              <div
                                className="css-1dbjc4n r-1mlwlqe r-1udh08x r-417010"
                                style={{ height: 7, width: 9 }}
                              >
                                <div
                                  className="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw"
                                  style={{
                                    backgroundImage:
                                      'url("https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png")',
                                  }}
                                />
                                <img
                                  alt
                                  draggable="false"
                                  src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/img/grey-checkmark-838d1ffaf2b7f1ea76d921e8b033bc70.png"
                                  className="css-9pa8cd"
                                />
                              </div>
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                              style={{ color: "rgb(3, 18, 26)" }}
                            >
                              Ayam Geprek
                            </div>
                          </div>
                          <div
                            dir="auto"
                            className="css-901oao r-1loqt21 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-1yzf0co r-fdjqy7"
                            style={{ color: "rgb(2, 100, 200)" }}
                          >
                            Show more
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_2PKKH" style={{ flexBasis: "75%" }}>
                <div className="_1nbcs">
                  <div className="_2phds">
                    <div className="_1pZeh _2PKKH" style={{ flexBasis: "15%" }}>
                      <div
                        dir="auto"
                        className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                        style={{ color: "rgb(3, 18, 26)" }}
                      >
                        Sort
                      </div>
                    </div>
                    <div className="_2PKKH" style={{ flexBasis: "85%" }}>
                      <div className="css-1dbjc4n r-14lw9ot r-kdyh1x r-1yos0t3 r-1udh08x">
                        <div className="css-1dbjc4n r-1awozwy r-akgwms r-6koalj r-18u37iz r-10gryf7 r-s1qlax r-5njf8e">
                          <div
                            dir="auto"
                            className="css-901oao r-1awozwy r-14lw9ot r-kdyh1x r-1yos0t3 r-hewy6c r-1loqt21 r-6koalj r-13awgt0 r-1sixt3s r-1b43r93 r-1kfrs79 r-h3s6tt r-1777fci r-1cwl3u0 r-4amgru r-s1qlax r-5njf8e r-q4m81j"
                            style={{}}
                          >
                            Popularity
                          </div>
                          <div
                            dir="auto"
                            className="css-901oao r-1awozwy r-kdyh1x r-1loqt21 r-6koalj r-13awgt0 r-1sixt3s r-1b43r93 r-1kfrs79 r-h3s6tt r-1777fci r-1cwl3u0 r-4amgru r-s1qlax r-5njf8e r-q4m81j"
                            style={{ color: "rgb(3, 18, 26)" }}
                          >
                            Visitor Rating
                          </div>
                          <div
                            dir="auto"
                            className="css-901oao r-1awozwy r-kdyh1x r-1loqt21 r-6koalj r-13awgt0 r-1sixt3s r-1b43r93 r-1kfrs79 r-h3s6tt r-1777fci r-1cwl3u0 r-4amgru r-s1qlax r-5njf8e r-q4m81j"
                            style={{ color: "rgb(3, 18, 26)" }}
                          >
                            Price: Low to High
                          </div>
                          <div
                            dir="auto"
                            className="css-901oao r-1awozwy r-kdyh1x r-1loqt21 r-6koalj r-13awgt0 r-1sixt3s r-1b43r93 r-1kfrs79 r-h3s6tt r-1777fci r-1cwl3u0 r-4amgru r-s1qlax r-5njf8e r-q4m81j"
                            style={{ color: "rgb(3, 18, 26)" }}
                          >
                            Price: High to Low
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* data */}
                  {eats && <ListEat eats={eats} />}
                  {/* data */}
                </div>
              </div>
            </div>
            <div className="BwiFv">
              <div className="_1n7Wt" id="homepageSEOTab">
                <h2 className="_2vvS_ _1EsLJ NqDVl" />
                <div className="_11uzA">
                  <div className="zoLrz">
                    <div className="_3zHxw _2Lt-v">
                      <h4>Popular Restaurants</h4>
                    </div>
                    <div className="_2Lt-v">
                      <h4>Other Cities</h4>
                    </div>
                    <div className="_2Lt-v">
                      <h4>Other Popular Cities</h4>
                    </div>
                    <div className="_2Lt-v">
                      <h4>Popular Restaurant Types</h4>
                    </div>
                    <div className="_2Lt-v">
                      <h4>Popular Cuisines &amp; Popular Dishes</h4>
                    </div>
                    <div className="_2Lt-v">
                      <h4>Popular Landmarks &amp; Other Popular Cities</h4>
                    </div>
                    <div
                      className="_7_yp-"
                      style={{ transform: "translateX(0px)", width: 130 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eats;
