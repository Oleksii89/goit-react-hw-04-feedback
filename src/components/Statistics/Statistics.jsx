import {
  ItemValue,
  StatisticsItem,
  StatisticsList,
  StatisticsText,
} from './Statisstics.styled';

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <StatisticsList>
      {title && <StatisticsText>{title}</StatisticsText>}
      <StatisticsItem>
        <p>Good:</p>
        <ItemValue>{good}</ItemValue>
      </StatisticsItem>
      <StatisticsItem>
        <p>Neutral:</p>
        <ItemValue>{neutral}</ItemValue>
      </StatisticsItem>
      <StatisticsItem>
        <p>Bad:</p>
        <ItemValue>{bad}</ItemValue>
      </StatisticsItem>
      <StatisticsItem>
        <p>Total:</p>
        <ItemValue>{total}</ItemValue>
      </StatisticsItem>
      <StatisticsItem>
        <p>Positive feedback:</p>
        <ItemValue>{positiveFeedbackPercentage}%</ItemValue>
      </StatisticsItem>
    </StatisticsList>
  );
};
