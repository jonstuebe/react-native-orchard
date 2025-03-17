import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index.ts",
    {
      builder: "mkdist",
      input: "src",
      outDir: "dist",
      format: "esm",
      addRelativeDeclarationExtensions: true,
      esbuild: {
        jsx: "automatic",
      },
    },
  ],
  outDir: "dist",
  declaration: "compatible",
  clean: true,
  parallel: true,
});
