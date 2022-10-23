{
  interface Stack<T> {
    readonly size: number;

    push(value: T): void;

    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  }

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>

    get size(): number {
      return this._size;
    }

    pop(): T {
      // undefined와 null check를 해준다
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value
    }

    push(value: T): void {
      this.head = {value, next: this.head};
      this._size++;
    }

  }
  Array
}