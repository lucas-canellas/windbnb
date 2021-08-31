import { Content } from "./styles";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

export default function Card() {
  return (
    <Content>
      <img
        src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
        alt="foto"
      ></img>
      <div className="card-info">
        <div id="place-house">
          <button>SUPER HOST</button>
          <p>Private room</p>
        </div>
        <div id="rate">
        <StarRoundedIcon className="rate" color="secondary" />
        <p>4.40</p>
        </div>
      </div>
      <p id="apartment-feature">Cozy, peaceful and private room with...</p>
    </Content>
  );
}
