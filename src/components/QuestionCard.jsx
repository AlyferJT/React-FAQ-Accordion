import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import "./QuestionCard.css";

function QuestionCard({ id, onSelect, question, answer, actualSelected }) {
  const displayStyle = actualSelected !== id ? { display: "none" } : {};
  const displayImg = actualSelected !== id ? plusIcon : minusIcon;

  return (
    <li className="question">
      <div
        onClick={() => {
          onSelect(id);
        }}
        className="questionTitle"
      >
        <h2>{question} </h2>
        <img className="actionImg" src={displayImg} />
      </div>
      <p style={displayStyle} className="questionAnswer">
        {answer}
      </p>
    </li>
  );
}

export default QuestionCard;
