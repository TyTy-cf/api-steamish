
export interface Games {
  id: number;
  name: string;
  publishedAt: Date;
  price: number;
  genres: string[];
  languages: string[];
  thumbnailCover: string|undefined;
  thumbnailLogo: string|undefined;
}
