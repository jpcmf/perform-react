# Optimizing Performance with React

<h1 align="center">
    <img alt="Webpack" src=".github/react-performace.png" width="400" />
</h1>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Build Setup :gear:

First, install dependencies and run the development application:

```bash
npm install
# or
yarn
```

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

Second, run the fake API:

```bash
npm run server
# or
yarn server
```

Open [http://localhost:3333/products](http://localhost:3333/products) with your browser to see the result.

---

## Anotations 📝

### Optimizing Performance

#### Memo 🍩

_When use:_

- Pure Functional Components
- Renders too often
- Re-renders with the same props
- Memo works fine with medium or big size components

#### useMemo 🍩

_When use:_

- Used to memorize a value, a result
- Heavy calculations
- Referential equality (when we pass information to a child component)

#### useCallback 🍩

_When use:_

- Used only to memorize a function

#### Data formatting 🍩

_When use:_

- Used at the time you fetch the information, not the time the information will be displayed

#### Code-Splitting 🍩

_When use:_

- Used at the time you need to import a file, a component or a function just at the moment we need to use it

#### Virtualization 🍩

_When use:_

- Allows only items that are visible in the user's browser to be viewed on screen
