const express = require("express");
const mongoose = require("mongoose");
const students = require("./students.json");

const port = process.env.PORT || 4000;

const app = express();

const {TeaGuardMiddleware, stdGuardMiddleware} = require("./auth/guard");

app.get("/", (req, res) => {
  res.send(`Hello Node!`);
});

app.get("/students", (req, res) => {
  res.json(students);
  
})

app.get("/student/:id", stdGuardMiddleware, (req, res) => {
  res.send(`Hello Student ${req.params.id}`);
});

app.get("/teacher/:id", TeaGuardMiddleware, (req, res) => {
  res.send(`Hello Teacher ${req.params.id}`);
});

app.get("*", (req, res) => {
  res.send(`Request not found!`);
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});


/*
mongoose.connect("mongodb://localhost:27017/LMS1").then(() => {
  console.log(" DB connection successful!");

  const Schema = mongoose.Schema;

  const BlogPost = new mongoose.Schema(
    { 
      name: String, 
      body: String 
    });

    BlogPost.methods.test = ()=>{
      console.log(this.name)
    }

    BlogPost.pre("save", function( next){
      console.log(this.name);
      next();
    })

  const Blog = mongoose.model('Blog', BlogPost)

  Blog.create({
   
    name: "Test Blog",
    body: "Test Content",
  })

  const newBlog = new Blog({
    name: "Test Blog2",
    body: "Test Content2",
  })

  //newBlog.test()

  newBlog.save();

});
*/


