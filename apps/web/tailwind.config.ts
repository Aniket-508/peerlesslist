import sharedConfig from "@repo/tailwind-config"
import type { Config } from "tailwindcss"

const config: Pick<Config, "darkMode" | "content" | "presets"> = {
  darkMode: ["class"],
  content: ["./app/**/*.tsx"],
  presets: [sharedConfig]
}

export default config
