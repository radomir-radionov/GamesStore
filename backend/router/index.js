const Router = require("express");
const userController = require("../controllers/user-controller");
const gameController = require("../controllers/game-controller");

const authMiddleware = require("../middlewares/auth-middleware");

const router = new Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/saveProfile", userController.saveProfile);
router.get("/users", authMiddleware, userController.getUsers);

router.post("/product", gameController.addGame);
router.put("/product", gameController.editGame);
router.delete("/product/:id", gameController.deleteGame);

module.exports = router;
