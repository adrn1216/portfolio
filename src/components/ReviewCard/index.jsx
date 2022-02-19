import { Card } from "./style";

const ReviewCard = ({ review }) => {
  const { name, avatar, description, star, country, published } = review;
  return (
    <Card>
      <h3>{name}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default ReviewCard;
