import VeMayBay from "../components/VeMayBay";
import ComboTietKiem from "../components/ComboTietKiem";
import SanBay from "../components/SanBay";
import { useState } from "react";
import { render } from "@testing-library/react";

const Air = () => {
  const [activePage, setActivePage] = useState("vemaybay");

  const renderTab = () => {
    switch (activePage) {
      case "tietkiem":
        return <ComboTietKiem />;
      case "sanbay":
        return <SanBay />;
      default:
        return <VeMayBay />;
    }
  };

  const handleRedirect = (type) => {
    setActivePage(type);
  };

  const scrollToTop = () => {
    return window.scrollTo(0, 0);
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
                <div>
                  <div id="desktopContent">
                    <div className="oneColumnWithFlightSearch ">
                      <header
                        id="desktop-topbar"
                        className="hide-for-print-version undefined"
                      >
                        <header className="_2VZXA">
                          <div className="_3yWYi">
                            <div className="_1MlOC eKQS4 _30RUX">
                              <div className="_15cOD _1nKD- _2I_KG OryTC">
                                <span className="_2MqGJ tvat-navbar-hamburger-menu">
                                  <a href="https://www.traveloka.com/air-france">
                                    Air France
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </header>
                      </header>
                      {/* vggvgv */}
                      <div id="container" className="clearfix">
                        <div className="tv-landing-page-headerSection">
                          <div className="tv-search-container">
                            <div className="tvSearchFrame tvFrontPageSearchFrame tvMainSearchFrame">
                              <div
                                id="tv-searchBox"
                                className="tv-searchBox"
                                style={{ marginTop: 16 }}
                              >
                                <div className="LbQ-i _2cPrM">
                                  <div className="yYXXL">
                                    <div
                                      className="_3j6uD"
                                      style={{ width: 960 }}
                                    >
                                      <div className="_3h9L8">
                                        <div
                                          className={
                                            activePage === "vemaybay"
                                              ? "_1SnbR sL9dg tvat-FLIGHT bg_ok"
                                              : "_1SnbR sL9dg tvat-FLIGHT"
                                          }
                                          onClick={() =>
                                            handleRedirect("vemaybay")
                                          }
                                        >
                                          <div className="_1CdcC">
                                            <svg
                                              strokeWidth={0}
                                              width={16}
                                              height={16}
                                              viewBox="0 0 16 16"
                                              fill="#FFFFFF"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                              <path d="M7.97519062,3.89887963 L9.29787304,4.16341611 L12.5147829,1.36408588 C13.1061887,0.849449082 14.0084562,0.88578563 14.5615507,1.43888015 C15.115568,1.99289744 15.1490535,2.89645793 14.6363449,3.48564789 L11.8370147,6.70255777 L12.1015995,8.0254816 C12.3855429,7.83462442 12.7707202,7.86198761 13.0214373,8.11270469 C13.3049644,8.39623173 13.3072037,8.85368053 13.0166276,9.14425665 L12.4405667,9.72031757 L13.2199838,13.6174035 C13.3846893,14.4409306 12.2524962,14.840115 11.8642747,14.0953943 L9.22619986,9.03480726 L7.3146526,10.7330129 C7.17480341,10.8449531 6.97654708,10.9616287 6.7182918,11.0354403 C6.66582359,11.0504362 6.61309154,11.0627362 6.56025805,11.072242 L6.56025805,14.2731581 C6.56025805,15.0095007 5.59053285,15.278099 5.21168772,14.6466905 L3.76495746,12.2354734 L1.35374034,10.7887431 C0.722331805,10.409898 0.990930136,9.44017277 1.7272727,9.44017277 L4.92818886,9.44017277 C4.93769465,9.38733928 4.9499946,9.33460722 4.96499048,9.28213902 C5.0388021,9.02388374 5.15547775,8.8256274 5.29159003,8.65712805 L6.96538742,6.77410785 L1.90503647,4.13615614 C1.16031582,3.74793462 1.55950022,2.61574155 2.38302735,2.78044697 L6.28011324,3.55986415 L6.85617417,2.98380322 C7.14235754,2.69761985 7.60222239,2.69348977 7.88772612,2.9789935 C8.13710273,3.22837011 8.16887219,3.61229444 7.97519062,3.89887963 L7.97519062,3.89887963 Z" />
                                            </svg>
                                            <span className="wfhct">
                                              Vé máy bay
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          className={
                                            activePage === "tietkiem"
                                              ? "_1SnbR tvat-PACKAGE bg_ok"
                                              : "_1SnbR tvat-PACKAGE"
                                          }
                                          onClick={() =>
                                            handleRedirect("tietkiem")
                                          }
                                          style={{}}
                                        >
                                          <div className="_1CdcC">
                                            <svg
                                              strokeWidth={0}
                                              width={16}
                                              height={16}
                                              viewBox="0 0 16 16"
                                              fill="#931682"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                              <g fill="none" fillRule="evenodd">
                                                <rect width={16} height={16} />
                                                <path
                                                  fill="#931682"
                                                  d="M2,16 L0,16 L0,7 L4.5,7 L5,6 L4,4 L6,4 L7,5 L9,5 L8,0 L9,0 L12,5 L15.0046024,5 C15.5543453,5 16,5.44386482 16,6 C16,6.55228475 15.5443356,7 15.0046024,7 L7,7 L6,8 L6,9 L7,9 C7.58171161,9 8.10541836,9.24913327 8.47087756,9.64561218 L9,7 L12,7 L9,12 L9,16 L4,16 L4,14 L2,14 L2,16 Z M1,12 L1,13 L5,13 L5,12 L1,12 Z M6,14 L6,15 L8,15 L8,14 L6,14 Z M6,12 L6,13 L8,13 L8,12 L6,12 Z M1,10 L1,11 L5,11 L5,10 L1,10 Z M2,8 L2,9 L4,9 L4,8 L2,8 Z"
                                                />
                                              </g>
                                            </svg>
                                            <span className="wfhct">
                                              Combo tiết kiệm
                                            </span>
                                          </div>
                                          <div style={{}} />
                                        </div>
                                        <div
                                          className={
                                            activePage === "sanbay"
                                              ? "_1SnbR tvat-undefined bg_ok"
                                              : "_1SnbR tvat-undefined"
                                          }
                                          onClick={() =>
                                            handleRedirect("sanbay")
                                          }
                                          style={{}}
                                        >
                                          <div className="_1CdcC">
                                            <svg
                                              width={16}
                                              height={16}
                                              viewBox="0 0 24 24"
                                              fill="#6DD3CE"
                                              strokeWidth={0}
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                            >
                                              <g fill="none" fillRule="evenodd">
                                                <path d="M0 0h24v24H0z" />
                                                <path
                                                  stroke="#6DD3CE"
                                                  strokeLinecap="round"
                                                  strokeWidth={2}
                                                  d="M2 21v1M12 21v1"
                                                />
                                                <path
                                                  fill="#6DD3CE"
                                                  fillRule="nonzero"
                                                  d="M1.282 16h11.436c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v2.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-2.436c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM3 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                                                />
                                                <path
                                                  stroke="#6DD3CE"
                                                  strokeLinecap="round"
                                                  strokeWidth={2}
                                                  d="M1 15h2v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h2M17 12v10"
                                                />
                                                <path
                                                  fill="#6DD3CE"
                                                  fillRule="nonzero"
                                                  d="M13.846 0h6.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v4.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401h-6.31c-1.336 0-1.821-.14-2.31-.4a2.726 2.726 0 0 1-1.134-1.135c-.262-.489-.401-.974-.401-2.31v-4.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 11.536.4c.489-.262.974-.401 2.31-.401zM22 5h-3l-3-4h-1l1 4h-2l-1-1h-1v4h1l1-1h2l-1 4h1l3-4h3a1 1 0 0 0 0-2z"
                                                />
                                              </g>
                                            </svg>
                                            <span className="wfhct">
                                              Đưa đón sân bay
                                            </span>
                                          </div>
                                          <div style={{}} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {renderTab()}
                                  {/* ve may bay */}
                                  <div />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* dsds */}
                          <div className="tv-backgroundTopContainer">
                            <div
                              className="mcp-placeholder headContent"
                              data-name="headContent"
                            >
                              <div
                                className="component-overflow airlineCoverImage"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CoverImage_1"
                                data-id={1503051157975}
                              >
                                <div className="airlineCoverImage_logoContainer">
                                  <img
                                    className="airlineCoverImage__logo"
                                    src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/19/1505806983625-d6a32e98f1da29e7da3cc2a6ca7caa5a.png?tr=q-75"
                                  />
                                  <h1
                                    className="airlineCoverImage__title"
                                    style={{ color: "black" }}
                                  >
                                    Tìm vé giá rẻ và khuyến mãi của [airline
                                    name] tại đây!
                                  </h1>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* dsds */}
                        </div>
                      </div>

                      {/* vggvgv */}
                    </div>
                  </div>
                  <div
                    className="mcp-placeholder breadcrumbContent"
                    data-name="breadcrumbContent"
                  />
                  <div style={{ height: 71 }} />
                  <div className="contentWrapper">
                    <div className="mcp-placeholder" data-name="content">
                      <div
                        className="component-overflow featureAirlineFacilities"
                        data-component="true"
                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Airline_Facilities"
                        data-id={1561975514220}
                        style={{ marginTop: 162 }}
                      >
                        <h2>Tiện ích Hãng bay</h2>
                        <div
                          className="mcp-placeholder-inner"
                          data-name="facilities"
                        >
                          <div
                            className="component-overflow featureAirlineFacilitiesItem"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Airline_Facilities_facilities1"
                            data-id={1561975514631}
                          >
                            <div>
                              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/06/12/1560316650797-1905d2621989113775953fa04e01faf0.png?tr=q-75" />
                            </div>
                            <table>
                              <thead>
                                <tr>
                                  <th>Hành lý ký gửi</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>20 kg</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            className="component-overflow featureAirlineFacilitiesItem"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Airline_Facilities_facilities2"
                            data-id={1561975515630}
                          >
                            <div>
                              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/06/12/1560316661137-55165fc86adeb750689517b2d32ef572.png?tr=q-75" />
                            </div>
                            <table>
                              <thead>
                                <tr>
                                  <th>Hành lý xách tay</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>7 kg</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            className="component-overflow featureAirlineFacilitiesItem"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Airline_Facilities_facilities3"
                            data-id={1561975516653}
                          >
                            <div>
                              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/06/12/1560316676958-5ac4da999e6e83ebe2e1ec87431337cb.png?tr=q-75" />
                            </div>
                            <table>
                              <thead>
                                <tr>
                                  <th>Thời hạn làm thủ tục bay</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1 tiếng trước giờ khởi hành</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <hr className="topline" />
                      </div>
                      <div
                        className="component-overflow align-center featureFlight"
                        data-component="true"
                        data-name="LandingPage_Flight_Desktop_TravelokaFeatures"
                        data-id={1560316835723}
                      >
                        <h2>Dịch vụ Chuyến bay trên Traveloka</h2>
                        <div className="row">
                          <div className="col-4 align-left">
                            <nav className="nav-pill">
                              <div
                                className="mcp-placeholder-inner"
                                data-name="titles"
                              >
                                <a data-which-id={101} className="active">
                                  Trước khi Đặt chỗ
                                </a>
                                <a data-which-id={102}>Khi Đặt chỗ</a>
                                <a data-which-id={103}>Sau Đặt chỗ</a>
                                <a data-which-id={104}>
                                  Lên Kế hoạch Chuyến đi
                                </a>
                              </div>
                            </nav>
                          </div>
                          <div className="col-8 align-left">
                            <div
                              className="card card-body raw-content active"
                              data-pill-content="$airline.getAirlineId()-self"
                            >
                              <div
                                className="mcp-placeholder-inner"
                                data-name="contents"
                              >
                                <div
                                  className="component-overflow content__container active"
                                  id={101}
                                  data-component="true"
                                  data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content1"
                                  data-id={1564574569643}
                                >
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="content"
                                  >
                                    <div
                                      className="component-overflow nav-tab nav-centered"
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1"
                                      data-id={1564574523812}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="navtab_item"
                                      >
                                        <div
                                          className="component-overflow navtab-item   active  "
                                          data-tab={501}
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Item1"
                                          data-id={1564574434894}
                                        >
                                          {" "}
                                          Smart Combo
                                        </div>
                                        <div
                                          className="component-overflow navtab-item   "
                                          data-tab={502}
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Item2"
                                          data-id={1564574459600}
                                        >
                                          {" "}
                                          Chuyến bay Nhiều Thành phố
                                        </div>
                                        <div
                                          className="component-overflow navtab-item   "
                                          data-tab={503}
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Item3"
                                          data-id={1564574465344}
                                        >
                                          {" "}
                                          Vé bay Linh hoạt
                                        </div>
                                      </div>
                                      <span
                                        className="nav-tab-slider"
                                        style={{ width: 111, left: 19 }}
                                      />
                                    </div>
                                    <div
                                      className="component-overflow nav-tab-content active"
                                      data-tab-content={501}
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Contents1"
                                      data-id={1564573920130}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow fancyHeading h2 "
                                          id="$id"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Contents1_H2"
                                          data-id={1564574074366}
                                        >
                                          <h2 className="mt-0 mb-24 ">
                                            Smart Combo
                                          </h2>
                                          <div className="align-center-short  text-secondary ">
                                            Với Smart Combo trên Traveloka, bạn
                                            có thể đặt các chuyến bay cao cấp
                                            với giá tiết kiệm lên tới 40%. Thoải
                                            mái bay với Air France, Cathay
                                            Pacific, Etihad, Garuda Indonesia,
                                            KLM, Lufthansa, và Singapore
                                            Airlines ở mức giá hợp lý. Bạn chỉ
                                            cần tìm các chuyến bay có dán nhãn{" "}
                                            <b>Smart Combo</b> và chọn chuyến
                                            bay phù hợp.
                                          </div>
                                          <div className="extra-fancyHeading"></div>
                                        </div>
                                        <div
                                          className="component-overflow container-btn"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Contents1_Button"
                                          data-id={1564640774229}
                                        >
                                          {" "}
                                          <a
                                            className="btn-secondary $customClass"
                                            href="https://www.traveloka.com/vi-vn/smart-combo"
                                            target="_blank"
                                          >
                                            Tìm hiểu thêm
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="component-overflow nav-tab-content "
                                      data-tab-content={502}
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Contents2"
                                      data-id={1564574262948}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow fancyHeading h2 "
                                          id="$id"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Contents2_H2"
                                          data-id={1564574263186}
                                        >
                                          <h2 className="mt-0 mb-24 ">
                                            Chuyến bay Nhiều Thành phố
                                          </h2>
                                          <div className="align-center-short  text-secondary ">
                                            Vi vu nhiều hơn nữa với tính năng
                                            đặt vé máy bay nhiều thành phố trên
                                            Traveloka. Nhiều điểm đến hơn - đặt
                                            vé bay đến 5 chặng bay khác nhau,
                                            giữa 10 thành phố - trong cùng một
                                            đặt chỗ. Mở ngay mục Chuyến bay,
                                            chọn thẻ “Nhiều thành phố”, điền các
                                            chặng bay mong muốn và đặt chuyến
                                            bay phù hợp.
                                          </div>
                                          <div className="extra-fancyHeading"></div>
                                        </div>
                                        <div
                                          className="component-overflow container-btn"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Contents2_Button"
                                          data-id={1564640959683}
                                        >
                                          {" "}
                                          <a
                                            className="btn-secondary $customClass"
                                            href="https://www.traveloka.com/vi-vn/flight/multi-city"
                                            target="_blank"
                                          >
                                            Tìm hiểu thêm
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="component-overflow nav-tab-content "
                                      data-tab-content={503}
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Contents3"
                                      data-id={1564574323205}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow fancyHeading h2 "
                                          id="$id"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Contents3_H2"
                                          data-id={1564574323444}
                                        >
                                          <h2 className="mt-0 mb-24 ">
                                            Vé bay Linh hoạt
                                          </h2>
                                          <div className="align-center-short  text-secondary ">
                                            Bạn liên tục phải thay đổi kế hoạch?
                                            Với Vé siêu linh hoạt của Traveloka,
                                            bạn có thể đổi lịch chuyến bay nội
                                            địa với 0% phí phạt hoặc được hoàn
                                            tiền với phí phạt thấp. Trong trang
                                            Chuyến bay, điền thông tin, chọn
                                            Thêm lựa chọn ở cuối trang, và đánh
                                            dấu vào ô <b>Vé siêu linh hoạt</b>{" "}
                                            trong Tuỳ chọn vé linh hoạt trước
                                            khi chọn chuyến bay.
                                          </div>
                                          <div className="extra-fancyHeading"></div>
                                        </div>
                                        <div
                                          className="component-overflow container-btn"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab1_Contents3_Button"
                                          data-id={1564640998307}
                                        >
                                          {" "}
                                          <a
                                            className="btn-secondary $customClass"
                                            href="https://www.traveloka.com/vi-vn/flight/multi-city"
                                            target="_blank"
                                          >
                                            Tìm hiểu thêm
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="component-overflow content__container"
                                  id={102}
                                  data-component="true"
                                  data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content2"
                                  data-id={1564576257591}
                                >
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="content"
                                  >
                                    <div
                                      className="component-overflow nav-tab nav-centered"
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content2_Navtab1"
                                      data-id={1564576257829}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="navtab_item"
                                      >
                                        <div
                                          className="component-overflow navtab-item   active  "
                                          data-tab={504}
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content2_Navtab1_Item1"
                                          data-id={1564576258063}
                                        >
                                          {" "}
                                          Hành lý
                                        </div>
                                        <div
                                          className="component-overflow navtab-item   "
                                          data-tab={505}
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content2_Navtab1_Item2"
                                          data-id={1564576258426}
                                        >
                                          {" "}
                                          Chọn ghế ngồi
                                        </div>
                                        <div
                                          className="component-overflow navtab-item   "
                                          data-tab={506}
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content2_Navtab1_Item3"
                                          data-id={1564576258805}
                                        >
                                          {" "}
                                          Suất ăn trên chuyến bay
                                        </div>
                                      </div>
                                      <span
                                        className="nav-tab-slider"
                                        style={{ width: 0, left: 0 }}
                                      />
                                    </div>
                                    <div
                                      className="component-overflow nav-tab-content active"
                                      data-tab-content={504}
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content2_Navtab1_Contents1"
                                      data-id={1564576259218}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow fancyHeading h2 "
                                          id="$id"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content2_Navtab1_Contents1_H2"
                                          data-id={1564576259455}
                                        >
                                          <h2 className="mt-0 mb-24 ">
                                            Hành lý
                                          </h2>
                                          <div className="align-center-short  text-secondary ">
                                            Mua thêm hành lý ngay khi đặt chuyến
                                            bay trên Traveloka. Khi chọn chuyến
                                            bay và điền thông tin hành khách,
                                            kiểm tra hạn mức hành lý hiện tại
                                            của bạn trong phần <b>Hành lý</b> và
                                            mua thêm nếu cần.
                                          </div>
                                          <div className="extra-fancyHeading"></div>
                                        </div>
                                        <div
                                          className="component-overflow container-btn"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab2_Contents1_Button"
                                          data-id={1564641050560}
                                        >
                                          {" "}
                                          <a
                                            className="btn-secondary $customClass"
                                            href="https://www.traveloka.com/vi-vn/flight/additional-services/extra-baggage"
                                            target="_blank"
                                          >
                                            Tìm Hiểu Thêm
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="component-overflow nav-tab-content "
                                      data-tab-content={505}
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content2_Navtab1_Contents2"
                                      data-id={1564576259840}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow fancyHeading h2 "
                                          id="$id"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content2_Navtab1_Contents2_H2"
                                          data-id={1564576260074}
                                        >
                                          <h2 className="mt-0 mb-24 ">
                                            Chọn ghế ngồi
                                          </h2>
                                          <div className="align-center-short  text-secondary ">
                                            Gần cửa sổ, lối đi, hoặc cạnh bạn
                                            đồng hành của mình, bạn có thể chọn
                                            ghế ngồi ngay khi đặt vé máy bay
                                            trên Traveloka. Khi chọn chuyến bay
                                            và điền thông tin hành khách, xem
                                            bản đồ ghế ngồi trong phần{" "}
                                            <b>Số ghế ngồi</b> và chọn ghế thoải
                                            mái nhất cho mình.
                                          </div>
                                          <div className="extra-fancyHeading"></div>
                                        </div>
                                        <div
                                          className="component-overflow container-btn"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab2_Contents2_Button"
                                          data-id={1564641081593}
                                        >
                                          {" "}
                                          <a
                                            className="btn-secondary $customClass"
                                            href="https://www.traveloka.com/vi-vn/flight/additional-services/meal-selection"
                                            target="_blank"
                                          >
                                            Tìm Hiểu Thêm
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="component-overflow nav-tab-content "
                                      data-tab-content={506}
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content2_Navtab1_Contents3"
                                      data-id={1564576260507}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow fancyHeading h2 "
                                          id="$id"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content2_Navtab1_Contents3_H2"
                                          data-id={1564576260743}
                                        >
                                          <h2 className="mt-0 mb-24 ">
                                            Suất ăn trên chuyến bay
                                          </h2>
                                          <div className="align-center-short  text-secondary ">
                                            Đừng bay với chiếc bụng đói. Khi đặt
                                            vé bay trên Traveloka, sau khi điền
                                            thông tin hành khách, trong phần{" "}
                                            <b>Suất ăn trên chuyến bay</b>, hãy
                                            xem thực đơn và chọn món ăn hoặc đồ
                                            uống cho chuyến bay của bạn.
                                          </div>
                                          <div className="extra-fancyHeading"></div>
                                        </div>
                                        <div
                                          className="component-overflow container-btn"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab2_Contents3_Button"
                                          data-id={1564641115038}
                                        >
                                          {" "}
                                          <a
                                            className="btn-secondary $customClass"
                                            href="https://www.traveloka.com/vi-vn/flight/additional-services/seat-selection"
                                            target="_blank"
                                          >
                                            Tìm Hiểu Thêm
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="component-overflow content__container"
                                  id={103}
                                  data-component="true"
                                  data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content3"
                                  data-id={1564576670628}
                                >
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="content"
                                  >
                                    <div
                                      className="component-overflow nav-tab nav-centered"
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content3_Navtab1"
                                      data-id={1564576670866}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="navtab_item"
                                      >
                                        <div
                                          className="component-overflow navtab-item   active  "
                                          data-tab={507}
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content3_Navtab1_Item1"
                                          data-id={1564576671104}
                                        >
                                          {" "}
                                          Hoàn tiền
                                        </div>
                                        <div
                                          className="component-overflow navtab-item   "
                                          data-tab={508}
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content3_Navtab1_Item2"
                                          data-id={1564576671463}
                                        >
                                          {" "}
                                          Đổi lịch bay
                                        </div>
                                        <div
                                          className="component-overflow navtab-item   "
                                          data-tab={509}
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content3_Navtab1_Item3"
                                          data-id={1564576671845}
                                        >
                                          {" "}
                                          Làm thủ tục trực tuyến
                                        </div>
                                      </div>
                                      <span
                                        className="nav-tab-slider"
                                        style={{ width: 0, left: 0 }}
                                      />
                                    </div>
                                    <div
                                      className="component-overflow nav-tab-content active"
                                      data-tab-content={507}
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content3_Navtab1_Contents1"
                                      data-id={1564576672265}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow fancyHeading h2 "
                                          id="$id"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content3_Navtab1_Contents1_H2"
                                          data-id={1564576672503}
                                        >
                                          <h2 className="mt-0 mb-24 ">
                                            Hoàn tiền
                                          </h2>
                                          <div className="align-center-short  text-secondary ">
                                            Nếu cần huỷ chuyến bay trên
                                            Traveloka, bạn có thể gửi yêu cầu
                                            hoàn tiền chỉ với vài bước đơn giản.
                                            Đầu tiên, hãy đảm bảo chuyến bay của
                                            bạn có thể được hoàn tiền. Để yêu
                                            cầu hoàn tiền, hãy mở vé điện tử của
                                            bạn và chọn mục <b>Hoàn tiền</b>.
                                            Điền lý do hoàn tiền và thông tin
                                            hành khách, bổ sung thông tin chuyển
                                            khoản và các tài liệu cần thiết, sau
                                            đó nhấn Gửi yêu cầu Hoàn tiền.
                                          </div>
                                          <div className="extra-fancyHeading"></div>
                                        </div>
                                        <div
                                          className="component-overflow container-btn"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab3_Contents1_Button"
                                          data-id={1564641186099}
                                        >
                                          {" "}
                                          <a
                                            className="btn-secondary $customClass"
                                            href="https://www.traveloka.com/vi-vn/refund"
                                            target="_blank"
                                          >
                                            Tìm Hiểu Thêm
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="component-overflow nav-tab-content "
                                      data-tab-content={508}
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content3_Navtab1_Contents2"
                                      data-id={1564576672920}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow fancyHeading h2 "
                                          id="$id"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content3_Navtab1_Contents2_H2"
                                          data-id={1564576673156}
                                        >
                                          <h2 className="mt-0 mb-24 ">
                                            Đổi lịch bay
                                          </h2>
                                          <div className="align-center-short  text-secondary ">
                                            Khỏi lo khi cần đổi lịch bay của
                                            mình, bạn có thể thay đổi lịch trình
                                            trên Traveloka chỉ trong vài bước
                                            đơn giản. Vào mục Đặt chỗ của tôi,
                                            mở vé điện tử của bạn, chọn{" "}
                                            <b>Đổi lịch bay</b> rồi nhấp Yêu cầu
                                            Đổi lịch bay. Tiếp tục chọn chuyến
                                            bay và hành khách cần đổi lịch, sau
                                            đó chọn chuyến bay mới và nhận vé
                                            mới của mình.
                                          </div>
                                          <div className="extra-fancyHeading"></div>
                                        </div>
                                        <div
                                          className="component-overflow container-btn"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab3_Contents2_Button"
                                          data-id={1564641279013}
                                        >
                                          {" "}
                                          <a
                                            className="btn-secondary $customClass"
                                            href="https://www.traveloka.com/vi-vn/reschedule/flight"
                                            target="_blank"
                                          >
                                            Tìm Hiểu Thêm
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="component-overflow nav-tab-content "
                                      data-tab-content={509}
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content3_Navtab1_Contents3"
                                      data-id={1564576673581}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow fancyHeading h2 "
                                          id="$id"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content3_Navtab1_Contents3_H2"
                                          data-id={1564576673827}
                                        >
                                          <h2 className="mt-0 mb-24 ">
                                            Làm thủ tục trực tuyến
                                          </h2>
                                          <div className="align-center-short  text-secondary ">
                                            Chỉ dành riêng cho các Thành viên
                                            Traveloka, tính năng Làm thủ tục
                                            trực tuyến giúp bạn làm thủ tục cho
                                            chuyến bay trước khi đến sân bay.
                                            Trải nghiệm thật dễ dàng, chỉ cần mở
                                            vé điện tử của bạn trong phần Đặt
                                            chỗ của tôi, vào phần Làm thủ tục
                                            trực tuyến, điền thông tin, rồi chọn{" "}
                                            <b>Làm thủ tục</b>. Thẻ lên tàu sẽ
                                            được gửi qua email và vé điện tử của
                                            bạn.
                                          </div>
                                          <div className="extra-fancyHeading"></div>
                                        </div>
                                        <div
                                          className="component-overflow container-btn"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab3_Contents3_Button"
                                          data-id={1564641314533}
                                        >
                                          {" "}
                                          <a
                                            className="btn-secondary $customClass"
                                            href="https://www.traveloka.com/vi-vn/checkin"
                                            target="_blank"
                                          >
                                            Tìm Hiểu Thêm
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="component-overflow content__container"
                                  id={104}
                                  data-component="true"
                                  data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content4"
                                  data-id={1564577091782}
                                >
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="content"
                                  >
                                    <div
                                      className="component-overflow nav-tab nav-centered"
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content4_Navtab1"
                                      data-id={1564577092023}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="navtab_item"
                                      >
                                        <div
                                          className="component-overflow navtab-item   active  "
                                          data-tab={512}
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content4_Navtab1_Item1"
                                          data-id={1564577092261}
                                        >
                                          {" "}
                                          Thông báo giá vé
                                        </div>
                                        <div
                                          className="component-overflow navtab-item   "
                                          data-tab={513}
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content4_Navtab1_Item2"
                                          data-id={1564577092644}
                                        >
                                          {" "}
                                          Tình trạng chuyến bay
                                        </div>
                                      </div>
                                      <span
                                        className="nav-tab-slider"
                                        style={{ width: 0, left: 0 }}
                                      />
                                    </div>
                                    <div
                                      className="component-overflow nav-tab-content active"
                                      data-tab-content={512}
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content4_Navtab1_Contents1"
                                      data-id={1564577093414}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow fancyHeading h2 "
                                          id="$id"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content4_Navtab1_Contents1_H2"
                                          data-id={1564577093658}
                                        >
                                          <h2 className="mt-0 mb-24 ">
                                            Thông báo giá vé
                                          </h2>
                                          <div className="align-center-short  text-secondary ">
                                            Tìm vé phù hợp với ngân sách của bạn
                                            cùng tính năng Thông báo giá vé của
                                            Traveloka. Bạn có thể dễ dàng theo
                                            sát tình hình giá vé máy bay của
                                            chuyến bay bạn mong muốn. Chọn
                                            khoảng ngày đi và nhận thông báo
                                            ngay khi có giá phù hợp với ngân
                                            sách của bạn. Dễ dàng đặt chuyến bay
                                            ở thời điểm hợp lý nhất.
                                          </div>
                                          <div className="extra-fancyHeading"></div>
                                        </div>
                                        <div
                                          className="component-overflow container-btn"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab4_Contents1_Button"
                                          data-id={1564641436736}
                                        >
                                          {" "}
                                          <a
                                            className="btn-secondary $customClass"
                                            href="https://www.traveloka.com/vi-vn/price-alerts"
                                            target="_blank"
                                          >
                                            Tìm Hiểu Thêm
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="component-overflow nav-tab-content "
                                      data-tab-content={513}
                                      data-component="true"
                                      data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content4_Navtab1_Contents2"
                                      data-id={1564577094064}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow fancyHeading h2 "
                                          id="$id"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Content4_Navtab1_Contents2_H2"
                                          data-id={1564577094303}
                                        >
                                          <h2 className="mt-0 mb-24 ">
                                            Tình trạng chuyến bay
                                          </h2>
                                          <div className="align-center-short  text-secondary ">
                                            Dễ dàng tìm thông tin chuyến bay
                                            ngay trên đầu ngón tay. Tình trạng
                                            chuyến bay cung cấp thông tin cập
                                            nhất từ sân bay và hãng hàng không,
                                            bao gồm cả cửa ra máy bay và nhà ga.
                                            Chọn phần Tình trạng chuyến bay trên
                                            trang chủ ứng dụng Traveloka, điền
                                            chặng bay/ngày bay hoặc mã chuyến
                                            bay, chọn Xem Tình trạng. Đừng quên
                                            chia sẻ với bạn bè và gia đình nhé!
                                          </div>
                                          <div className="extra-fancyHeading"></div>
                                        </div>
                                        <div
                                          className="component-overflow container-btn"
                                          data-component="true"
                                          data-name="LandingPage_Flight_Desktop_TravelokaFeatures_Navtab4_Contents2_Button"
                                          data-id={1564641468104}
                                        >
                                          {" "}
                                          <a
                                            className="btn-secondary $customClass"
                                            href="https://www.traveloka.com/vi-vn/flight/flight-status"
                                            target="_blank"
                                          >
                                            Tìm Hiểu Thêm
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="component-overflow container"
                        data-component="true"
                        data-name="Flight_SEO_Air_France_LandingPage_Flight_Desktop_About_Airline"
                        data-id={1561711141752}
                      >
                        <div
                          className="mcp-placeholder-inner"
                          data-name="container"
                        >
                          <div
                            className="component-overflow null"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Profile_Title1"
                            data-id={1503051379126}
                          >
                            {" "}
                            <h4 className="airlineSEOH4">
                              Thông tin về Air France
                            </h4>
                          </div>
                          <div
                            className="component-overflow nav-tab nav-centered"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_About_Airline_Navtab"
                            data-id={1561976773752}
                          >
                            <div
                              className="mcp-placeholder-inner"
                              data-name="navtab_item"
                            >
                              <div
                                className="component-overflow navtab-item   active  "
                                data-tab={901}
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_About_Airline_Navtab_Item1"
                                data-id={1561976774002}
                              >
                                {" "}
                                Airline Introduction
                              </div>
                              <div
                                className="component-overflow navtab-item   "
                                data-tab={902}
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_About_Airline_Navtab_Item2"
                                data-id={1561976774354}
                              >
                                {" "}
                                Services &amp; Facilities
                              </div>
                              <div
                                className="component-overflow navtab-item   "
                                data-tab={903}
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_About_Airline_Navtab_Item3"
                                data-id={1561976774742}
                              >
                                {" "}
                                Policy
                              </div>
                              <div
                                className="component-overflow navtab-item   "
                                data-tab={904}
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_About_Airline_Navtab_Item4"
                                data-id={1561976775133}
                              >
                                {" "}
                                Airline Profile
                              </div>
                            </div>
                            <span
                              className="nav-tab-slider"
                              style={{ width: 151, left: 168 }}
                            />
                          </div>
                          <div
                            className="component-overflow nav-tab-content active"
                            data-tab-content={901}
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_About_Airline_Navtab_Content1"
                            data-id={1561976797582}
                          >
                            <div
                              className="mcp-placeholder-inner"
                              data-name="content"
                            >
                              <div
                                className="component-overflow null"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_About_Title"
                                data-id={1503051166017}
                              >
                                {" "}
                                <h5 className="airlineSEOH5">
                                  Air France: Giới thiệu
                                </h5>
                              </div>
                              <div
                                className="component-overflow null"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Content_About"
                                data-id={1503051167182}
                              >
                                <p className="airlineSEOP">
                                  <b>Air France</b> Air France là hãng hàng
                                  không Pháp thuộc Tập đoàn Air France–KLM và là
                                  thành viên Liên minh hàng không toàn cầu
                                  SkyTeam. Kể từ khi thành lập năm 1933, Air
                                  France đã nhận được nhiều giải thưởng như Hãng
                                  hàng không Tiến bộ nhất Thế giới (World’s Most
                                  Improved Airline) - một trong các giải thưởng
                                  Hàng không Thế giới (World Airline Awards).
                                  Air France hiện đang khai thác dịch vụ bay tới
                                  36 điểm đến tại Pháp và 168 điểm đến quốc tế
                                  với bốn hạng ghế Phổ thông, Phổ thông Đặc
                                  biệt, Thương gia và La Première (Hạng nhất).
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="component-overflow nav-tab-content "
                            data-tab-content={902}
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_About_Airline_Navtab_Content2"
                            data-id={1561976804905}
                          >
                            <div
                              className="mcp-placeholder-inner"
                              data-name="content"
                            >
                              <div
                                className="component-overflow airlineSEOMenu"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Menu2"
                                data-id={1503051190526}
                              >
                                {" "}
                                <div className="airlineSubMenu" id={2}>
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="content"
                                  >
                                    <div
                                      className="component-overflow null btn-default"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Menu2_Content2"
                                      data-id={1503051191734}
                                    >
                                      <a
                                        className="airlineSEOMenuContent"
                                        href="#classType"
                                      >
                                        Hạng ghế Air France
                                      </a>
                                    </div>
                                    <div
                                      className="component-overflow null btn-default"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Menu2_Content3"
                                      data-id={1503051192905}
                                    >
                                      <a
                                        className="airlineSEOMenuContent"
                                        href="#specialPrivileges"
                                      >
                                        Chương trình ưu đãi Air France
                                      </a>
                                    </div>
                                    <div
                                      className="component-overflow null btn-default"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Menu2_Content4"
                                      data-id={1503051194084}
                                    >
                                      <a
                                        className="airlineSEOMenuContent"
                                        href="#fleet"
                                      >
                                        Đội bay Air France
                                      </a>
                                    </div>
                                    <div
                                      className="component-overflow null btn-default"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Menu2_Content5"
                                      data-id={1503051195236}
                                    >
                                      <a
                                        className="airlineSEOMenuContent"
                                        href="#inFlightCrew"
                                      >
                                        Phi hành đoàn Air France
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOSingleHeading"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_ClassTitleContainer"
                                data-id={1503051199494}
                              >
                                <div id="classType" />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="content"
                                >
                                  <div
                                    className="component-overflow null"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_ClassTitle"
                                    data-id={1503051199545}
                                  >
                                    {" "}
                                    <h4 className="airlineSEOH4">
                                      Hạng ghế Air France
                                    </h4>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOClasses"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes1"
                                data-id={1503051200978}
                              >
                                {" "}
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="left"
                                >
                                  <div
                                    className="component-overflow airlineSEOClassesContent"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes1_Content1"
                                    data-id={1503051201043}
                                  >
                                    {" "}
                                    <h3>Hạng Phổ thông</h3>
                                    <div className="classContainer">
                                      <img
                                        className="imageClass"
                                        src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/18/1503075202453-f88e60a045822090ab8722db923d39aa.jpeg?tr=q-75"
                                      />
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="contentMeal"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes1_Content1_Paragraph1"
                                          data-id={1503051201096}
                                        >
                                          <p className="airlineSEOP">
                                            Ghế ngồi Hạng Phổ thông của hãng khá
                                            rộng rãi và có thể ngả tới 118 độ.
                                            Tựa đầu và chỗ để chân được thiết kế
                                            dễ dàng điều chỉnh, mang đến trải
                                            nghiệm thư giãn cho hành khách trong
                                            suốt chuyến bay. Ghế Phổ thông của
                                            Air France còn được trang bị màn
                                            hình HD cảm ứng với nhiều loại hình
                                            giải trí như phim, nhạc, TV show,
                                            phim hoạt hình được dịch qua 12 ngôn
                                            ngữ. Ngay phía dưới màn hình là ổ
                                            cắm điện và cổng USB tiện dụng, hoàn
                                            thiện trải nghiệm của khách hàng.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mealContainer">
                                      <img
                                        className="imageMeal"
                                        src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/18/1503075213386-f66e48c3865c079bd1f2cc9713948377.png?tr=q-75"
                                      />
                                      <div className="subMealContainer">
                                        <h4>Suất ăn trên máy bay</h4>
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="contentClass"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes1_Content1_Paragraph2"
                                            data-id={1503051201417}
                                          >
                                            <p className="airlineSEOP">
                                              Air France phục vụ đa dạng thực
                                              đơn trên máy bay từ những món ăn Á
                                              - u đến đặc sản địa phương tại
                                              khắp mọi nơi trên thế giới. Hành
                                              khách có thể chọn tối đa hai món
                                              nóng tùy theo điểm đến.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="right"
                                >
                                  <div
                                    className="component-overflow airlineSEOClassesContent"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes1_Content2"
                                    data-id={1503051203035}
                                  >
                                    {" "}
                                    <h3>Hạng Phổ thông cao cấp</h3>
                                    <div className="classContainer">
                                      <img
                                        className="imageClass"
                                        src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/18/1503075247062-e6341ebf52a2e8bf85dae874d97a789e.jpeg?tr=q-75"
                                      />
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="contentMeal"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes1_Content2_Paragraph1"
                                          data-id={1503051203089}
                                        >
                                          <p className="airlineSEOP">
                                            Khoang Phổ thông Đặc biệt của Air
                                            France được tái thiết kế và cải
                                            thiện nhằm mang đến cho hành khách
                                            trải nghiệm thoải mái hơn. Mỗi ghế
                                            Phổ thông Đặc biệt được trang bị màn
                                            hình HD 12 inch, chỗ để đồ cá nhân,
                                            mặt bàn rộng và các ổ điện dùng để
                                            sạc các thiết bị điện tử cá nhân.
                                            Chưa dừng lại ở đó, hành khách còn
                                            được cung cấp bộ tiện ích gồm các
                                            sản phẩm chăm sóc cá nhân, gối, chăn
                                            và một ly nước khoáng. Ngoài ra,
                                            hành khách hạng Phổ thông Đặc Biệt
                                            được đảm bảo ưu tiên trong suốt quá
                                            trình check-in và ra tàu bay cũng
                                            như quyền sử dụng khu chờ của Air
                                            France tại tất cả các sân bay trên
                                            thế giới.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mealContainer">
                                      <img
                                        className="imageMeal"
                                        src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/18/1503075240987-548f6a44fe30c9dd9fb983c4b861be98.jpeg?tr=q-75"
                                      />
                                      <div className="subMealContainer">
                                        <h4>Suất ăn trên máy bay</h4>
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="contentClass"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes1_Content2_Paragraph2"
                                            data-id={1503051203396}
                                          >
                                            <p className="airlineSEOP">
                                              Bên cạnh suất ăn gồm những món
                                              tương tự như hạng Phổ thông, hành
                                              khách Phổ thông Đặc biệt của Air
                                              France có thể chọn thêm rượu và
                                              cocktail khi lên máy bay. Thêm vào
                                              đó, những hành khách có chế độ ăn
                                              đặc biệt có thể yêu cầu đặt suất
                                              ăn tối thiểu 48 giờ trước khi khởi
                                              hành.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOClasses"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes2a"
                                data-id={1503051205062}
                              >
                                {" "}
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="left"
                                >
                                  <div
                                    className="component-overflow airlineSEOClassesContent"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes2a_Content1"
                                    data-id={1503051205113}
                                  >
                                    {" "}
                                    <h3>Hạng Thương Gia</h3>
                                    <div className="classContainer">
                                      <img
                                        className="imageClass"
                                        src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/18/1503075275395-852b149442aff53c60bc14ef61dd8516.jpeg?tr=q-75"
                                      />
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="contentMeal"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes2a_Content1_Paragraph1"
                                          data-id={1503051205162}
                                        >
                                          <p className="airlineSEOP">
                                            Ghế hạng Thương gia của Air France
                                            được thiết kế nhằm mang tới trải
                                            nghiệm thoải mái nhất cho hành khách
                                            với tấm đệm mềm mại, êm ái, chỗ để
                                            chân bằng da cùng bảng điều khiển
                                            điều chỉnh ghế ngả phẳng thành
                                            giường dài tới hai mét chỉ với một
                                            nút chạm. Khoang ghế có độ riêng tư
                                            cao cho phép khách hàng thư giãn
                                            thoải mái trong hành trình. Chưa
                                            hết, chỉ với những thao tác chạm nhẹ
                                            trên màn hình cảm ứng 16 inch, hành
                                            khách có thể chọn cho mình những bộ
                                            phim kinh điển, phim tài liệu, hoà
                                            nhạc, TV show, game, v.v… để giải
                                            trí suốt chuyến bay.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mealContainer">
                                      <img
                                        className="imageMeal"
                                        src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/18/1503075283842-c9d5932aea14ad0ceee9ab790a72d0b7.jpeg?tr=q-75"
                                      />
                                      <div className="subMealContainer">
                                        <h4>Suất ăn trên máy bay</h4>
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="contentClass"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes2a_Content1_Paragraph2"
                                            data-id={1503051205458}
                                          >
                                            <p className="airlineSEOP">
                                              Suất ăn phục vụ hạng Thương gia
                                              được thay đổi theo từng chặng bay.
                                              Những hành khách khởi hành từ
                                              Paris sẽ được phục vụ thực đơn đặc
                                              biệt với những món ăn độc đáo chế
                                              biến bởi những đầu bếp hàng đầu từ
                                              Pháp như Regis Marcon, Michel Roth
                                              và Guy Martin. Trong khi đó, hành
                                              khách khởi hành từ Paris tới Seoul
                                              sẽ được thưởng thức những món ăn
                                              hấp dẫn từ đầu bếp Hàn Quốc
                                              Young-Young Kim
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="right"
                                >
                                  <div
                                    className="component-overflow airlineSEOClassesContent"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes2a_Content2"
                                    data-id={1503051207101}
                                  >
                                    {" "}
                                    <h3>La Première</h3>
                                    <div className="classContainer">
                                      <img
                                        className="imageClass"
                                        src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/18/1503075296590-3ea85a690e617770aa6533fe73a26a87.jpeg?tr=q-75"
                                      />
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="contentMeal"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes2a_Content2_Paragraph1"
                                          data-id={1503051207160}
                                        >
                                          <p className="airlineSEOP">
                                            La Première là khoang hạng nhất của
                                            hãng hàng không Air France với tiện
                                            ích cao cấp trong các khoang riêng
                                            biệt, đảm bảo riêng tư. Ghế ngồi
                                            hạng La Première có thể điều chỉnh
                                            thành giường dài hai mét với đệm
                                            foam êm ái và chăn gối tiêu chuẩn
                                            khách sạn. Bên cạnh 1000 giờ giải
                                            trí trên máy bay theo yêu cầu, hành
                                            khách có thể tận hưởng các hoạt động
                                            mua sắm thông qua màn hình HD 24
                                            inch. Hãng hàng không Air France còn
                                            cung cấp cho các hành khách hạng La
                                            Première set du lịch các sản phẩm
                                            chăm sóc da mặt của hãng Carita từ
                                            Paris và quần áo chất liệu cotton
                                            chất lượng cao, mang đến trải nghiệm
                                            bay thoải mái hơn.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mealContainer">
                                      <img
                                        className="imageMeal"
                                        src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/18/1503075304094-4ac6062b1e7210284267150eeceac8fe.jpeg?tr=q-75"
                                      />
                                      <div className="subMealContainer">
                                        <h4>Suất ăn trên máy bay</h4>
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="contentClass"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Classes2a_Content2_Paragraph2"
                                            data-id={1503051207456}
                                          >
                                            <p className="airlineSEOP">
                                              Hành khách hạng La Première được
                                              phục vụ các món ăn đặc biệt chuẩn
                                              bị bởi các đầu bếp hàng đầu như
                                              Joël Robuchon, Guy Martin, và
                                              Michel Roth. Thực đơn phong phú
                                              cùng những lựa chọn về rượu được
                                              cập nhật mỗi hai tháng, đảm bảo
                                              hành khách luôn có trải nghiệm mới
                                              mẻ trong mọi chuyến bay của Air
                                              France.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOSingleHeading"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_SpecialPriviledge"
                                data-id={1503051209114}
                              >
                                <div id="specialPrivileges" />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="content"
                                >
                                  <div
                                    className="component-overflow null"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_SpecialPriviledgeTitle"
                                    data-id={1503051209169}
                                  >
                                    {" "}
                                    <h4 className="airlineSEOH4">
                                      Chương trình ưu đãi Air France
                                    </h4>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOSpecialPrivilege"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_SpecialPrivilege1"
                                data-id={1503051210576}
                              >
                                {" "}
                                <div className="specialPrivilegeLeft">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="left"
                                  >
                                    <div
                                      className="component-overflow airlineSEOSpecialPrivilegeImage"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_SpecialPrivilege1_Image1"
                                      data-id={1503051210630}
                                    >
                                      <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/18/1503075366117-051f42451e25867acd2ae063a249c6cb.jpeg?tr=q-75" />
                                    </div>
                                  </div>
                                </div>
                                <div className="specialPrivilegeRight">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="right"
                                  >
                                    <div
                                      className="component-overflow airlineSEOSpecialPrivilegeContent"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_SpecialPrivilege1_Content1"
                                      data-id={1503051210937}
                                    >
                                      <h3>Flying Blue</h3>
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_SpecialPrivilege1_Content1_Paragraph1"
                                          data-id={1503051210993}
                                        >
                                          <p className="airlineSEOP">
                                            Flying Blue là chương trình tri ân
                                            của Air France dành cho hành khách
                                            trung thành thường xuyên sử dụng
                                            dịch vụ bay của hãng. Chương trình
                                            bao gồm bốn mức thẻ thành viên, từ
                                            Ivory (Ngà), Bạc, Vàng tới Bạch Kim.
                                            Tham gia chương trình này, hành
                                            khách được tính dặm thưởng mỗi lần
                                            bay với Air France. Khách hàng bay
                                            càng nhiều dặm càng được tăng mức
                                            thẻ và tận hưởng nhiều lợi ích hơn.
                                            Dặm bay tích lũy có thể được quy đổi
                                            sang nhiều quyền lợi và phần quà như
                                            vé máy bay, miễn phí nâng hạng ghế,
                                            suất ăn trên máy bay, tăng hạn mức
                                            hành lý, miễn phí nghỉ tại khách sạn
                                            cũng như các sản phẩm có sẵn trên
                                            trang Mua sắm của Air France và các
                                            trang của đối tác. Hành khách có thể
                                            đăng ký thành viên miễn phí thông
                                            qua website chính thức của Air
                                            France.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOSpecialPrivilege"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_SpecialPrivilege2"
                                data-id={1503051211594}
                              >
                                {" "}
                                <div className="specialPrivilegeLeft">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="left"
                                  >
                                    <div
                                      className="component-overflow airlineSEOSpecialPrivilegeImage"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_SpecialPrivilege2_Image1"
                                      data-id={1503051211646}
                                    >
                                      <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/08/1504843817962-47c2d5a536a42ec328a12d358c3c672a.jpeg?tr=q-75" />
                                    </div>
                                  </div>
                                </div>
                                <div className="specialPrivilegeRight">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="right"
                                  >
                                    <div
                                      className="component-overflow airlineSEOSpecialPrivilegeContent"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_SpecialPrivilege2_Content1"
                                      data-id={1503051211957}
                                    >
                                      <h3>Airport Lounge</h3>
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_SpecialPrivilege1_Content2_Paragraph1"
                                          data-id={1503051212017}
                                        >
                                          <p className="airlineSEOP">
                                            Nhằm đảm bảo sự thoải mái cho hành
                                            khách, Air France cung cấp nhiều
                                            tiện ích tại sảnh chờ của hãng trên
                                            tất cả các sân bay khắp thế giới.
                                            Tất cả khách hàng hạng Phổ thông Đặc
                                            biệt, Thương gia và La Première đều
                                            có thể sử dụng dịch vụ tại đây. Các
                                            thành viện Flying Blue hạng Vàng,
                                            Bạch Kim và SkyTeam Elite cũng được
                                            tận hưởng tiện ích miễn phí. Đặc
                                            biệt, hành khách hạng La Première
                                            được phép sử dụng tối đa các dịch vụ
                                            tại sảnh chờ La Première như trị
                                            liệu spa, những món ăn ngon miệng,
                                            cocktail và rượu vang. Ngoài ra,
                                            hành khách cũng có thể thư giãn với
                                            các tiện ích giải trí có sẵn như TV,
                                            sách, tạp chí.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOSingleHeading"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_FleetHeading"
                                data-id={1503051213591}
                              >
                                <div id="fleet" />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="content"
                                >
                                  <div
                                    className="component-overflow null"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_FleetHeadingContent"
                                    data-id={1503051213645}
                                  >
                                    {" "}
                                    <h4 className="airlineSEOH4">
                                      Đội bay Air France
                                    </h4>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOFleet"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1"
                                data-id={1503051215092}
                              >
                                {" "}
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="left"
                                >
                                  {" "}
                                  <div className="airlineSEOFleetContent">
                                    <h3>Airbus A340-300</h3>
                                    <div className="fleetFlexContainer">
                                      <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/18/1503075877964-5cc66d52eb888be933014539655cb0ff.jpeg?tr=q-75" />
                                      <div className="fleetSubContainer">
                                        <div>
                                          <strong>Hạng ghế: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="classContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content1_Paragraph4"
                                              data-id={1503051218085}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>Hạng phổ thông</li>
                                                <li>Hạng phổ thông đặc biệt</li>
                                                <li>Hạng thương gia</li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            Hệ thống giải trí:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="inFlightEntertainmentContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content1_Paragraph2"
                                              data-id={1503051216181}
                                            >
                                              <p className="airlineSEOP">
                                                Available
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                        <div>
                                          <strong>Sơ đồ ghế ngồi: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="layoutContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content1_Paragraph5"
                                              data-id={1503051219031}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>2-4-2 (Phổ thông)</li>
                                                <li>
                                                  2-3-2 (Phổ thông Đặc biệt)
                                                </li>
                                                <li>2-2-2 (Thương gia)</li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            WiFi:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="wifiContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content1_Paragraph7"
                                              data-id={1503051219974}
                                            >
                                              <p className="airlineSEOP">
                                                Not Available
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                        <div>
                                          <strong>Bước ghế: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="seatPitchContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content1_Paragraph1"
                                              data-id={1503051215218}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>32 inches (Phổ thông)</li>
                                                <li>
                                                  38 inches (Phổ thông Đặc biệt)
                                                </li>
                                                <li>61 inches (Thương gia)</li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            Ổ điện/cổng USB:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="powerContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content1_Paragraph3"
                                              data-id={1503051217147}
                                            >
                                              <p className="airlineSEOP">
                                                Available
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="middle"
                                >
                                  {" "}
                                  <div className="airlineSEOFleetContent">
                                    <h3>Airbus A380-800</h3>
                                    <div className="fleetFlexContainer">
                                      <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/08/18/1503075909016-321d06d3c6299553a52c5104c1a32356.jpeg?tr=q-75" />
                                      <div className="fleetSubContainer">
                                        <div>
                                          <strong>Hạng ghế: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="classContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content3_Paragraph4"
                                              data-id={1503051232336}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>Phổ thông</li>
                                                <li>Phổ thông Đặc biệt</li>
                                                <li>Thương gia</li>
                                                <li>La Première</li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            Hệ thống giải trí:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="inFlightEntertainmentContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content3_Paragraph2"
                                              data-id={1503051230425}
                                            >
                                              <p className="airlineSEOP">
                                                Available
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                        <div>
                                          <strong>Sơ đồ ghế ngồi: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="layoutContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content3_Paragraph5"
                                              data-id={1503051233306}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>3-4-3 (Phổ thông)</li>
                                                <li>
                                                  2-3-2 (Phổ thông Đặc biệt)
                                                </li>
                                                <li>2-2-2 (Thương gia)</li>
                                                <li>1-1-1-1 (La Première)</li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            WiFi:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="wifiContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content3_Paragraph7"
                                              data-id={1503051234233}
                                            >
                                              <p className="airlineSEOP">
                                                Not Available
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                        <div>
                                          <strong>Bước ghế: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="seatPitchContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content3_Paragraph1"
                                              data-id={1503051229450}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>32 inches (Phổ thông)</li>
                                                <li>
                                                  38 inches (Phổ thông Đặc biệt)
                                                </li>
                                                <li>55 inches (Thương gia)</li>
                                                <li>81 inches (La Première)</li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            Ổ điện/cổng USB:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="powerContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content3_Paragraph3"
                                              data-id={1503051231381}
                                            >
                                              <p className="airlineSEOP">
                                                Available
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="right"
                                >
                                  {" "}
                                  <div className="airlineSEOFleetContent">
                                    <h3>Boeing B777-300ER</h3>
                                    <div className="fleetFlexContainer">
                                      <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/08/1504843589873-37348b6a9ae94081c50ac821f85378e3.jpeg?tr=q-75" />
                                      <div className="fleetSubContainer">
                                        <div>
                                          <strong>Hạng ghế: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="classContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content2_Paragraph4"
                                              data-id={1503051225176}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>Phổ thông</li>
                                                <li>Phổ thông Đặc biệt</li>
                                                <li>Thương gia</li>
                                                <li>La Première</li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            Hệ thống giải trí:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="inFlightEntertainmentContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content2_Paragraph2"
                                              data-id={1503051223286}
                                            >
                                              <p className="airlineSEOP">
                                                Available
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                        <div>
                                          <strong>Sơ đồ ghế ngồi: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="layoutContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content2_Paragraph5"
                                              data-id={1503051226121}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>3-4-3 (Phổ thông)</li>
                                                <li>
                                                  2-4-2 (Phổ thông Đặc biệt)
                                                </li>
                                                <li>1-2-1 (Thương gia) </li>
                                                <li>1-2-1 (La Première)</li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            WiFi:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="wifiContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content2_Paragraph7"
                                              data-id={1503051227080}
                                            >
                                              <p className="airlineSEOP">
                                                Not Available
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                        <div>
                                          <strong>Bước ghế: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="seatPitchContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content2_Paragraph1"
                                              data-id={1503051222338}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>
                                                  32 inch (Hạng phổ thông)
                                                </li>
                                                <li>
                                                  38 inch (Hạng Phổ thông Đặc
                                                  biệ)
                                                </li>
                                                <li>
                                                  61 inch (Hạng thương gia)
                                                </li>
                                                <li>79 inch (La Première)</li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            Ổ điện/cổng USB:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="powerContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet1_Content2_Paragraph3"
                                              data-id={1503051224232}
                                            >
                                              <p className="airlineSEOP">
                                                Available
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOFleet"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet2"
                                data-id={1503051236553}
                              >
                                {" "}
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="left"
                                >
                                  {" "}
                                  <div className="airlineSEOFleetContent">
                                    <h3>Boeing 777-300ER</h3>
                                    <div className="fleetFlexContainer">
                                      <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/04/02/1491094217827-4dd62f8b48950af5221c4dc2e4341562.jpeg?tr=q-75" />
                                      <div className="fleetSubContainer">
                                        <div>
                                          <strong>Hạng ghế: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="classContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet2_Content1_Paragraph4"
                                              data-id={1503051239543}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>Hạng phổ thông</li>
                                                <li>Hạng thương gia</li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            Hệ thống giải trí:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="inFlightEntertainmentContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet2_Content1_Paragraph2"
                                              data-id={1503051237617}
                                            >
                                              <p className="airlineSEOP">
                                                Available
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                        <div>
                                          <strong>Sơ đồ ghế ngồi: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="layoutContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet2_Content1_Paragraph5"
                                              data-id={1503051240495}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>3-3 (Hạng phổ thông)</li>
                                                <li>2-2 (Hạng thương gia)</li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            WiFi:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="wifiContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet2_Content1_Paragraph7"
                                              data-id={1503051241432}
                                            >
                                              <p className="airlineSEOP">
                                                Not Available
                                              </p>
                                            </div>
                                          </div>
                                          <br />
                                        </div>
                                        <div>
                                          <strong>Bước ghế: </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="seatPitchContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet2_Content1_Paragraph1"
                                              data-id={1503051236661}
                                            >
                                              <p className="airlineSEOP" />
                                              <ul>
                                                <li>
                                                  32 inch (Hạng phổ thông)
                                                </li>
                                                <li>
                                                  40 inch (Hạng thương gia)
                                                </li>
                                              </ul>
                                              <p />
                                            </div>
                                          </div>
                                          <strong className="facilityFleet">
                                            Ổ điện/cổng USB:{" "}
                                          </strong>
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="powerContent"
                                          >
                                            <div
                                              className="component-overflow null"
                                              data-component="true"
                                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Fleet2_Content1_Paragraph3"
                                              data-id={1503051238565}
                                            >
                                              <p className="airlineSEOP">
                                                Available
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOSingleHeading"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CrewsHeading"
                                data-id={1503051243794}
                              >
                                <div id="inFlightCrew" />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="content"
                                >
                                  <div
                                    className="component-overflow null"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CrewsHeader"
                                    data-id={1503051243847}
                                  >
                                    {" "}
                                    <h4 className="airlineSEOH4">
                                      Phi hành đoàn Air France
                                    </h4>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOInFlightCrews"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_InFlightCrews1"
                                data-id={1503051245270}
                              >
                                <div className="flightCrewsLeft">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="left"
                                  >
                                    <div
                                      className="component-overflow airlineSEOSpecialPrivilegeImage"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_InFlightCrews1_Image1"
                                      data-id={1503051245320}
                                    >
                                      <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/09/08/1504844034575-5b98a868d3873907107af16fcec8c108.jpeg?tr=q-75" />
                                    </div>
                                  </div>
                                </div>
                                <div className="flightCrewsRight">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="right"
                                  >
                                    <div
                                      className="component-overflow inFlightCrewContent"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_InFlightCrews1_Content1"
                                      data-id={1503051245637}
                                    >
                                      <h5>Đồng phục tiếp viên Air France</h5>
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_InFlightCrews1_Content1_Paragraph1"
                                          data-id={1503051245691}
                                        >
                                          <p className="airlineSEOP">
                                            Đồng phục tiếp viên hàng không của
                                            Air France được thiết kế bởi nhà
                                            thiết kế hàng đầu người Pháp,
                                            Christian Lacroix. Nữ tiếp viên mặc
                                            váy có cổ màu xanh cổ điển cùng tất
                                            và giày cao gót đen, tạo nên vẻ
                                            thanh lịch và sành điệu. Bộ đồng
                                            phục nữ được nhấn nhá với khăn quàng
                                            sang trọng, găng tay da và dải nơ
                                            lớn màu đỏ ở thắt lưng. Đồng phục
                                            tiếp viên nam lịch lãm và hợp thời
                                            trang với vest đen và cà vạt tiệp
                                            màu.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="component-overflow nav-tab-content "
                            data-tab-content={903}
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_About_Airline_Navtab_Content3"
                            data-id={1561976811012}
                          >
                            <div
                              className="mcp-placeholder-inner"
                              data-name="content"
                            >
                              <div
                                className="component-overflow airlineSEOMenu"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_PolicyMenu"
                                data-id={1503051247387}
                              >
                                {" "}
                                <div className="airlineSubMenu" id={3}>
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="content"
                                  >
                                    <div
                                      className="component-overflow null btn-default"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_PolicyMenu_Menu1"
                                      data-id={1503051247443}
                                    >
                                      <a
                                        className="airlineSEOMenuContent"
                                        href="#baggagePolicy"
                                      >
                                        Hành lý miễn cước của Air France
                                      </a>
                                    </div>
                                    <div
                                      className="component-overflow null btn-default"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_PolicyMenu_Menu2"
                                      data-id={1503051248610}
                                    >
                                      <a
                                        className="airlineSEOMenuContent"
                                        href="#generalPolicy"
                                      >
                                        Chính sách hành khách của Air France
                                      </a>
                                    </div>
                                    <div
                                      className="component-overflow null btn-default"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_PolicyMenu_Menu3"
                                      data-id={1503051249777}
                                    >
                                      <a
                                        className="airlineSEOMenuContent"
                                        href="#checkinPolicy"
                                      >
                                        Quy định về thủ tục bay của Air France
                                      </a>
                                    </div>
                                    <div
                                      className="component-overflow null btn-default"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_PolicyMenu_Menu4"
                                      data-id={1503051250960}
                                    >
                                      <a
                                        className="airlineSEOMenuContent"
                                        href="#refundPolicy"
                                      >
                                        Chính sách hoàn tiền của Air France
                                      </a>
                                    </div>
                                    <div
                                      className="component-overflow null btn-default"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_PolicyMenu_Menu5"
                                      data-id={1503051252112}
                                    >
                                      <a
                                        className="airlineSEOMenuContent"
                                        href="#refundPolicy"
                                      >
                                        Chính sách đổi ngày giờ bay của Air
                                        France
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOSingleHeading"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicyHeader"
                                data-id={1503051254407}
                              >
                                <div id="baggagePolicy" />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="content"
                                >
                                  <div
                                    className="component-overflow null"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicyHeading"
                                    data-id={1503051254468}
                                  >
                                    {" "}
                                    <h4 className="airlineSEOH4">
                                      Mức hành lý miễn cước Air France
                                    </h4>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineBaggageTable"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1"
                                data-id={1503051255867}
                              >
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="headContent"
                                />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="content"
                                />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="route"
                                />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="travelClass"
                                />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="cabinBaggage"
                                />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="checkInBaggage"
                                />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="travelClass"
                                />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="travelClass"
                                />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="cabinBaggage"
                                />
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="travelClass"
                                />
                                <table
                                  className="baggageTable"
                                  cellPadding={20}
                                >
                                  <thead>
                                    <tr>
                                      <td
                                        className="component-overflow null"
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TH_TD1"
                                        data-id={1503051280972}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TH_TD1_Content"
                                            data-id={1503051281023}
                                          >
                                            <p className="airlineSEOP">
                                              Chặng bay
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td
                                        className="component-overflow null"
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TH_TD2"
                                        data-id={1503051282237}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TH_TD2_Content"
                                            data-id={1503051282291}
                                          >
                                            <p className="airlineSEOP">
                                              Hạng ghế
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td
                                        className="component-overflow null"
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TH_TD3"
                                        data-id={1503051283503}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TH_TD3_Content"
                                            data-id={1503051283554}
                                          >
                                            <p className="airlineSEOP">
                                              Hành lý xách tay
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td
                                        className="component-overflow null"
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TH_TD4"
                                        data-id={1503051284747}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TH_TD4_Content"
                                            data-id={1503051284801}
                                          >
                                            <p className="airlineSEOP">
                                              Hành lý ký gửi
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr
                                      className="component-overflow null"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR1"
                                      data-id={1503051255920}
                                    >
                                      <td
                                        className="component-overflow null"
                                        rowSpan={4}
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR1_TD1"
                                        data-id={1503051255977}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR1_TD1_Content"
                                            data-id={1503051256036}
                                          >
                                            <p className="airlineSEOP">
                                              Mọi chặng
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td
                                        className="component-overflow null"
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR1_TD2"
                                        data-id={1503051257460}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR1_TD2_Content"
                                            data-id={1503051257528}
                                          >
                                            <p className="airlineSEOP">
                                              Hạng Phổ thông
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td
                                        className="component-overflow null"
                                        rowSpan={4}
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR1_TD4"
                                        data-id={1503051259984}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR1_TD4_Content"
                                            data-id={1503051260037}
                                          >
                                            <p className="airlineSEOP" />
                                          </div>
                                        </div>
                                      </td>
                                      <td
                                        className="component-overflow null"
                                        rowSpan={2}
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR1_TD3"
                                        data-id={1503051258513}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR1_TD3_Content"
                                            data-id={1503051258571}
                                          >
                                            <p className="airlineSEOP">
                                              Tối đa 23 kg (Kích thước: tối đa
                                              158 cm)
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr
                                      className="component-overflow null"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR2"
                                      data-id={1503051261264}
                                    >
                                      <td
                                        className="component-overflow null"
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR2_TD2"
                                        data-id={1503051261315}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR2_TD2_Content"
                                            data-id={1503051261383}
                                          >
                                            <p className="airlineSEOP">
                                              Hạng Phổ Thông Đặc Biệt
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr
                                      className="component-overflow null"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR3"
                                      data-id={1503051265180}
                                    >
                                      <td
                                        className="component-overflow null"
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR3_TD2"
                                        data-id={1503051265236}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR3_TD2_Content"
                                            data-id={1503051265289}
                                          >
                                            <p className="airlineSEOP">
                                              Hạng Thương Gia
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                      <td
                                        className="component-overflow null"
                                        rowSpan={2}
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR3_TD4"
                                        data-id={1503051267794}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR3_TD4_Content"
                                            data-id={1503051267850}
                                          >
                                            <p className="airlineSEOP">
                                              Tối đa 32 kg (Kích thước: tối đa
                                              158 cm)
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr
                                      className="component-overflow null"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR4"
                                      data-id={1503051269311}
                                    >
                                      <td
                                        className="component-overflow null"
                                        data-component="true"
                                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR4_TD2"
                                        data-id={1503051269375}
                                      >
                                        <div
                                          className="mcp-placeholder-inner"
                                          data-name="content"
                                        >
                                          <div
                                            className="component-overflow null"
                                            data-component="true"
                                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BaggagePolicy1_TR4_TD2_Content"
                                            data-id={1503051269427}
                                          >
                                            <p className="airlineSEOP">
                                              La Première
                                            </p>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div
                                className="component-overflow generalPolicySEO"
                                id="generalPolicy"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_GeneralPolicies1"
                                data-id={1503051286045}
                              >
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="title"
                                >
                                  <div
                                    className="component-overflow null"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_GeneralPoliciesHeader1"
                                    data-id={1503051286096}
                                  >
                                    {" "}
                                    <h4 className="airlineSEOH4">
                                      Chính sách hành khách của Air France
                                    </h4>
                                  </div>
                                </div>
                                <div>
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="infantPolicy"
                                  >
                                    <div
                                      className="component-overflow generalPoliciesContent"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_GeneralPolicies1_Content1"
                                      data-id={1503051287283}
                                    >
                                      <h3>Chính sách về hành khách em bé</h3>
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow simple-text   "
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_GeneralPolicies1_Content1_List"
                                          data-id={1503051287341}
                                        >
                                          <ul>
                                            <li>
                                              Trẻ sơ sinh dưới 7 ngày tuổi không
                                              được lên máy bay.
                                            </li>
                                            <li>
                                              Trẻ sơ sinh phải có người lớn đi
                                              cùng, ngồi cùng cabin.{" "}
                                            </li>
                                            <li>
                                              Hành khách đi cùng hai trẻ sơ sinh
                                              cần đặt thêm vé.
                                            </li>
                                            <li>
                                              Hành khách là trẻ sơ sinh có vé
                                              độc lập được phép mang hành lý
                                              tương đương với hành khách người
                                              lớn.{" "}
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="childPolicy"
                                  >
                                    <div
                                      className="component-overflow generalPoliciesContent"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_GeneralPolicies1_Content2"
                                      data-id={1503051290258}
                                    >
                                      <h3>Chính sách về hành khách trẻ em</h3>
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow simple-text   "
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_GeneralPolicies1_Content2_List"
                                          data-id={1503051290309}
                                        >
                                          <ul>
                                            <li>
                                              Hành khách trẻ em được tính là trẻ
                                              từ 2 đến 11 tuổi trên các chuyến
                                              bay nội địa hoặc trẻ từ 2 đến 15
                                              tuổi trên các chuyến bay quốc tế.
                                            </li>
                                            <li>
                                              Trẻ em phải đi cùng người lớn từ
                                              18 tuổi trở lên.
                                            </li>
                                            <li>
                                              Trẻ em phải ngồi cùng cabin với bố
                                              mẹ hoặc người giám hộ.{" "}
                                            </li>
                                            <li>
                                              Hành khách trẻ em được phép mang
                                              hành lý tương đương với hành khách
                                              người lớn.
                                            </li>
                                            <li>
                                              Hành khách được mang theo xe đẩy
                                              và không bị tính phụ phí. Xe đẩy
                                              có thể được đưa lên khoang máy bay
                                              với điều kiện kích thước không
                                              vượt quá 12 x 30 x 100 cm.
                                            </li>
                                            <li>
                                              Air France cung cấp dịch vụ riêng
                                              cho hành khách trẻ em không có cha
                                              mẹ hoặc người giám hộ đi cùng.
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="pregnantPolicy"
                                  >
                                    <div
                                      className="component-overflow generalPoliciesContent"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_GeneralPolicies1_Content3"
                                      data-id={1503051291741}
                                    >
                                      <h3>
                                        Chính sách về hành khách mang thai
                                      </h3>
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow simple-text   "
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_GeneralPolicies_Content3_List"
                                          data-id={1503051291795}
                                        >
                                          <ul>
                                            <li>
                                              Air France không khuyến khích phụ
                                              nữ mang thai những tháng cuối hoặc
                                              trước ngày dự sinh ít hơn 7 ngày
                                              lên máy bay.{" "}
                                            </li>
                                            <li>
                                              Hành khách mang thai không phải
                                              cung cấp chứng nhận y tế, tuy
                                              nhiên cần thăm khám với bác sĩ
                                              trước ngày khởi hành.{" "}
                                            </li>
                                            <li>
                                              Hành khách mang thai có yêu cầu
                                              đặc biệt về dinh dưỡng cần đặt
                                              suất ăn ít nhất hai tiếng rưỡi
                                              trước giờ khởi hành.
                                            </li>
                                            <li>
                                              Hành khách mang thai có thể đặt
                                              trước tất cả các dịch vụ đặc biệt
                                              dành cho hành khách mang thai như
                                              dịch vụ đưa đón sân bay, dịch vụ
                                              giao nhận hành lý và hỗ trợ tại
                                              sân bay.{" "}
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="disabilityPolicy"
                                  >
                                    <div
                                      className="component-overflow generalPoliciesContent"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_GeneralPolicies1_Content4"
                                      data-id={1503051288770}
                                    >
                                      <h3>
                                        Chính sách về hành khách khuyết tật
                                      </h3>
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow simple-text   "
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_GeneralPolicies1_Content4_LandingPage_Flight_Desktop_GeneralPolicies_Content3_List"
                                          data-id={1503051288826}
                                        >
                                          <ul>
                                            <li>
                                              Air France cung cấp dịch vụ tối đa
                                              cho hành khách khuyết tật.
                                            </li>
                                            <li>
                                              Hành khách khuyết tật bay một mình
                                              cần hỗ trợ trong chuyến bay có thể
                                              đặt dịch vụ đặc biệt ít nhất 48
                                              giờ trước khi khởi hành.
                                            </li>
                                            <li>
                                              Hành khách khuyết tật được phép
                                              mang theo chó dẫn đường vào cabin.
                                              Air France cũng cung cấp Dịch vụ
                                              Chó dẫn đường cho hành khách
                                              khuyết tật không thu thêm phí.
                                            </li>
                                            <li>
                                              Tất cả thành viên phi hành đoàn
                                              của Air France đều được tập huấn
                                              để giao tiếp với hành khách khiếm
                                              thính.
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOCheckIn"
                                id="checkinPolicy"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInPolicy1"
                                data-id={1503051293483}
                              >
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="title"
                                >
                                  <div
                                    className="component-overflow null"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInPolicyHeading"
                                    data-id={1503051293552}
                                  >
                                    {" "}
                                    <h4 className="airlineSEOH4">
                                      Quy định về thủ tục bay của Air France
                                    </h4>
                                  </div>
                                </div>
                                <div className="airlineSEOCheckInContentLeft">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="contentLeft"
                                  >
                                    <div
                                      className="component-overflow null"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInContent1"
                                      data-id={1503051297188}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="title"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInContent1_Title"
                                          data-id={1503051312101}
                                        >
                                          {" "}
                                          <h5 className="airlineSEOH5">
                                            Thời gian làm thủ tục bay của Air
                                            France
                                          </h5>
                                        </div>
                                      </div>
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInContent1_Content"
                                          data-id={1503051297245}
                                        >
                                          <p className="airlineSEOP">
                                            Vui lòng xem giờ làm thủ tục bay của
                                            tất cả chuyến bay của Air France
                                            trong bảng bên dưới. Thời gian làm
                                            thủ tục bay có thể không giống nhau
                                            nếu chuyến bay của bạn được khai
                                            thác và vận hành bởi hãng bay đối
                                            tác. Vui lòng kiểm tra lại vé điện
                                            tử của bạn để chắc chắn
                                          </p>
                                        </div>
                                        <div
                                          className="component-overflow checkInTableContainer"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable"
                                          data-id={1503051298383}
                                        >
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="headContent"
                                          />
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="flightScope"
                                          />
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="recommended"
                                          />
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="closingTime"
                                          />
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="content"
                                          />
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="flightScope"
                                          />
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="recommended"
                                          />
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="closingTime"
                                          />
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="flightScope"
                                          />
                                          <div
                                            className="mcp-placeholder-inner"
                                            data-name="recommended"
                                          />
                                          <table
                                            className="checkInTable"
                                            cellPadding={20}
                                          >
                                            <thead>
                                              <tr />
                                              <tr
                                                className="component-overflow null"
                                                data-component="true"
                                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TH1"
                                                data-id={1503051307488}
                                              >
                                                <td
                                                  className="component-overflow null"
                                                  data-component="true"
                                                  data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TH1_TD1"
                                                  data-id={1503051309050}
                                                >
                                                  <div
                                                    className="mcp-placeholder-inner"
                                                    data-name="content"
                                                  >
                                                    <div
                                                      className="component-overflow null"
                                                      data-component="true"
                                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TH1_TD1_Content"
                                                      data-id={1503051309105}
                                                    >
                                                      <p className="airlineSEOP">
                                                        Chặng bay
                                                      </p>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td
                                                  className="component-overflow null"
                                                  data-component="true"
                                                  data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TH1_TD2"
                                                  data-id={1503051310548}
                                                >
                                                  <div
                                                    className="mcp-placeholder-inner"
                                                    data-name="content"
                                                  >
                                                    <div
                                                      className="component-overflow null"
                                                      data-component="true"
                                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TH1_TD2_Content"
                                                      data-id={1503051310608}
                                                    >
                                                      <p className="airlineSEOP">
                                                        Thời gian làm thủ tục
                                                        bay khuyến nghị
                                                      </p>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td
                                                  className="component-overflow null"
                                                  data-component="true"
                                                  data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TH1_TD3"
                                                  data-id={1503051307545}
                                                >
                                                  <div
                                                    className="mcp-placeholder-inner"
                                                    data-name="content"
                                                  >
                                                    <div
                                                      className="component-overflow null"
                                                      data-component="true"
                                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TH1_TD3_Content"
                                                      data-id={1503051307596}
                                                    >
                                                      <p className="airlineSEOP">
                                                        Thời hạn làm thủ tục bay
                                                      </p>
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr
                                                className="component-overflow null"
                                                data-component="true"
                                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR1"
                                                data-id={1503051298440}
                                              >
                                                <td
                                                  className="component-overflow null"
                                                  data-component="true"
                                                  data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR1_TD1"
                                                  data-id={1503051298495}
                                                >
                                                  <div
                                                    className="mcp-placeholder-inner"
                                                    data-name="content"
                                                  >
                                                    <div
                                                      className="component-overflow null"
                                                      data-component="true"
                                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR1_TD1_Content"
                                                      data-id={1503051298550}
                                                    >
                                                      <p className="airlineSEOP">
                                                        Mọi chặng
                                                      </p>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td
                                                  className="component-overflow null"
                                                  data-component="true"
                                                  data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR1_TD2"
                                                  data-id={1503051299972}
                                                >
                                                  <div
                                                    className="mcp-placeholder-inner"
                                                    data-name="content"
                                                  >
                                                    <div
                                                      className="component-overflow null"
                                                      data-component="true"
                                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR1_TD2_Content"
                                                      data-id={1503051300025}
                                                    >
                                                      <p className="airlineSEOP">
                                                        2 giờ trước khi khởi
                                                        hành
                                                      </p>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td
                                                  className="component-overflow null"
                                                  rowSpan={2}
                                                  data-component="true"
                                                  data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR1_TD3"
                                                  data-id={1503051301454}
                                                >
                                                  <div
                                                    className="mcp-placeholder-inner"
                                                    data-name="content"
                                                  >
                                                    <div
                                                      className="component-overflow null"
                                                      data-component="true"
                                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR1_TD3_Content"
                                                      data-id={1503051301515}
                                                    >
                                                      <p className="airlineSEOP">
                                                        1 giờ 30 phút trước khi
                                                        khởi hành
                                                      </p>
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr
                                                className="component-overflow null"
                                                data-component="true"
                                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR2"
                                                data-id={1503051302979}
                                              >
                                                <td
                                                  className="component-overflow null"
                                                  data-component="true"
                                                  data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR2_TD1"
                                                  data-id={1503051304529}
                                                >
                                                  <div
                                                    className="mcp-placeholder-inner"
                                                    data-name="content"
                                                  >
                                                    <div
                                                      className="component-overflow null"
                                                      data-component="true"
                                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR2_TD1_Content"
                                                      data-id={1503051304590}
                                                    >
                                                      <p className="airlineSEOP">
                                                        Quốc tế
                                                      </p>
                                                    </div>
                                                  </div>
                                                </td>
                                                <td
                                                  className="component-overflow null"
                                                  data-component="true"
                                                  data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR2_TD2"
                                                  data-id={1503051305990}
                                                >
                                                  <div
                                                    className="mcp-placeholder-inner"
                                                    data-name="content"
                                                  >
                                                    <div
                                                      className="component-overflow null"
                                                      data-component="true"
                                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInTable_TR2_TD2_Content"
                                                      data-id={1503051306060}
                                                    >
                                                      <p className="airlineSEOP" />
                                                    </div>
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="airlineSEOCheckInContentRight">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="contentRight"
                                  >
                                    <div
                                      className="component-overflow null"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInContent2"
                                      data-id={1503051294753}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="title"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInContent2_Title"
                                          data-id={1503051295986}
                                        >
                                          {" "}
                                          <h5 className="airlineSEOH5">
                                            Làm thủ tục chuyến bay của Air
                                            France trực tuyến
                                          </h5>
                                        </div>
                                      </div>
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInContent2_Content"
                                          data-id={1503051294814}
                                        >
                                          <p className="airlineSEOP">
                                            Có thể làm thủ tục bay trực tuyến
                                            cho chuyến bay của Air France. Vui
                                            lòng thực hiện các bước sau:
                                          </p>
                                          <ol>
                                            <li>
                                              Truy cập trang web hỗ trợ làm thủ
                                              tục của <a href="#">Air France</a>
                                            </li>
                                            <li>
                                              Nhập mã đặt chỗ hoặc thông tin đặt
                                              chỗ theo hướng dẫn
                                            </li>
                                            <li>Điền thông tin theo yêu cầu</li>
                                            <li>Sao lưu hoặc in thẻ lên tàu</li>
                                          </ol>
                                          <p />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="component-overflow airlineSEOCheckIn"
                                id="refundPolicy"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInPolicy2"
                                data-id={1503051313556}
                              >
                                <div className="airlineSEOCheckInContentLeft">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="contentLeft"
                                  >
                                    <div
                                      className="component-overflow null"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInPolicy2_LandingPage_Flight_Desktop_CheckInContent1"
                                      data-id={1503051317250}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="title"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInPolicy2_LandingPage_Flight_Desktop_CheckInContent1_Title"
                                          data-id={1503051319683}
                                        >
                                          {" "}
                                          <h5 className="airlineSEOH5">
                                            Chính sách hoàn tiền của Air France
                                          </h5>
                                        </div>
                                      </div>
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInPolicy2_LandingPage_Flight_Desktop_CheckInContent1_Content"
                                          data-id={1503051317310}
                                        >
                                          <p className="airlineSEOP">
                                            Nhìn chung, hành khách được phép yêu
                                            cầu hoàn tiền với các lý do cá nhân
                                            như ốm đau, mang thai, qua đời hoặc
                                            tự hủy đặt chỗ, hoặc do hãng hủy
                                            chuyến/thay đổi lịch bay, do bất khả
                                            kháng hoặc đặt chỗ trùng lặp. Tuy
                                            nhiên mỗi hãng hàng không khác nhau
                                            có các chính sách khác nhau về việc
                                            xét duyệt và chấp thuận lý do yêu
                                            cầu hoàn tiên. Để có thông tin hoàn
                                            chỉnh, xin vui lòng truy cập{" "}
                                            <a href="https://www.traveloka.com/vi-vn/refund">
                                              Chính sách hoàn tiền của Air
                                              France.
                                              <br />
                                            </a>
                                          </p>
                                        </div>
                                        <div
                                          className="component-overflow simple-text   "
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInPolicy3_Link"
                                          data-id={1503051318523}
                                        >
                                          <a href="https://www.traveloka.com/refund">
                                            Cách yêu cầu hoàn tiền
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="airlineSEOCheckInContentRight">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="contentRight"
                                  >
                                    <div
                                      className="component-overflow null"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInPolicy2_LandingPage_Flight_Desktop_CheckInContent2"
                                      data-id={1503051313617}
                                    >
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="title"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInPolicy2_LandingPage_Flight_Desktop_CheckInContent2_Title"
                                          data-id={1503051316053}
                                        >
                                          {" "}
                                          <h5 className="airlineSEOH5">
                                            Chính sách đổi lịch bay của Air
                                            France
                                          </h5>
                                        </div>
                                      </div>
                                      <div
                                        className="mcp-placeholder-inner"
                                        data-name="content"
                                      >
                                        <div
                                          className="component-overflow null"
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInPolicy2_LandingPage_Flight_Desktop_CheckInContent2_Content"
                                          data-id={1503051313676}
                                        >
                                          <p className="airlineSEOP">
                                            Bạn có thể dễ dàng đổi ngày giờ và
                                            hành trình chuyến bay bằng tính năng
                                            Easy Reschedule. Một số hãng cho
                                            phép hành khách đổi ngày, giờ, chặng
                                            và hãng hàng không trong khi các
                                            hãng khác chỉ cho phép đổi ngày giờ
                                            bay. Để xem hướng dẫn hoàn chỉnh về
                                            cách đổi lịch bay, vui lòng tham
                                            khảo{" "}
                                            <a href="https://www.traveloka.com/vi-vn/reschedule">
                                              Điều khoản &amp; Điều kiện Đổi
                                              lịch bay của Air France{" "}
                                            </a>
                                            . Nếu chuyến bay của bạn không được
                                            áp dụng Easy Reschedule, vui lòng
                                            liên hệ trưc tiếp Air France để đổi
                                            lịch.
                                          </p>
                                        </div>
                                        <div
                                          className="component-overflow simple-text   "
                                          data-component="true"
                                          data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_CheckInPolicy4_Link"
                                          data-id={1503051314862}
                                        >
                                          <a href="https://www.traveloka.com/reschedule">
                                            Cách đổi lịch bay
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="component-overflow nav-tab-content "
                            data-tab-content={904}
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_About_Airline_Navtab_Content4"
                            data-id={1561976820048}
                          >
                            <div
                              className="mcp-placeholder-inner"
                              data-name="content"
                            >
                              <div
                                className="component-overflow profileHistory"
                                id="airlineProfile"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Profile"
                                data-id={1503051379074}
                              >
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="title"
                                >
                                  <div
                                    className="component-overflow null"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Profile_Title1"
                                    data-id={1503051379126}
                                  >
                                    {" "}
                                    <h4 className="airlineSEOH4">
                                      Thông tin về Air France
                                    </h4>
                                  </div>
                                </div>
                                <div className="profileHistory_readable">
                                  <div className="profileHistory__content">
                                    <p>
                                      <b>Air France (Mã IATA: AF)</b> là hãng
                                      hàng không có trụ sở tại Pháp với hai
                                      trung tâm quốc tế chính đặt tại sân bay
                                      Charles de Gaulle và sân bay Orly Airport.
                                      Air France là công ty con của Tập đoàn Air
                                      France–KLM Group và là thành viên của Liên
                                      minh Hàng không Toàn cầu SkyTeam. Hãng
                                      hàng không này hiện đang cung cấp các
                                      chuyến bay đến 36 điểm đến tại Pháp và 168
                                      điểm đến quốc tế thuộc 93 quốc gia trên
                                      toàn thế giới. Trong hành trình phát
                                      triển, Hãng hàng không Air France đã giành
                                      được nhiều giải thưởng quốc tế như Hãng
                                      hàng không có Tiện nghi Hạng nhất Tốt nhất
                                      Thế giới (World’s Best First Class Comfort
                                      Amenities) trao bởi Skytrax, Hãng hàng
                                      không Cung cấp Chặng bay ngắn Tốt nhất
                                      (Best Short Haul Provider), Top 100 Hãng
                                      hàng không Hàng đầu Thế giới năm 2016
                                      (World’s Top 100 Airlines in 2016), Hạng
                                      Phổ thông Đặc biệt Tốt nhất (Best in
                                      Premium Economy) và Hãng hàng không Tiến
                                      bộ nhất Thế giới (World’s Most Improved
                                      Airline) trao bởi World Airline Awards.
                                      Chất lượng xuất sắc của Air France không
                                      chỉ dừng lại ở các dịch vụ trên máy bay,
                                      hãng còn nhận được hai giải thưởng liên
                                      tiếp cho Sảnh chờ La Première do Skytrax
                                      bình chọn. Hãng hàng không Air France còn
                                      triển khai chương trình tri ân khách hàng
                                      thân thiết có tên Flying Blue. Chương
                                      trình bao gồm bốn hạng mức thẻ thành viên,
                                      từ mức Ngà (Ivory), Bạc, Vàng đến mức cao
                                      nhất là Bạch Kim. Tham gia chương trình
                                      này, hành khách được tính dặm thưởng mỗi
                                      lần bay với Air France. Khách hàng bay
                                      càng nhiều dặm càng được tăng mức thẻ và
                                      tận hưởng nhiều lợi ích hơn. Dặm bay tích
                                      luỹ có thể được đổi sang nhiều quyền lợi
                                      và phần quà như vé máy bay, miễn phí nâng
                                      hạng ghế, suất ăn trên máy bay, tăng hạn
                                      mức hành lý, miễn phí nghỉ tại khách sạn
                                      cũng như các sản phẩm có sẵn trên trang
                                      Mua sắm của Air France và đối tác. Với các
                                      chuyến bay hàng ngày, Air France cung cấp
                                      dịch vụ bay theo bốn hạng ghế từ Phổ
                                      thông, Phổ thông Đặc biệt, Thương gia tới
                                      La Première (Hạng Nhất). Mỗi hạng ghế đều
                                      có những tiện ích giải trí trên máy bay đa
                                      dạng, dịch vụ ẩm thực, bộ tiện ích
                                      (amentity), mang đến cho khách hàng trải
                                      nghiệm bay thư thái, dễ chịu. Hành khách
                                      có thể đặt suất ăn đặc biệt 48 giờ trước
                                      khi khởi hành hoặc thưởng thức dịch vụ
                                      buffet tự phục vụ dành riêng cho khách
                                      hàng bay chặng dài. Air France cho phép
                                      hành khách mang theo một hoặc hai kiện
                                      hành lý xách tay tuỳ thuộc vào hạng ghế
                                      cộng thêm một phụ kiện cá nhân đi kèm.
                                      Hành lý xách tay không được vượt quá kích
                                      cỡ 55 x 35 x 25 cm và không nặng quá 12 kg
                                      hoặc 18 kg tuỳ theo hạng ghế và chặng bay.
                                      Ngoài ra, số lượng hành lý ký gửi mà hành
                                      khách được mang trên các chuyến bay của
                                      Air France phụ thuộc vào hạng ghế, chặng
                                      bay và mức thẻ Flying Blue. Tuy nhiên, mỗi
                                      kiện hành lý ký gửi không được nặng quá 23
                                      kg với hạng Phổ thông và Phổ thông Đặc
                                      biệt hoặc không quá 32 kg với hạng Thương
                                      gia và La Première. Để lên máy bay, hành
                                      khách phải check-in trong giới hạn thời
                                      gian tuỳ thuộc vào các chặng bay. Hành
                                      khách bay từ châu u đến sân bay Charles de
                                      Gaulle (Paris) và các điểm đến khác thuộc
                                      châu u phải check-in ít nhất 40 phút trước
                                      giờ khởi hành. Hành khách bay từ châu u
                                      đến các khu vực của Pháp cần check-in ít
                                      nhất 30 phút trước giờ khởi hành. Hành
                                      khách bay từ ngoài châu u phải check-in ít
                                      nhất 60 phút trước giờ bay. Hành khách có
                                      thể check-in trực tiếp tại sân bay hoặc
                                      check-in trực tuyến trên website chính
                                      thức của Air France.
                                    </p>
                                  </div>
                                </div>
                                <a className="profileHistory__readMore">
                                  Đọc thêm
                                </a>
                              </div>
                              <div
                                className="component-overflow profileHistory"
                                id="airlineHistory"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_History"
                                data-id={1503051381436}
                              >
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="title"
                                >
                                  <div
                                    className="component-overflow null"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_History_Title1"
                                    data-id={1503051381496}
                                  >
                                    {" "}
                                    <h4 className="airlineSEOH4">
                                      Lịch sử Air France
                                    </h4>
                                  </div>
                                </div>
                                <div className="profileHistory_readable">
                                  <div className="profileHistory__content">
                                    <p>
                                      Thành lập ngày 7 tháng Mười năm 1933, Air
                                      France trở thành một trong những hãng hàng
                                      không có lịch sử lâu đời nhất thế giới.
                                      Hãng hàng không này được thành lập dựa
                                      trên kết quả hợp nhất của một số hãng hàng
                                      không, bao gồm Air Orient, Air Union,
                                      Compagnie Internationale de Navigation
                                      Aérienne (CIDNA), và Société Générale de
                                      Transport Aériens (SGTA). Sau khi hợp nhất
                                      các chặng bay của những hãng hàng không
                                      này, mạng lưới đường bay của Air France mở
                                      rộng hơn tới châu u, Bắc Phi và nhiều quốc
                                      gia khác trên thế giới. Ngày 26 tháng Sáu
                                      năm 1945, tất cả các công ty vận tải hàng
                                      không của Pháp được quốc hữu hoá. Không
                                      lâu sau đó, chính xác là vào 29 tháng 12
                                      năm 1945, Chính phủ Pháp giao cho Air
                                      France toàn quyền quản lý mạng lưới vận
                                      tải hàng không của quốc gia này. Ngày 1
                                      tháng 7 năm 1946, Air France bắt đầu phục
                                      vụ các chuyến bay thẳng giữa Paris và New
                                      York. Để phục vụ đường bay này, hãng đã sử
                                      dụng máy bay Douglas DC-4, cho phép hoàn
                                      thành chặng bay trong chưa đầy 20 giờ. Đến
                                      năm 1948, Air France đã vận hành 130 máy
                                      bay, trở thành một trong những hãng hàng
                                      không có đội bay lớn nhất thế giới. Từ năm
                                      1974, Air France bắt đầu chuyển phần lớn
                                      các hoạt động đến sân bay Charles de
                                      Gaulle mới ở phía bắc Paris. Cùng năm đó,
                                      Air France cũng trở thành hãng hàng không
                                      thương mại đầu tiên trên thế giới khai
                                      thác máy bay thân rộng hai động cơ Airbus
                                      A300. Đến năm 1983, 50 năm sau ngày thành
                                      lập, Air France đã tuyển dụng hơn 34.000
                                      nhân viên và sở hữu với đội bay 100 máy
                                      bay. Tại thời điểm đó, Air France đã phục
                                      vụ các chuyến bay đến 150 điểm đến trên 73
                                      quốc gia. Điều này khiến Air France trở
                                      thành hãng hàng không vận chuyển hành
                                      khách theo lịch trình lớn thứ tư trên thế
                                      giới và là hãng vận chuyển hàng hóa theo
                                      lịch trình lớn thứ hai thế giới. Cũng
                                      trong năm 1983, Air France trở thành hãng
                                      hàng không châu u đầu tiên phục vụ các
                                      chuyến bay chở khách đến Hàn Quốc. Cùng
                                      với Lufthansa, Iberia và SAS Group, Air
                                      France sau đó thành lập Amadeus vào năm
                                      1987. Amadeus là một công ty CNTT cho phép
                                      các đại lý du lịch bán vé máy bay hoặc các
                                      sản phẩm hàng không khác từ một hệ thống
                                      duy nhất. Ngày 12 tháng 1 năm 1990, hãng
                                      hàng không Air France mở rộng được hình
                                      thành trên cơ sở sáp nhập công ty Air
                                      Inter bán công và Union de Transports
                                      Aériens (UTA) 100% sở hữu tư nhân vào hãng
                                      Air France thuộc sở hữu công. Việc mua lại
                                      UTA và Air Inter của Air France là một
                                      phần trong kế hoạch của chính phủ nhằm tạo
                                      ra một hãng hàng không quốc gia thống nhất
                                      với tầm hoạt động toàn cầu nhằm chống lại
                                      các mối đe dọa tiềm tàng từ việc tự do hóa
                                      thị trường vận tải hàng không nội bộ của
                                      Liên minh châu u. Ngày 19 tháng 2 năm
                                      1999, Air France được tư nhân hóa một phần
                                      khi cổ phiếu của hãng được niêm yết trên
                                      Sàn giao dịch Chứng khoán Paris ngày 22
                                      tháng 2 năm 1999. Tháng 6 năm 1999, Air
                                      France và Delta Air Lines đã thiết lập
                                      quan hệ đối tác song phương xuyên Đại Tây
                                      Dương. Quan hệ đối tác này được mở rộng
                                      vào 22 tháng 6 năm 200 khi hai hãng hàng
                                      không trở thành thành viên sáng lập của
                                      Liên minh Hàng không Toàn cầu Skyteam.
                                      Ngày 30 tháng 9 năm 2003, Air France thông
                                      báo sáp nhập với Hãng hàng không Hoàng gia
                                      Hà Lan KLM có trụ sở tại Hà Lan. Mặc dù
                                      hợp nhất, Air France và KLM vẫn tiếp tục
                                      hoạt động với thương hiệu riêng. Ban đầu,
                                      Air France sở hữu 81% cổ phần của công ty
                                      mới, trong đó Chính phủ Pháp sở hữu 44% và
                                      cổ đông tư nhân sở hữu 37%, trong khi KLM
                                      sở hữu phần còn lại. Tuy nhiên, vào tháng
                                      12 năm 2004, Chính phủ Pháp đã bán 18,4%
                                      cổ phần của mình, tư nhân hóa một cách
                                      hiệu quả Tập đoàn Air France – KLM. Air
                                      France – KLM sau đó đã phát triển trở
                                      thành hãng hàng không lớn nhất thế giới về
                                      doanh thu và lớn thứ ba thế giới, hoặc lớn
                                      nhất ở châu u, về số km vận chuyển hành
                                      khách. Tính đến 2016, Tập đoàn Air
                                      France–KLM đã tuyển dụng 84,602 nhân sự.
                                      Với đội bay gồm 225 máy bay, hãng hàng
                                      không này hiện phục vụ dịch vụ bay tới 36
                                      điểm đến tại Pháp và 168 điểm đến quốc tế
                                      thuộc 93 quốc gia trên toàn thế giới.
                                    </p>
                                  </div>
                                </div>
                                <a className="profileHistory__readMore">
                                  Đọc thêm
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="component-overflow simple-text   "
                            data-component="true"
                            data-name="LandingPage_Flight_Desktop_YellowLining"
                            data-id={1490843656487}
                          >
                            <hr
                              className="topline"
                              style={{ margin: "54px auto !important" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="component-overflow null"
                        data-component="true"
                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_BookingReservation_Content"
                        data-id={1503051172739}
                      >
                        {" "}
                        <h4 className="airlineSEOH4">
                          Đặt vé Air France &amp; Vé điện từ
                        </h4>
                      </div>
                      <div
                        className="component-overflow airlineSEO_three_description"
                        data-component="true"
                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Booking3Steps"
                        data-id={1503051175325}
                      >
                        <div className="airlineSEO_descriptions">
                          <div
                            className="mcp-placeholder-inner"
                            data-name="first_title"
                          >
                            <div
                              className="component-overflow null"
                              data-component="true"
                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Booking3Description_Column1_Title1"
                              data-id={1503051175377}
                            >
                              {" "}
                              <h5 className="airlineSEOH5">Cách đặt vé</h5>
                            </div>
                            <div
                              className="component-overflow null"
                              data-component="true"
                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Booking3Description_Column1_Content1"
                              data-id={1503051176542}
                            >
                              <p className="airlineSEOP">
                                Bạn có thể đặt vé Air France trực tuyến theo các
                                bước sau:
                              </p>
                              <ol>
                                <li>
                                  Truy cập{" "}
                                  <a href="https://www.traveloka.com/">
                                    website Traveloka
                                  </a>{" "}
                                  hoặc mở ứng dụng Traveloka trên điện thoại
                                </li>
                                <li>
                                  Điền thông tin chuyến bay trong khung tìm kiếm
                                </li>
                                <li>Chọn và đặt chuyến bay</li>
                                <li>
                                  Điền thông tin liên hệ và thông tin hành khách
                                </li>
                                <li>
                                  Tiến hành thanh toán bằng phương thức đã chọn
                                </li>
                                <li>
                                  Nhận vé điện tử của Air France trong mục{" "}
                                  <b>Đặt chỗ của tôi</b> hoặc trong email
                                </li>
                              </ol>
                              <p />
                            </div>
                          </div>
                        </div>
                        <div className="airlineSEO_descriptions">
                          <div
                            className="mcp-placeholder-inner"
                            data-name="second_content"
                          >
                            <div
                              className="component-overflow null"
                              data-component="true"
                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Booking3Description_Column2_Title1"
                              data-id={1503051177700}
                            >
                              {" "}
                              <h5 className="airlineSEOH5">Cách thanh toán</h5>
                            </div>
                            <div
                              className="component-overflow null"
                              data-component="true"
                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Booking3Description_Column2_Content1"
                              data-id={1503051178862}
                            >
                              <p className="airlineSEOP">
                                Bạn có thể thanh toán cho vé máy bay Air France
                                đã đặt bằng cách chuyển khoản (ATM/Internet
                                Banking/quầy giao dịch ngân hàng), thẻ tín dụng
                                hoặc thanh toán tại cửa hàng tiện lợi cũng như
                                bưu điện.
                                <br />
                                Để có thông tin đầy đủ về các phương thức thanh
                                toán, vui lòng truy cập{" "}
                                <a href="https://www.traveloka.com/vi-vn/how-to/pay">
                                  Cách thanh toán
                                </a>
                                .
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="airlineSEO_descriptions">
                          <div
                            className="mcp-placeholder-inner"
                            data-name="third_content"
                          >
                            <div
                              className="component-overflow null"
                              data-component="true"
                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Booking3Description_Column3_Title1"
                              data-id={1503051181377}
                            >
                              {" "}
                              <h5 className="airlineSEOH5">
                                Vé điện tử Air France
                              </h5>
                            </div>
                            <div
                              className="component-overflow null"
                              data-component="true"
                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Booking3Description_Column3_Content1"
                              data-id={1503051182531}
                            >
                              <p className="airlineSEOP">
                                Vé điện tử của Air France là chứng từ hợp lệ cho
                                phép thực hiện chuyến bay đã đặt của Air France.
                                Để nhận được thẻ lên máy bay bạn cần xuất trình
                                vé điện tử Air France tại quầy thủ tục ở sân bay
                                hoặc dùng thông tin vé để tự làm thủ tục tại
                                kiosk tự động hoặc trực tuyến. Nếu bạn chưa nhận
                                được vé điện tử trong vòng 60 phút sau khi hoàn
                                tất thanh toán, vui lòng liên hệ bộ phận Hỗ trợ
                                Khách hàng Traveloka.
                              </p>
                            </div>
                          </div>
                        </div>
                        <hr className="topline" />
                      </div>
                      <div
                        className="component-overflow destinationContent"
                        id="$id"
                        data-component="true"
                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Destination_Content1"
                        data-id={1503051327013}
                      >
                        <div
                          className="mcp-placeholder-inner"
                          data-name="title"
                        >
                          <div
                            className="component-overflow null"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Destination_Content1_Title"
                            data-id={1503051327139}
                          >
                            {" "}
                            <h4 className="airlineSEOH4">
                              Các điểm đến của Air France
                            </h4>
                          </div>
                        </div>
                        <div
                          className="mcp-placeholder-inner"
                          data-name="content"
                        >
                          <div
                            className="component-overflow columnAirlineSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Destination_DestinationList2"
                            data-id={1503051327068}
                            style={{ position: "relative", height: "1859.9px" }}
                          >
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{ position: "absolute", left: 0, top: 0 }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Sumatera
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Palembang.KNO">
                                    Medan
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Padang.PDG">
                                    Padang
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: 0,
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Java
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Gaya.CGK">
                                    Jakarta
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Semarang.SRG">
                                    Semarang
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Surabaya.SUB">
                                    Surabaya
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Yogyakarta.JOG">
                                    Yogyakarta
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 600,
                                top: 0,
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Borneo
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Balikpapan.BPN">
                                    Balikpapan
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 600,
                                top: "102.188px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Sulawesi
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Makassar.UPG">
                                    Makassar
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 0,
                                top: "138.979px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Bali &amp; Lesser Sunda Is.
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Bali-Denpasar.DPS">
                                    Bali / Denpasar
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Onslow.LOP">
                                    Lombok
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 600,
                                top: "204.375px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Úc
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Addison.ADL">
                                    Adelaide
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Brisbane.BNE">
                                    Brisbane
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Carlsbad.CNS">
                                    Cairns
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Darwin.DRW">
                                    Darwin
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Hannover.HBA">
                                    Hobart
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Mexico-City.MEL">
                                    Melbourne
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Perth.PER">Perth</a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Sydney.SYD">
                                    Sydney
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: "212.562px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Brunei
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Bandar-Seri-Begawan.BWN">
                                    Bandar Seri Begawan
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 0,
                                top: "277.958px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Campuchia
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Phnom-Penh.PNH">
                                    Phnom Penh
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Recife.REP">
                                    Siem Reap
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: "314.75px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Hồng Kông
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Hong-Kong.HKG">
                                    Hồng Kông
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 0,
                                top: "416.937px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Trung Quốc
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Beijing.PEK">
                                    Bắc Kinh
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Guangzhou.CAN">
                                    Quảng Châu
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Ningbo.NGB">
                                    Ninh Ba
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Tennant-Creek.TAO">
                                    Thanh Đảo
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Shanghai.PVG">
                                    Thượng Hải
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Shenzhen.SZX">
                                    Thâm Quyến
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Changchun.CGO">
                                    Trịnh Châu
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Chongqing.CKG">
                                    Trùng Khánh
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Changsa.CSX">
                                    Changsha
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Hangzhou.HGH">
                                    Hàng Châu
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Guilin.KWL">
                                    Quế Lâm
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Nanjing.NKG">
                                    Nam Kinh
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Sanya.SYX">Tam Á</a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Wenzhou.WNZ">
                                    Ôn Châu
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Wuhan.WUH">
                                    Vũ Hán
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Xian.XIY">Tây An</a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Fuzhou.FOC">
                                    Phúc Châu
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Miyazaki.KMG">
                                    Côn Minh
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Bentonville.XMN">
                                    Hạ Môn
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Chengdu.CTU">
                                    Thành Đô
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: "416.937px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Nhật Bản
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Nagoya.NGO">
                                    Nagoya
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Osaka.KIX">Osaka</a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Hermosillo.HND">
                                    Tokyo
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Tokyo.NRT">Tokyo</a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Fukuoka.FUK">
                                    Fukuoka
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 600,
                                top: "564.104px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Malaysia
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Kavieng-.KUL">
                                    Kuala Lumpur
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Sohar.BKI">
                                    Kota Kinabalu
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Penang.PEN">
                                    Penang
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: "666.291px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Myanmar
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Yangon.RGN">
                                    Yangon
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Mandalay.MDL">
                                    Mandalay
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 600,
                                top: "739.875px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Maldives
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Melbourne.MLE">
                                    Male
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: "805.27px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Philippines
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Cebu.CEB">Cebu</a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Manila.MNL">
                                    Manila
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 600,
                                top: "842.062px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Singapore
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Sitka.SIN">
                                    Singapore
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: "944.249px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Taiwan
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Tampa.TPE">
                                    Đài Bắc
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 600,
                                top: "944.25px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Hàn Quốc
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Seoul.ICN">Seoul</a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: "1046.44px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Thái Lan
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Bakalalan.BKK">
                                    Bangkok
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Chiang-Mai.CNX">
                                    Chiang Mai
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Krabi.KBV">Krabi</a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Phuket.HKT">
                                    Phuket
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Koh-Samui.USM">
                                    Koh Samui
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Surat-Thani.CEI">
                                    Chiang Rai
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Trat.TDX">Trat</a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 600,
                                top: "1046.44px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Việt Nam
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Hamburg.HAN">
                                    Hà Nội
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Ho-Chi-Minh-City.SGN">
                                    TP HCM
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Jakarta.UIH">
                                    Quy Nhơn
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Sabang.VII">Vinh</a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Kathmandu.PQC">
                                    Phú Quốc
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Visakhapatnam.CXR">
                                    Nha Trang
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Galela.HUI">Huế</a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Hai-Phong.HPH">
                                    Hải Phòng
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Da-Nang.DAD">
                                    Đà Nẵng
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Dien-Bien.DIN">
                                    Điện Biên
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Da-Lat.DLI">
                                    Đà Lạt
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 0,
                                top: "1218.17px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Ả Rập Saudi
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Jeddah.JED">
                                    Jeddah
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 0,
                                top: "1320.35px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Ấn Độ
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Kochi.COK">Kochi</a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Rampi.DEL">
                                    New Delhi
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Mamasa.BOM">
                                    Mumbai
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Thanh-Hoa.VTZ">
                                    Visakhapatnam (Vizag)
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Varanasi.BLR">
                                    Bangalore
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Takamatsu.HYD">
                                    Hyderabad
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Hyderabad.MAA">
                                    Chennai
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Mukomuko.CCU">
                                    Kolkata
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Vinh.VNS">
                                    Varanasi
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: "1369.37px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Đức
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Frankfurt.FRA">
                                    Frankfurt
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: "1516.54px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Các tiểu vương quốc Ả Rập thống nhất
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Abu-Dhabi.AUH">
                                    Abu Dhabi
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: "1618.73px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Hà Lan
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Amsterdam.AMS">
                                    Amsterdam
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 600,
                                top: "1618.73px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Pháp
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Paris.CDG">Paris</a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 0,
                                top: "1716.87px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Sri Lanka
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Colombo.CMB">
                                    Colombo
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 300,
                                top: "1720.92px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Vương quốc Anh
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/London.LHR">
                                    Luân Đôn
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="pulauContainer themes borderColor$airlineData.getAirlineId()"
                              style={{
                                position: "absolute",
                                left: 600,
                                top: "1720.92px",
                              }}
                            >
                              <span className="aPulau themes bgColor$airlineData.getAirlineId()">
                                Lào
                              </span>
                              <ul className="aKotaHeader">
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Luang-Prabang.LPQ">
                                    Luang Prabang
                                  </a>
                                </li>
                                <li className="aKota">
                                  <a href="/vi-vn/flight/to/Vientiane.VTE">
                                    Vientiane
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <hr className="topline" />
                      </div>
                      <div
                        className="component-overflow destinationContent"
                        id="popularRoute"
                        data-component="true"
                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Destination_Content2"
                        data-id={1503051328319}
                      >
                        <div
                          className="mcp-placeholder-inner"
                          data-name="title"
                        >
                          <div
                            className="component-overflow null"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Destination_Content2_Title"
                            data-id={1503051350794}
                          >
                            {" "}
                            <h4 className="airlineSEOH4">
                              Chặng bay Air France phổ biến
                            </h4>
                          </div>
                        </div>
                        <div
                          className="mcp-placeholder-inner"
                          data-name="content"
                        >
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular1_Link1"
                            data-id={1503051328383}
                          >
                            <a href="https://www.traveloka.com/vi-vn/flight/route/Ho-Chi-Minh-City-Da-Lat.SGN.DLI">
                              Vé máy bay Ho Chi Minh – Da Lat
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular1_Link2"
                            data-id={1503051330869}
                          >
                            <a href="https://www.traveloka.com/vi-vn/flight/route/Ho-Chi-Minh-City-Da-Nang.SGN.DAD">
                              Vé máy bay Ho Chi Minh – Da Nang
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular1_Link3"
                            data-id={1503051333353}
                          >
                            <a href="https://www.traveloka.com/vi-vn/flight/route/Ho-Chi-Minh-City-Hanoi.SGN.HAN">
                              Vé máy bay Ho Chi Minh – Hanoi
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular1_Link4"
                            data-id={1503051335842}
                          >
                            <a href="https://www.traveloka.com/vi-vn/flight/route/Ho-Chi-Minh-City-Phu-Quoc.SGN.PQC">
                              Vé máy bay Ho Chi Minh – Phu Quoc
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular1_Link5"
                            data-id={1503051338332}
                          >
                            <a href="https://www.traveloka.com/vi-vn/flight/route/Ho-Chi-Minh-City-Vientiane.SGN.VTE">
                              Vé máy bay Ho Chi Minh – Vientiane
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular1_Link6"
                            data-id={1503051340834}
                          >
                            <a href="https://www.traveloka.com/vi-vn/flight/route/Da-Lat-Phu-Quoc.DLI.PQC">
                              Vé máy bay Da Lat – Phu Quoc
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular1_Link7"
                            data-id={1503051343337}
                          >
                            <a href="https://www.traveloka.com/vi-vn/flight/route/Da-Lat-Can-Tho.DLI.VCA">
                              Vé máy bay Da Lat – Can Tho
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular1_Link8"
                            data-id={1503051345828}
                          >
                            <a href="https://www.traveloka.com/vi-vn/flight/route/Nha-Trang-Hai-Phong.CXR.HPH">
                              Vé máy bay Nha Trang – Hai Phong
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular1_Link9"
                            data-id={1503051348312}
                          >
                            <a href="https://www.traveloka.com/vi-vn/flight/route/Hai-Phong-Phu-Quoc.HPH.PQC">
                              Vé máy bay Hai Phong – Phu Quoc
                            </a>
                          </div>
                        </div>
                        <hr className="topline" />
                      </div>
                      <div className="contactAddress" id="address">
                        <div
                          className="mcp-placeholder-inner"
                          data-name="title"
                        >
                          <div
                            className="component-overflow null"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_ContactTitle"
                            data-id={1503051383905}
                          >
                            {" "}
                            <h4 className="airlineSEOH4">Liên hệ Air France</h4>
                          </div>
                        </div>
                        <div className="contactAddress__container">
                          <div className="contactAddress__subContainer">
                            <div
                              className="mcp-placeholder-inner"
                              data-name="right"
                            >
                              <div
                                className="component-overflow null"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Address"
                                data-id={1503051387197}
                              >
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="title"
                                >
                                  <div
                                    className="component-overflow null"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_AddressTitle"
                                    data-id={1503051387270}
                                  >
                                    {" "}
                                    <h4 className="airlineSEOH4">
                                      Văn phòng Air France
                                    </h4>
                                  </div>
                                </div>
                                <div className="subcontentAddressContact">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="content"
                                  >
                                    <div
                                      className="component-overflow null"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_AddressContent"
                                      data-id={1503051388468}
                                    >
                                      {" "}
                                      <h4 className="airlineSEOH4">
                                        <strong>Air France</strong>
                                        <br />
                                        <span
                                          style={{
                                            fontWeight: 300,
                                            whiteSpace: "pre-line",
                                          }}
                                        >
                                          Air France Customer Care department
                                          Summitmas II 17th Floor Jl. Jendral
                                          Sudirman Kav. 61-62 Jakarta 12190
                                          Indonesia
                                        </span>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="contactAddress__subContainer">
                            <div
                              className="mcp-placeholder-inner"
                              data-name="left"
                            >
                              <div
                                className="component-overflow null"
                                data-component="true"
                                data-name="Flight_SEO_Air_France1_LandingPage_Desktop_Flight_Contact"
                                data-id={1503051383852}
                              >
                                <div
                                  className="mcp-placeholder-inner"
                                  data-name="title"
                                >
                                  <div
                                    className="component-overflow null"
                                    data-component="true"
                                    data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_ContactTitle"
                                    data-id={1503051383905}
                                  >
                                    {" "}
                                    <h4 className="airlineSEOH4">
                                      Liên hệ Air France
                                    </h4>
                                  </div>
                                </div>
                                <div className="subcontentAddressContact">
                                  <div
                                    className="mcp-placeholder-inner"
                                    data-name="content"
                                  >
                                    <div
                                      className="component-overflow null"
                                      data-component="true"
                                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_ContactContent"
                                      data-id={1503051385092}
                                    >
                                      {" "}
                                      <h3 className="airlineSEOH3">
                                        +8428 829 09 81
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="topline" />
                      <div
                        className="component-overflow destinationContent"
                        id="popularHotel"
                        data-component="true"
                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Destination_Content3"
                        data-id={1503051352221}
                      >
                        <div
                          className="mcp-placeholder-inner"
                          data-name="title"
                        >
                          <div
                            className="component-overflow null"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Destination_Content3_Title"
                            data-id={1503051372756}
                          >
                            {" "}
                            <h4 className="airlineSEOH4">Khách sạn phổ biến</h4>
                          </div>
                        </div>
                        <div
                          className="mcp-placeholder-inner"
                          data-name="content"
                        >
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular2_Link1"
                            data-id={1503051352285}
                          >
                            <a href="https://www.traveloka.com/vi-vn/hotel/vietnam/city/vung-tau-city-10009888">
                              Khách sạn ở in Vung Tau
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular2_Link2"
                            data-id={1503051354549}
                          >
                            <a href="https://www.traveloka.com/vi-vn/hotel/vietnam/city/da-lat-city-10010169">
                              Khách sạn ở in Da Lat
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular2_Link3"
                            data-id={1503051356807}
                          >
                            <a href="https://www.traveloka.com/vi-vn/hotel/vietnam/region/da-nang-city-10010083">
                              Khách sạn ở in Da Nang
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular2_Link4"
                            data-id={1503051359100}
                          >
                            <a href="https://www.traveloka.com/vi-vn/hotel/vietnam/city/cua-lo-town-10010156">
                              Khách sạn ở in Cua Lo
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular2_Link5"
                            data-id={1503051361385}
                          >
                            <a href="https://www.traveloka.com/vi-vn/hotel/vietnam/city/nha-trang-city-10010498">
                              Khách sạn ở in Nha Trang
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular2_Link6"
                            data-id={1503051363665}
                          >
                            <a href="https://www.traveloka.com/vi-vn/hotel/vietnam/city/phu-quoc-10011570">
                              Khách sạn ở in Phu Quoc
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular2_Link7"
                            data-id={1503051365946}
                          >
                            <a href="https://www.traveloka.com/vi-vn/hotel/vietnam/city/district-1-10010551">
                              Khách sạn ở in Quan 1
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular2_Link8"
                            data-id={1503051368240}
                          >
                            <a href="https://www.traveloka.com/vi-vn/hotel/vietnam/region/can-tho-city-10009866">
                              Khách sạn ở in Can Tho
                            </a>
                          </div>
                          <div
                            className="component-overflow airlineLinkSEO"
                            data-component="true"
                            data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Popular2_Link9"
                            data-id={1503051370491}
                          >
                            <a href="https://www.traveloka.com/vi-vn/hotel/vietnam/region/ha-noi-city-10009843">
                              Khách sạn ở in Ha Noi
                            </a>
                          </div>
                        </div>
                        <hr className="topline" />
                      </div>
                      <div
                        className="component-overflow airlineSEOGrey"
                        data-component="true"
                        data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_GreyContainer"
                        data-id={1503051183730}
                      >
                        <div className="airlineSEOGreyContainer">
                          <div
                            className="mcp-placeholder-inner"
                            data-name="contentFlightPartner"
                          >
                            <div
                              className="component-overflow seoImageSlider"
                              id="flightPartners"
                              data-component="true"
                              data-name="LandingPage_Flight_Desktop_AirlineList"
                              data-id={1493862015023}
                            >
                              <h2>Đối tác hàng không của Traveloka</h2>
                              <img
                                className="chevronLeft"
                                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/08/26/1629962845645-bc8836f9f64ea98c51b6e7fc708219dd.png?tr=q-75"
                              />
                              <div className="imageSliderContainer">
                                <div
                                  className="contentImageSliderAirline"
                                  style={{ left: 0, width: 1240 }}
                                >
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="vietjet"
                                  >
                                    <img
                                      className="Vietjet"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450350670702-a9dba44d3e9fe096f83ffe00d56a99ec.png"
                                      alt="Vietjet"
                                      index="Vietjet"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="vietnam-airlines"
                                  >
                                    <img
                                      className="Vietnamairlines"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450350677249-52f0dd5f4ddc5cbfc75b674577c44d45.png"
                                      alt="Vietnam Airlines"
                                      index="Vietnam Airlines"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="jetstar"
                                  >
                                    <img
                                      className="Jetstar"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450349850619-974acdfa8d5d889d507515772ad20519.png"
                                      alt="Jetstar"
                                      index="Jetstar"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="airasia"
                                  >
                                    <img
                                      className="Airasia"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/06/20/1466418524477-74783a39da2dd0391ca3e5afba4edf10.png"
                                      alt="Airasia"
                                      index="Airasia"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="singapore-airlines"
                                  >
                                    <img
                                      className="Singaporeairlines"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450350610403-aefa15ce3b8e59de9882926d198eb27f.png"
                                      alt="Singapore Airlines"
                                      index="Singapore Airlines"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="malaysia-airlines"
                                  >
                                    <img
                                      className="Malaysiaairlines"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450350412847-3992f7771a86e8e878338cd31c390786.png"
                                      alt="Malaysia Airlines"
                                      index="Malaysia Airlines"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="cathay-pacific"
                                  >
                                    <img
                                      className="Cathaypacific"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/11/17/1479375081019-abaa527e23bc56424390edf666c9055e.png"
                                      alt="Cathay Pacific"
                                      index="Cathay Pacific"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="citilink"
                                  >
                                    <img
                                      className="Citilink"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450350561012-6584b693edd67d75cfc25ecff41c5704.png"
                                      alt="Citilink"
                                      index="Citilink"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="emirates"
                                  >
                                    <img
                                      className="Emirates"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450349712954-072646ca207d5739f8199ef14e6a6464.png"
                                      alt="Emirates"
                                      index="Emirates"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="lion-air"
                                  >
                                    <img
                                      className="Lionair"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450349861201-09ec8f298222a73d66e8e96aa3b918f0.png"
                                      alt="Lion Air"
                                      index="Lion Air"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="qatar-airways"
                                  >
                                    <img
                                      className="Qatarairways"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450350567476-e63b42995391b256f2896458731525d5.png"
                                      alt="Qatar Airways"
                                      index="Qatar Airways"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="thai-airasia-x"
                                  >
                                    <img
                                      className="Thaiairasiax"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/11/17/1479375169405-b2b815d5e0a55ab8a7e13db00e95c5d5.png"
                                      alt="Thai Airasia X"
                                      index="Thai Airasia X"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="thai-lion"
                                  >
                                    <img
                                      className="Thailion"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450350592719-5aba7dc0f79bd63655904bb1dc803667.png"
                                      alt="Thai Lion"
                                      index="Thai Lion"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="thai-smile"
                                  >
                                    <img
                                      className="Thaismile"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/11/10/1478754989375-3d79630f8eee7b1722ef3d56e161ff39.png"
                                      alt="Thai Smile"
                                      index="Thai Smile"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="china-airlines"
                                  >
                                    <img
                                      className="Chinaairlines"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450349231542-0b361dab47374da6c45371b20afad93a.png"
                                      alt="China Airlines"
                                      index="China Airlines"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="etihad"
                                  >
                                    <img
                                      className="Etihadairways"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/05/29/1496044334073-f38dec8cbdd7cd98a8c0076930aef28d.png"
                                      alt="Etihad Airways"
                                      index="Etihad Airways"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="eva-air"
                                  >
                                    <img
                                      className="EVAair"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2017/05/29/1496036467953-07ed58feff4411d62556fc4163e9734b.png"
                                      alt="EVA Air"
                                      index="EVA Air"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="hongkong-airlines"
                                  >
                                    <img
                                      className="Hongkongairlines"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450349784627-6cf9e8259125d74d6be5f7e79ddba070.png"
                                      alt="Hongkong Airlines"
                                      index="Hongkong Airlines"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="korean-air"
                                  >
                                    <img
                                      className="Koreanair"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2015/12/17/1450350298291-662d425ad7771e0ce8639643236d504a.png"
                                      alt="Korean Air"
                                      index="Korean Air"
                                    />
                                  </a>
                                  <a
                                    target="_blank"
                                    className="airlinePartnerContent"
                                    href="trigana-air"
                                  >
                                    <img
                                      className="Triganaair"
                                      src="https://s3-ap-southeast-1.amazonaws.com/cntres-assets-ap-southeast-1-250226768838-cf675839782fd369/imageResource/2016/12/27/1482845148999-c4273ca0398aa949d7c6d23cee5ecb5a.png"
                                      alt="Trigana Air"
                                      index="Trigana Air"
                                    />
                                  </a>
                                </div>
                              </div>
                              <img
                                className="chevronRight"
                                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/08/26/1629962849001-53b6adb95221f71ef2566b9f16130c93.png?tr=q-75"
                              />
                            </div>
                          </div>
                          <div
                            className="mcp-placeholder-inner"
                            data-name="contentPaymentPartner"
                          >
                            <div
                              className="component-overflow seoImageSlider"
                              id="paymentPartners"
                              data-component="true"
                              data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Paymentlist"
                              data-id={1503051183785}
                            >
                              <h2>Đối tác thanh toán của Traveloka</h2>
                              <img
                                className="chevronLeft"
                                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/08/26/1629962845645-bc8836f9f64ea98c51b6e7fc708219dd.png?tr=q-75"
                              />
                              <div className="imageSliderContainer">
                                <div
                                  className="contentImageSliderPayment"
                                  style={{ left: 0, width: 2356 }}
                                >
                                  <div className="paymentPartnerContent">
                                    <div className="Visa" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Mastercard" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Onepay" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Vietcombank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Vietinbank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Bidv" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Vib" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Eximbank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Sacombank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Mb" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Tpbank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Hdbank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Maritimebank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Vietabank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="NHNA" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Oceanbank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Seabank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Bacabank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Asbank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Ncb" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Agribank" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="BGB" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Shb" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Payoo" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Cholon" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Phucanh" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Bsmart" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Ministop" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Circlek" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Guardian" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Fpt" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Cocomart" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Quanglong" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Hongyen" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Vinmart" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Hnam" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Citimart" />
                                  </div>
                                  <div className="paymentPartnerContent">
                                    <div className="Ddongvet" />
                                  </div>
                                </div>
                              </div>
                              <img
                                className="chevronRight"
                                src="https://ik.imagekit.io/tvlk/image/imageResource/2021/08/26/1629962849001-53b6adb95221f71ef2566b9f16130c93.png?tr=q-75"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="component-overflow trainSocialShare trainSocialShareFixedMiddle"
                        data-component="true"
                        data-name="Flight_SEO_Air_France1_LandingPage_Train_SEO_Mobile_Share"
                        data-id={1503051390382}
                        style={{ left: 1112, right: 60, position: "sticky" }}
                      >
                        <p>Share</p>
                        <div className="trainSocialShare__container pageShare">
                          <a href="#">
                            <img
                              className="trainSocialShare__icon gplus"
                              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/03/03/1488515517955-e5d0abf60e5fcad737c5eff13d64d369.png?tr=q-75"
                              alt="Google Plus Share"
                            />
                          </a>
                          <a href="#">
                            <img
                              className="trainSocialShare__icon twitter"
                              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/03/03/1488515526264-840827e1e9b977f2e58081d86063aa0a.png?tr=q-75"
                              alt="Twitter Share"
                            />
                          </a>
                          <a href="#">
                            <img
                              className="trainSocialShare__icon facebook"
                              src="https://ik.imagekit.io/tvlk/image/imageResource/2017/03/03/1488515946451-f9b3317c47abac6e613c0c95213fb7af.png?tr=q-75"
                              alt="Facebook Share"
                            />
                          </a>
                          <img
                            className="trainSocialShare__scroll-up"
                            src="https://ik.imagekit.io/tvlk/image/imageResource/2017/03/03/1488516206975-ebfd0c880366dc22e291cc037bd8abaf.png?tr=q-75"
                            alt="Scroll Top"
                            onClick={scrollToTop}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mcp-placeholder footerContent"
                    data-name="footerContent"
                  >
                    <div
                      className="component-overflow null"
                      data-component="true"
                      data-name="Footer_NewsletterSubscribe"
                      data-id={1474001429796}
                    />
                  </div>
                  <footer className="undefined undefined hide-for-print-version">
                    <span>
                      <div className="_2UFiP">
                        <div className="_1Og_U" style={{ maxWidth: 1080 }}>
                          <div className="_3tosd Ucqdu">
                            <div className="_1bH2V _1nKD- _1AXWq tvat-footerItemsLink">
                              <div className="_1AXWq tvat-footerItemsLink">
                                <div className="_3oPMa">
                                  <svg
                                    width={200}
                                    height={90}
                                    viewBox="0 0 135 43"
                                    fill="#FFFFFF"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                  >
                                    <g
                                      id="Train_Booking"
                                      stroke="none"
                                      strokeWidth={1}
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <g
                                        id="Train_Booking-Form_Login-Success"
                                        transform="translate(-174.000000, -10.000000)"
                                      >
                                        <g
                                          id="Logo-/-Normal-Text-Copy-2"
                                          transform="translate(174.000000, 10.000000)"
                                        >
                                          <g
                                            id="Icon-Blue-Copy"
                                            transform="translate(106.348506, 0.000000)"
                                          >
                                            <path
                                              d="M15.8750688,7.50608477 C21.1573073,4.14730475 27.7886168,3.50239999 27.7886168,3.50239999 C27.7886168,3.50239999 20.7528955,11.4997096 19.0326867,15.1945655 C18.5015045,16.8063672 19.6135162,18.1175255 19.6135162,18.1175255 C19.6135162,18.1175255 16.5318653,14.6660391 15.8750688,7.50608477 Z"
                                              id="Path-7"
                                              fill="#1BA0E2"
                                            />
                                            <path
                                              d="M18.162138,6.24397491 C17.3878953,6.61481372 16.6181339,7.03359719 15.8750688,7.50608477 C16.2091491,11.1480034 17.1706021,13.8304452 18.0347649,15.5872293 C18.4974096,16.4047306 18.9374198,17.0887931 19.2687154,17.5775849 C19.1008028,17.2517084 18.9278703,16.7972915 18.8946484,16.2674161 C18.4465048,14.5531906 18.0359014,11.5237307 18.162138,6.24397491 Z"
                                              id="Path-7-Copy"
                                              fill="#0D7FCC"
                                            />
                                            <path
                                              d="M11.1392242,10.6306432 C11.1392242,10.6306432 10.7916211,9.40930137 10.6718684,9.05703715 C10.3493019,8.10817672 10.0190832,7.14347468 10.0190831,5.49697918 C10.0190831,3.2392226 13.8646282,0.830360977 16.2083894,0.0738834971 C15.5726728,8.29080802 16.4960847,10.8058271 17.3467186,13.537055 C19.3596742,20.2576903 23.9571046,21.2294722 24.4111443,21.6850544 C23.2389565,21.4317473 23.9079977,21.9785645 23.9079977,21.9785645 C23.9079977,21.9785645 22.0366239,20.676552 18.2686172,19.6106221 C14.5006105,18.5446922 11.5607948,18.381561 9.76233612,17.3600837 C8.37731138,16.3196574 8.33271646,15.4721062 7.67451502,14.9032056 C5.51226604,13.0343176 0.0684652899,12.2483736 0.0684652899,12.2483736 L4.75199664,13.0114999 C4.75199664,13.0114999 5.39587343,13.0114997 6.15578398,12.7385777 C6.31936247,12.7171833 6.84077993,12.1226001 7.97022445,12.498467 C8.43508849,12.6515676 8.30440909,12.8180273 9.63493268,13.1922403 C11.3211407,13.6664904 11.1392242,10.6306432 11.1392242,10.6306432 Z"
                                              id="Path-6"
                                              fill="#1BA0E2"
                                            />
                                          </g>
                                          <path
                                            d="M1.87385717,24.8120388 C1.87385717,29.6167116 5.53639618,30.1853119 7.38186157,30.1853119 C7.94969708,30.1853119 8.34718193,30.1284519 8.34718193,30.1284519 L8.34718193,27.6834705 C8.34718193,27.6834705 8.09165595,27.7403305 7.6941711,27.7403305 C6.64367541,27.7403305 4.62785937,27.3707403 4.62785937,24.4993086 L4.62785937,18.1025548 L8.09165595,18.1025548 L8.09165595,15.8850135 L4.62785937,15.8850135 L4.62785937,11.734231 L1.95903249,11.734231 L1.95903249,15.8850135 L0,15.8850135 L0,18.1025548 L1.87385717,18.1025548 L1.87385717,24.8120388 Z M10.8843731,30.0715919 L13.6383753,30.0715919 L13.6383753,24.1865784 C13.6383753,23.3052479 13.7235506,22.4239173 13.9790766,21.5994469 C14.6320874,19.4671956 16.2504186,18.2162749 18.0107087,18.2162749 C18.4365853,18.2162749 18.8056784,18.3015649 18.8056784,18.3015649 L18.8056784,15.5722833 C18.8056784,15.5722833 18.4649771,15.5154233 18.095884,15.5154233 C15.8813255,15.5154233 14.2062108,17.1643642 13.5532,19.2681855 L13.4964164,19.2681855 C13.4964164,19.2681855 13.5532,18.7848752 13.5532,18.1878448 L13.5532,15.6860034 L10.8843731,15.6860034 L10.8843731,30.0715919 Z M19.7300691,26.0345295 C19.7300691,28.9059612 22.14337,30.4127521 24.6134544,30.4127521 C28.0488592,30.4127521 29.212922,27.5697504 29.212922,27.5697504 L29.2697056,27.5697504 C29.2697056,27.5697504 29.212922,28.0530607 29.212922,28.7069511 L29.212922,30.0715919 L31.7681818,30.0715919 L31.7681818,20.9739865 C31.7681818,17.3349443 29.723974,15.3448432 26.0898267,15.3448432 C22.7963808,15.3448432 20.7237812,17.0506442 20.7237812,17.0506442 L21.8594522,19.0691754 C21.8594522,19.0691754 23.6481341,17.6761045 25.8626925,17.6761045 C27.6797662,17.6761045 29.0141796,18.472145 29.0141796,20.8318364 L29.0141796,21.0877066 L28.3895605,21.0877066 C25.9762596,21.0877066 19.7300691,21.2867167 19.7300691,26.0345295 L19.7300691,26.0345295 Z M22.5124631,25.8923794 C22.5124631,23.3052479 26.2601774,23.1630978 28.332777,23.1630978 L29.0425714,23.1630978 L29.0425714,23.6179781 C29.0425714,25.7502293 27.5378073,28.1952108 25.2096817,28.1952108 C23.4209999,28.1952108 22.5124631,27.0580101 22.5124631,25.8923794 L22.5124631,25.8923794 Z M38.7344899,30.0715919 L41.9143687,30.0715919 L47.2236307,15.6860034 L44.3276696,15.6860034 L40.8354813,25.4090691 C40.5515635,26.2051096 40.3528211,27.3707403 40.3244293,27.3707403 L40.2676458,27.3707403 C40.239254,27.3707403 40.0689034,26.2051096 39.7849856,25.4090691 L36.2927972,15.6860034 L33.3684444,15.6860034 L38.7344899,30.0715919 Z M47.949279,22.8787976 C47.949279,27.1433001 51.0439825,30.4127521 55.5582748,30.4127521 C58.9936796,30.4127521 61.1230627,28.3657909 61.1230627,28.3657909 L59.9873917,26.3472597 C59.9873917,26.3472597 58.1987099,28.0246307 55.7286254,28.0246307 C53.1733656,28.0246307 50.9304154,26.4325497 50.7884565,23.2768179 L61.2650216,23.2768179 C61.2650216,23.2768179 61.3501969,22.4523474 61.3501969,22.0827571 C61.3501969,18.3584249 59.192422,15.3448432 55.1323981,15.3448432 C51.0439825,15.3448432 47.949279,18.3015649 47.949279,22.8787976 L47.949279,22.8787976 Z M50.8736318,21.2014266 C51.2711167,18.8417352 52.9746232,17.5339545 55.0756146,17.5339545 C56.92108,17.5339545 58.4542358,18.7280152 58.5394112,21.2014266 L50.8736318,21.2014266 Z M63.8929188,26.1482496 C63.8929188,29.7588617 66.1926526,30.1853119 67.7542002,30.1853119 C68.2368604,30.1853119 68.662737,30.1284519 68.662737,30.1284519 L68.662737,27.6834705 C68.662737,27.6834705 68.4356028,27.7119005 68.1800769,27.7119005 C67.3283236,27.7119005 66.646921,27.3991703 66.646921,25.6649393 L66.646921,10 L63.8929188,10 L63.8929188,26.1482496 Z M69.8994372,22.8503676 C69.8994372,27.2285902 73.3632338,30.4127521 77.6503919,30.4127521 C81.93755,30.4127521 85.4013465,27.2285902 85.4013465,22.8503676 C85.4013465,18.500575 81.93755,15.3448432 77.6503919,15.3448432 C73.3632338,15.3448432 69.8994372,18.500575 69.8994372,22.8503676 L69.8994372,22.8503676 Z M72.710223,22.8503676 C72.710223,19.8652158 74.9531732,17.7329646 77.6503919,17.7329646 C80.3760023,17.7329646 82.5905608,19.8652158 82.5905608,22.8503676 C82.5905608,25.8639494 80.3760023,28.0246307 77.6503919,28.0246307 C74.9531732,28.0246307 72.710223,25.8639494 72.710223,22.8503676 L72.710223,22.8503676 Z M88.1088884,30.0715919 L90.8628906,30.0715919 L90.8628906,23.3052479 L92.9354902,23.3052479 L97.25104,30.0715919 L100.459311,30.0715919 L95.1500486,22.0827571 L95.1500486,22.0258971 L99.9198669,15.6860034 L96.7967716,15.6860034 L92.8787066,20.9739865 L90.8628906,20.9739865 L90.8628906,10 L88.1088884,10 L88.1088884,30.0715919 Z M101.241742,26.0345295 C101.241742,28.9059612 103.655043,30.4127521 106.125128,30.4127521 C109.560533,30.4127521 110.724595,27.5697504 110.724595,27.5697504 L110.781379,27.5697504 C110.781379,27.5697504 110.724595,28.0530607 110.724595,28.7069511 L110.724595,30.0715919 L113.279855,30.0715919 L113.279855,20.9739865 C113.279855,17.3349443 111.235647,15.3448432 107.6015,15.3448432 C104.308054,15.3448432 102.235455,17.0506442 102.235455,17.0506442 L103.371126,19.0691754 C103.371126,19.0691754 105.159807,17.6761045 107.374366,17.6761045 C109.191439,17.6761045 110.525853,18.472145 110.525853,20.8318364 L110.525853,21.0877066 L109.901234,21.0877066 C107.487933,21.0877066 101.241742,21.2867167 101.241742,26.0345295 L101.241742,26.0345295 Z M104.024136,25.8923794 C104.024136,23.3052479 107.771851,23.1630978 109.84445,23.1630978 L110.554245,23.1630978 L110.554245,23.6179781 C110.554245,25.7502293 109.049481,28.1952108 106.721355,28.1952108 C104.932673,28.1952108 104.024136,27.0580101 104.024136,25.8923794 L104.024136,25.8923794 Z"
                                            id="traveloka"
                                            fill="#FFFFFF"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                                <div className="_1_TDs">
                                  <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150198216-822560165b4cfa5d5ac17a7987028b03.svg?tr=q-75" />
                                  <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150313470-072f6bdc02c0b73fcf791aa2b2264fbd.svg?tr=q-75" />
                                  <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=q-75" />
                                  <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=q-75" />
                                  <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620639321776-9db1bf99b0d4ff46db160c7a02b0536f.png?tr=q-75" />
                                </div>
                              </div>
                              <a
                                style={{
                                  display: "inline-block",
                                  marginRight: 10,
                                }}
                                href="http://online.gov.vn/HomePage/AppDisplay.aspx?DocId=738"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                              >
                                <img
                                  src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100"
                                  width={100}
                                />
                              </a>
                              <a
                                style={{
                                  display: "inline-block",
                                  marginRight: 10,
                                }}
                                href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=58668"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                              >
                                <img
                                  src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100"
                                  width={100}
                                />
                              </a>
                              <a href="/partnership">
                                <div className="dicYa">
                                  <div className="_2WPOl">
                                    <img
                                      src="https://ik.imagekit.io/tvlk/image/imageResource/2020/01/14/1578971240652-422c7700b4c9f70053dac67fb6fb7c46.png?tr=q-75"
                                      width={36}
                                      height={36}
                                    />
                                  </div>
                                  <div className="_1gb9i">
                                    Hợp tác với Traveloka
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div className="_3S5NV _1nKD- _1AXWq tvat-footerItemsLink">
                              <div className="_3tosd">
                                <div className="_1bH2V _1nKD- _1AXWq tvat-footerItemsLink">
                                  <div className="NhSyP">Về Traveloka</div>
                                  <a
                                    className="giTmB tvat-footer-how-to-book"
                                    href="https://www.traveloka.com/vi-vn/howto"
                                    rel="nofollow"
                                  >
                                    Cách đặt chỗ
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-contact-us"
                                    href="https://www.traveloka.com/vi-vn/contactus"
                                    rel="nofollow"
                                  >
                                    Liên hệ chúng tôi
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-help-center"
                                    href="https://www.traveloka.com/vi-vn/faq"
                                    rel="nofollow"
                                  >
                                    Trợ giúp
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-career"
                                    href="https://www.traveloka.com/vi-vn/careers"
                                    rel="nofollow"
                                  >
                                    Tuyển dụng
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-about-us"
                                    href="https://www.traveloka.com/vi-vn/about-us"
                                    rel="nofollow"
                                  >
                                    Về chúng tôi
                                  </a>
                                  <div className="_1AXWq EP8nD tvat-footerItemsLink">
                                    <div className="NhSyP">
                                      Theo dõi chúng tôi trên
                                    </div>
                                    <a
                                      className="giTmB giTmB _2BUgJ tvat-footer-twitter"
                                      href="https://twitter.com/TravelokaVN"
                                      rel="nofollow"
                                    >
                                      <svg
                                        strokeWidth={0}
                                        accent="#434343"
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
                                          d="M24,5.24619616 C23.1381518,5.63362472 22.2244738,5.88871437 21.2888889,6.00311095 C22.2743441,5.40355599 23.011565,4.45990053 23.362963,3.34826055 C22.4368334,3.90715977 21.4234284,4.30071681 20.3666667,4.51187583 C18.9039309,2.93095261 16.5800458,2.54420482 14.697916,3.56846568 C12.8157862,4.59272653 11.8433969,6.77331701 12.3259259,8.88767181 C8.4037037,8.68808731 4.92962963,6.77885447 2.6,3.87546489 C1.35009518,6.06882613 1.99033783,8.8721064 4.06296296,10.2809976 C3.31387525,10.2573637 2.58118508,10.0520791 1.92592593,9.68224406 L1.92592593,9.74249598 C1.92403325,12.02712 3.50820818,13.9955926 5.71111111,14.4459118 C5.30589257,14.5601073 4.88715867,14.6171271 4.46666667,14.6153703 C4.16833737,14.6152689 3.87069617,14.5862671 3.57777778,14.5287582 C4.19372273,16.4838865 5.96631993,17.8227307 7.98518519,17.857677 C6.31435628,19.1921316 4.25059961,19.916333 2.12592593,19.9137739 C1.74962306,19.914049 1.3736416,19.8914141 1,19.8459905 C3.15819874,21.2541055 5.66899891,22.0017939 8.23333333,21.9999968 C16.9148148,21.9999968 21.6592593,14.6906852 21.6592593,8.34917024 C21.6592593,8.14205425 21.6555556,7.93117252 21.6444444,7.72782228 C22.5702475,7.05164173 23.3682544,6.2109251 24,5.24619616"
                                        />
                                      </svg>
                                      Twitter
                                    </a>
                                    <a
                                      className="giTmB giTmB _2ZPU6 tvat-footer-facebook"
                                      href="https://www.facebook.com/TravelokaVN"
                                      rel="nofollow"
                                    >
                                      <svg
                                        strokeWidth={0}
                                        accent="#434343"
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
                                      Facebook
                                    </a>
                                    <a
                                      className="giTmB giTmB _15nty tvat-footer-instagram"
                                      href="https://instagram.com/traveloka"
                                      rel="nofollow"
                                    >
                                      <svg
                                        strokeWidth={0}
                                        accent="#434343"
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
                                          d="M1,15.6215519 L1,8.37408216 C1.01798289,8.30691395 1.02967583,8.23821793 1.03492756,8.16888271 C1.06112324,7.31752332 1.10041675,6.47052987 1.30561619,5.6410002 C1.77713832,3.76800953 2.86425878,2.40583449 4.64993054,1.63306212 C5.61917047,1.21393134 6.64953364,1.09168486 7.69299464,1.0480254 C7.92002381,1.03929351 8.15141893,1.01746378 8.3784481,1 L15.6259178,1 C15.6930861,1.01798289 15.7617821,1.02967583 15.8311173,1.03492756 C16.6824767,1.06112324 17.5294701,1.10041675 18.3589998,1.30561619 C20.2319905,1.77713832 21.5941655,2.86425878 22.3669379,4.64993054 C22.7860687,5.61917047 22.9083151,6.64953364 22.9519746,7.69299464 C22.9607065,7.92002381 22.9825362,8.15141893 23,8.3784481 L23,15.6259178 C22.9820171,15.6930861 22.9703242,15.7617821 22.9650724,15.8311173 C22.9388768,16.6824767 22.8995833,17.5294701 22.6943838,18.3589998 C22.2228617,20.2319905 21.1357412,21.5941655 19.3500695,22.3669379 C18.3808295,22.7860687 17.3504664,22.9083151 16.3070054,22.9519746 C16.0799762,22.9607065 15.8485811,22.9825362 15.6215519,23 L8.37408216,23 C8.30691395,22.9820171 8.23821793,22.9703242 8.16888271,22.9650724 C7.31752332,22.9388768 6.47052987,22.8995833 5.6410002,22.6943838 C3.76800953,22.2228617 2.40583449,21.1357412 1.63306212,19.3500695 C1.21393134,18.3808295 1.09168486,17.3504664 1.0480254,16.3070054 C1.03929351,16.0799762 1.01746378,15.8485811 1,15.6215519 Z M2.96467553,11.997817 L2.9996031,11.997817 C2.9996031,12.9146656 2.98213931,13.8315142 3.00396904,14.7483628 C3.02579877,15.61282 3.05636039,16.4772772 3.1436793,17.3373685 C3.22663227,18.1668982 3.52351657,18.9309387 4.08672356,19.5727327 C4.86386188,20.4546537 5.88112721,20.830125 7.00754118,20.8956142 C8.30422703,20.9742012 9.60964477,20.996031 10.9106966,21.0091288 C12.1899186,21.0265926 13.4735066,21.0178607 14.7527287,20.991665 C15.6171859,20.9742012 16.4816432,20.9392737 17.3417345,20.8519548 C18.1712641,20.7690018 18.9353046,20.4721175 19.5770986,19.9089105 C20.4590196,19.1317722 20.834491,18.1145068 20.8999802,16.9880929 C20.9785672,15.691407 21.0003969,14.3859893 21.0134947,13.0849375 C21.0309585,11.8057154 21.0222266,10.5264934 20.996031,9.24290534 C20.9785672,8.3784481 20.9436396,7.51399087 20.8563207,6.65389958 C20.7733677,5.82436991 20.4764834,5.06032943 19.9132764,4.41853542 C19.1361381,3.53661441 18.1188728,3.16114308 16.9924588,3.0956539 C15.695773,3.01706688 14.3903552,2.99523715 13.0893034,2.98213931 C11.8100814,2.96467553 10.5264934,2.96467553 9.24727128,2.9996031 C8.29549514,3.02579877 7.33935305,3.04326255 6.40067474,3.18733876 C4.80273864,3.43619766 3.71561818,4.36177813 3.28775551,5.95098234 C3.15045035,6.47774803 3.07138975,7.01799548 3.05199444,7.56201627 C3.00396904,9.04207184 2.99523715,10.5221274 2.96467553,11.997817 Z M12.0109149,6.34391744 C15.1369319,6.34828339 17.6604485,8.8848978 17.6560826,12.0196468 C17.6517166,15.1369319 15.1151022,17.6560826 11.9934511,17.6517166 C8.87179996,17.6473507 6.34391744,15.1107363 6.34828339,11.9759873 C6.35264934,8.86306807 8.88926374,6.3395515 12.0109149,6.34391744 Z M12.0065489,8.33915459 C10.0025799,8.33915459 8.34352054,9.9763842 8.33915459,11.9541576 C8.33915459,13.9974201 9.95892042,15.6564795 11.9585235,15.6564795 C14.006152,15.6564795 15.6564795,14.0279817 15.6564795,12.0065489 C15.6590299,11.03614 15.2758614,10.1044889 14.591316,9.4166681 C13.9067705,8.7288473 12.9769589,8.34123616 12.0065489,8.33915459 L12.0065489,8.33915459 Z M19.1972614,6.12998611 C19.194852,6.86243148 18.5995604,7.45446938 17.8671128,7.45286445 C17.1346653,7.45125952 16.5419739,6.85661852 16.5427744,6.12416963 C16.5435749,5.39172074 17.1375646,4.79837666 17.8700139,4.79837269 C18.2227438,4.79848714 18.56093,4.93895817 18.8099378,5.18878511 C19.0589457,5.43861205 19.1983053,5.77725773 19.1972614,6.12998611 Z"
                                        />
                                      </svg>
                                      Instagram
                                    </a>
                                    <a
                                      className="giTmB giTmB _2vgGT tvat-footer-youtube"
                                      href="https://www.youtube.com/Traveloka"
                                      rel="nofollow"
                                    >
                                      <svg
                                        strokeWidth={0}
                                        accent="#434343"
                                        fill="none"
                                        height={24}
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        viewBox="0 0 24 24"
                                        width={24}
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <g fill="none" fillRule="evenodd">
                                          <rect width={24} height={24} />
                                          <path
                                            fill="#fff"
                                            fillRule="nonzero"
                                            d="M22.7723945,7.45454077 C22.7723945,7.45454077 22.5447891,5.89088962 21.9,5.19999794 C21.0655039,4.2909061 20.1172266,4.2909061 19.7,4.25453253 C16.6276055,4.03637356 12,4 12,4 L12,4 C12,4 7.37239453,4.03637356 4.3,4.25453253 C3.88277344,4.2909061 2.93449609,4.32727966 2.1,5.19999794 C1.41722656,5.89093081 1.22760547,7.45454077 1.22760547,7.45454077 C1.22760547,7.45454077 1,9.30909802 1,11.1636553 L1,12.8727595 C1,14.7273167 1.22760547,16.5455004 1.22760547,16.5455004 C1.22760547,16.5455004 1.45521094,18.1091516 2.1,18.8000433 C2.93449609,19.7091351 4.03449609,19.6727615 4.52760547,19.7818822 C6.27239453,19.9636264 12,20 12,20 C12,20 16.6276055,20 19.7,19.7454675 C20.1172266,19.7090939 21.0655039,19.6727203 21.9,18.8000021 C22.544832,18.1091104 22.7723945,16.5454592 22.7723945,16.5454592 C22.7723945,16.5454592 23,14.690902 23,12.8727183 L23,11.1636141 C23,9.30909802 22.7723945,7.45454077 22.7723945,7.45454077"
                                          />
                                          <polygon
                                            fill="#434343"
                                            fillRule="nonzero"
                                            points="9 8 9 16 16 12.092"
                                          />
                                        </g>
                                      </svg>
                                      Youtube
                                    </a>
                                  </div>
                                </div>
                                <div className="_1bH2V _1nKD- _1AXWq tvat-footerItemsLink">
                                  <div className="NhSyP">Sản phẩm</div>
                                  <a
                                    className="giTmB tvat-footer-flight"
                                    href="https://www.traveloka.com/vi-vn/flight"
                                  >
                                    Vé máy bay
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-hotel"
                                    href="https://www.traveloka.com/vi-vn/hotel"
                                  >
                                    Khách sạn
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-flight-hotel"
                                    href="https://www.traveloka.com/vi-vn/packages"
                                  >
                                    Combo tiết kiệm
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-experience"
                                    href="https://www.traveloka.com/vi-vn/activities"
                                  >
                                    Xperience
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-airport-transfer"
                                    href="https://www.traveloka.com/vi-vn/airport-transfer"
                                  >
                                    Đưa đón sân bay
                                  </a>
                                  <a
                                    className="giTmB"
                                    href="https://www.traveloka.com/vi-vn/accommodation/villa"
                                  >
                                    Biệt thự
                                  </a>
                                  <a
                                    className="giTmB"
                                    href="https://www.traveloka.com/vi-vn/accommodation/apartment"
                                  >
                                    Căn hộ
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-car-rental"
                                    href="https://www.traveloka.com/vi-vn/car-rental"
                                  >
                                    Car Rental
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-global-train"
                                    href="https://www.traveloka.com/vi-vn/train/japan.jp"
                                  >
                                    JR Pass
                                  </a>
                                </div>
                                <div className="_1bH2V _1nKD- _1AXWq tvat-footerItemsLink">
                                  <div className="NhSyP">Khác</div>
                                  <a
                                    className="giTmB tvat-footer-tvlk-affiliate"
                                    href="https://www.traveloka.com/vi-vn/affiliate"
                                  >
                                    Traveloka Affiliate
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-blog"
                                    href="https://www.traveloka.com/vi-vn/explore"
                                    target="_blank"
                                  >
                                    Traveloka Blog
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-privacy-policy"
                                    href="https://www.traveloka.com/vi-vn/privacypolicy"
                                    target="_blank"
                                    rel="nofollow"
                                  >
                                    Chính sách quyền riêng tư
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-term-condition"
                                    href="https://www.traveloka.com/vi-vn/termsandconditions"
                                    target="_blank"
                                    rel="nofollow"
                                  >
                                    Điều khoản &amp; Điều kiện
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-tvlk-regulation-operation"
                                    href="https://www.traveloka.com/vi-vn/Regulation-for-Operation-VN"
                                    target="_blank"
                                    rel="nofollow"
                                  >
                                    Quy chế hoạt động
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-register-hotel"
                                    href="https://tera.traveloka.com/vi-vn/v2/landing"
                                    rel="nofollow"
                                  >
                                    Đăng ký nơi nghỉ của bạn
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-register-experience"
                                    href="https://axes.traveloka.com"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                  >
                                    Đăng ký doanh nghiệp hoạt động du lịch của
                                    bạn
                                  </a>
                                  <a
                                    className="giTmB tvat-footer-tvlk-press-room"
                                    href="https://press.traveloka.com"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                  >
                                    Khu vực báo chí
                                  </a>
                                  <div className="_1AXWq EP8nD tvat-footerItemsLink">
                                    <div className="NhSyP">
                                      Tải ứng dụng Traveloka
                                    </div>
                                    <a
                                      className="giTmB tvat-footer-google-play"
                                      href="https://app.adjust.com/ie88tj"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <svg
                                        strokeWidth={0}
                                        viewBox="0 0 135 40"
                                        width={135}
                                        height={40}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <g>
                                          <path
                                            fill="#010101"
                                            d="M130.2,40H4.7C2.1,40,0,37.9,0,35.3V4.7C0,2.1,2.1,0,4.7,0h125.5c2.6,0,4.8,2.1,4.8,4.7v30.5 C135,37.9,132.8,40,130.2,40L130.2,40z"
                                          />
                                          <path
                                            fill="#010101"
                                            d="M134,35.3c0,2.1-1.7,3.8-3.8,3.8H4.7c-2.1,0-3.8-1.7-3.8-3.8V4.7c0-2.1,1.7-3.8,3.8-3.8h125.5 c2.1,0,3.8,1.7,3.8,3.8V35.3L134,35.3z"
                                          />
                                        </g>
                                        <g>
                                          <g>
                                            <path
                                              fill="#FFFFFF"
                                              d="M88.9,28.5l-0.9,0.8c-0.2,0.1-0.4,0.2-0.6,0.3c-0.6,0.3-1.2,0.3-1.8,0.3c-0.6,0-1.5,0-2.4-0.7 c-1.3-0.9-1.9-2.5-1.9-3.9c0-2.8,2.3-4.2,4.2-4.2c0.7,0,1.3,0.2,1.9,0.5c0.9,0.6,1.2,1.4,1.3,1.8l-4.3,1.7L83,25.4 c0.5,2.3,2,3.7,3.8,3.7C87.7,29.1,88.3,28.8,88.9,28.5C88.9,28.5,89,28.5,88.9,28.5z M86.3,23.9c0.4-0.1,0.5-0.2,0.5-0.5 c0-0.7-0.8-1.6-1.8-1.6c-0.7,0-2.1,0.6-2.1,2.6c0,0.3,0,0.6,0.1,1L86.3,23.9z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M79.9,28.4c0,0.7,0.1,0.8,0.7,0.9c0.3,0,0.6,0.1,0.9,0.1l-0.7,0.4h-3.2c0.4-0.5,0.5-0.6,0.5-1v-0.4l0-10.9 h-1.4l1.4-0.7h2.6c-0.6,0.3-0.7,0.5-0.8,1.2L79.9,28.4z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M74.9,22.1c0.4,0.3,1.3,1.1,1.3,2.5c0,1.4-0.8,2-1.5,2.6c-0.2,0.2-0.5,0.5-0.5,0.9c0,0.4,0.3,0.6,0.5,0.8 l0.7,0.5c0.8,0.7,1.5,1.3,1.5,2.6c0,1.7-1.7,3.5-4.8,3.5c-2.7,0-3.9-1.3-3.9-2.6c0-0.7,0.3-1.6,1.4-2.2c1.1-0.7,2.7-0.8,3.5-0.8 c-0.3-0.3-0.6-0.7-0.6-1.2c0-0.3,0.1-0.5,0.2-0.7c-0.2,0-0.4,0-0.6,0c-1.9,0-3-1.5-3-2.9c0-0.8,0.4-1.8,1.2-2.5c1-0.9,2.3-1,3.3-1 h3.8L76,22.1H74.9z M73.6,30.3c-0.2,0-0.2,0-0.4,0c-0.2,0-1.2,0-1.9,0.3c-0.4,0.1-1.6,0.6-1.6,1.9c0,1.3,1.3,2.2,3.2,2.2 c1.8,0,2.7-0.8,2.7-2C75.6,31.8,75,31.3,73.6,30.3z M74.1,26.8c0.4-0.4,0.5-1,0.5-1.3c0-1.3-0.8-3.4-2.3-3.4c-0.5,0-1,0.2-1.3,0.6 c-0.3,0.4-0.4,0.9-0.4,1.4c0,1.2,0.7,3.3,2.3,3.3C73.3,27.3,73.8,27.1,74.1,26.8z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M63.5,30c-2.9,0-4.5-2.3-4.5-4.3c0-2.4,2-4.5,4.7-4.5c2.7,0,4.4,2.1,4.4,4.3C68.2,27.7,66.5,30,63.5,30z M65.8,28.5c0.4-0.6,0.6-1.3,0.6-2c0-1.6-0.8-4.7-3-4.7c-0.6,0-1.2,0.2-1.7,0.6c-0.7,0.6-0.8,1.4-0.8,2.2c0,1.8,0.9,4.8,3.1,4.8 C64.7,29.5,65.4,29.1,65.8,28.5z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M53.8,30c-2.9,0-4.5-2.3-4.5-4.3c0-2.4,2-4.5,4.7-4.5c2.7,0,4.4,2.1,4.4,4.3C58.4,27.7,56.8,30,53.8,30z M56.1,28.5c0.4-0.6,0.5-1.3,0.5-2c0-1.6-0.8-4.7-3-4.7c-0.6,0-1.2,0.2-1.6,0.6c-0.7,0.6-0.8,1.4-0.8,2.2c0,1.8,0.9,4.8,3.1,4.8 C54.9,29.5,55.6,29.1,56.1,28.5z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M48.1,29.4l-2.5,0.6c-1,0.2-1.9,0.3-2.8,0.3c-4.7,0-6.5-3.5-6.5-6.2c0-3.3,2.6-6.4,6.9-6.4 c0.9,0,1.8,0.1,2.6,0.4c1.3,0.4,1.9,0.8,2.3,1.1l-1.4,1.4l-0.6,0.1l0.4-0.7c-0.6-0.6-1.7-1.6-3.7-1.6c-2.7,0-4.8,2.1-4.8,5.1 c0,3.2,2.3,6.3,6.1,6.3c1.1,0,1.7-0.2,2.2-0.4v-2.8l-2.6,0.1l1.4-0.7h3.6l-0.4,0.4c-0.1,0.1-0.1,0.1-0.2,0.3c0,0.2,0,0.7,0,0.8 V29.4z"
                                            />
                                          </g>
                                          <g>
                                            <path
                                              fill="#FFFFFF"
                                              d="M94.2,28.6v4.7h-0.9V21.4h0.9v1.4c0.6-0.9,1.7-1.6,3-1.6c2.3,0,3.8,1.7,3.8,4.5c0,2.7-1.5,4.5-3.8,4.5 C96,30.2,94.9,29.6,94.2,28.6z M100.1,25.7c0-2.1-1.1-3.7-3-3.7c-1.2,0-2.3,0.9-2.8,1.8v3.8c0.5,0.8,1.6,1.8,2.8,1.8 C99,29.4,100.1,27.8,100.1,25.7z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M102.3,30V18.1h0.9V30H102.3z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M113.7,32.5c0.2,0.1,0.5,0.1,0.8,0.1c0.6,0,1-0.2,1.3-1.1l0.7-1.5l-3.7-8.7h1l3.1,7.5l3.1-7.5h1l-4.5,10.5 c-0.5,1.1-1.2,1.6-2.2,1.6c-0.3,0-0.7-0.1-0.9-0.1L113.7,32.5z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M111,30c-0.1-0.3-0.1-0.6-0.1-0.8c0-0.2,0-0.4,0-0.7c-0.3,0.5-0.8,0.9-1.3,1.2c-0.6,0.3-1.1,0.5-1.9,0.5 c-0.9,0-1.6-0.2-2.1-0.7c-0.5-0.5-0.7-1.1-0.7-1.8c0-0.8,0.4-1.4,1.1-1.9c0.7-0.5,1.7-0.7,2.8-0.7h2.2V24c0-0.6-0.2-1.1-0.6-1.5 c-0.4-0.4-1-0.5-1.8-0.5c-0.7,0-1.3,0.2-1.7,0.5c-0.4,0.3-0.6,0.7-0.6,1.2h-0.9l0,0c0-0.6,0.3-1.2,0.9-1.7 c0.6-0.5,1.5-0.7,2.5-0.7c1,0,1.8,0.2,2.4,0.7c0.6,0.5,0.9,1.2,0.9,2.1v4.2c0,0.3,0,0.6,0.1,0.9c0,0.3,0.1,0.6,0.2,0.9H111z M107.7,29.3c0.8,0,1.4-0.2,1.9-0.5c0.6-0.3,1-0.8,1.2-1.3v-1.7h-2.2c-0.8,0-1.5,0.2-2.1,0.6c-0.5,0.4-0.8,0.8-0.8,1.3 c0,0.5,0.2,0.9,0.5,1.2C106.6,29.2,107.1,29.3,107.7,29.3z"
                                            />
                                          </g>
                                        </g>
                                        <g>
                                          <polygon
                                            fill="none"
                                            points="24.2,25.2 27.2,22.2 27.2,22.2 24.2,25.2 14.7,15.7 14.7,15.7 24.2,25.2 14.7,34.7 14.7,34.7 24.2,25.2 27.2,28.2 27.2,28.2"
                                          />
                                          <linearGradient
                                            id="google_play_svg_1"
                                            gradientUnits="userSpaceOnUse"
                                            x1="500.1123"
                                            y1="-486.5779"
                                            x2="487.572"
                                            y2="-494.4261"
                                            gradientTransform="matrix(0.7071 0.7071 -0.7071 0.7071 -675.5106 14.8849)"
                                          >
                                            <stop
                                              offset={0}
                                              style={{ stopColor: "#D7E69D" }}
                                            />
                                            <stop
                                              offset="0.4456"
                                              style={{ stopColor: "#94C4AA" }}
                                            />
                                            <stop
                                              offset={1}
                                              style={{ stopColor: "#01A4B6" }}
                                            />
                                          </linearGradient>
                                          <path
                                            fill="url(#google_play_svg_1)"
                                            d="M27.2,22.2l-11.6-6.4c-0.3-0.2-0.6-0.2-0.9-0.1l9.5,9.5L27.2,22.2z"
                                          />
                                          <linearGradient
                                            id="google_play_svg_2"
                                            gradientUnits="userSpaceOnUse"
                                            x1="492.8211"
                                            y1="-493.2821"
                                            x2="509.0801"
                                            y2="-489.0318"
                                            gradientTransform="matrix(0.7071 0.7071 -0.7071 0.7071 -675.5106 14.8849)"
                                          >
                                            <stop
                                              offset={0}
                                              style={{ stopColor: "#ED277B" }}
                                            />
                                            <stop
                                              offset="1.915717e-02"
                                              style={{ stopColor: "#EE2F7C" }}
                                            />
                                            <stop
                                              offset="0.7039"
                                              style={{ stopColor: "#F7BD81" }}
                                            />
                                            <stop
                                              offset={1}
                                              style={{ stopColor: "#FEEB74" }}
                                            />
                                          </linearGradient>
                                          <path
                                            fill="url(#google_play_svg_2)"
                                            d="M27.2,28.2l4-2.2c0.8-0.4,0.8-1.2,0-1.6l-4-2.2l-3,3L27.2,28.2z"
                                          />
                                          <linearGradient
                                            id="google_play_svg_3"
                                            gradientUnits="userSpaceOnUse"
                                            x1="501.8978"
                                            y1="-480.6248"
                                            x2="484.2669"
                                            y2="-490.9977"
                                            gradientTransform="matrix(0.7071 0.7071 -0.7071 0.7071 -675.5106 14.8849)"
                                          >
                                            <stop
                                              offset={0}
                                              style={{ stopColor: "#89CFBD" }}
                                            />
                                            <stop
                                              offset="9.067577e-02"
                                              style={{ stopColor: "#7DBEBB" }}
                                            />
                                            <stop
                                              offset="0.5396"
                                              style={{ stopColor: "#457CAC" }}
                                            />
                                            <stop
                                              offset="0.8523"
                                              style={{ stopColor: "#1C5AA2" }}
                                            />
                                            <stop
                                              offset={1}
                                              style={{ stopColor: "#084D9F" }}
                                            />
                                          </linearGradient>
                                          <path
                                            fill="url(#google_play_svg_3)"
                                            d="M14.7,15.7c-0.4,0.1-0.6,0.5-0.6,1l0,17c0,0.5,0.2,0.9,0.6,1l9.5-9.5L14.7,15.7z"
                                          />
                                          <linearGradient
                                            id="google_play_svg_4"
                                            gradientUnits="userSpaceOnUse"
                                            x1="508.2989"
                                            y1="-488.8607"
                                            x2="497.4431"
                                            y2="-474.5588"
                                            gradientTransform="matrix(0.7071 0.7071 -0.7071 0.7071 -675.5106 14.8849)"
                                          >
                                            <stop
                                              offset={0}
                                              style={{ stopColor: "#F04A2B" }}
                                            />
                                            <stop
                                              offset="0.4704"
                                              style={{ stopColor: "#B54F6B" }}
                                            />
                                            <stop
                                              offset="0.8353"
                                              style={{ stopColor: "#8B5191" }}
                                            />
                                            <stop
                                              offset={1}
                                              style={{ stopColor: "#7851A1" }}
                                            />
                                          </linearGradient>
                                          <path
                                            fill="url(#google_play_svg_4)"
                                            d="M14.7,34.7c0.2,0.1,0.6,0,0.9-0.1l11.6-6.4l-3-3L14.7,34.7z"
                                          />
                                        </g>
                                        <g>
                                          <g>
                                            <path
                                              fill="#FFFFFF"
                                              d="M36.3,8.4c0-1.8,1.4-3,3-3c1.1,0,1.9,0.5,2.3,1.2l-0.8,0.5c-0.3-0.4-0.9-0.8-1.5-0.8c-1.1,0-2,0.9-2,2.1 c0,1.2,0.9,2.1,2,2.1c0.6,0,1.1-0.3,1.4-0.5V9.1h-1.7V8.2h2.7v2.2c-0.6,0.6-1.4,1.1-2.4,1.1C37.6,11.4,36.3,10.2,36.3,8.4z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M43,11.3V5.5h4v0.9h-3v1.5h2.9v0.9H44v1.6h3v0.9H43z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M49.7,11.3V6.4H48V5.5h4.5v0.9h-1.8v4.9H49.7z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M56.1,11.3V5.5h1v5.8H56.1z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M59.9,11.3V6.4h-1.8V5.5h4.5v0.9h-1.8v4.9H59.9z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M66,8.4c0-1.7,1.2-3,3-3c1.7,0,3,1.3,3,3c0,1.7-1.2,3-3,3C67.2,11.4,66,10.1,66,8.4z M70.9,8.4 c0-1.2-0.8-2.1-1.9-2.1c-1.2,0-1.9,0.9-1.9,2.1c0,1.2,0.7,2.1,1.9,2.1C70.1,10.5,70.9,9.6,70.9,8.4z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M77.1,11.3l-3-4.1v4.1h-1V5.5h1l3,4v-4h1v5.8H77.1z"
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </a>
                                    <a
                                      className="giTmB tvat-footer-app-store"
                                      href="https://app.adjust.com/hc9if0"
                                      target="_blank"
                                      rel="nofollow"
                                    >
                                      <svg
                                        strokeWidth={0}
                                        viewBox="0 0 135 40"
                                        width={135}
                                        height={40}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <g>
                                          <path
                                            fill="#010101"
                                            d="M130.2,40H4.7C2.1,40,0,37.9,0,35.3V4.7C0,2.1,2.1,0,4.7,0h125.5c2.6,0,4.8,2.1,4.8,4.7v30.5 C135,37.9,132.8,40,130.2,40L130.2,40z"
                                          />
                                          <path
                                            fill="#010101"
                                            d="M134,35.3c0,2.1-1.7,3.8-3.8,3.8H4.7c-2.1,0-3.8-1.7-3.8-3.8V4.7c0-2.1,1.7-3.8,3.8-3.8h125.5 c2.1,0,3.8,1.7,3.8,3.8V35.3L134,35.3z"
                                          />
                                          <g>
                                            <g>
                                              <path
                                                fill="#FFFFFF"
                                                d="M30.1,19.8c0-3.2,2.6-4.8,2.8-4.9c-1.5-2.2-3.9-2.5-4.7-2.5c-2-0.2-3.9,1.2-4.9,1.2s-2.6-1.2-4.2-1.1 c-2.1,0-4.1,1.3-5.2,3.2c-2.3,3.9-0.6,9.7,1.6,12.9c1.1,1.6,2.4,3.3,4,3.2s2.2-1,4.2-1c1.9,0,2.5,1,4.2,1s2.8-1.6,3.9-3.1 c1.3-1.8,1.8-3.5,1.8-3.6C33.5,24.9,30.2,23.6,30.1,19.8z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M26.9,10.3c0.9-1.1,1.5-2.6,1.3-4.1c-1.3,0.1-2.8,0.9-3.8,1.9c-0.8,0.9-1.5,2.5-1.3,3.9 C24.6,12.2,26,11.4,26.9,10.3z"
                                              />
                                            </g>
                                          </g>
                                          <g>
                                            <path
                                              fill="#FFFFFF"
                                              d="M53.6,31.5h-2.3l-1.2-3.9h-4.3l-1.2,3.9h-2.2l4.3-13.3h2.6L53.6,31.5z M49.8,26l-1.1-3.5 c-0.1-0.4-0.3-1.2-0.7-2.5l0,0c-0.1,0.6-0.3,1.4-0.6,2.5L46.2,26H49.8z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M64.7,26.6c0,1.6-0.4,2.9-1.3,3.9c-0.8,0.8-1.8,1.3-2.9,1.3c-1.3,0-2.2-0.5-2.7-1.4l0,0v5.1h-2.1V25.1 c0-1,0-2.1-0.1-3.2h1.9l0.1,1.5l0,0c0.7-1.1,1.8-1.7,3.2-1.7c1.1,0,2.1,0.4,2.8,1.3C64.3,23.9,64.7,25.1,64.7,26.6z M62.5,26.7 c0-0.9-0.2-1.7-0.6-2.3c-0.5-0.6-1.1-0.9-1.9-0.9c-0.5,0-1,0.2-1.4,0.5c-0.4,0.4-0.7,0.8-0.8,1.4c-0.1,0.3-0.1,0.5-0.1,0.7v1.6 c0,0.7,0.2,1.3,0.6,1.8s1,0.7,1.7,0.7c0.8,0,1.4-0.3,1.9-0.9C62.3,28.5,62.5,27.7,62.5,26.7z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M75.7,26.6c0,1.6-0.4,2.9-1.3,3.9c-0.8,0.8-1.8,1.3-2.9,1.3c-1.3,0-2.2-0.5-2.7-1.4l0,0v5.1h-2.1V25.1 c0-1,0-2.1-0.1-3.2h1.9l0.1,1.5l0,0c0.7-1.1,1.8-1.7,3.2-1.7c1.1,0,2.1,0.4,2.8,1.3C75.3,23.9,75.7,25.1,75.7,26.6z M73.5,26.7 c0-0.9-0.2-1.7-0.6-2.3c-0.5-0.6-1.1-0.9-1.9-0.9c-0.5,0-1,0.2-1.4,0.5c-0.4,0.4-0.7,0.8-0.8,1.4c-0.1,0.3-0.1,0.5-0.1,0.7v1.6 c0,0.7,0.2,1.3,0.6,1.8s1,0.7,1.7,0.7c0.8,0,1.4-0.3,1.9-0.9C73.3,28.5,73.5,27.7,73.5,26.7z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M88,27.8c0,1.1-0.4,2.1-1.2,2.8c-0.9,0.8-2.1,1.2-3.6,1.2c-1.4,0-2.6-0.3-3.4-0.8l0.5-1.8 c0.9,0.6,2,0.8,3.1,0.8c0.8,0,1.4-0.2,1.9-0.5c0.4-0.4,0.7-0.8,0.7-1.5c0-0.5-0.2-1-0.6-1.4s-1-0.7-1.8-1 c-2.3-0.9-3.5-2.1-3.5-3.8c0-1.1,0.4-2,1.2-2.7c0.8-0.7,1.9-1,3.3-1c1.2,0,2.2,0.2,3,0.6l-0.5,1.7c-0.8-0.4-1.6-0.6-2.5-0.6 c-0.8,0-1.3,0.2-1.8,0.6c-0.4,0.3-0.5,0.7-0.5,1.2s0.2,1,0.6,1.3s1,0.7,1.9,1c1.1,0.5,2,1,2.5,1.6C87.8,26.1,88,26.9,88,27.8z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M95.1,23.5h-2.3v4.7c0,1.2,0.4,1.8,1.2,1.8c0.4,0,0.7,0,0.9-0.1l0.1,1.6c-0.4,0.2-1,0.2-1.7,0.2 c-0.8,0-1.5-0.3-2-0.8s-0.7-1.4-0.7-2.6v-4.8h-1.4v-1.6h1.4v-1.8l2.1-0.6v2.4H95C95.1,21.9,95.1,23.5,95.1,23.5z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M105.7,26.6c0,1.5-0.4,2.7-1.3,3.6c-0.9,1-2.1,1.5-3.5,1.5c-1.4,0-2.5-0.5-3.4-1.4s-1.3-2.1-1.3-3.5 c0-1.5,0.4-2.7,1.3-3.7c0.9-0.9,2-1.4,3.5-1.4c1.4,0,2.5,0.5,3.4,1.4C105.3,24,105.7,25.2,105.7,26.6z M103.5,26.7 c0-0.9-0.2-1.6-0.6-2.3c-0.4-0.8-1.1-1.1-1.9-1.1c-0.9,0-1.5,0.4-2,1.1c-0.4,0.6-0.6,1.4-0.6,2.3c0,0.9,0.2,1.6,0.6,2.3 c0.5,0.8,1.1,1.1,1.9,1.1c0.8,0,1.5-0.4,1.9-1.2C103.3,28.3,103.5,27.6,103.5,26.7z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M112.6,23.8c-0.2,0-0.4-0.1-0.7-0.1c-0.8,0-1.3,0.3-1.7,0.9c-0.4,0.5-0.5,1.1-0.5,1.9v5h-2.1v-6.6 c0-1.1,0-2.1-0.1-3h1.9l0.1,1.8h0.1c0.2-0.6,0.6-1.1,1.1-1.5c0.5-0.3,1-0.5,1.5-0.5c0.2,0,0.4,0,0.5,0 C112.6,21.8,112.6,23.8,112.6,23.8z"
                                            />
                                            <path
                                              fill="#FFFFFF"
                                              d="M122.2,26.3c0,0.4,0,0.7-0.1,1h-6.4c0,0.9,0.3,1.7,0.9,2.2c0.5,0.4,1.2,0.7,2.1,0.7c0.9,0,1.8-0.2,2.6-0.5 l0.3,1.5c-0.9,0.4-2,0.6-3.2,0.6c-1.5,0-2.7-0.4-3.5-1.3c-0.8-0.9-1.3-2.1-1.3-3.5s0.4-2.7,1.2-3.6c0.8-1,1.9-1.5,3.4-1.5 c1.4,0,2.4,0.5,3.1,1.5C121.9,24,122.2,25.1,122.2,26.3z M120.1,25.7c0-0.6-0.1-1.2-0.4-1.6c-0.4-0.6-0.9-0.9-1.7-0.9 c-0.7,0-1.3,0.3-1.7,0.9c-0.4,0.5-0.6,1-0.6,1.7L120.1,25.7L120.1,25.7z"
                                            />
                                          </g>
                                          <g>
                                            <g>
                                              <path
                                                fill="#FFFFFF"
                                                d="M49.1,10c0,1.2-0.4,2.1-1.1,2.7c-0.7,0.5-1.6,0.8-2.8,0.8c-0.6,0-1.1,0-1.5-0.1V7 c0.6-0.1,1.2-0.1,1.8-0.1c1.1,0,2,0.2,2.6,0.7C48.7,8.2,49.1,9,49.1,10z M47.9,10c0-0.8-0.2-1.3-0.6-1.8c-0.4-0.4-1-0.6-1.8-0.6 c-0.3,0-0.6,0-0.8,0.1v4.9c0.1,0,0.4,0,0.7,0c0.8,0,1.4-0.2,1.9-0.7C47.7,11.5,47.9,10.9,47.9,10z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M54.9,11c0,0.7-0.2,1.3-0.6,1.8s-1,0.7-1.7,0.7s-1.2-0.2-1.7-0.7c-0.4-0.5-0.6-1-0.6-1.7s0.2-1.3,0.6-1.8 s1-0.7,1.7-0.7s1.2,0.2,1.7,0.7C54.7,9.8,54.9,10.3,54.9,11z M53.8,11.1c0-0.4-0.1-0.8-0.3-1.1c-0.2-0.4-0.5-0.6-0.9-0.6 s-0.7,0.2-1,0.6c-0.2,0.3-0.3,0.7-0.3,1.1c0,0.4,0.1,0.8,0.3,1.1c0.2,0.4,0.5,0.6,1,0.6c0.4,0,0.7-0.2,0.9-0.6 C53.7,11.9,53.8,11.5,53.8,11.1z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M62.8,8.7l-1.5,4.7h-1l-0.6-2c-0.2-0.5-0.3-1-0.4-1.5l0,0c-0.1,0.5-0.2,1-0.4,1.5l-0.6,2h-1l-1.4-4.7H57 l0.5,2.2c0.1,0.5,0.2,1,0.3,1.5l0,0c0.1-0.4,0.2-0.9,0.4-1.5l0.7-2.2h0.9l0.6,2.2c0.2,0.5,0.3,1.1,0.4,1.6l0,0 c0.1-0.5,0.2-1,0.3-1.6l0.6-2.2L62.8,8.7L62.8,8.7z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M68.2,13.4h-1v-2.7c0-0.8-0.3-1.2-0.9-1.2c-0.3,0-0.6,0.1-0.8,0.3c-0.2,0.2-0.3,0.5-0.3,0.8v2.8h-1V10 c0-0.4,0-0.9,0-1.3H65v0.7l0,0c0.1-0.2,0.3-0.4,0.5-0.6c0.3-0.2,0.6-0.3,0.9-0.3c0.4,0,0.8,0.1,1.1,0.4c0.4,0.3,0.5,0.9,0.5,1.6 v2.9H68.2z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M71.1,13.4h-1V6.5h1V13.4z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M77.3,11c0,0.7-0.2,1.3-0.6,1.8s-1,0.7-1.7,0.7s-1.2-0.2-1.7-0.7c-0.4-0.5-0.6-1-0.6-1.7s0.2-1.3,0.6-1.8 s1-0.7,1.7-0.7s1.2,0.2,1.7,0.7C77.1,9.8,77.3,10.3,77.3,11z M76.2,11.1c0-0.4-0.1-0.8-0.3-1.1c-0.2-0.4-0.5-0.6-0.9-0.6 s-0.7,0.2-1,0.6c-0.2,0.3-0.3,0.7-0.3,1.1c0,0.4,0.1,0.8,0.3,1.1c0.2,0.4,0.5,0.6,1,0.6c0.4,0,0.7-0.2,0.9-0.6 C76.1,11.9,76.2,11.5,76.2,11.1z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M82.3,13.4h-0.9l-0.1-0.5l0,0c-0.3,0.4-0.8,0.7-1.4,0.7c-0.4,0-0.8-0.1-1.1-0.4c-0.2-0.3-0.4-0.6-0.4-1 c0-0.6,0.2-1,0.7-1.3s1.2-0.5,2-0.4v-0.1c0-0.6-0.3-0.9-1-0.9c-0.5,0-0.9,0.1-1.2,0.3l-0.2-0.7c0.4-0.3,1-0.4,1.6-0.4 c1.2,0,1.8,0.6,1.8,2v1.7C82.3,12.8,82.3,13.2,82.3,13.4z M81.2,11.8v-0.7c-1.2,0-1.7,0.3-1.7,1c0,0.2,0.1,0.4,0.2,0.6 c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.6-0.2c0.2-0.1,0.3-0.3,0.4-0.6C81.2,11.9,81.2,11.9,81.2,11.8z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M88.3,13.4h-0.9v-0.8l0,0c-0.3,0.6-0.8,0.9-1.5,0.9c-0.6,0-1-0.2-1.4-0.7c-0.4-0.4-0.6-1-0.6-1.7 c0-0.8,0.2-1.4,0.6-1.9c0.4-0.4,0.9-0.7,1.5-0.7s1.1,0.2,1.3,0.6l0,0V6.4h1V12C88.2,12.6,88.3,13,88.3,13.4z M87.2,11.4v-0.8 c0-0.1,0-0.2,0-0.3C87.1,10,87,9.8,86.8,9.7c-0.2-0.2-0.4-0.3-0.7-0.3c-0.4,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.3,0.7-0.3,1.2 c0,0.5,0.1,0.8,0.3,1.1c0.2,0.3,0.5,0.5,0.9,0.5c0.3,0,0.6-0.1,0.8-0.4C87.1,12.1,87.2,11.8,87.2,11.4z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M97.2,11c0,0.7-0.2,1.3-0.6,1.8s-1,0.7-1.7,0.7s-1.2-0.2-1.7-0.7c-0.4-0.5-0.6-1-0.6-1.7s0.2-1.3,0.6-1.8 s1-0.7,1.7-0.7s1.2,0.2,1.7,0.7C97,9.8,97.2,10.3,97.2,11z M96.2,11.1c0-0.4-0.1-0.8-0.3-1.1c-0.2-0.4-0.5-0.6-0.9-0.6 s-0.7,0.2-1,0.6c-0.2,0.3-0.3,0.7-0.3,1.1c0,0.4,0.1,0.8,0.3,1.1c0.2,0.4,0.5,0.6,1,0.6c0.4,0,0.7-0.2,0.9-0.6 C96.1,11.9,96.2,11.5,96.2,11.1z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M102.9,13.4h-1v-2.7c0-0.8-0.3-1.2-1-1.2c-0.3,0-0.6,0.1-0.8,0.3s-0.3,0.5-0.3,0.8v2.8h-1V10 c0-0.4,0-0.9,0-1.3h0.9v0.7l0,0c0.1-0.2,0.3-0.4,0.5-0.6c0.3-0.2,0.6-0.3,1-0.3s0.8,0.1,1.1,0.4c0.4,0.3,0.5,0.9,0.5,1.6v2.9 H102.9z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M109.9,9.5h-1.2v2.3c0,0.6,0.2,0.9,0.6,0.9c0.2,0,0.3,0,0.5,0v0.8c-0.2,0.1-0.5,0.1-0.8,0.1 c-0.4,0-0.7-0.1-1-0.4c-0.2-0.3-0.4-0.7-0.4-1.3V9.5h-0.7V8.7h0.7V7.8l1-0.3v1.2h1.2L109.9,9.5L109.9,9.5z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M115.5,13.4h-1v-2.7c0-0.8-0.3-1.3-0.9-1.3c-0.5,0-0.8,0.2-1,0.7c0,0.1,0,0.2,0,0.4v2.8h-1V6.4h1v2.8l0,0 c0.3-0.5,0.8-0.8,1.4-0.8c0.4,0,0.8,0.1,1.1,0.4c0.4,0.4,0.5,0.9,0.5,1.6C115.5,10.6,115.5,13.4,115.5,13.4z"
                                              />
                                              <path
                                                fill="#FFFFFF"
                                                d="M121.2,10.9c0,0.2,0,0.3,0,0.5H118c0,0.5,0.2,0.8,0.5,1.1c0.3,0.2,0.6,0.3,1,0.3c0.5,0,0.9-0.1,1.3-0.2 l0.2,0.7c-0.4,0.2-1,0.3-1.6,0.3c-0.7,0-1.3-0.2-1.7-0.6c-0.4-0.4-0.6-1-0.6-1.7s0.2-1.3,0.6-1.8c0.4-0.5,1-0.8,1.6-0.8 c0.7,0,1.2,0.3,1.5,0.8C121.1,9.8,121.2,10.3,121.2,10.9z M120.2,10.6c0-0.3-0.1-0.6-0.2-0.8c-0.2-0.3-0.5-0.4-0.8-0.4 s-0.6,0.1-0.8,0.4c-0.2,0.2-0.3,0.5-0.3,0.8C118,10.6,120.2,10.6,120.2,10.6z"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="_1bH2V _1nKD- _1AXWq tvat-footerItemsLink">
                              <div className="NhSyP">Đối tác thanh toán</div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339591544-eae8263f3d4021c8951e271bdddf60a0.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617778793443-2f6b7f7d0668a4a815962032dd8233a2.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339663962-2037bef017440339eda165360a5e239f.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781253184-2ef4eea06e759ab13bc30fac59e715ad.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781255909-7089100c4728a3cc8d3c1822b2bd2e8c.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781273499-667dfd2c1d23335dac1689bdd1b3e187.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781276401-2ee9043e84971e72e57a1b29db6f3062.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781279477-47b2a8f5bcf3cba19f9e518cf59627a7.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781283882-14484fab2f2d958a1b2917dd450d31ac.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781286986-ff7313b2a822727d5940a3ed2793bad5.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781292722-ef87e62f12612a44e0f1640d4b646033.png?tr=q-75,h-20" />
                              </div>
                              <div className="_3XEIj">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781296885-a206730836975c02b8ce75a732f00caf.png?tr=q-75,h-20" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_1P7MI">
                          <div className="_2QLit">
                            Công ty TNHH Traveloka Việt Nam. Mã số DN:
                            0313581779. Tòa nhà An Phú, 117-119 Lý Chính Thắng,
                            P. 7, Q. 3, TPHCM
                          </div>
                          Copyright © 2022 Traveloka
                        </div>
                      </div>
                    </span>
                  </footer>
                  <div
                    className="mcp-placeholder hiddenContent"
                    data-name="hiddenContent"
                  >
                    <div
                      className="component-overflow v3Helpers"
                      data-component="true"
                      data-name="Flight_SEO_Air_France1_V3Helpers"
                      data-id={1503051392278}
                    />
                    <div
                      className="component-overflow styles"
                      data-component="true"
                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Styling"
                      data-id={1503051392354}
                    />
                    <div
                      className="component-overflow scripts"
                      data-component="true"
                      data-name="LandingPage_Flight_Desktop_Scripting"
                      data-id={1491367346025}
                    />
                    <div
                      className="component-overflow scripts"
                      data-component="true"
                      data-name="LandingPage_Airline_Script"
                      data-id={1558946096318}
                    />
                    <div
                      className="component-overflow scripts"
                      data-component="true"
                      data-name="LandingPage_Flight_Airline_Masonry"
                      data-id={1560753761587}
                    />
                  </div>
                </div>
                {/* experience */}
              </div>
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Air;
