import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/lotto-history")({
  component: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Lotto History</h1>
      </div>
    </div>
  ),
});
