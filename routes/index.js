// route class for todo application

const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");
router.get("/", homeController.home);
router.post("/create_todo", homeController.createTodo); //controller for creating todo list
router.post("/delete_todo", homeController.deleteTodo); // controller for deleting the todo list
router.get("/editdata", homeController.EditPage); // controller for getting Edit page

// Route for Github
router.get("/github", (req, res) => {
  res.redirect("https://github.com/saurabhnegi35");
});
// router.get('/linkedin',linkedin.com)

// Route for LinkedIn
router.get("/linkedin", (req, res) => {
  res.redirect("https://www.linkedin.com/in/saurabhnegi35");
});

router.post("/edit-todolist", homeController.editDetails); // controller for Edting todo list
// console.log('router is loaded')
module.exports = router;
