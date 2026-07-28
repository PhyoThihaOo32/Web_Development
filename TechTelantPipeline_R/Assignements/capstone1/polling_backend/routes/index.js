const router = require("express").Router();
const voteRouter = require("./Votes");
const optionRouter = require("./Options");
const pollRouter = require("./Polls");

router.use("/options", optionRouter);
router.use("/votes", voteRouter);
router.use("/polls", pollRouter);

module.exports = router;
