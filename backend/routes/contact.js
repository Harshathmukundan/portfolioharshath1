const express = require("express");
const router = express.Router();
const { z } = require("zod");
const rateLimit = require("express-rate-limit");

// Strict rate limit on contact form
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { success: false, error: "Too many messages sent. Try again in an hour." },
});

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  subject: z.string().min(3).max(120),
  message: z.string().min(10).max(2000),
});

// POST /api/contact
router.post("/", contactLimiter, async (req, res, next) => {
  try {
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: parsed.error.flatten().fieldErrors,
      });
    }

    const { name, email, subject, message } = parsed.data;

    // In production: integrate nodemailer here
    // const transporter = nodemailer.createTransport({ ... });
    // await transporter.sendMail({ from: email, to: process.env.MAIL_TO, subject, text: message });

    console.log(`📬 Contact form submission from ${name} <${email}>: ${subject}`);

    res.status(200).json({
      success: true,
      message: "Message received! Harshath will get back to you soon.",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
