{
  interface Either<L,R> {
    left(): L;
    right(): R;
  }

  class GenericEither<L, R> implements Either<L,R> {
    constructor(private leftValue: L, private rightValue: R) {
    }

    left(): L {
      return this.leftValue;
    }

    right(): R {
      return this.rightValue;
    }
  }
}