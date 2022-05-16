import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Photos = () => {
  const [detailEats, setDetailEats] = useState({});
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
  }, []);

  const renderImg = (id) => {
    let img = " ";
    if (detailEats.images?.length > 0) {
      img = `https://travelclone.herokuapp.com/images/${detailEats?.images[id]}`;
    }
    return img;
  };

  return (
    <div className="_37dqg">
      <div className="_2phds">
        <div className="_37bsg _2PKKH" style={{ flexBasis: "25%" }}>
          <div className="-obIi">
            <div>
              <img
                className="_2qI1_"
                src={renderImg("0")}
                style={{ width: "150px" }}
              />
            </div>
          </div>
        </div>
        <div className="_37bsg _2PKKH" style={{ flexBasis: "25%" }}>
          <div className="-obIi">
            <div>
              <img
                className="_2qI1_"
                src={renderImg("1")}
                style={{ width: "150px" }}
              />
            </div>
          </div>
        </div>
        <div className="_37bsg _2PKKH" style={{ flexBasis: "25%" }}>
          <div className="-obIi">
            <div>
              <img
                className="_2qI1_"
                src={renderImg("2")}
                style={{ width: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
