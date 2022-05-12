const jwt = require("jsonwebtoken");

module.exports = function createAuthMiddleware(req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorithation.split(" ")[1];
    if (!token) {
      return res.status(403).json({ message: "Пользователь не авторизован" });
    }

    const decodedData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = decodedData;
    next();
  } catch (e) {
    return res.status(403).json({ message: "Пользователь не авторизован" });
  }
  return res.status(200);
};
