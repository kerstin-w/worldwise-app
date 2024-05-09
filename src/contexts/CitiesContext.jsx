import { createContext, useEffect, useReducer, useState } from "react";

const BASE_URL = "http://localhost:9000";

export const CitiesContext = createContext();

/**
 * The reducer function handles different action types to update the state in a JavaScript React
 * application.
 * @returns The reducer function returns a new state object based on the action type provided. The
 * state object is updated with the changes specified in each case of the switch statement depending on
 * the action type.
 */
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  erro: "",
};

/**
 * The `CitiesProvider` is a component that manages city data, including fetching, creating,
 * and deleting cities, and provides this data to its children components through a
 * context.
 * @returns The `CitiesProvider` component is returning a `CitiesContext.Provider` component with the
 * following context values provided:
 * - `cities`: An array of cities
 * - `isLoading`: A boolean indicating if data is currently being loaded
 * - `error`: A string containing any error message
 * - `currentCity`: An object representing the currently selected city
 * - `getCity`: A function to asynchronously fetch city
 */
function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({ type: "rejected", payload: "Failed to fetch data" });
      }
    }
    fetchCities();
  }, []);

  /**
   * The function `getCity` asynchronously fetches city data based on an ID and dispatches actions based
   * on the result.
   */
  async function getCity(id) {
    if (Number(id) === currentCity.id) return;
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the city.",
      });
    }
  }

  /**
   * The function `createCity` asynchronously sends a POST request to a specified URL to create a new
   * city, dispatching loading, success, or error actions based on the response.
   */
  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ tye: "city/created", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error creating the city.",
      });
    }
  }

  /**
   * The function `deleteCity` asynchronously deletes a city by sending a DELETE request to the specified
   * URL and dispatches actions based on the outcome.
   */
  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the city.",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        error,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider };
