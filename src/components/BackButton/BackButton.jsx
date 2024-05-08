import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

/**
 * The `BackButton` component allows users to navigate back to the previous page.
 * @returns The `BackButton` component is being returned. It consists of a button with a left arrow
 * icon and the text "Back". When clicked, it will navigate back to the previous page using the
 * `useNavigate` hook.
 */
function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
