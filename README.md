# DSA Vault — SPPU 2024 Pattern DSA Practical Exam

> Fast, lightweight, fully static web repository for **SPPU 2024 Pattern Data Structures and Algorithms (DSA) Practical Examination** (Chits 1–24).

DSA Vault is built with **Vite + React + TypeScript** and modern plain CSS. It runs 100% client-side with no backend, database, authentication, or external APIs, making it completely offline-ready once loaded.

---

## 📑 Practical Chits Directory (Chits 1–24)

| Chit # | Category | Topic / Question |
|:------:|:---------|:-----------------|
| **01** | Operator Overloading | Addition of two complex numbers using operator overloading |
| **02** | Operator Overloading | Subtraction of two complex numbers using operator overloading |
| **03** | Operator Overloading | Multiplication of two complex numbers using operator overloading |
| **04** | Searching & Sorting | Linear search in an array |
| **05** | Searching & Sorting | Binary search on a sorted array |
| **06** | Searching & Sorting | Bubble sort |
| **07** | Searching & Sorting | Selection sort |
| **08** | Singly Linked List | Insert a node at the beginning of a singly linked list |
| **09** | Singly Linked List | Insert a node at the end of a singly linked list |
| **10** | Singly Linked List | Insert a node at a middle position in a singly linked list |
| **11** | Singly Linked List | Delete a node from the beginning of a singly linked list |
| **12** | Singly Linked List | Delete a node from the end of a singly linked list |
| **13** | Singly Linked List | Delete a node from a middle position in a singly linked list |
| **14** | Doubly Linked List | Insert a node at the beginning of a doubly linked list |
| **15** | Doubly Linked List | Insert a node at the end of a doubly linked list |
| **16** | Doubly Linked List | Insert a node at a middle position in a doubly linked list |
| **17** | Doubly Linked List | Delete a node from the beginning of a doubly linked list |
| **18** | Doubly Linked List | Delete a node from the end of a doubly linked list |
| **19** | Doubly Linked List | Delete a node from a middle position in a doubly linked list |
| **20** | Stack | Implement a stack using an array with push, pop, and display |
| **21** | Stack | Implement a stack using a linked list with push, pop, and display |
| **22** | Queue | Implement a queue using an array with enqueue, dequeue, and display |
| **23** | Queue | Implement a queue using a linked list with enqueue, dequeue, and display |
| **24** | Binary Search Tree | Insert nodes into a Binary Search Tree and display using inorder traversal |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (comes bundled with Node.js)

### Installation

1. Clone or open the repository folder:
   ```bash
   cd d:\Projects\CPP_LAB
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Build & Scripts

| Command | Action |
|:--------|:-------|
| `npm run dev` | Starts Vite local development server with instant HMR |
| `npm run build` | Runs TypeScript compilation (`tsc -b`) and generates production bundle into `dist/` |
| `npm run preview` | Locally preview the built production bundle |
| `npm run lint` | Runs Oxlint for ultra-fast code quality and linter checks |

---

## 🎨 Design & Aesthetic

- **Dark Developer Tool Aesthetic:**
  - Background: `#0B0D12`
  - Cards & Containers: `#151923`
  - Surface & Inputs: `#10141D`
  - Borders: `#303746`
  - Primary Accent: Violet `#8B5CF6`
  - Text: `#F8FAFC`, Secondary Text: `#9CA3AF`
- **Typography:**
  - UI Font: *Inter*
  - Code Font: *JetBrains Mono / Fira Code* (readable monospace)
- **Responsive Layout:**
  - Optimized for desktop screens and mobile viewports.
  - Print-friendly styles for practical printouts.

---

## ⌨️ Keyboard Shortcuts & Navigation

- <kbd>/</kbd> — Focus the search bar instantly from anywhere on the page.
- <kbd>Esc</kbd> — Clear search focus, or return from program detail view back to the list.
- <kbd>[</kbd> — Navigate to the previous chit while in detail view.
- <kbd>]</kbd> — Navigate to the next chit while in detail view.
- Direct URL routing with hashes: e.g., `#chit-5` opens Chit 5 directly and supports browser forward/back buttons.

---

## 📁 Project Architecture

```
CPP_LAB/
├── index.html                   # HTML entry point with meta tags & fonts
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript root configuration
├── tsconfig.app.json            # Vite client TypeScript configuration
├── tsconfig.node.json           # Node/Vite toolchain TypeScript configuration
├── vite.config.ts               # Vite configuration
├── public/                      # Static assets
└── src/
    ├── main.tsx                 # React DOM root render
    ├── App.tsx                  # Main app shell & hash router
    ├── index.css                # Plain CSS design tokens & responsive styles
    ├── types.ts                 # TypeScript types (Category, PracticalProgram)
    ├── data/
    │   └── programs.ts          # Chits 1–24 source code, sample outputs & viva notes
    ├── components/
    │   ├── Navbar.tsx           # Header bar with brand, badge and counts
    │   ├── SearchBar.tsx        # Fast multi-field search input with keyboard shortcut
    │   ├── CategoryFilter.tsx   # Topic category pill selector
    │   ├── ProgramCard.tsx      # Numbered card with code preview & copy button
    │   ├── ProgramDetail.tsx    # Chit detail view with breadcrumbs & prev/next nav
    │   └── CodeBlock.tsx        # Syntax-highlighted code block with copy & download
    └── utils/
        └── syntaxHighlight.ts   # Zero-dependency C++ syntax tokenizer
```

---

## 📝 License & Attribution

Created for SPPU Computer Engineering / IT students preparing for the Data Structures and Algorithms Practical Examination under the SPPU 2024 Pattern.
