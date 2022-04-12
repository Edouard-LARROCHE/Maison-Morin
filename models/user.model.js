const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
    },
    lastName: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 55,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      max: 500,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: 'login-user',
  },
);

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const UserModel = mongoose.model('Login-user', userSchema);

module.exports = { UserModel };
