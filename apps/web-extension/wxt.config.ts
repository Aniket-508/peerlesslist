import { resolve } from "node:path"
import { defineConfig } from "wxt"

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react", "@wxt-dev/auto-icons"],
  alias: {
    "@repo/tailwind-config": resolve("../../packages/tailwind-config")
  }
})
