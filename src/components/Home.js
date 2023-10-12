function getMessage() {
  const str = `Sure! Magic Maths is a set of React components that allow you to create interactive and animated visualizations with declarative code. It is a great tool for creating educational content, games, and simulations that involve mathematical concepts. You can use it to create graphs, charts, animations, and more. The components are easy to use and customizable, and they come with a wide range of features such as zooming, panning, and animation controls`;
  return str;
}

function Home() {
  return (
    <div>
      <h3>Welcome to Our page</h3>
      <p>
        {getMessage()}
      </p>
      <p>
        {getMessage()}
      </p>
    </div>
  );
}

export default Home;
