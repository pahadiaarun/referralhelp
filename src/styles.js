import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin-top: 50px;
`;

export const Heading = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const FormContainer = styled.div`
  margin-bottom: 15px;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  margin-right: 10px;
`;

export const StyledSelect = styled.select`
  font-size: 16px;
  padding: 5px;
`;

export const StyledInput = styled.input`
  font-size: 16px;
  padding: 5px;
`;

export const CopyButton = styled.button`
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;
