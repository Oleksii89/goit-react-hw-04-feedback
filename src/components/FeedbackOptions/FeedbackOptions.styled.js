import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding-left: 0;
`;

export const LiItem = styled.li`
  padding: 20px;
  margin-top: 10px;
`;

export const Option = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;
