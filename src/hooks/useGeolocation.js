import { useState } from "react";

/**
 * The `useGeolocation` function is a custom hook that provides access to the user's
 * geolocation with loading state, position data, error handling, and a function to retrieve the
 * current position.
 * @param [defaultPosition=null] - The `defaultPosition` parameter in the `useGeolocation` function is
 * used to set an initial position value before the actual geolocation data is retrieved. If no default
 * position is provided, it defaults to `null`. This allows you to have a placeholder position while
 * waiting for the actual geolocation data
 * @returns The `useGeolocation` function returns an object with the following properties and methods:
 * - `isLoading`: a boolean state indicating whether the geolocation data is currently being loaded.
 * - `position`: an object containing the latitude and longitude coordinates of the user's current
 * position.
 * - `error`: a string containing any error message encountered during the geolocation process.
 * - `getPosition()`: a function that triggers
 */
export function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}
