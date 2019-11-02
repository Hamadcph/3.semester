import React from "react";

const ChuckNorrisComponent = () => {
    const [joke, setJoke] = React.useState(null);
  
    return (
      <div>
        <h1>Hear a Chuck Norris Joke!</h1>
        <h2>{joke}</h2>
        <button
          onClick={() => {
            fetch("https://api.chucknorris.io/jokes/random")
              .then(res => res.json())
              .then(resJson => setJoke(resJson.value));
          }}
        >
          Get Chuck Norris Joke!
        </button>
        <DadJokeComponent />
      </div>
    );
  };
  
  const DadJokeComponent = () => {
    const [dadJoke, setDadJoke] = React.useState(null);
  
    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const callback = () =>
          setTimeout(() => {
            fetch("https://icanhazdadjoke.com/", {
              signal,
              headers: {
                Accept: "application/json"
              }
            })
              .then(response => response.json())
              .then(responseJson => setDadJoke(responseJson.joke));
          }, 10000);
        callback();
        return () => controller.abort();
      }, [dadJoke]);
    
      return (
        <div>
          <h1>{dadJoke}</h1>
        </div>
      );
    };
    
    export default ChuckNorrisComponent;
    