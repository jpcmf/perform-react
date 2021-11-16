This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

---

## 📝 Anotations

### ⚙️ Optimizing Performance

#### 🍩 Memo

_When use:_

- Pure Functional Components
- Renders too often
- Re-renders with the same props
- Memo works fine with medium or big size components

#### 🍩 useMemo

_When use:_

- Used to memorize a value, a result
- Heavy calculations
- Referential equality (when we pass information to a child component)

#### 🍩 useCallback

_When use:_

- Used only to memorize a function
