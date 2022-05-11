module.exports.signUpErrors = (err) => {
  let errors = { name: '', email: '', password: '' };

  if (err.message.includes('firstName') || err.message.includes('lastName')) errors.name = 'Le nom et prénom doivent faire 3 caractères minimum';

  if (err.message.includes('email')) errors.email = 'Format email incorrect';

  if (err.message.includes('password')) errors.password = 'Le mot de passe doit faire 6 caractères minimum';

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
    errors.email = 'Cet email est déjà enregistré, veuillez en saisir un autre.';

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: '', password: '' };

  if (err.message.includes('email')) errors.email = 'Adresse email inconnue';

  if (err.message.includes('password')) errors.password = 'Erreur de mot de passe';

  return errors;
};
