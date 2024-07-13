export interface Game {
  appid: string;
  name: string;
  release_date: string;
  required_age: number;
  price: number;
  dlc_count: number;
  detailed_description: string;
  about_the_game: string;
  short_description: string;
  reviews: string;
  header_image: string;
  website: string;
  support_url: string;
  support_email: string;
  windows: boolean;
  mac: boolean;
  linux: boolean;
  metacritic_score: number;
  metacritic_url: string;
  achievements: number;
  recommendations: number;
  notes: string;
  supported_languages: string;
  full_audio_languages: string;
  packages: string[];
  developers: string[];
  publishers: string[];
  categories: string[];
  genres: string[];
  screenshots: string[];
  movies: string[];
  positive: number;
  negative: number;
  estimated_owners: number;
  average_playtime_forever: number;
  average_playtime_2weeks: number;
  median_playtime_forever: number;
  median_playtime_2weeks: number;
  peak_ccu: number;
  tags: string[];
}