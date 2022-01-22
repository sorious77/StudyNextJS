import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  const {
    query: { movieId },
  } = router;

  console.log(movieId);

  return "detail";
};
