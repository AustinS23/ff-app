import { Service } from "./types";

export const mockService: Service = {
  getSummaries: () => {
    return new Promise((resolve) => {
      resolve([
        { title: "Cat video watched", currentIndex: 198, delta: -84 },
        { title: "Slice of pizza in the fridge", currentIndex: 5, delta: 2 },
        {
          title: "Favourite songs beginning with the letter 'A'",
          currentIndex: 1324,
          delta: 23,
        },
      ]);
    });
  },
};
