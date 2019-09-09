import { graphql } from "gatsby";
import header from "../components/layouts/global/header";
import { node } from "prop-types";
import { type } from "os";

// Query fragment held header, not sure why its on "node__article" TypeName
export const ArticleNode = graphql`
  fragment ArticleNode on Node {
    title
    body {
      processed
      value
    }
    nid
    path {
      alias
    }
    fields {
      slug
    }
    relationships {
      field_tags {
        name
        tid
        path {
          alias
        }
      }
      field_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1028, maxHeight: 800) {
              tracedSVG
              aspectRatio
              src
              srcSet
              sizes
            }
            resolutions {
              width
              height
            }
          }
        }
      }
    }
  }
`;
