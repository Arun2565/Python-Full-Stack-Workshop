//prop is a read only value passed from parent to child component, a prop can be used to pass data from a parent component in React.
// <Component key = value> is used to render a component in React.

function Student(props) {
    return (
        <div>
            <center>
                <h1>Student Information</h1>
                <p>Name: {props.name}</p>
                <p>Age: {props.age} </p>
                <p>is a Student: {props.isStudent ? "Yes" : "No"} </p>
            </center>
        </div>
    );
}

export default Student;