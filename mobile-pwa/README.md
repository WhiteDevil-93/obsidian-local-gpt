# Local GPT Mobile PWA

A mobile Progressive Web App for Local GPT - AI-powered text processing and note enhancement.

## Overview

This directory contains a standalone Progressive Web App (PWA) that can be deployed independently and installed on mobile devices. The PWA provides a mobile-optimized interface that works offline and delivers a native app-like experience.

## Files Included

- `manifest.json`: PWA manifest file that describes the app's metadata and appearance
- `service-worker.js`: Service worker for offline functionality and caching
- `index.html`: Main HTML file with PWA setup
- `styles.css`: Mobile-optimized stylesheet
- `script.js`: Application JavaScript with PWA utilities
- `README.md`: This file with deployment and usage instructions

## Icon Requirements

Before deploying, you need to add icon files to this directory:

- `icon-192x192.png`: 192x192 pixel icon (required)
- `icon-512x512.png`: 512x512 pixel icon (required)

### Generating Icons

You can create icons using online tools:
- [Real Favicon Generator](https://realfavicongenerator.net/)
- [PWA Builder](https://www.pwabuilder.com/)
- [Favicon.io](https://favicon.io/)

## Deployment Instructions

### Option 1: Deploy to GitHub Pages

1. Create a new repository or use an existing one
2. Copy all files from this directory to the repository root
3. Add your icon files (icon-192x192.png and icon-512x512.png)
4. Enable GitHub Pages in repository settings
5. Access your PWA at `https://yourusername.github.io/repository-name/`

### Option 2: Deploy to Netlify

1. Create a new site on [Netlify](https://www.netlify.com/)
2. Drag and drop this entire directory (including icons)
3. Your PWA will be live at the provided URL

### Option 3: Deploy to Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Navigate to this directory
3. Run `vercel` and follow the prompts
4. Your PWA will be deployed and accessible

### Option 4: Deploy to Your Own Server

1. Copy all files to your web server
2. **Important**: Your server must serve files over HTTPS (PWAs require HTTPS)
3. Configure your server to serve the files
4. Access your app via a web browser

## Testing Your PWA

### Local Testing

You can test the PWA locally using a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

**Note**: Some PWA features (like service workers) require HTTPS. For local testing with HTTPS, consider using tools like [ngrok](https://ngrok.com/) or [localhost.run](https://localhost.run/).

### Browser Testing

Test your PWA using:

- **Chrome DevTools**: 
  - Open DevTools (F12)
  - Go to Application tab > Manifest section
  - Check service worker registration in Service Workers section
  
- **Lighthouse**:
  - Open Chrome DevTools
  - Go to Lighthouse tab
  - Run a PWA audit
  
- **Different Devices**: Test on various mobile and desktop devices

## Installing on Mobile

### Android (Chrome)

1. Open the PWA URL in Chrome
2. Tap the menu (three dots)
3. Select "Add to Home screen" or "Install app"
4. Follow the prompts

### iOS (Safari)

1. Open the PWA URL in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Name the app and tap "Add"

## Features

- ✅ Works offline with service worker caching
- ✅ Mobile-optimized responsive design
- ✅ Installable as a native-like app
- ✅ Fast loading and performance
- ✅ Standalone display mode
- ✅ Splash screen support
- ✅ Theme color customization

## Customization

### Updating App Information

Edit `manifest.json` to change:
- App name and short name
- Description
- Theme colors
- Display mode
- Orientation preference

### Styling

Edit `styles.css` to customize:
- Colors and theme
- Layout and spacing
- Typography
- Mobile breakpoints

### Functionality

Edit `script.js` to add:
- Custom app logic
- API integrations
- User interactions
- Data handling

### Content

Edit `index.html` to modify:
- Page structure
- Content sections
- Meta tags
- Additional resources

## Service Worker Caching

The service worker caches the following files for offline use:
- `/` (root)
- `/index.html`
- `/styles.css`
- `/script.js`

To cache additional files, edit the `urlsToCache` array in `service-worker.js`.

## Browser Compatibility

This PWA is compatible with:
- Chrome 40+
- Firefox 44+
- Safari 11.1+
- Edge 17+
- Opera 27+

Service workers require HTTPS except on localhost.

## Troubleshooting

### PWA Won't Install

- Ensure your server uses HTTPS
- Check that manifest.json is properly formatted (use [JSONLint](https://jsonlint.com/))
- Verify icon files exist and are the correct sizes
- Check browser console for errors
- Ensure manifest.json is served with correct MIME type (application/manifest+json)

### Service Worker Not Registering

- Confirm HTTPS is being used (or localhost for testing)
- Check that service-worker.js is in the root directory
- Verify no JavaScript errors in the console
- Try clearing browser cache and unregistering old service workers
- Check that service-worker.js is served with correct MIME type (application/javascript)

### Icons Not Showing

- Ensure icon files are named correctly (icon-192x192.png and icon-512x512.png)
- Verify icons are the right dimensions
- Check that icon paths in manifest.json are correct
- Confirm icons are in the same directory as manifest.json
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### App Not Working Offline

- Check service worker is registered (Chrome DevTools > Application > Service Workers)
- Verify cached resources (Chrome DevTools > Application > Cache Storage)
- Check console for fetch errors
- Ensure all required files are listed in urlsToCache

## Performance Tips

1. **Optimize Images**: Use appropriate image formats and sizes
2. **Minimize Files**: Minify CSS and JavaScript in production
3. **Use CDN**: Consider using a CDN for faster global delivery
4. **Enable Compression**: Use gzip or brotli compression on your server
5. **Lazy Loading**: Implement lazy loading for images and resources

## Security Considerations

- Always use HTTPS in production
- Validate and sanitize user inputs
- Keep dependencies updated
- Implement Content Security Policy (CSP)
- Regular security audits

## Additional Resources

- [MDN PWA Guide](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Google PWA Documentation](https://web.dev/progressive-web-apps/)
- [PWA Builder](https://www.pwabuilder.com/)
- [Workbox (Advanced Service Worker Library)](https://developers.google.com/web/tools/workbox)

## License

This PWA is part of the Local GPT project. See the main repository LICENSE file for details.

## Support

For issues or questions about this PWA:
1. Check the troubleshooting section above
2. Review browser console for errors
3. File an issue on the [GitHub repository](https://github.com/WhiteDevil-93/obsidian-local-gpt)

## Version History

- **v1.0.0**: Initial release with core PWA functionality
