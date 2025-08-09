import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div
        className="
        min-h-screen 
        bg-white 
        overflow-hidden
        select-none
        relative
        safe-area-inset
      "
      >
        <div className="safe-area-top" />

        <main
          className="
          flex-1 
          overflow-auto 
          overscroll-none
          -webkit-overflow-scrolling-touch
          relative
          h-[calc(100vh-env(safe-area-inset-top)-env(safe-area-inset-bottom))]
        "
        >
          <Outlet />
        </main>

        <div className="safe-area-bottom" />
      </div>

      {process.env.NODE_ENV === "development" && <TanStackRouterDevtools />}
    </>
  ),
});
