const emailValidation = (email: string): boolean => {
  if (email == "") {
    return false;
  }
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

export { emailValidation };
