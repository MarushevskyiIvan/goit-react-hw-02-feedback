import { Btn, BtnWrap } from './Feedback.styled';

export const FeedbackOptions = ({ options, addFeedback }) => {
  return (
    <BtnWrap>
      {options.map(item => (
        <Btn name={item} key={item} onClick={addFeedback}>
          {item}
        </Btn>
      ))}
    </BtnWrap>
  );
};
