import React from 'react';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
                  href="https://github.com/1SuraZ/COMP229_MIDTERM_EXAM"
          target="_blank"
          rel="noopener noreferrer"
        >
          COMP229_MIDTERM_DolnathNepal
        </a>
        
        <div>
          <h2>Add Product Form</h2>
          <AddProduct />
        </div>
        <div>
          <h2>Sign Up Form</h2>
          <SignUpUser />
        </div>
      </header>
    </div>
  );
}

export default App;
