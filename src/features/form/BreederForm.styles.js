import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  overflow: hidden;

  padding: 22px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 22px;

  background:
    linear-gradient(
      145deg,
      rgba(17, 28, 45, 0.98),
      rgba(11, 20, 34, 0.98)
    );

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 24px;
    right: 24px;
    height: 3px;

    border-radius: 0 0 999px 999px;
    background: linear-gradient(90deg, #2563eb, #38bdf8);
  }

  @media (max-width: 600px) {
    padding: 18px 14px;
    border-radius: 18px;
  }
`;

export const Header = styled.div`
  margin-bottom: 18px;
  padding-bottom: 14px;

  border-bottom: 1px solid rgba(148, 163, 184, 0.13);
`;

export const Title = styled.h2`
  margin: 0 0 5px;

  color: #f8fafc;
  font-size: 22px;
  line-height: 1.25;
  font-weight: 800;

  &::before {
    content: "➕";
    margin-right: 9px;
    font-size: 18px;
  }
`;

export const Hint = styled.p`
  margin: 0;
  color: #8fa1bb;

  font-size: 13px;
  line-height: 1.4;

  b {
    color: #bfdbfe;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 15px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: grid;
  gap: 7px;
`;

export const Label = styled.label`
  color: #cbd5e1;

  font-size: 13px;
  line-height: 1.3;
  font-weight: 700;
`;

const baseInput = `
  width: 100%;
  box-sizing: border-box;

  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 13px;
  padding: 12px 14px;

  background: rgba(3, 10, 22, 0.56);
  color: #f1f5f9;

  font: inherit;
  font-size: 15px;

  outline: none;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    background 160ms ease,
    transform 160ms ease;

  &::placeholder {
    color: #65758e;
  }

  &:hover {
    border-color: rgba(96, 165, 250, 0.38);
    background: rgba(8, 18, 34, 0.76);
  }

  &:focus {
    border-color: #3b82f6;
    background: rgba(9, 21, 40, 0.92);

    box-shadow:
      0 0 0 4px rgba(59, 130, 246, 0.15),
      0 8px 24px rgba(0, 0, 0, 0.14);
  }
`;

export const Input = styled.input`
  ${baseInput}
`;

export const Textarea = styled.textarea`
  ${baseInput}

  min-height: 105px;
  resize: vertical;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;

  margin-top: 6px;

  @media (max-width: 500px) {
    > * {
      flex: 1;
    }
  }
`;

export const Button = styled.button`
  min-height: 44px;
  padding: 11px 18px;

  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.06);
  color: #e8eefc;

  font-size: 14px;
  font-weight: 750;

  cursor: pointer;
  transition:
    transform 160ms ease,
    background 160ms ease,
    border-color 160ms ease,
    box-shadow 160ms ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(148, 163, 184, 0.35);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  ${(p) =>
    p.$variant === "primary"
      ? `
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        border-color: rgba(96, 165, 250, 0.55);
        color: white;

        box-shadow: 0 10px 24px rgba(37, 99, 235, 0.24);

        &:hover:not(:disabled) {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          border-color: #60a5fa;
          box-shadow: 0 14px 30px rgba(37, 99, 235, 0.34);
        }
      `
      : ""}
`;

export const ContactBlock = styled.div`
  position: relative;

  display: grid;
  gap: 10px;

  padding: 15px;
  border: 1px solid rgba(96, 165, 250, 0.16);
  border-radius: 16px;

  background:
    linear-gradient(
      135deg,
      rgba(30, 64, 175, 0.09),
      rgba(15, 23, 42, 0.44)
    );

  transition:
    border-color 160ms ease,
    background 160ms ease;

  &:hover {
    border-color: rgba(96, 165, 250, 0.3);
    background:
      linear-gradient(
        135deg,
        rgba(30, 64, 175, 0.14),
        rgba(15, 23, 42, 0.5)
      );
  }

  ${Label} {
    display: flex;
    align-items: center;
    gap: 7px;

    color: #93c5fd;

    &::before {
      content: "👤";
    }
  }
`;