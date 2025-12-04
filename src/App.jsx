import React from 'react';
import PersonCard from './components/PersonCard.jsx';
import Button from './components/Button.jsx';
import MyMessage from './components/MyMessage.jsx';

function App() {
  function handleClick() { 
    console.log("Button clicked!"); 
  }

  function handleSecondClick() { 
    console.log("Second Button clicked!"); 
  }

  return (
    <>
      <div> 
        <img src="https://images.pexels.com/photos/20851618/pexels-photo-20851618.jpeg" alt="Cup of coffee" width="300" />

        <div>
          <PersonCard name="Kelly" age={20} occupation="Software Engineer" />
          <PersonCard name="Ann" age={25} occupation="Sales Engineer" />
          <PersonCard name="Joe" age={30} occupation="Coder" />
        </div>

        <div>
          <Button text="Click here first" onClick={handleClick} />
          <Button text="Click here second" onClick={handleSecondClick} />
          <Button text="This is a Button too" onClick={() => console.log('This button clicked too')} />
        </div>
        
        <MyMessage text="Hello from the message component!" />
        <MyMessage text="Hello from Blossom!" />

        <p>I am still learning coding</p>
      </div>   
    </>
  );
}

export default App;
