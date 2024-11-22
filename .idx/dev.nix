{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    "bradlc.vscode-tailwindcss"
    "dsznajder.es7-react-js-snippets"
    "formulahendry.auto-close-tag"
    "formulahendry.auto-rename-tag"
    "mhutchie.git-graph"
    "oderwat.indent-rainbow"
    "vincaslt.highlight-matching-tag"
    "dbaeumer.vscode-eslint"
    "esbenp.prettier-vscode"
    "GitHub.github-vscode-theme"
    "xabikos.JavaScriptSnippets"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "start"
        ];
        env = {
          PORT = "$PORT";
        };
        manager = "web";
      };
    };
  };
}