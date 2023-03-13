import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IDogPhoto } from "../component/type";
import useTimer from "../hook/useTimer";

// Define a function to fetch a single dog image
const fetchDogImage = async (): Promise<IDogPhoto> => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data;
};

// Define a custom hook that fetches 9 dog images at once
export const useFetchNineDogImages = (): [
  UseQueryResult<IDogPhoto[]>,
  {
    seconds: number;
    isActive: boolean;
    start: () => void;
    stop: () => void;
  }
] => {
  const timer = useTimer(); // custom hook to start a timer
  const fetchDogImages = async (): Promise<IDogPhoto[]> => {
    const promises = [];
    for (let i = 0; i < 9; i++) {
      promises.push(fetchDogImage());
    }
    return Promise.all(promises);
  };
  const query = useQuery<IDogPhoto[]>({
    queryFn: fetchDogImages,
    queryKey: ["dogImages"],
    onSuccess: () => {
      timer.start(); // start the timer once data has been fetched
    },
    refetchOnWindowFocus: false,
  });
  return [query, timer];
};
