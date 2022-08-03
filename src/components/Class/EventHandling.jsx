import React, { Component } from 'react'

class EventHandling extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isToggleOn: true,
            login : false,
            name: ""
        }

        // This binding is necessary to make `this` work in the callback
        this.handdleClick = this.handdleClick.bind(this)
        //this.loginButtonClick = this.loginButtonClick.bind(this)
    }

    loginButtonClick() {
        this.setState(prevState => ({
            login : !prevState.login
        }))
    }

    // Lambda function
    log = () => { 
        console.log("Event is fired"); 
    }

    

    

    handdleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }),() => {
            alert("Logged in")
            console.log("Logged In");
            console.log(`this: ${this}`);
            this.log()
        })
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        }, () => {console.log(event)})
    }
    render() {
        
        return (
            <div>
               {/*  Bind Method First */}
               {/* Binding Event Handler in the Constructor */}
                <button onClick={this.handdleClick} style={{ background: "#000000", color: "#fff", padding: "10px 14px", border: "0", margin: "20px"}}>
                    {this.state.isToggleOn ? "ON" : "OFF"}
                </button>

                {/*  Bind Method Second */}
                {/* Binding Event Handler using Arrow Function: 
                This is pretty much the same approach as above, however, 
                in this approach we are binding the event handler implicitly. 
                This approach is the best if you want to pass parameters to your event. */}
                <button onClick={() => this.handdleClick()} style={{ background: "#000000", color: "#fff", padding: "10px 14px", border: "0", margin: "20px"}}>
                    Login
                </button>


                {/*  Bind Method Third */}
                {/* Binding Event Handler in Render Method: We can bind the handler when it is called in the render method using bind() method.  */}
                <h1>{this.state.name}</h1>
                <input type="text" placeholder='Name' value={this.state.name} onChange={this.handleChange.bind(this)}/>

            </div>
        )
    }
}

export default EventHandling
