import Link from "next/link";

export default () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};
