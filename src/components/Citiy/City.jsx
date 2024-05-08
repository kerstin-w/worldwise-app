import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useCities from "../../hooks/useCities";

//import styles from "./City.module.css";
/*
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));*/

function City() {
  const { id } = useParams();
  const { getCity, currentCity } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id]);

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div>
      <h1>City{id}</h1>
      <p>Position:</p>
    </div>
  );
}

export default City;
