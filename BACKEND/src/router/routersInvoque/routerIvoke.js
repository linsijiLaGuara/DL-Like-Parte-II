const router = require("express").Router();
const {
  add_like_controller,
  get_like_controller,
  update_like_controller,
  delete_like_controller,
} = require("../../controller/controllersLike");
const { ValidatorCollectionLike } = require("../../validators/validatorsLike");

router.get("/get", get_like_controller);
router.post(
  "/create",
  ValidatorCollectionLike.addValidator,
  add_like_controller
);
router.put(
  "/put/:id",
  ValidatorCollectionLike.updateValidator,
  update_like_controller
);
router.delete("/delete/:id", delete_like_controller);

module.exports = router;
