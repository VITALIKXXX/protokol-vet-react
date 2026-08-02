import styled from "styled-components";

export const AppShell = styled.div`
  position: relative;
  isolation: isolate;

  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 22px 18px;

  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Arial, sans-serif;
  line-height: 1.5;
  color: #e8eefc;

  &::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -2;

    background:
      radial-gradient(
        circle at top left,
        rgba(37, 99, 235, 0.2),
        transparent 35%
      ),
      radial-gradient(
        circle at bottom right,
        rgba(14, 165, 233, 0.12),
        transparent 32%
      ),
      #07111f;
  }

  @media (max-width: 600px) {
    padding: 14px 10px 20px;
  }
`;

export const Header = styled.header`
  position: relative;
  overflow: hidden;

  padding: 26px 28px;
  border: 1px solid rgba(147, 197, 253, 0.22);
  border-radius: 24px;

  background:
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.96),
      rgba(30, 58, 138, 0.96)
    );

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);

  &::after {
    content: "🐔";
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%) rotate(-8deg);

    font-size: 72px;
    opacity: 0.13;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 22px 20px;
    border-radius: 20px;

    &::after {
      right: 14px;
      font-size: 58px;
    }
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;

  margin: 0;
  color: #ffffff;

  font-size: clamp(30px, 5vw, 42px);
  line-height: 1.08;
  letter-spacing: -0.025em;
  font-weight: 850;

  &::before {
    content: "📋";
    margin-right: 12px;
    font-size: 0.85em;
  }
`;

export const Subtitle = styled.p`
  position: relative;
  z-index: 1;

  margin: 10px 0 0;
  color: rgba(255, 255, 255, 0.82);

  font-size: 16px;
  font-weight: 550;
  letter-spacing: 0.02em;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Main = styled.main`
  margin-top: 20px;
`;

export const Footer = styled.footer`
  margin-top: 24px;
  padding: 14px 18px;

  text-align: center;
  color: #7f91ad;
  font-size: 13px;
  font-weight: 600;
`;