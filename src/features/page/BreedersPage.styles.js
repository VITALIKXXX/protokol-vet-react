import styled from "styled-components";

export const Page = styled.section`
  background: #0b0f17;
  border-radius: 16px;
  padding: 8px;
`;

export const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchBox = styled.div`
  display: grid;
  gap: 6px;
  padding: 14px;
  border-radius: 14px;
  background: #121a2a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
`;

export const SearchLabel = styled.label`
  font-size: 13px;
  opacity: 0.85;
`;

export const SearchInput = styled.input`
  background: #0e1422;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e9eefb;
  padding: 10px 12px;
  border-radius: 12px;
  outline: none;
`;

export const SearchMeta = styled.div`
  font-size: 13px;
  opacity: 0.8;
`;
