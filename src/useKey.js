import { useEffect } from "react";

export function useKey(keyName, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.key.toLowerCase() === keyName.toLowerCase()) {
          action();
        }
      }

      document.addEventListener(`keydown`, callback);

      return function () {
        document.removeEventListener(`keydown`, callback);
      };
    },
    [action, keyName]
  );
}
