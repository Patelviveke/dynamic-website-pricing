# Dynamic Website Development Price List

A responsive, standalone pricing page using a neutral editorial agency style. Includes all 61 website packages, 35 additional features, and 8 domain/hosting/maintenance charges supplied by the client.

## Files
- `index.html` — page markup
- `pricing.css` — responsive styling
- `pricing-data.js` — all pricing data
- `pricing.js` — search, filters, sorting, menu behavior, inquiry link
- `README.md` — setup and integration guide

## Preview locally
1. Extract this ZIP.
2. Open `index.html` in Chrome, or use VS Code with the Live Server extension.
3. All files must stay in the same folder.

## Add it to your existing website's navbar
This ZIP is a standalone page because the existing website's source code/framework was not provided. It cannot safely modify the live Netlify website by itself.

### Option A — easiest (recommended)
1. Extract the ZIP into your website project.
2. Copy the four project files into a folder named `pricing` (or copy the files into a folder named `pricing` and keep all four together).
3. Deploy the project to Netlify. The page URL will be `/pricing/` if the folder is `pricing` and contains `index.html`.
4. Open your existing navbar component/file and add this link next to the other navbar links:

   ```html
   <a href="/pricing/">Dynamic Website Development Price List</a>
   ```

   If your current navbar uses React/Next.js, put the link in the existing nav component and use the framework's routing convention (e.g. `<a href="/pricing/">...` works for a static folder; Next.js projects typically use `<Link href="/pricing">...</Link>`).

5. Commit/push and redeploy on Netlify.

### Option B — publish as a separate site/page first
Upload this folder as its own Netlify site to preview it. The link will be a separate domain, so it will not automatically become a page inside your current site. Add that deployed URL to your existing navbar if you choose this route.

## Before publishing
- Replace the generic WhatsApp link (`https://wa.me/?text=...`) with your WhatsApp number in international format, digits only, e.g. `https://wa.me/91XXXXXXXXXX?text=...`.
- Check all prices, tax treatment, scope, third-party service fees and recurring billing details before sending quotations.
- Update the brand/title and styling if your live site's exact design tokens differ. This is a clean starter page, not a direct edit of your live site's repository.
