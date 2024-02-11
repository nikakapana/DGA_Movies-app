export interface MovieResponse {
  '@meta': Meta;
  '@type': string;
  paginationKey: string;
  results: MovieItem[];
  totalMatches: number;
}

export interface Meta {
  operation: string;
  requestId: string;
  serviceTimeMs: number;
}

export interface MovieItem {
  id: string;
  image?: Image;
  title: string;
  titleType: string;
  year: number;
  episode?: number;
  season?: number;
}

export interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}
