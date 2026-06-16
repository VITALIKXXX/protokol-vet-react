import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Box = styled.div`
  min-height: 360px;
  display: grid;
  place-items: center;
`;

export const Card = styled.div`
  width: min(420px, 100%);
  padding: 28px;
  border-radius: 20px;
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e9eefb;
  text-align: center;
  animation: ${fadeIn} 0.35s ease;
`;

export const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 24px;
`;

export const Text = styled.p`
  margin: 0 0 18px;
  color: #94a3b8;
`;

export const Loader = styled.div`
  width: 34px;
  height: 34px;
  margin: 0 auto;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.16);
  border-top-color: #2563eb;
  animation: ${spin} 0.9s linear infinite;
`;