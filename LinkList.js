// Linked List's are good for stack's or queue's
// stack LIFO or FILO
// queue FIFO or LILO

class Node {
    constructor(value) {
        this.value= value;
        this.next= null;
    }

}

class SinglyLinkedList {
    constructor() {
        if(value){
            this.head = new Node(value);
        }else {
            this.head = null;
        }
    }
    append(value) {
        if(!this.head) {
            this.head = new Node(value);
        } else {
            let temp = this.head;
            while(temp.next){
                temp =temp.next;
            }
            temp.next = new Node(value)
        }
    }
    display() {
        if(!this.head) {
            console.log("the linked list is empty");
        } else {
            let temp = this.head;
            let myString = "";
            while (temp.next) {
                myString += temp.value + " ->";
                temp = temp.next;
            }
            myString += temp.value;
            console.log(myString);
        }
    }
    // insert the value in order
    // Does not need to return anything
    insert(value) {
        if(!this.head) {
            this.head = new Node(value);
        } else {
            let temp = this.head;
            if(value < temp.value) {
                this.head = new Node(value);
                this.head.next = temp;
            }
            while(temp.next) {
                if(temp.next.value > value){
                    let temp2 = temp.next;
                    temp.next = new Node(value);
                    temp.next.next = temp2;
                    return;
                }
                temp = temp.next;
            }
            temp.next = new Node(value);
        }
        return;
    }
}
function main() {
    myLL = new SinglyLinkedList(24);

    myLL.append(32);
    myLL.append(40);
    myLL.append(50)

    myLL.insert(60);
    myLL.display();
}

main();