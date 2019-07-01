const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json());

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" }
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World.</h1>");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found.");
  res.send(course);
});

app.post("/api/courses/", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const course = {
    id: course.id + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  //Look up course
  const course = courses.find(c => c.id === parseInt(req.params.id));

  //If not existing, return 404
  if (!course)
    res.status(404).send("The course with the given ID was not found.");

  const result = validateCourse(req.body);

  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  } //If good, update course and return to client

  console.log(`Old course: ${JSON.stringify(course)}`);
  course.name = req.body.name;
  console.log(`New course: ${JSON.stringify(course)}`);

  res.status(200).send(course);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("Listening on 3000");
});

function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(course, schema);
}
