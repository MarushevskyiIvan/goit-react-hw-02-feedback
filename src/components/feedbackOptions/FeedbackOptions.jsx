import { Btn, BtnWrap } from './Feedback.styled';

export const FeedbackOptions = ({ options, addFeedback }) => {
  const keys = Object.keys(options);

  return (
    <BtnWrap>
      {keys.map(item => (
        <Btn name={item} key={item} onClick={addFeedback}>
          {item}
        </Btn>
      ))}
    </BtnWrap>
  );
};
