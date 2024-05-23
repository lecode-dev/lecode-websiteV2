import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 700px;
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
`;

export const ClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ClientImage = styled.img`
  width: 192px;
  height: 176px;
  object-fit: contain;
`;

export const FeedbackContainer = styled.div`
  width: 400px;
  text-align: justify;
`;