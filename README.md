# Hook App

Learning React Hooks

## Elis Antonio Pérez

React JS, Web

### Hooks:

1. useState(inicialState).
2. useEffect(function, dependence).
   - useEffect unmount - Cleanup.
   - useEffect CAUTIONS.
3. useState: Form with custom hook and useEffect.
4. Multiple Custom Hooks:
   - useFetch.
   - API Breakingbad Quote: useFetch + useCounter.
5. useRef: First use.
   - useRef, real use case.
6. useLayoutEffect.
7. Memo: React method.
   - useMemo(function, dependence): Memo Hook.
8. useCallback(function, dependence).
9. Final section: Practical exercise

New Section:
1. Reducer
   - const funcReducer = (state = initialState, action) => {
      if (action?.type === 'add')
      return [
         ...state,
         action.payload,
      ]
      return state
   }