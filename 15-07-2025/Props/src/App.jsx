import React from 'react';
import Student from './Student.jsx';


function App() {
  // const [count, setCount] = useState(0)

  return (

    <div>
      <center>
          <Student name="John"   age={20} isStudent={true} /><hr/>
          <Student name="Smith"  age={22} isStudent={false} /><hr/>
          <Student name="Alice"  age={19} isStudent={true} /><hr/>
      </center>
    </div>

  );
}

export default App