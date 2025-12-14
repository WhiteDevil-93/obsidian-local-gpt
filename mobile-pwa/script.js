// App JavaScript
console.log('Local GPT Mobile PWA loaded');

// Add your application logic here

// Example: Track when app is used in standalone mode
function isStandalone() {
  return (window.matchMedia('(display-mode: standalone)').matches) || 
         (window.navigator.standalone) || 
         document.referrer.includes('android-app://');
}

if (isStandalone()) {
  console.log('Running in standalone mode');
}

// Example: Handle online/offline status
window.addEventListener('online', () => {
  console.log('App is online');
});

window.addEventListener('offline', () => {
  console.log('App is offline');
});

// Log app initialization
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
});
