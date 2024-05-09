// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState } from "react";
import { convertToEmoji } from "../../utilities/convertToEmoji";

import { useUrlPosition } from "../../hooks/useUrlPosition";

import styles from "./Form.module.css";
import Button from "../Button/Button";
import BackButton from "../BackButton/BackButton";

function Form() {
  const [mapLat, mapLng] = useUrlPosition();

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        {/* Rendering a Button component with a type of "back" and an onClick 
        event handler. When this button is clicked, it prevents the default 
        behavior of the event and then uses the navigate function from the 
        react-router-dom library to go back one step in the navigation history (-1).
        */}
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
