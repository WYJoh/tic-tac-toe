export function Greeting(props) {
    let prefix = () => {
      if (props.gender === "f") {
        return "Mrs. " + props.name;
      }
      else {
        return "Mr. " + props.name;
      }
    }
    return (
      <>
        <h1>Hello, {props.name}!</h1>
        <h2>Hello, {prefix()}!</h2>
        <p>Welcome to my Website</p>
      </>
    )
  }