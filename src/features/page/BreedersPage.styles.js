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
  gap: 8px;
  padding: 14px;
  margin-bottom: 12px;
  border-radius: 14px;
  background: #111827;
  border: 1px solid #2563eb;
  box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.15);
`;

export const SearchLabel = styled.label`
  font-size: 13px;
  opacity: 0.85;
`;

export const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: #020617;
  border: 1px solid #475569;
  color: #e2e8f0;
  padding: 12px 14px;
  border-radius: 12px;
  outline: none;
  font-size: 15px;

  &:focus {
    border-color: #2563eb;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

export const SearchMeta = styled.div`
  font-size: 13px;
  opacity: 0.8;
`;
