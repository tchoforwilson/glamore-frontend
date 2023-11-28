import React, { useEffect, useContext } from "react";
import { eErrorTypes } from "../../utilities/enums";
import { ErrorContext } from "../../contexts";

/**
 * @breif Render an error screen whenever there is an error
 * error could be connection error,no search results found or internall server errors.
 * @param {Function} handleBtnClick Callback function when button is clicked
 * @param {HTMLElement} children Children elements to be rendered
 * @returns
 */
const ErrorScreen = ({ handleBtnClick, children }) => {
  const handleRefresh = () => {
    window.location.reload();
  };
  /**
   * @breif Render screen error button
   * @param {String} text Button text
   * @param {Function} handleClick Callback function when button is clicked
   * @returns
   */
  const ErrorButton = ({ text, onClick }) => {
    return (
      <button type="submit" className="screen-error__btn" onClick={onClick}>
        {text}
      </button>
    );
  };
  const Error = {
    CONNECTION: {
      heading: "something went wrong",
      message: "Check your connection. then refresh the page.",
      btn: <ErrorButton text="refresh" handleClick={handleRefresh} />,
    },
    SERVER: {
      heading: "something went wrong",
      message: "We're having issues loading this page.",
      btn: <ErrorButton text="try again" handleClick={handleBtnClick} />,
    },
    RESULTS: {
      heading: "No results found.",
      message: "Something broke. We found no results.",
      btn: <ErrorButton text="try again" handleClick={handleBtnClick} />,
    },
  };
  const { errorType, setErrorType } = useContext(ErrorContext);

  useEffect(() => {
    function handleOnline() {
      window.location.reload();
    }

    function handleOffline() {
      setErrorType(eErrorTypes.CONNECTION);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [setErrorType]);

  return errorType !== eErrorTypes.NOTHING ? (
    <section className="screen-error">
      <h1 className="screen-error__heading">{Error[errorType].heading}</h1>
      <p className="screen-error__message">{Error[errorType].message}</p>
      {Error[errorType].btn}
    </section>
  ) : (
    children
  );
};

export default ErrorScreen;
