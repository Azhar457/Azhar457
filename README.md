# Ponpes AM Frontend

Ini adalah project [Next.js](https://nextjs.org) untuk website PPTQ Al-'Ashr Al-Madani.

## Langkah Setup Setelah `git clone`

1. **Clone repository ini:**

   ```bash
   git clone https://github.com/username/frontend-ponpes-am.git
   cd frontend-ponpes-am
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Jalankan development server:**

   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. **Buka di browser:**
   - Kunjungi [http://localhost:3000](http://localhost:3000)

## Tech Stack & Dependencies

### Framework & Library

- **Next.js 14** - React framework dengan App Router
- **React 18** - Frontend library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework

### UI Components

- **shadcn/ui** - Pre-built UI components
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

### Dependencies yang Sudah Terinstall

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "embla-carousel-react": "^8.0.0",
    "lucide-react": "^0.263.1",
    "next": "14.0.0",
    "react": "^18.0.0",
    "tailwind-merge": "^1.14.0",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

## Struktur Project

```
src/
├── app/
│   ├── page.tsx          # Homepage utama
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── ui/              # Komponen UI (shadcn/ui)
│       ├── button.tsx
│       ├── carousel.tsx
│       ├── dialog.tsx
│       └── ...
└── lib/
    └── utils.ts         # Utility functions
```

## Catatan Kolaborator

### Setup Environment

- **Node.js**: Minimal v18.17 atau lebih baru
- **Package Manager**: Gunakan `npm` (jangan campur dengan yarn/pnpm)
- **Editor**: VS Code dengan extension:
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features
  - ES7+ React/Redux/React-Native snippets

### Workflow Kolaborasi

1. **Selalu pull latest changes:**

   ```bash
   git pull origin main
   ```

2. **Buat branch baru untuk fitur:**

   ```bash
   git checkout -b feature/nama-fitur
   ```

3. **Install ulang dependencies jika ada perubahan:**

   ```bash
   npm install
   ```

4. **Commit dengan pesan yang jelas:**
   ```bash
   git add .
   git commit -m "feat: tambah komponen navbar"
   ```

### Aturan Koding

- Gunakan **TypeScript** untuk semua file baru
- Styling dengan **Tailwind CSS** only
- Komponen UI pakai **shadcn/ui** yang sudah ada di `src/components/ui/`
- File naming: **camelCase** untuk components, **kebab-case** untuk pages

### Jika Ada Masalah

1. **Dependency error:**

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Type error:** Restart TypeScript server di VS Code (Ctrl+Shift+P → "TypeScript: Restart TS Server")

3. **Styling tidak muncul:** Restart dev server (`Ctrl+C` lalu `npm run dev`)

## Component Library (shadcn/ui)

Komponen yang sudah tersedia:

- `Button` - Tombol dengan variants
- `Carousel` - Slider/carousel
- `Dialog` - Modal popup
- `Input` - Form input
- `Card` - Container card

Untuk menambah komponen baru dari shadcn/ui:

```bash
npx shadcn-ui@latest add [component-name]
```

## Deploy

Untuk deploy, gunakan Vercel atau jalankan:

```bash
npm run build
npm start
```

---

**❗ PENTING:** Jangan push ke `main` branch secara langsung. Selalu buat Pull Request!
