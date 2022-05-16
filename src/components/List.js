const List = (props) => {
  const { list } = props;

  return list.map((e) => (
    <div key={e._id} className="css-1dbjc4n r-xyw6el" style={{ width: "20%" }}>
      <a href={`/detail/${e._id}`} className="css-4rbku5">
        <div className="css-1dbjc4n">
          <div
            className="css-1dbjc4n r-kdyh1x r-1udh08x"
            style={{ paddingTop: "100%" }}
          >
            <div className="css-1dbjc4n r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu">
              <img
                src={`https://travelclone.herokuapp.com/images/${e.images[0]}`}
                importance="low"
                loading="lazy"
                width="100%"
                height="100%"
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="css-1dbjc4n r-1habvwh r-1wzrnnt r-1udh08x r-13qz1uu">
          <div className="css-1dbjc4n r-1h0z5md" style={{ maxWidth: "100%" }}>
            <h4
              aria-level={4}
              dir="auto"
              role="heading"
              className="css-4rbku5 css-901oao css-cens5h r-1wbh5a2 r-1sixt3s r-1b43r93 r-b88u0q r-1cwl3u0 r-fdjqy7"
              style={{
                WebkitLineClamp: 2,
                color: "rgba(67, 67, 67, 1)",
                fontStyle: "normal",
              }}
            >
              {e.name}
            </h4>
          </div>
          <div className="css-1dbjc4n r-1habvwh" style={{ marginTop: 4 }} />
          <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1h0z5md r-1bymd8e r-13qz1uu">
            <h4
              aria-level={4}
              dir="auto"
              role="heading"
              className="css-4rbku5 css-901oao css-bfa6kz r-1wbh5a2 r-1sixt3s r-1b43r93 r-b88u0q r-1cwl3u0 r-fdjqy7"
              style={{
                color: "rgba(249, 109, 1, 1)",
                fontStyle: "normal",
              }}
            >
              {` VND ${e.price}`}
            </h4>
          </div>
        </div>
      </a>
    </div>
  ));
};

export default List;
