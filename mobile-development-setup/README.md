# Mobile Development Setup with Expo Go

## Objective

Mobile development demands more computational resources compared to web development. To ensure a smooth development experience, we are using the **Expo Framework for React Native**, which simplifies mobile app development and testing.

## Prerequisites

Before starting, ensure you have the following installed:

- Node.js LTS
- VS Code (recommended IDE)
- A compatible operating system: macOS, Linux, or Windows
- Expo Go on your physical device (Android or iOS)

## Why Expo Go?

Mobile development typically requires device emulators to test applications. Expo Go provides a cost-effective solution by allowing you to run and test React Native applications directly on your physical device, supporting both iOS and Android.

## Steps to Install Expo Go

1. Visit [https://expo.dev/go](https://expo.dev/go)  
2. Select the latest SDK version.  
3. Install Expo Go on your device:
   - **Android:** Google Play Store
   - **iOS:** Apple App Store
4. Open Expo Go on your device.  
5. Create a new account or log in if you already have one.

## Verifying the Installation

You can verify your setup by creating a sample Expo project:

```bash
# Create a new Expo project
npx create-expo-app test-app

# Navigate into the project
cd test-app

# Start the development server
npm run dev
