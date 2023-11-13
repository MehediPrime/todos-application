export const getFormValue = (e, willClear = false) => {
  const form = new FormData(e.currentTarget);
  const body = {};
  //Separate value from form data to an object
  for (const [key, value] of form.entries()) {
    body[key] = value;
  }

  // Clear input fields
  if (willClear) {
    const inputElements = e.currentTarget.querySelectorAll("input");
    inputElements.forEach((input) => {
      input.value = "";
    });
  }

  return body;
};
