import { createFileRoute } from "@tanstack/react-router";
import { WhatCameOutPage } from "../pages/WhatCameOutPage";

export const Route = createFileRoute("/what-came-out")({
  component: WhatCameOutPage,
});
