module.exports = class UserDto {
  email;

  name;

  role;

  id;

  constructor(model) {
    this.email = model.email;
    this.name = model.name;
    this.role = model.role;
    this.id = model._id;
  }
};
