import { gql } from "@apollo/client";

const POPULAR_ANIME_QUERY = gql`
  query PopularAnimeQuery($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
        }
        popularity
        averageScore
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

export default POPULAR_ANIME_QUERY;