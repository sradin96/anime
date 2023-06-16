import { gql } from "@apollo/client";

interface AnimeTitle {
  romaji?: string,
  english?: string,
  native?: string,
}

interface AnimeImage {
  extraLarge?: string,
  large?: string,
  medium?: string,
  color?: string,
}

interface AnimePageInfo {
  total?: number,
  perPage?: number,
  currentPage?: number,
  lastPage?: number,
  hasNextPage?: boolean,
}

export interface Anime {
  id: number,
  title: AnimeTitle,
  coverImage: AnimeImage,
}

interface Animes {
  pageInfo: AnimePageInfo,
  media: Anime[]
}

export interface AnimesPage {
  Page: Animes
}

const ANIME_QUERY = gql`
  query ($search: String!, $page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(search: $search, type: ANIME) {
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

export default ANIME_QUERY;