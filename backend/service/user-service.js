const bcrypt = require("bcryptjs");
const UserModel = require("../models/user-model");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async registration(email, name, password, role) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user = await UserModel.create({ email, name, password: hashPassword, role });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw ApiError.BadRequest("User not found");
    }

    const isPasswordEquals = await bcrypt.compare(password, user.password);
    if (!isPasswordEquals) {
      throw ApiError.BadRequest("Password is wrong");
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async saveProfile(currentUser, name) {
    const userId = currentUser.id;
    const currentUserName = await UserModel.findByIdAndUpdate(userId, { name }, { new: true });
    const userDto = new UserDto(currentUserName);
    return {
      user: userDto,
    };
  }
}

module.exports = new UserService();
