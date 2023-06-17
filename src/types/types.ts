export type Routes = {
  path: string;
  index: number;
  exact?: boolean;
  component: React.FC;
};

export interface AnimeTitle {
  romaji?: string;
  english?: string;
  native?: string;
}

export interface AnimeImage {
  extraLarge?: string;
  large?: string;
  medium?: string;
  color?: string;
}

export interface AnimePageInfo {
  total?: number;
  perPage?: number;
  currentPage?: number;
  lastPage?: number;
  hasNextPage?: boolean;
}

export interface AnimeRankings {
    rank?: string
    type?: string
    allTime?: string
}

export interface AnimeYear {
    year: string
}
export interface Anime {
  id: number;
  title: AnimeTitle;
  coverImage: AnimeImage;
  genres: [];
  rankings: AnimeRankings[];
  episodes: string;
  startDate: AnimeYear;
}

export interface Animes {
  pageInfo: AnimePageInfo;
  media: Anime[];
}

export interface AnimesPage {
  Page: Animes;
}

export interface Genres {
    genre: string;
}

export interface Year {
    year: string;
}