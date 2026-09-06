## Problem

Suppose you are creating a dashboard which is a component in the  App in your app (project).  Now the dashboard itself will have many components of it's own and their will have their own . Now the problem arise when a props is need to we give a  components which is sitting in the nested system of the dashboard

 Ex: 
```mermaid
flowchart LR
    App --> Dashboard --> RightBar --> Slidebox --> Card
    
```
in this case the porps will be needed to be transfer to the dashboard first then, the rightBar then slidebox and finaly card component which is a inefficeient and messy way to work.

## Solution

The best way to avoid this problem is to use global state management.
By declaring the needed props globally, you remove the requirement to pass them through every intermediate level.

This allows the lowest-level component (e.g., Card) to directly access the props without drilling.



* Context API

* Redux

* React-Redux

* Redux-Toolkit(RTK)



### Context-API

``` javascript
// store createContext

const User=React.createContext();

// export 

export default UserContext;
```

now every context is a provider so as UserContext.So, end of the day we will use it as a wrapper.