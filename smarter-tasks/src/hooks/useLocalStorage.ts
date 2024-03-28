// import { useState, useEffect } from "react";



// export const useLocalStorage = <T,>(
//     key: string,
//     defaultValue: T
//   ): [T, React.Dispatch<React.SetStateAction<T>>] => {
//     const [value, setValue] = useState(() => {
//       const storedValue = localStorage.getItem(key);
//       return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
//     });
  
//     useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);

    
  
//     return [value, setValue];
// };
import { useState, useEffect } from "react";

const storedValue = <T>(key: string, defaultValue: T): T => {
  const savedItem = localStorage.getItem(key);
  if (savedItem) {
    return JSON.parse(savedItem);
  }
  return defaultValue;
};

export const useLocalStorage = <T,>(
    key: string,
    defaultValue: T
  ): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useState(() => {
      
      return storedValue(key, defaultValue);
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    
  
    return [value, setValue];
};
