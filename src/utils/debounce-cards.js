const debounce = (func, delay) => {
  let timerId;

  const debouncedFunction = (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };

  const cancel = () => {
    clearTimeout(timerId);
  };

  return [debouncedFunction, cancel];
};

export default debounce;
