import Board from "./board";

// This is the Smartpath application's entry file
document.addEventListener("DOMContentLoaded", () => {

    // Create and fill board
    let board = new Board();
    board.fillGrid();
    console.log("Board initialized and populated")

    // Add functionality to radio buttons
    function setAlgo(event) {
        algorithm = event.target.id;
    }

    let algorithm = "bfs-btn"; // Default algorithm
       
    const dijkstrasButton = document.getElementById("dijkstras-btn");
    const astarButton = document.getElementById("astar-btn");
    const bfsButton = document.getElementById("bfs-btn");
    const dfsButton = document.getElementById("dfs-btn");
    
    dijkstrasButton.addEventListener("click", setAlgo);
    astarButton.addEventListener("click", setAlgo);
    bfsButton.addEventListener("click", setAlgo);
    dfsButton.addEventListener("click", setAlgo);


    // Add functionality to Visualize button
    function runAlgorithm() {
        // let rootNode = board.grid[12][9].node;
        let rootNode;
        switch (algorithm) {
            case "bfs-btn":
                reset()
                rootNode = board.grid[12][9].node;
                rootNode.buildTree();
                console.log("Node tree built")

                rootNode.bfs("target");
                console.log("BFS executed");
                break;
            case "dfs-btn":
                reset()
                rootNode = board.grid[12][9].node;
                rootNode.buildTree();
                console.log("Node tree built")

                rootNode.dfs("target");
                console.log("DFS executed");
                break;
            default:
                break;
        }
    }

    let visButton = document.getElementById("vis-button");
    visButton.addEventListener("click", runAlgorithm);

    // Add functionality to Clear button
    function reset() {
        let grid = document.getElementById("grid");
        grid.innerHTML = "";
        
        board.grid = [];
        console.log("Board cleared")
        board.fillGrid();
    }

    let resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", reset)
})