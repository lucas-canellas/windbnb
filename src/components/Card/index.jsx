import { Content } from "./styles";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

export default function Card({ data }) {
  return (
    <Content>
      <div className="content-image">
        <img
          src={data.photo}
          alt="foto"
        ></img>
      </div>
      <div className="card-info">
        <div id="place-house">
          {data.superHost && <button>SUPER HOST</button>}
          <p>{data.type}</p>
        </div>
        <div id="rate">
          <StarRoundedIcon className="rate" color="secondary" />
          <p>{data.rating}</p>
        </div>
      </div>
      <p id="apartment-feature">{data.title}</p>
    </Content>
  );
}

