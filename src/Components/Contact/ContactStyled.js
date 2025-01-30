import styled from "styled-components";

export const ContactStyled = styled.div`

  max-width: auto;
  margin: 40px auto;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background: #fefefe;
  color: #333;
  font-family: Arial, sans-serif;

  h2 {
    text-align: center;
    color: #6d4c41;
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-top: 12px;
    font-size: 14px;
  }

  input,
  textarea {
    width: 100%;
    min-width: 500px;
    margin-top: 6px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    background: #fff;
    transition: border-color 0.3s;
  }

  input:focus,
  textarea:focus {
    border-color: #6d4c41;
    outline: none;
  }

  .error {
    color: #d32f2f;
    font-size: 14px;
    margin-top: 4px;
  }

  .button-group {
    display: flex;
    gap: 12px;
    margin-top: 25px;
  }

  button {
    flex: 1;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
  }

  .submit {
    background: #6d4c41;
    color: white;
  }

  .submit:hover {
    background: #563b32;
    transform: scale(1.05);
  }

  .reset {
    background: #b0b0b0;
    color: white;
  }

  .reset:hover {
    background: #909090;
    transform: scale(1.05);
  }

`