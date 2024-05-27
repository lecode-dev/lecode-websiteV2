import styled from 'styled-components';

export const ContactButton = styled.button`
  display: flex;
  width: fit-content;
  height: 3.25rem;
  padding: 1.5625rem 1.5rem;
  margin-left: 20rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  border: none;
  background: var(--gradiente-cta, radial-gradient(708.43% 135.72% at 8.24% 0%, #04c17c 0%, #01b473 56%, #04c17c 100%));
  box-shadow: 0px 0px 8px 0px #00ab26, 0px 0px 1.9px 0px #fffafa;
  cursor: pointer;
  text-transform: uppercase;
  color: #ffff;

  &:hover {
    background: var(
      --gradiente-cta,
      radial-gradient(708.43% 135.72% at 8.24% 0%, #02a267 0%, #01b473 56%, #02794e 100%)
    );
  }
`;
