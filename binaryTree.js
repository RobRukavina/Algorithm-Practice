class Node {
    constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    }
}

class Tree {
    constructor() {
    this.root = null;
    }
    addNode(value) {
        if(this.root=null){
            this.root = new Node(value);
        }
        else {
            let pointer = this.root;
            let notInserted =true;
            while(notInserted){
                if(value < pointer.value && pointer.left) {
                    pointer = pointer.left
                }
                else if(value < pointer.value){
                    pointer.left = new Node(value);
                    notInserted = false;
                }
                else if(value > pointer.value && pointer.right){
                    pointer = pointer.right
                }
                else if(value > pointer.value){
                    pointer.right = new Node(value);
                    notInserted = false;
                }
                else {
                    break;
                }
            }
        }
    }

    removeNode(node) {
        if(node.right) {
            let removedNode = this.removeNode(node.right);
            if (removedNode === node.right) {
                node.right = null;
            }
            return removedNode;
        }
        else{
            return node;
        }
    }

    removeNodeLeftRebalance(value) {
        let pointer = this.root;
        while(pointer && pointer.value !== value) {
            if(value < pointer.value) {
                pointer = pointer.left
            }
            else {
                pointer = pointer.right;
            }
        }
        if(pointer) {
            let swappedNode = this.removeNode(pointer.left);
            pointer.value = swappedNode.value;
        }
    }

    printTreeInOrder(node = this.root) {
        if (node.left) {
            this.printTreeInOrder(node.left);
        }

        console.log(node.value);

        if(node.right) {
            this.printTreeInOrder(node.right)
        }
    }
}
function main() {
    myTree = new BinarySearchTree();
    myTree.addNode(24);
    myTree.addNode(30);
    myTree.addNode(32);
    myTree.addNode(20);
    myTree.addNode(2);
    myTree.addNode(4);
    myTree.addNode(1);
    myTree.addNode(22);

    myTree.removeNodeLeftRebalance(20);

    myTree.printTreeInOrder();
    console.log(myTree);
}

main();