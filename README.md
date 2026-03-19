# CBE Clone (Expo Router Banking / Utility App)

This repository contains the React Native code for the CBE mobile clone app. It is the full CBE app code (UI and routing) built with Expo Router and reusable components.

A React Native Expo app built with file-based routing. This mobile UI replicates a banking-style utility app with home dashboard, account quick actions, and service categories (e.g., transfer, pay-for, top-up, bills).

📁 Project Structure

- `app/` - Expo Router app pages and nested routes.
  - `(tabs)/` - Main bottom tab screens (`home`, `accounts`, `finance`, `recent`).
  - `(services)/` - Service category screens (`banking`, `entertainment`, `events`, `payfor`, etc.).
  - `components/` - reusable UI pieces like cards, lists, sidebar.
- `assets/images/` - static image assets.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start Expo:

```bash
npx expo start
```

3. Open in Expo Go (Android/iOS), emulator, or web from the Expo Metro UI.

## App Features

- File-based routing for fast screen composition.
- Scrollable service listings with icons and subtitles.
- Modular component-based UI architecture.
- Simple, reusable `ServiceList` component used across service screens.

## Key Files

- `app/index.jsx` - Root entry screen.
- `app/(tabs)/home.jsx` - Home dashboard.
- `app/(services)/payfor.jsx` - Payment service screen (example list).
- `app/components/serviceList.jsx` - reusable list row component.

## Development Notes

- To add a new service page, create a new component in `app/(services)/` and add navigation from the tab or existing screen.
- Keep the list and icon data in component-level props for faster iteration.

## Customize

- Update `app/components` styles for theming.
- Replace icons and labels in service screens for your own product.
- Add API integration in a new `app/services` folder and call from `useEffect`.

## Quick start for contribution

1. Create a new branch.
2. Add or update the route file in `app/`.
3. Run and verify in Expo.
4. Submit PR with a short summary.

---

Thanks for using this template. Enjoy building your CBE banking clone!

