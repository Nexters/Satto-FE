import { createFileRoute } from "@tanstack/react-router";
import LottoHistory from "../pages/lotto-history";

export const Route = createFileRoute("/lotto-history")({
  component: () => {
    return <LottoHistory />;
  },
});
