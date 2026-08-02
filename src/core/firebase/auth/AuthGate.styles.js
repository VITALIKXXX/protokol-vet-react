import styled from "styled-components";

export const AuthWrapper = styled.div`
  width: 100%;
`;

export const Loading = styled.div`
  min-height: 220px;
  display: grid;
  place-items: center;

  padding: 24px;

  border: 1px solid rgba(96, 165, 250, 0.18);
  border-radius: 18px;

  background:
    linear-gradient(
      135deg,
      rgba(30, 58, 138, 0.14),
      rgba(15, 23, 42, 0.72)
    );

  color: #dbeafe;
  font-size: 16px;
  font-weight: 700;
`;

export const UserBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  margin-bottom: 16px;
  padding: 13px 16px;

  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 14px;

  background:
    linear-gradient(
      135deg,
      rgba(30, 58, 138, 0.22),
      rgba(15, 23, 42, 0.78)
    );

  color: #dbeafe;

  box-shadow:
    0 10px 26px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;

  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.4;
`;

export const UserBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 7px 11px;

  border: 1px solid rgba(96, 165, 250, 0.24);
  border-radius: 999px;

  background: rgba(37, 99, 235, 0.12);
  color: #dbeafe;

  strong {
    color: #ffffff;
    font-weight: 800;
  }
`;

export const RoleBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 7px 11px;

  border: 1px solid rgba(52, 211, 153, 0.24);
  border-radius: 999px;

  background: rgba(16, 185, 129, 0.1);
  color: #d1fae5;

  strong {
    color: #ffffff;
    font-weight: 800;
  }
`;

export const LogoutButton = styled.button`
  flex-shrink: 0;

  min-height: 40px;
  padding: 9px 14px;

  border: 1px solid rgba(248, 113, 113, 0.26);
  border-radius: 10px;

  background: rgba(239, 68, 68, 0.1);
  color: #fecaca;

  font-size: 13px;
  font-weight: 800;

  cursor: pointer;

  transition:
    transform 150ms ease,
    background 150ms ease,
    border-color 150ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(239, 68, 68, 0.18);
    border-color: rgba(248, 113, 113, 0.45);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;