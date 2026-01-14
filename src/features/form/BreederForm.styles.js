import styled from "styled-components";

export const Card = styled.div`
  background: #121a2a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  margin: 0 0 4px;
  font-size: 18px;
`;

export const Hint = styled.p`
  margin: 0;
  opacity: 0.75;
  font-size: 13px;
`;

export const Form = styled.form`
  display: grid;
  gap: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: grid;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 13px;
  opacity: 0.85;
`;

const baseInput = `
  background: #0e1422;
  border: 1px solid rgba(255,255,255,0.10);
  color: #e9eefb;
  padding: 10px 12px;
  border-radius: 12px;
  outline: none;
`;

export const Input = styled.input`
  ${baseInput}
`;

export const Textarea = styled.textarea`
  ${baseInput}
  resize: vertical;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 4px;
`;

export const Button = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  color: #e9eefb;
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  ${(p) =>
        p.$variant === "primary"
            ? `
    background: rgba(70, 140, 255, 0.22);
    border-color: rgba(70, 140, 255, 0.40);
  `
            : ""}
`;