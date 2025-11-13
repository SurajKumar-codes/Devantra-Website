// Lightweight mock API backed by localStorage for demo purposes.
// In production, replace with real HTTP requests to a backend.
import { initialUsers, initialContent, initialConfig, initialReports } from "../CustomData/mockAdminData";



const USERS_KEY = "admin:users:v1";
const CONTENT_KEY = "admin:content:v1";
const CONFIG_KEY = "admin:config:v1";
const REPORTS_KEY = "admin:reports:v1";

function read(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  try {
    return JSON.parse(raw);
  } catch {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}

export const adminApi = {
  getUsers() {
    return Promise.resolve(read(USERS_KEY, initialUsers));
  },
  updateUser(id, patch) {
    const users = read(USERS_KEY, initialUsers).map((u) => (u.id === id ? { ...u, ...patch } : u));
    write(USERS_KEY, users);
    return Promise.resolve(users.find((u) => u.id === id));
  },
  addUser(user) {
    const users = read(USERS_KEY, initialUsers);
    const newUser = { id: `u${Date.now()}`, ...user };
    users.unshift(newUser);
    write(USERS_KEY, users);
    return Promise.resolve(newUser);
  },
  deleteUser(id) {
    const users = read(USERS_KEY, initialUsers).filter((u) => u.id !== id);
    write(USERS_KEY, users);
    return Promise.resolve(true);
  },
  getContent() {
    return Promise.resolve(read(CONTENT_KEY, initialContent));
  },
  updateContent(id, patch) {
    const content = read(CONTENT_KEY, initialContent).map((c) => (c.id === id ? { ...c, ...patch } : c));
    write(CONTENT_KEY, content);
    return Promise.resolve(content.find((c) => c.id === id));
  },
  getConfig() {
    return Promise.resolve(read(CONFIG_KEY, initialConfig));
  },
  updateConfig(patch) {
    const cfg = { ...read(CONFIG_KEY, initialConfig), ...patch };
    write(CONFIG_KEY, cfg);
    return Promise.resolve(cfg);
  },
  getReports() {
    return Promise.resolve(read(REPORTS_KEY, initialReports));
  },
  saveReport(report) {
    const reports = read(REPORTS_KEY, initialReports);
    const r = { id: `r${Date.now()}`, createdAt: new Date().toISOString(), ...report };
    reports.unshift(r);
    write(REPORTS_KEY, reports);
    return Promise.resolve(r);
  },
  exportCSV(rows = [], filename = "export.csv") {
    const header = rows.length ? Object.keys(rows[0]).join(",") + "\n" : "";
    const body = rows.map((r) => Object.values(r).map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const csv = header + body;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    return Promise.resolve(true);
  },
  reset() {
    localStorage.removeItem(USERS_KEY);
    localStorage.removeItem(CONTENT_KEY);
    localStorage.removeItem(CONFIG_KEY);
    localStorage.removeItem(REPORTS_KEY);
    return Promise.resolve(true);
  },
};