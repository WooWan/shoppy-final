interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
};

class StackImpl implements Stack {
    private _size: number;
    private head?: StackNode
    get size() {
        return this._size;
    }

    constructor(private capacity: number) {}

    push(value: string) {
        if (this.size === this.capacity) {
            throw new Error("stack is full");
        }
        const node: StackNode = {value, next:this.head};
        this.head = node;
        this._size++;
    }

    pop(): string {
        if (this.head == null) {
            throw new Error("No node in stack");
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}