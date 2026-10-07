import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const getBasePath = () => {
  if (typeof window !== "undefined") {
    if (window.location.pathname.startsWith("/vandit-portfolio")) {
      return "/vandit-portfolio";
    }
    return undefined;
  }
  return process.env.BASE_PATH || undefined;
};

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath: getBasePath(),
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};

