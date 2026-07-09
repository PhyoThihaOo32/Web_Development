/**
 * Goal: Look a user up by a field that isn't the id. findByPk only knows the primary key
 * — but real apps constantly find rows by email, username, or slug. This is the exact lookup a login does.
 * Steps
 * Make routes/users.js with its own express.Router().
 * Add GET / that returns all users unless an email is passed in the query string (?email=...), in which case return just that one user.
 * To find that one user, use findOne with a where clause on the email — not findByPk.
 * Return 404 if no user has that email.
 * Mount it in app.js: app.use("/api/users", usersRouter).
 * Test both in Postman: GET /api/users and GET /api/users?email=alex@example.com.
 */

const userRouter = require("express").Router();
const { User } = require("./../models/");

// // get all users
// userRouter.get("/", async (req, res, next) => {
//   try {
//     const users = await User.findAll();
//     res.status(200).json(users);
//   } catch (error) {
//     next(error);
//   }
// });

// get a user by email
userRouter.get("/", async (req, res, next) => {
  try {
    const { email } = req.query; // destruct the email -> req.query return obj

    // findOne -> find one row from db that match a condition - null if no match
    if (email) {
      // return the user exclude the password
      const user = await User.findOne({
        where: { email },
        attributes: {
          exclude: ["password"],
        },
      });
      if (!user)
        return res.status(404).json({
          msg: `we don't have the user associated with this ${email}`,
        });

      return res.status(200).json(user);
    }
    // if no query string return all users - exclude the password 
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    if (!users) return res.sendStatus(404);
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
