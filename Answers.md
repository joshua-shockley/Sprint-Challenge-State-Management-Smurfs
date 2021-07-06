1. What problem does the context API help solve?

context API helps with distributing state between components that may not be directly parent to child from across a larger app.... basically supposed to assit in getting rid of props drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are for actually making the changes to state.. we Dispatch actions with action creators to tell the reducers how to update state
reducers are "pure functions that take in some form of state and then what changes are taking place and return the new copy of state.

the store is like a "store" its where we put our "memory" of state in the application and that store is wrapped so that we can access state from anywhere... preventing that prop drilling that was the point in redux in the first place.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
application state is immutable... state doesnt actuall change its just cloned and then the clone replaces the original sate.. we never change the original state.

component state is changeable and can use hooks (or in class components this.state) to use a setter to manipulate it.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk is an extension(middleware) that allow for the use to conxume promises... or asynchronous fn.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
context seemed easier to grasp but i think redux will be my go to over time... the code isnt as spread out over different spots.. context the actions were not in their own file.. 