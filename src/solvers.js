/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// //Tim and Phucci notes
// what is the rows method that is attached to board
  //rows returns an array of arrays


window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

   /**
       0  1  2  3

      [0, 0, 0, 0], <- index 0
      [0, 0, 0, 0], <-index 1
      [0, 0, 0, 0], <-index 2
      [0, 0, 0, 0]
             */

  //what I think we should be doing!
  //create a new board that is n x n size and empty, meaning all 0's
  //var newBoard = new Board({n: n})

  //somehow put a 'piece' (really just a 1) starting in top left corner


  //somehow take advantage of newBoards key called previous attributes?


  //try putting a new piece on the proposed board

  //test the proposed board to see if there is a conflict

  //if there is no conclict the proposed board becomes the actual board








  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  // //Tims test, ignore this:
  // if (n === 1) {
  //   return 1;
  // }



  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
