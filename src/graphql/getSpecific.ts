import { gql } from "@apollo/client";

const SPECIFIC_QUERY = gql`
  query ($id: Int!) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      type
      genres
      startDate {
        year
      }
      description
      coverImage {
        extraLarge
        large
        medium
      }
      rankings {
        rank
        type
        allTime
      }
      studios {
        edges {
          node {
            id
            name
          }
        }
      }
      episodes
    }
  }
`;

export default SPECIFIC_QUERY;