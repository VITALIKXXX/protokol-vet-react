import styled from "styled-components";

export const Banner = styled.div`
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99999;

    width: calc(100% - 32px);
    max-width: 700px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    padding: 16px 20px;
    border-radius: 16px;

    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: white;

    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);

    @media (max-width: 650px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const Message = styled.div`
    font-size: 17px;
    font-weight: 700;
    line-height: 1.4;
`;

export const UpdateButton = styled.button`
    border: none;
    border-radius: 12px;
    padding: 12px 18px;

    background: white;
    color: #1d4ed8;

    font-size: 15px;
    font-weight: 700;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.75;
        transform: none;
    }
`;