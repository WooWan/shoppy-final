interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
}
class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode

  get size(): number{
    return this._size;
  }

  pop(): string {
    // undefined와 null check를 해준다
    if (this.head == null) {
      throw new Error("Stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value
  }

  push(value: string): void {
    this.head = {value, next: this.head};
    this._size++;
  }

}
