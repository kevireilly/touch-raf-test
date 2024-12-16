const App = () => {
  const handleEvent = React.useCallback((event) => {
    onReactInput(event.type, event.timeStamp);
  }, []);

  return (
    <div
        onPointerDown={handleEvent}
        onPointerMove={handleEvent}
        onPointerUp={handleEvent}
        style={{ height: '100%', width: '100%' }}
    ></div>
  );
};

ReactDOM.createRoot(
    document.querySelector("#react-container")
).render(<App />);
