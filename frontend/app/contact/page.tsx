"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { portfolioApi } from "@/lib/api";
import styles from "./contact.module.css";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await portfolioApi.sendContact(data);
      if (res.success) {
        setStatus("success");
        setServerMsg(res.message);
        reset();
      } else {
        setStatus("error");
        setServerMsg("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMsg("Could not reach the server. Make sure the backend is running.");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <span className={styles.pageTag}>Get In Touch</span>
        <h1 className={styles.pageTitle}>Contact</h1>
        <p className={styles.pageSub}>
          Available for full-time roles, internships, and collaborations.
        </p>
      </div>

      <div className={styles.layout}>
        <div className={styles.infoCol}>
          <div className={styles.infoCard}>
            <div className={styles.infoLabel}>Email</div>
            <a href="mailto:harshathmsg18@gmail.com" className={styles.infoValue}>
              harshathmsg18@gmail.com
            </a>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoLabel}>Phone</div>
            <a href="tel:+919952144961" className={styles.infoValue}>+91 99521 44961</a>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoLabel}>GitHub</div>
            <a
              href="https://github.com/Harshathmukundan"
              target="_blank"
              rel="noreferrer"
              className={styles.infoValue}
            >
              Harshathmukundan →
            </a>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoLabel}>LinkedIn</div>
            <a
              href="https://www.linkedin.com/in/harshathmukundan"
              target="_blank"
              rel="noreferrer"
              className={styles.infoValue}
            >
              harshathmukundan →
            </a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input
              className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
              placeholder="Your name"
              {...register("name")}
            />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              placeholder="your@email.com"
              {...register("email")}
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Subject</label>
            <input
              className={`${styles.input} ${errors.subject ? styles.inputError : ""}`}
              placeholder="Internship opportunity at..."
              {...register("subject")}
            />
            {errors.subject && <span className={styles.error}>{errors.subject.message}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea
              rows={5}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
              placeholder="Tell me about the opportunity..."
              {...register("message")}
            />
            {errors.message && <span className={styles.error}>{errors.message.message}</span>}
          </div>

          {status === "success" && (
            <div className={styles.successMsg}>{serverMsg}</div>
          )}
          {status === "error" && (
            <div className={styles.errorMsg}>{serverMsg}</div>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </div>
  );
}
