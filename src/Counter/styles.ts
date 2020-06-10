import styled from 'styled-components';

export const BtnPanel = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 35px;
`;

export const Count = styled.div`
  font-size: 28px;
`;

export const Counter = styled.div`
  text-align: center;
  max-width: 400px;
  margin: auto;
  padding-top: 50px;
`;

export const Btn = styled.button`
  display: inline-block;
  color: #fff;
  background-color: #2FA4E7;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  margin-left: 10px;
  margin-right: 10px;
  transition: background-color 0.15s ease-in-out;
  &:hover {
    background-color: #1992d7;
  }
`;
