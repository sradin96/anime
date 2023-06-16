import { gql } from "@apollo/client";

const RANDOM_ANIME_QUERY = gql`
  query ($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(type: ANIME, sort: [POPULARITY_DESC, ID], isAdult: false) {
        id
        title {
          romaji
          english
          native
        }
        type
        genres
        description
        startDate {
          year
        }
        coverImage {
          extraLarge
          large
          medium
          color
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
  }
`;

export default RANDOM_ANIME_QUERY;
