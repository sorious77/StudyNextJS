import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  const {
    query: { id, title },
  } = router;

  return <h4>{title || "Loading..."}</h4>;
};
