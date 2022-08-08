# Getting Started with Create React

1. React Events Handling
https://blog.logrocket.com/react-onclick-event-handlers-guide/
https://reactjs.org/docs/handling-events.html


2.Uncontrolled Components: Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.

For instance, if we want to add a file as an input, this cannot be controlled as this depends on the browser so this is an example of an uncontrolled input.

The values of the form elements are traditionally controlled by and stored on the DOM. We will have to refer to the instance of the form elements to retrieve their values from the DOM.



3. Controlled Components: In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.

Forms are used to store information in a document section. The information from this form is typically sent to a server to perform an action. This data is held by form input elements and control elements, such as input, select, textarea, etc., which maintain and control their states or values.

4. Components Life Cycle Dayagram:
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Mounting
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()

Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

Unmounting
This method is called when a component is being removed from the DOM:

componentWillUnmount()


https://screenbud.com/s/5JtTG3lhdBB

https://screenbud.com/s/RZlIQMgRSj0


