const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

/* const me = new User({
  name: "   Cuong   ",
  email: "TEST@GMAIL.coM",
  password: "testing"
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log(error);
  }); */

/* const task = new Task({
  description: "  b    "
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch(error => {
    console.log(error);
  });
 */
