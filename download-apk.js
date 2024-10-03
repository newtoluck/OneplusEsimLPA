import { APKMirrorDownloader } from "apkmirror-downloader";

const apkmd = new APKMirrorDownloader({});

apkmd.download(
  { org: "google-inc", repo: "esim-manager" }, // <-- App (required)
  { type: "apk", arch: "arm64-v8a + armeabi-v7a", outFile: "EuiccGoogle.apk" }, // <-- 🟣 AppOptions (optional), will be merged with APKMDOption
);
