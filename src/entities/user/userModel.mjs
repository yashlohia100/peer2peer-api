import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: true,
    validate: {
      // Only works on .create() and .save()
      validator: function (val) {
        return val === this.password;
      },
      message: 'Passwords do not match!',
    },
  },
});

const User = model('User', userSchema);
export default User;
