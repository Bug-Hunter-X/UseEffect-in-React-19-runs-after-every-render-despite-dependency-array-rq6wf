# React 19 useEffect Unexpected Re-renders

This repository demonstrates a subtle issue with `useEffect` in React 19 where it seems to run after every render, despite specifying a dependency array.  This can lead to performance problems and unexpected behavior.

## Problem

The `MyComponent` example includes a `useEffect` hook with a dependency array `[count]`. Logically, this should only run when the `count` state variable changes.  However, in certain scenarios with React 19, it runs after every render, resulting in excessive logging and potential performance degradation. 

## Solution

The solution involves careful examination of any other factors that might trigger re-renders such as parent component updates.  If the root cause is found, a strategy like `useMemo` or additional state management logic might be required.