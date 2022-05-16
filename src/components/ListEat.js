const ListEat = ({ eats }) => {
  return eats.map((e) => (
    <div key={e.id} className="_30ane">
      <a href={`/eat/detail/${e._id}`} style={{ textDecoration: "none" }}>
        <div className="css-1dbjc4n r-1habvwh r-14lw9ot r-kdyh1x r-da5iq2 r-13awgt0 r-18u37iz r-1h0z5md r-6gpygo r-bztko3">
          <div className="css-1dbjc4n r-1wh2hl7 r-o8yidv r-1mlwlqe r-c52zpz r-1udh08x r-l0gwng r-417010">
            <img
              alt
              draggable="false"
              src={`https://travelclone.herokuapp.com/images/${e.images[0]}`}
              className="css-9pa8cd"
              style={{
                width: "209px",
                height: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="css-1dbjc4n r-nsbfu8 r-1x9y8hl r-13qz1uu">
            <div className="css-1dbjc4n r-6koalj r-13awgt0 r-18u37iz">
              <div className="css-1dbjc4n r-587bkc">
                <div className="css-1dbjc4n r-1awozwy r-6koalj r-13awgt0 r-18u37iz r-1h0z5md r-15zivkp">
                  <div
                    dir="auto"
                    className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                    style={{
                      color: "rgb(104, 113, 118)",
                      marginRight: 16,
                      textTransform: "uppercase",
                    }}
                  >
                    Delivery
                  </div>
                </div>
                <h2
                  aria-level={2}
                  dir="auto"
                  role="heading"
                  className="css-4rbku5 css-901oao css-cens5h r-1sixt3s r-adyw6z r-b88u0q r-135wba7 r-fdjqy7"
                  style={{
                    WebkitLineClamp: 2,
                    color: "rgb(3, 18, 26)",
                    marginTop: 4,
                    marginBottom: 4,
                  }}
                >
                  {e.name}
                </h2>
                <div
                  dir="auto"
                  className="css-901oao css-bfa6kz r-1sixt3s r-1b43r93 r-b88u0q r-rjixqe r-fdjqy7"
                  style={{ color: "rgb(104, 113, 118)" }}
                >
                  {e.description}
                </div>
                <p
                  style={{
                    width: "300px",
                    marginnTop: "10px",
                    display: "block",
                  }}
                >
                  {e.address}
                </p>
              </div>
              <div className="css-1dbjc4n r-b8lwoo">
                <div className="css-1dbjc4n r-6koalj r-18u37iz r-17s6mgv r-5oul0u">
                  <div className="css-1dbjc4n r-1d4mawv">
                    <img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-components/svg/16/ic_tvlk-c5f06f0ef5e1a49c53bba9977b8e17d3.svg" />
                  </div>
                  <div className="css-1dbjc4n">
                    <div
                      dir="auto"
                      className="css-901oao r-1sixt3s r-adyw6z r-majxgm r-rjixqe r-14gqq1x r-fdjqy7"
                      style={{ color: "rgb(1, 148, 243)" }}
                    >
                      5
                    </div>
                    <div
                      dir="auto"
                      className="css-901oao r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0"
                      style={{
                        color: "rgb(104, 113, 118)",
                        textAlign: "right",
                      }}
                    >
                      (54)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  ));
};

export default ListEat;
