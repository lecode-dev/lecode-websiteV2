import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  align-items: center;
  gap: 1rem;
`;

export const TestimonyContainer = styled.div`
  position: absolute;
  top: 110px;
  left: 85px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 662px;
`;

export const ClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ClientImage = styled.img`
  width: 192px;
  height: 176px;
  border: 1px solid #000;
`;

export const FeedbackContainer = styled.div`
  width: 400px;
`;