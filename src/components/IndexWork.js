import React from 'react';
import styled from 'styled-components';

const IndexWorkDiv = styled.div`
    width: 49%;
    padding: 15px 0;
    text-align: center;
`;

const IndexImg = styled.img`
     width: 350px;
     margin-bottom: 15px;
`;

const IndexName = styled.h2`
    font-family: 'Roboto', Tahoma, sans-serif;
    font-size: 1em;
    font-weight: 400;
    color: #333;
    line-height: 24px;
`;

class IndexWork extends React.Component {
    render () {
        return (
            <IndexWorkDiv>
                <IndexImg src={this.props.url}>
                </IndexImg>
                <IndexName>{this.props.text}</IndexName>
            </IndexWorkDiv>
        )
    }
}

export default IndexWork;