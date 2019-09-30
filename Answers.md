# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is powerful Library which is used to create complex UI interface. The react components are rendered dynamically as data changes. Which makes it very useful to update and rerender only componets that has been changed, instead of re-rendering the entire page to show any changes on the page. 

1. What does it mean to think in react?

Thinking in react means to develop the UI of the page as components, and each componets behave separately from others and re-renders as it gets updates. 

build the react app component by component

1. Describe state.

state is what is currently being deployed or displayed in UI, which then can updated to change the UI dynamically

1. Describe props.

props allows the componets to be split up into smaller pieces of codes, which then are dynamically put together and rendered to dispaly final UI interface. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

side effect is anything which is outside to the scope of the function being executed. That can cause infinite loops and break the application. We pass in a data to ensure that function within side effect only gets update when the condition is updated. otherwise do not run. The condition passed in can be emppy [], {}, or a variable