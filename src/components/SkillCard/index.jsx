import { Card } from "./style";

const SkillCard = ({ icon, title, description }) => {
  return (
    <Card>
      <div>
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </Card>
  );
};

export default SkillCard;
