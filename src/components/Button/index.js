import styled from 'styled-components';

const Button = styled.a`
    color: var(--white);
    background-color: var(--orangeLight);
    border-bottom: 9px solid var(--orangeMedium);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    
    &:active {
        border-bottom: 5px solid var(--orangeMedium);
        transform: translateY(4px);
    }

    @media (max-width: 800px) {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            text-align: center;
    }
`;
export default Button;
