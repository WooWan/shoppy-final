{
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid numnber");
    }
    return arg
  }

  const result = checkNotNull(232);
  console.log(result);
  checkNotNull(null);

  function checkNotNullGeneric<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number')
    }
    return arg;
  }

  const ss: string = checkNotNullGeneric("sdf")


}