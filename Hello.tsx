import * as React from 'react';

type HelloProps = {
  greeting:string, 
  name:string
}
const Hello = ( props: HelloProps ) => {
  return <h1>{props.greeting}, {props.name}!</h1>;
}

export default Hello;