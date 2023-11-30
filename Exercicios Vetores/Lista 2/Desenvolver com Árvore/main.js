class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

const Menu = new Node('Menu Principal');
const Pasta1 = new Node('Pasta 1');
const Pasta2 = new Node('Pasta 2');
const Pasta3 = new Node('Pasta 3');

const Pasta11 = new Node('SubPasta 1.1');
const Pasta12 = new Node('SubPasta 1.2');
const Pasta21 = new Node('SubPasta 2.1');
const Pasta22 = new Node('SubPasta 2.2');
const Pasta31 = new Node('SubPasta 3.1');

Menu.addChild(Pasta1);
Menu.addChild(Pasta2);
Menu.addChild(Pasta3);

Pasta1.addChild(Pasta11);
Pasta1.addChild(Pasta12);

Pasta2.addChild(Pasta21);
Pasta2.addChild(Pasta22);

Pasta3.addChild(Pasta31);

function printTree(node, level = 0) {
    console.log('  '.repeat(level) + node.name);
    node.children.forEach(child => printTree(child, level + 1));
}

// Imprimindo a árvore no console
printTree(Menu);