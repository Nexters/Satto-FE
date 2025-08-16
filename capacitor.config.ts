import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.satto.lotto",
  appName: "Satto Lotto",
  webDir: "dist",
  server: {
    androidScheme: "https",
    iosScheme: "capacitor",
    // 개발 시에는 로컬 서버 사용
    // url: "http://localhost:5173",
    // 프로덕션 배포 시에는 배포된 URL 사용
    url: "https://satto-lotto-app.windsurf.build",
  },
};

export default config;
