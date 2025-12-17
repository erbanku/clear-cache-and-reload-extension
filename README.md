# Clear Cache & Reload - Chrome Extension
>   A simple Chrome extension that clears the cache, cookies, and other browsing data for the current tab's origin, then automatically reloads the page.

![](assets/github-banner.png)

## Features

- **One-click operation**: Click the extension icon to clear and reload
- **Keyboard shortcut**: Use `Ctrl+Shift+R` (customizable) for quick access
- **Tab-specific**: Only clears data for the current tab's domain (not entire browser)
- **Comprehensive cleaning**: Removes:
  - Cache
  - Cookies
  - Cache Storage
  - IndexedDB
  - LocalStorage
  - Service Workers

## Installation

### Load as Unpacked Extension (Development)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select the extension folder: `e:\Dev\GitHub\clear-cache-and-reload-extension`
5. The extension icon should appear in your toolbar

### Pin the Extension (Optional)

1. Click the puzzle piece icon in Chrome's toolbar
2. Find "Clear Cache & Reload" in the list
3. Click the pin icon to keep it visible

## Usage

### Option 1: Click the Extension Icon

1. Navigate to any website
2. Click the **Clear Cache & Reload** extension icon
3. The extension will:
   - Clear all cache and cookies for that specific domain
   - Automatically reload the page
   - Show a confirmation in the browser console (F12 to view)

### Option 2: Keyboard Shortcut

- **Windows/Linux**: `Ctrl+Shift+R`
- **Mac**: `Command+Shift+R`

You can customize this shortcut:
1. Go to `chrome://extensions/shortcuts`
2. Find "Clear Cache & Reload"
3. Click the pencil icon to set your preferred shortcut

## Use Cases

- **Web Development**: Quickly test changes without manually clearing cache
- **Troubleshooting**: Clear cached data when a site isn't loading correctly
- **Privacy**: Remove stored data for a specific site
- **Testing**: Ensure you're seeing the latest version of a website

## Permissions

The extension requires these permissions:
- `browsingData`: To clear cache and cookies
- `tabs`: To reload the current tab
- `activeTab`: To access the current tab's URL
- `host_permissions (<all_urls>)`: To clear data for any domain

## Files

- `manifest.json`: Extension configuration and permissions
- `background.js`: Service worker that handles the clear and reload logic
- `icons/`: Extension icons in various sizes

## Technical Details

The extension uses Chrome's Manifest V3 with a service worker. When clicked, it:

1. Gets the current tab's URL
2. Extracts the origin (protocol + domain)
3. Calls `chrome.browsingData.remove()` with the specific origin
4. Reloads the tab using `chrome.tabs.reload()`

This ensures only data for the current site is cleared, not your entire browsing history.

## Customization

To modify what data gets cleared, edit `background.js` and change the options in the `browsingData.remove()` call:

```javascript
await chrome.browsingData.remove(
  {
    origins: [origin]
  },
  {
    cache: true,           // Clear cache
    cookies: true,         // Clear cookies
    cacheStorage: true,    // Clear Cache API storage
    indexedDB: true,       // Clear IndexedDB
    localStorage: true,    // Clear localStorage
    serviceWorkers: true   // Clear service workers
  }
);
```

## Troubleshooting

**Extension not working?**
- Check that you've granted all required permissions
- Open Developer Tools (F12) and check the Console for error messages
- Verify the extension is enabled in `chrome://extensions/`


## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [erbanku](https://github.com/erbanku) has waived all copyright and related or neighboring rights to this work.