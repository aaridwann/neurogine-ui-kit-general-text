# Neurogine UI-Kit General Text Module

An atomic typography design system library providing cross-platform, consistent, and accessible Text components for the Neurogine mobile application ecosystem. Built with **Styled Components** and **TypeScript**, this module standardizes font hierarchy, text scaling, weights, and alignment for both iOS and Android using a unified Props contract.

---

## 🏛️ Module Responsibility

As part of the **Neurogine Micro-Module Architecture**, this repository acts as an atomic typography library:

* **Cross-Platform Consistency:** Eliminates platform-specific rendering discrepancies between Android and iOS through a single, unified Text API.
* **Design System Scaling:** Standardizes typography variants (Headings, Body, Captions, Labels), line heights, font weights, and color tokens.
* **Accessibility:** Supports automatic font scaling, text truncation, and dynamic line wrapping natively.

---

## 🛠️ Tech Stack & Requirements

| Category | Technologies |
| :--- | :--- |
| **Framework & Language** | React Native, TypeScript |
| **Package Manager** | Yarn |
| **Styling & Design System** | Styled Components (`styled-components/native`) |

---

## 📁 Directory Structure

```text
neurogine-ui-kit-general-text/
├── src/
│   ├── Components/     # Base Typography and Text variant components
│   ├── Constants/      # Typography tokens, font sizes, weights, and line heights
│   └── Types/          # TypeScript interfaces, variant types, and text props
├── package.json
└── tsconfig.json