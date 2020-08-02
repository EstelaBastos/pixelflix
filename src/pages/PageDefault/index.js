import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Main = styled.main`
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;

    ${({ paddingAll }) => css`
      padding: ${paddingAll};    
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: '',
};

PageDefault.propType = {
  children: PropTypes.node.isRequired,
};

export default PageDefault;
