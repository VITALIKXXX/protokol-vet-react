import styled from "styled-components";

export const DetailsCard = styled.section`
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 18px;
    padding: 20px;
    color: #e9eefb;
`;

export const BackButton = styled.button`
    border: none;
    background: transparent;
    color: #60a5fa;
    cursor: pointer;
    font-size: 15px;
    margin-bottom: 16px;
`;

export const Title = styled.h2`
    margin: 0 0 20px;
    font-size: 28px;
`;

export const Section = styled.div`
    padding: 14px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.04);
    margin-bottom: 14px;

    h3 {
        margin: 0 0 10px;
    }

    p {
        margin: 0;
        color: #cbd5e1;
    }
`;

export const ContactRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    padding: 10px 0;

    &:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    p {
        margin-top: 4px;
    }

    @media (max-width: 600px) {
        align-items: flex-start;
        flex-direction: column;
    }
`;

export const Actions = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

export const ButtonLink = styled.a`
    text-decoration: none;
    background: #2563eb;
    color: white;
    padding: 10px 14px;
    border-radius: 12px;
    font-weight: 600;
`;

export const Button = styled.button`
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.06);
    color: #e9eefb;
    padding: 10px 14px;
    border-radius: 12px;
    cursor: pointer;
`;