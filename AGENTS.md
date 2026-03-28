# Agent notes

## Repository

Chrome extension (Manifest V3) under `src/` for cache clear and reload behavior.

## Chrome Web Store publish (GitHub Actions)

Workflow: `.github/workflows/publish.yml` (same pattern as `github-assistant-chrome-extension`).

-   Triggers on push to `main` that touches `src/manifest.json`, or `workflow_dispatch`.
-   Publish runs only when `version` in `src/manifest.json` increased versus the parent commit (unless manual run or first commit).
-   Zips `src/` to `dist/extension.zip` (gitignored `dist/`), uploads via [mnao305/chrome-extension-upload](https://github.com/mnao305/chrome-extension-upload) `v5.0.0`, creates GitHub release `v{version}` with the zip.
-   Repository secrets: `CHROME_EXTENSION_ID`, `CHROME_CLIENT_ID`, `CHROME_CLIENT_SECRET`, `CHROME_REFRESH_TOKEN` (Chrome Web Store API OAuth; scope `https://www.googleapis.com/auth/chromewebstore`).
-   Uses `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true` for Actions Node 24.

## Security

Do not commit `.pem` keys, OAuth tokens, or API secrets. Ensure private key files stay out of the zipped `src/` tree and are gitignored.
