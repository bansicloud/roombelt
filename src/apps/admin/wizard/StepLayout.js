import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 0 30px;
  margin: 0;
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
`;

const Content = styled.div`
  flex: 300px 0 0;
`

const Image = styled.img`
  height: 100%;
  margin-left: 20px;
  flex: auto 0 1;
`;

export default props => (
  <Wrapper>
    <Content>{props.children}</Content>
    <Image src={props.img} alt="" />
  </Wrapper>
);
