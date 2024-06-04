/*
const person = {
    firstName: "Matilda",
    age: 27,
    hobby: "knitting",
    goal: "learning JavaScript"
  };
  
    
  console.log(person.hobby);
  {
    firstName: "Matilda"
    age: 27
    goal: "learning JavaScript"
  }
  */

  const socket = new WebSocket('ws://example.com/socket');

socket.onopen = () => {
    console.log('WebSocket connection opened');
    socket.send('Hello, Server!');
};

socket.onmessage = (event) => {
    console.log('Message from server:', event.data);
};

      
  