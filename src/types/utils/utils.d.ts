export interface Make {
  <Type>(amount: number): {
    of(item: Type): Type[];
    fromCallback(cb: () => Type): Type[];
  };
}