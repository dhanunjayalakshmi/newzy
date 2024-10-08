export const checkValidData = (email, password) => {
  // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (!isNameValid) return "Please enter a valid name";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid)
    return "Password must include at least 8 characters with uppercase, lowercase, and a number";

  return null;
};
