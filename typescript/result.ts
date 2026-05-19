//? what is the meaning of T here 
//? T is a generic type parameter, it allows us to create a type that can be used with any type of data. In this case, Result<T> can be used to represent the result of an operation that can either succeed with a value of type T or fail with an error message and code.
//? and what | means here ?
//? The | symbol is a union type operator, it allows us to define a type that can be one of several types. In this case, Result<T> can be either an object with ok: true and a value of type T, or an object with ok: false and an error code and message.
export type Result<T> =
  | {
      ok: true;
      value: T;
    }
  | {
      ok: false;
      errorCode: string;
      message: string;
    };
