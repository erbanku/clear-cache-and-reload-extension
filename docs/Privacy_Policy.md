# Privacy Policy for Clear Cache & Reload Extension

**Last Updated:** December 17, 2025

## Overview

Clear Cache & Reload is a browser extension developed by an independent developer for personal and public use. This privacy policy explains how the extension handles your data.

## Data Collection

**This extension does NOT collect, store, transmit, or share any user data.**

The extension operates entirely locally on your device and does not:
- Collect personal information
- Track browsing history
- Send data to external servers
- Use analytics or tracking tools
- Store any user information
- Access or read website content

## How the Extension Works

When you click the extension icon, it:

1. Identifies the current tab's domain/origin
2. Clears browsing data (cache, cookies, localStorage, etc.) for that specific domain only
3. Reloads the current tab
4. All operations happen locally within your browser

## Permissions Explained

The extension requires the following permissions to function:

- **browsingData**: Allows the extension to clear cache and cookies for the current tab's domain
- **tabs**: Enables reloading the current tab after clearing data
- **activeTab**: Provides access to the URL of the currently active tab to determine which domain's data to clear
- **host_permissions (<all_urls>)**: Allows clearing data for any website you visit (required by Chrome's API to clear site-specific data)

These permissions are used **exclusively** for the extension's core functionality and nothing else.

## Data Storage

The extension does not store any data, including:
- No browsing history
- No user preferences
- No configuration files
- No cookies or cache of its own
- No analytics data

## Third-Party Services

This extension does not use or integrate with any third-party services, APIs, or analytics platforms.

## Changes to Browsing Data

The extension **intentionally deletes** the following data for the current tab's domain when activated:
- Cache
- Cookies
- Cache Storage (Cache API)
- IndexedDB
- LocalStorage
- Service Workers

This is the primary function of the extension and happens only when you explicitly click the extension icon.

## Updates to This Policy

Any updates to this privacy policy will be reflected in this document with a new "Last Updated" date. As a personal project, updates may occur if the extension's functionality changes.

## Open Source

The extension's source code is available for review, allowing you to verify these privacy claims.

## Contact

This is a personal development project. For questions or concerns, please open an issue on the project's repository.

## Your Rights

You have complete control over this extension:
- You can uninstall it at any time from `chrome://extensions/`
- You can review the source code to verify privacy claims
- The extension only acts when you explicitly activate it

## Compliance

This extension:
- Does not require or process personal data under GDPR
- Does not collect data subject to CCPA
- Operates entirely client-side with no server infrastructure
- Does not use cookies or tracking technologies
