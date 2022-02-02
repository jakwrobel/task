export const handleErrors = (error, set) => {
  if (error.response) {
    console.error("Problem with response from API. More info: ", error);
    set(error.message);
  } else if (error.request) {
    console.error("Problem with sending the request. More info: ", error);
    set(error.message);
  } else {
    console.error("An error has occured. More info: ", error);
    set(error.message);
  }
};
