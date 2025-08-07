import { useState } from "react";

const LottoHistory = () => {
  const [activeTab, setActiveTab] = useState<"history" | "ranking">("history");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
            뭐 나왔지
          </h1>

          {/* Tab Navigation */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("history")}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "history"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              지난 번호
            </button>
            <button
              onClick={() => setActiveTab("ranking")}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === "ranking"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              번호 랭킹
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {activeTab === "history" ? (
          <div className="text-center text-gray-500">
            지난 번호 내용이 여기에 표시됩니다.
          </div>
        ) : (
          <div className="text-center text-gray-500">
            번호 랭킹 내용이 여기에 표시됩니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default LottoHistory;
