export interface Make {
  <Type>(amount: number): {
    of(cb: () => Type): Type[];
  };
}
