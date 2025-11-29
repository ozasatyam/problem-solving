var countNodes = function (root) {
    if (!root) return 0;

    const leftHeight = (node) => {
        let h = 0;
        while (node) {
            h++;
            node = node.left;
        }
        return h;
    };

    const rightHeight = (node) => {
        let h = 0;
        while (node) {
            h++;
            node = node.right;
        }
        return h;
    };

    let lh = leftHeight(root);
    let rh = rightHeight(root);

    if (lh === rh) return (1 << lh) - 1;
    return 1 + countNodes(root.left) + countNodes(root.right);
};
