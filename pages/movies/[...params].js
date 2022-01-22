import Header from "../../Components/Header";

export default ({ results }) => {
  const { original_title, poster_path, overview } = results;

  return (
    <div>
      <Header title={original_title} />
      <h4>{original_title}</h4>
      <div className="desc">{overview}</div>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />

      <style jsx>
        {`
          .desc {
            margin-bottom: 10px;
          }
        `}
      </style>
    </div>
  );
};

export const getServerSideProps = async ({ params: { params } }) => {
  const [_, id] = params;

  const results = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();

  return {
    props: {
      results,
    },
  };
};
