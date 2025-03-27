import { useState, useEffect } from "react";

export function useLocalStorage(initArray, keyName) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(keyName);
    const data = storedValue ? JSON.parse(storedValue) : initArray;
    return data;
  });

  useEffect(
    function () {
      localStorage.setItem(keyName, JSON.stringify(value));
    },
    [value, keyName]
  );

  return [value, setValue];
}
