export const validateCommentForm = (values) => {
  const errors = {};

  if (!values.rating) {
    errors.rating = 'required';
  }

  if (!values.author) {
    errors.author = 'required';
  } else if (values.author.length < 2) {
    errors.author = 'Must be at least 2 characters.';
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 charactors or less';
  }
    return errors;
  };