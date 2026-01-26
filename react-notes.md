## useEffect
- Runs after render
- Used for side effects (timers, fetch, subscriptions)
- Has cleanup
- Dependency array controls when it runs

Mental model:
State → Render → Effect → State

## For the Reset and HH-MM-SS Format I added
useRef stores initial time without rerendering.
Derived values like minutes shouldn't be in state.
useEffect is for side effects, not math.