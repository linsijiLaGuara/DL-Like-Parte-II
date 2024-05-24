const router = require("express").Router();
const {
  add_like_controller,
  get_like_controller,
  update_like_controller,
  delete_like_controller,
} = require("../../controller/controllersLike");
const { ValidatorCollectionLike } = require("../../validators/validatorsLike");

router.get("/posts", get_like_controller);
router.post(
  "/posts",
  ValidatorCollectionLike.addValidator,
  add_like_controller
);
router.put(
  "/posts/:id",
  ValidatorCollectionLike.updateValidator,
  update_like_controller
);
router.delete("/posts/:id", delete_like_controller);

module.exports = router;
