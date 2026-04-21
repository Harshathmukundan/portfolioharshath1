import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  cgpa: number;
  university: string;
  degree: string;
  batch: string;
  location: string;
}

export interface SkillItem {
  name: string;
  hot: boolean;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface Project {
  id: string;
  num: string;
  name: string;
  badge: string;
  badgeType: "full" | "ai" | "ml";
  description: string;
  stack: string[];
  github: string;
  live: string | null;
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface Certification {
  issuer: string;
  name: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface PortfolioData {
  profile: Profile;
  stats: Stat[];
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  jdMatch: {
    company: string;
    role: string;
    matches: string[];
  };
}

export const portfolioApi = {
  getAll: async (): Promise<PortfolioData> => {
    const res = await api.get("/api/portfolio");
    return res.data.data;
  },
  getProjects: async (): Promise<Project[]> => {
    const res = await api.get("/api/portfolio/projects");
    return res.data.data;
  },
  getProject: async (id: string): Promise<Project> => {
    const res = await api.get(`/api/portfolio/projects/${id}`);
    return res.data.data;
  },
  sendContact: async (form: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<{ success: boolean; message: string }> => {
    const res = await api.post("/api/contact", form);
    return res.data;
  },
};

export default api;
