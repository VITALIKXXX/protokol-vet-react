import styled from "styled-components";

export const Grid = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Empty = styled.div`
  margin-top: 12px;
  padding: 18px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px dashed rgba(255, 255, 255, 0.12);
`;

export const EmptyTitle = styled.div`
  font-weight: 650;
  margin-bottom: 6px;
`;

export const EmptyText = styled.div`
  opacity: 0.8;
`;