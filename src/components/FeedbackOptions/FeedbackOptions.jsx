import { FeedbackOptionsList, LiItem, Option } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackOptionsList>
    {options.map(option => {
      return (
        <LiItem key={option}>
          <Option type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Option>
        </LiItem>
      );
    })}
  </FeedbackOptionsList>
);
