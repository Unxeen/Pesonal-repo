// scriptXML.js

// Define your React component
const MyComponent = () => {
    return <h1>This is a React component!</h1>;
  };
  
  // Find the container element in the DOM
  const msgContainer = document.querySelector('.messages-container');
  
  // Render your React component inside the container
  ReactDOM.render(<MyComponent />, msgContainer);
  