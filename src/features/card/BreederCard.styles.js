import styled from "styled-components";

export const Card = styled.article`
  position: relative;
  overflow: hidden;

  padding: 17px;
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 19px;

  background:
    linear-gradient(
      145deg,
      rgba(18, 30, 49, 0.98),
      rgba(11, 20, 34, 0.98)
    );

  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.035);

  cursor: pointer;

  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;

    width: 4px;
    background: linear-gradient(#3b82f6, #38bdf8);
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(96, 165, 250, 0.34);

    box-shadow:
      0 18px 42px rgba(0, 0, 0, 0.28),
      0 0 0 1px rgba(59, 130, 246, 0.06);
  }

  @media (max-width: 600px) {
    padding: 15px 13px 15px 16px;
    border-radius: 16px;

    &:hover {
      transform: none;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  min-width: 0;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;

  padding: 5px 9px;
  border: 1px solid rgba(96, 165, 250, 0.24);
  border-radius: 999px;

  background: rgba(37, 99, 235, 0.12);
  color: #bfdbfe;

  font-size: 12px;
  font-weight: 700;
`;

export const Name = styled.span`
  overflow-wrap: anywhere;

  color: #f8fafc;
  font-size: 19px;
  line-height: 1.25;
  font-weight: 800;

  &::before {
    content: "🐔";
    margin-right: 9px;
    font-size: 17px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  flex-shrink: 0;

  @media (max-width: 520px) {
    width: 100%;

    > * {
      flex: 1;
    }
  }
`;

const buttonBase = `
  min-height: 38px;
  padding: 8px 12px;

  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.055);
  color: #e8eefc;

  font-size: 13px;
  line-height: 1;
  font-weight: 700;

  cursor: pointer;

  transition:
    transform 150ms ease,
    background 150ms ease,
    border-color 150ms ease,
    box-shadow 150ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(148, 163, 184, 0.34);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SmallButton = styled.button`
  ${buttonBase}

  color: #bfdbfe;
  background: rgba(37, 99, 235, 0.12);
  border-color: rgba(59, 130, 246, 0.25);

  &:hover {
    background: rgba(37, 99, 235, 0.22);
    border-color: rgba(96, 165, 250, 0.45);
  }
`;

export const DangerButton = styled.button`
  ${buttonBase}

  color: #fecaca;
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(248, 113, 113, 0.25);

  &:hover {
    background: rgba(239, 68, 68, 0.2);
    border-color: rgba(248, 113, 113, 0.45);
  }
`;

export const Meta = styled.div`
  display: grid;
  gap: 8px;

  margin-top: 16px;
  padding: 13px 14px;

  border: 1px solid rgba(148, 163, 184, 0.11);
  border-radius: 13px;

  background: rgba(2, 8, 20, 0.3);
`;

export const MetaRow = styled.div`
  display: grid;
  grid-template-columns: 95px minmax(0, 1fr);
  gap: 10px;
  align-items: start;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2px;
  }
`;

export const MetaLabel = styled.span`
  color: #8192aa;
  font-size: 12px;
  font-weight: 700;
`;

export const MetaValue = styled.span`
  overflow-wrap: anywhere;

  color: #dbe5f4;
  font-size: 14px;
  line-height: 1.45;
`;

export const Bottom = styled.div`
  margin-top: 14px;
`;

export const Quick = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 500px) {
    > * {
      flex: 1 1 calc(50% - 8px);
    }
  }
`;

export const LinkButton = styled.a`
  ${buttonBase}

  display: inline-flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  color: #dbeafe;
  background: rgba(37, 99, 235, 0.11);
  border-color: rgba(59, 130, 246, 0.22);

  &:hover {
    background: rgba(37, 99, 235, 0.2);
    border-color: rgba(96, 165, 250, 0.42);
  }

  ${(p) =>
    p.$disabled
      ? `
        opacity: 0.4;
        pointer-events: none;
        cursor: not-allowed;
      `
      : ""}
`;

export const CopyButton = styled.button`
  ${buttonBase}

  color: #d1fae5;
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(52, 211, 153, 0.22);

  &:hover {
    background: rgba(16, 185, 129, 0.18);
    border-color: rgba(52, 211, 153, 0.4);
  }
`;