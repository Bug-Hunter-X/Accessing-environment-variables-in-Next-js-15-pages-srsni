```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 15
  // if you don't have a properly configured
  // next.config.js file
  const myVariable = process.env.MY_VARIABLE;

  return (
    <div>
      <h1>About Page</h1>
      <p>My variable: {myVariable}</p>
    </div>
  );
}
```