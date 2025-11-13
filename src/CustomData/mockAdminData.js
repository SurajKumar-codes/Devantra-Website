export const initialUsers = [
  { id: "u1", name: "Ranveer", email: "ranveer@devantra.com", role: "Developer", status: "active", joined: "2023-06-12" },
  { id: "u2", name: "Sudhanshu", email: "sudhanshu@devantra.com", role: "Admin", status: "active", joined: "2022-11-02" },
  { id: "u3", name: "Jaspreet", email: "jaspreet@devantra.com", role: "Full Stack", status: "inactive", joined: "2023-04-22" },
  { id: "u4", name: "Arshdeep", email: "arshdeep@devantra.com", role: "Designer", status: "active", joined: "2021-09-15" },
  { id: "u5", name: "Sunidhi", email: "sunidhi@devantra.com", role: "DevOps", status: "active", joined: "2020-01-05" },
];

export const initialContent = [
  { id: "c1", authorId: "u3", title: "New UI mockups", excerpt: "Shared new dashboard mockups for feedback...", status: "pending", createdAt: "2025-10-12" },
  { id: "c2", authorId: "u4", title: "Brand palette update", excerpt: "Proposed updated brand color system...", status: "approved", createdAt: "2025-09-22" },
  { id: "c3", authorId: "u5", title: "CI/CD improvements", excerpt: "Pipeline improvements suggestion...", status: "pending", createdAt: "2025-11-01" },
];

export const initialConfig = {
  registrationsOpen: true,
  maintenanceMode: false,
  featureFlags: {
    newOnboarding: true,
    betaDashboard: false,
  },
  budget: 50000,
};

export const initialReports = []; // kept empty, can be generated/exported