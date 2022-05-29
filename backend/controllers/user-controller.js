const { validationResult } = require("express-validator");
const userService = require("../service/user-service");
const ApiError = require("../exceptions/api-error");
const Role = require("../models/role-model");
const User = require("../models/user-model");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error", errors.array()));
      }

      const { email, name, password } = req.body;

      const userRole = await Role.findOne({ value: "Admin" });
      const role = userRole.value;

      const userData = await userService.registration(
        email,
        name,
        password,
        role
      );

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async saveProfile(req, res, next) {
    try {
      const { currentUser, name } = req.body;
      const userData = await userService.saveProfile(currentUser, name);
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();
