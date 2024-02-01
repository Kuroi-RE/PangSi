const ErrorPage = ({ reason }) => {
  return (
    <section className="flex flex-col pt-24 items-center gap-2">
      <h1 className="text-xl text-red-500 font-extrabold">
        The page is still maintence by Developer!
      </h1>
      <p>{reason}</p>
    </section>
  );
};

export default ErrorPage;
