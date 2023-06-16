import { gql } from "@apollo/client";

const SPECIFIC_MANGA_QUERY = gql`
  query ($id: Int!) {
    Media(id: $id, type: MANGA) {
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
      chapters
    }
  }
`;

export default SPECIFIC_MANGA_QUERY;