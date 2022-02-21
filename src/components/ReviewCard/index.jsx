import { Card } from "./style";
import { ReactComponent as StarIcon } from "../../assets/svg/star-icon.svg";

const ReviewCard = ({ review }) => {
  const { name, avatar, description, star } = review;

  return (
    <Card>
      <div>
        <img src={avatar} alt="avatar from fiverr review" />
        <h3>{name}</h3>
        <div>
          <StarIcon />
          <p>{star}</p>
        </div>
      </div>
      <p>{description}</p>
    </Card>
  );
};

export default ReviewCard;
