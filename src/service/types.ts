import { Summary } from "./models/summary";
import { Artist } from "./models/artist";

export type Service = {
  getSummaries: () => Promise<Summary[]>;
  getArtists: () => Promise<Artist[]>;
};
