const express = require("express");
const router = express.Router();
const portfolio = require("../data/portfolioData");

// GET /api/portfolio — full data
router.get("/", (req, res) => {
  res.json({ success: true, data: portfolio });
});

// GET /api/portfolio/profile
router.get("/profile", (req, res) => {
  res.json({ success: true, data: portfolio.profile });
});

// GET /api/portfolio/projects
router.get("/projects", (req, res) => {
  res.json({ success: true, data: portfolio.projects });
});

// GET /api/portfolio/projects/:id
router.get("/projects/:id", (req, res) => {
  const project = portfolio.projects.find((p) => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ success: false, error: "Project not found" });
  }
  res.json({ success: true, data: project });
});

// GET /api/portfolio/skills
router.get("/skills", (req, res) => {
  res.json({ success: true, data: portfolio.skills });
});

// GET /api/portfolio/experience
router.get("/experience", (req, res) => {
  res.json({ success: true, data: portfolio.experience });
});

// GET /api/portfolio/certifications
router.get("/certifications", (req, res) => {
  res.json({ success: true, data: portfolio.certifications });
});

// GET /api/portfolio/stats
router.get("/stats", (req, res) => {
  res.json({ success: true, data: portfolio.stats });
});

module.exports = router;
