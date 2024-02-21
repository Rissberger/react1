// FirstComponent that renders an h1
function FirstComponent() {
    return <h1>My very first component</h1>;
  }
  
  // NamedComponent that accepts a name property
  function NamedComponent(props) {
    return <p>My name is {props.name}</p>;
  }
  
  // App component that renders instances of the other two components
  function App() {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Your Name Here" />
      </div>
    );
  }
  
  // Use ReactDOM to render the App component into the div with id 'root'
  ReactDOM.render(<App />, document.getElementById('root'));
  