import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import backgroundImage from '../../assets/images/hourglass-sheet.png';

const LoadingImage = styled.div`
    width: 66px;
    height: 117px;
    background-image: url(${backgroundImage});
    animation: moveX 0.3s steps(3) infinite, rotation 0.5s infinite;
    margin-bottom: 10px;
    ${(isVisible) => !isVisible && css`{
        display: 'none'
    }`}

    @-webkit-keyframes moveX {
        from { background-position-x: 0px; }
        to { background-position-x: -198px; }
    }
    @keyframes moveX {
        from { background-position-x: 0px; }
        to { background-position-x: -198px; }
    }

    @-webkit-keyframes rotation {
        0%, 50%, 100% { -webkit-transform: rotate(0deg);}
        25% {-webkit-transform: rotate(5deg); }
        75% {-webkit-transform: rotate(-5deg); }
    }

    @keyframes rotation {
        0%, 50%, 100% { transform: rotate(0deg);}
        25% {transform: rotate(5deg); }
        75% {transform: rotate(-5deg); }
    }
`;

const WrapperLoading = styled.div`
    margin: 0 auto;
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

WrapperLoading.Text = styled.span``;

function Loading({ label, isVisible }) {
  return (
    <WrapperLoading>
      <LoadingImage />
      <WrapperLoading.Text>{label}</WrapperLoading.Text>
    </WrapperLoading>
  );
}

Loading.defaultProps = {
  label: 'Loading...',
  isVisible: true,
};

Loading.propType = {
  label: PropTypes.string,
  isVisible: PropTypes.bool,
};

export default Loading;
