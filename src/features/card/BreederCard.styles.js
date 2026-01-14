import styled from "styled-components";

export const Card = styled.article`
  background: #121a2a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

export const TitleRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: 650;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const buttonBase = `
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.06);
  color: #e9eefb;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: rgba(255,255,255,0.10);
  }
`;

export const SmallButton = styled.button`
  ${buttonBase}
`;

export const DangerButton = styled.button`
  ${buttonBase}
  background: rgba(255, 80, 80, 0.16);
  border-color: rgba(255, 80, 80, 0.35);
`;

export const Meta = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 6px;
`;

export const MetaRow = styled.div`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 8px;
  align-items: start;
`;

export const MetaLabel = styled.span`
  opacity: 0.75;
  font-size: 13px;
`;

export const MetaValue = styled.span`
  font-size: 14px;
`;

export const Bottom = styled.div`
  margin-top: 12px;
`;

export const Quick = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const LinkButton = styled.a`
  ${buttonBase}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  ${(p) =>
        p.$disabled
            ? `
    opacity: 0.45;
    pointer-events: none;
    cursor: not-allowed;
  `
            : ""}
`;

export const CopyButton = styled.button`
  ${buttonBase}
`;