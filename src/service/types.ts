import { Summary } from "./models/summary";

export type Service = {
  getSummaries: () => Promise<Summary[]>;
};
