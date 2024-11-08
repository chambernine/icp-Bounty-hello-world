import { useState } from 'react';
import { hello_backend } from 'declarations/hello_backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [submittedNames, setSubmittedNames] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const greetingResponse = await hello_backend.greet(name);
    setGreeting(greetingResponse);
    event.target.elements.name.value = ''; 
    return false;
  }

  async function handleShowNames() {
    const names = await hello_backend.submittedNames();
    setSubmittedNames(names);
  }

  return (
    <main className="container">
      <img src="/logo2.svg" alt="DFINITY logo" className="logo" />
      
      <div className="card">
        <form action="#" onSubmit={handleSubmit} className="form">
          <label htmlFor="name" className="label">Enter your name: </label>
          <input id="name" alt="Name" type="text" className="input" />
          <div className="button-group">
            <button type="submit" className="button primary-button">Greet Me!</button>
            <button type="button" onClick={handleShowNames} className="button secondary-button">
              Show All Names
            </button>
          </div>
        </form>

        {greeting && (
          <section className="greeting-box">
            <p>{greeting}</p>
          </section>
        )}

        {submittedNames.length > 0 && (
          <section className="names-list">
            <h3>Previously Submitted Names:</h3>
            <ul>
              {submittedNames.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

export default App;