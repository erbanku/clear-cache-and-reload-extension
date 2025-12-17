// Listen for clicks on the extension icon
chrome.action.onClicked.addListener(async (tab) => {
    try {
        // Get the current tab's URL
        const url = new URL(tab.url);
        const origin = url.origin;

        // Clear cache and cookies for the current tab's origin
        await chrome.browsingData.remove(
            {
                origins: [origin],
            },
            {
                cache: true,
                cookies: true,
                cacheStorage: true,
                indexedDB: true,
                localStorage: true,
                serviceWorkers: true,
            }
        );

        // Reload the tab
        await chrome.tabs.reload(tab.id);

        console.log(`Cleared cache and cookies for ${origin} and reloaded tab`);
    } catch (error) {
        console.error("Error clearing cache and reloading:", error);
    }
});
