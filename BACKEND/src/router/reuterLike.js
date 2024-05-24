const router = require("express").Router();

const routerInvoke = require("./routersInvoque/routerIvoke");

router.use("/like", routerInvoke);
module.exports = router;
