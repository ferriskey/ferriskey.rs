// FerrisKey Modules Data
export interface Module {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
  status: "stable" | "beta" | "alpha";
  color: string;
}
export const modules: Module[] = [
  {
    id: "core",
    name: "Core API",
    icon: "🔐",
    description:
      "The heart of FerrisKey: user, role, permission, and multi-tenant realm management.",
    features: [
      "User & Group Management",
      "Role-Based Access Control (RBAC)",
      "Multi-tenancy with Realms",
      "Fine-grained Permissions",
      "RESTful APIs",
    ],
    status: "stable",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "seawatch",
    name: "SeaWatch",
    icon: "🌊",
    description:
      "Comprehensive audit logs, anomaly detection, and real-time security monitoring.",
    features: [
      "Immutable Audit Logs",
      "Anomaly Detection with ML (soon)",
      "Real-time Alerts",
      "Compliance & Reporting",
      "Security Timeline (soon)",
    ],
    status: "beta",
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: "trident",
    name: "Trident",
    icon: "🔱",
    description:
      "Advanced Multi-Factor Authentication with TOTP, WebAuthn, SMS, and push notifications.",
    features: ["TOTP (Google Authenticator)", "WebAuthn", "Backup Codes"],
    status: "stable",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "abyss",
    name: "Abyss",
    icon: "🌀",
    description:
      "Identity federation and bridging across external providers (SAML, OIDC, LDAP, AD).",
    features: [
      "SAML 2.0 Bridge (soon)",
      "OpenID Connect Federation",
      "LDAP/Active Directory Sync (soon)",
      "Social Login (OAuth 2.0)",
      "Identity Mapping & Transform (soon)",
    ],
    status: "beta",
    color: "from-indigo-500 to-purple-500",
  },
];

export const getModuleById = (id: string): Module | undefined => {
  return modules.find((module) => module.id === id);
};

export const getStableModules = (): Module[] => {
  return modules.filter((module) => module.status === "stable");
};

export const getBetaModules = (): Module[] => {
  return modules.filter((module) => module.status === "beta");
};
