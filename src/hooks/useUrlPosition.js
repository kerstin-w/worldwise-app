import { useSearchParams } from "react-router-dom";

/**
 * The `useUrlPosition` function extracts latitude and longitude values from the URL search parameters
 * and returns them as an array.
 * @returns An array containing the latitude and longitude values extracted from the URL search
 * parameters.
 */
export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
