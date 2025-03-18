import styled from 'styled-components';
export const ButtonGroup = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  left: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: #fff;
  transition: 0.4s;
  opacity: 0;
  visibility: hidden;
  z-index: -1;

  button {
    padding: 0.4rem 0.45rem;
    background: #e5ebf3;
    border-radius: 0.1rem;
    z-index: 2;
    transition: 0.3s;
    border: 1px solid #b8bfc7;
    &:not(:last-child) {
      margin-bottom: 0.2rem;
    }
    &:hover {
      background: #001628 !important;
      color: #e5ebf3 !important;
    }
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 95%;
  margin: 2rem auto;
  border: 1px solid #ddd;
  background: #fff;
  max-width: 560px;
  ${({ $isSelected }) =>
    $isSelected && 'border : 3px solid tomato ; border-radius:0.2rem'};

  &:hover ${ButtonGroup} {
    left: calc(100% + 0.3rem);
    opacity: 1;
    visibility: visible;
    z-index: 2;
  }
  @media (max-width: 768px) {
    ${ButtonGroup} {
      left: calc(100% + 0.3rem);
      opacity: 1;
      visibility: visible;
      z-index: 2;
    }
  }
`;

export const Head = styled.div`
  border-bottom: 1px solid #ddd;
`;

export const Title = styled.h3`
  font-size: 1.2em;
  font-weight: 600;
  padding: 0 1rem;
`;
export const Desc = styled.div`
  color: #999;
  padding: 0rem 1rem 1rem;
  font-size: 0.9em;
`;
export const Body = styled.div`
  padding: 1rem;
`;
