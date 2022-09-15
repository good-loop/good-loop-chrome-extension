chrome.runtime.setUninstallURL(
  'https://docs.google.com/forms/d/e/1FAIpQLSf4vkHY-t4CA56phbYgev0ucwotWVu6PkcjI862fwyr7uNktw/viewform?usp=sf_link'
);

// redirect to newtab when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: 'https://my.good-loop.com/welcome' + '?utm_source=installation' });
});
