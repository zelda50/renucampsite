export const validateUserLoginForm = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'required';
  } else if (values.username.length < 6) {
    errors.username = 'Must be at least 6 characters.';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 charactors or less';
  };

  if (!values.password) {
    errors.author = 'required';
  } else if (values.password.length < 8) {
    errors.author = 'Must be at least 8 characters.';
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 charactors or less';
  }
    return errors;
  };