export interface Make {
  (amount: number): {
    of<Type>(cb: () => Type): Type[];
  };
}
