import React from "react";
import Img from "gatsby-image";
import NodeInfo from "../../content/node-info";
import styled from "styled-components";
import { Link } from "gatsby";

const FeaturedContainer = styled.div`
  clear: both;
  margin: 1em 0;
`;
const FeaturedImage = styled(Img)`
  margin-right: 1em;
  width: 500px;
  float: left;
`;
const FeaturedHeadline = styled.h2`
  font-size: 2em;
`;

const Featured = props => {
  return (
    <FeaturedContainer>
      <FeaturedImage fluid={props.image} />
      <FeaturedHeadline>
        <Link to={props.path}>{props.title}</Link>
      </FeaturedHeadline>
      <NodeInfo node={props.node} />
      <div>
        {/* This is used to remove html code from query response and cut string to 400 chars */}
        {props.content.replace(/(<([^>]+)>)/gi, "").substring(0, 400) + "..."}
      </div>
    </FeaturedContainer>
  );
};

export default Featured;
