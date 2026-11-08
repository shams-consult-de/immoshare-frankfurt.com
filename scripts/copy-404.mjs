import fs from "node:fs";
import path from "node:path";

const indexPath = path.resolve(".output/public/index.html");
const notFoundPath = path.resolve(".output/public/404.html");

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log("Successfully generated .output/public/404.html for IONOS fallback.");
}
