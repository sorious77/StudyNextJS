import Link from "next/link";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>

      <style jsx>{`
        .active {
          background-color: #6c5ce7;
          color: white;
          border-radius: 5px;
        }

        a {
          text-decoration: none;
          margin-right: 10px;
        }
      `}</style>
    </nav>
  );
};
