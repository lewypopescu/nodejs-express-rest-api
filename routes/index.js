import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  res.render("response", { title: "Simple express app", email, password });
});

export default router;
