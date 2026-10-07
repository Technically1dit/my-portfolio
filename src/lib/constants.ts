// Centralized configuration and asset paths with GitHub Pages subpath support
export const BASE_PATH = import.meta.env.BASE_URL || "/";
export const RESUME_URL = `${BASE_PATH.replace(/\/?$/, "/")}resume.pdf`;
