/*
    Example of a function component can't have local state and can only recieve props
*/
// const Button = (props) => {
//     return {
//         <button>Go</button>
//     };
// };


/* 
    Example of a class componenet with local state
    state is delcared in the constructor of the class
    class must extend react.component

*/
class Button extends React.Component {
    state = { counter: 0  };
    handleClick = () => {
    	this.setState({
      	counter: this.state.counter + 1
      })
    };
    
    render() {
        return <button onClick={this.handleClick}>{this.state.counter}</button>;
    }
}


// render the component
ReactDOM.render(<Button />, mountNode);