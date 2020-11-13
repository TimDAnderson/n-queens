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
  //var solution = undefined; //fixme

   /**
       0  1  2  3

      [1, 0, 0, 0], <- index 0
      [0, 1, 0, 0], <-index 1
      [0, 0, 1, 0], <-index 2
      [0, 0, 0, 1]
             */

  //what I think we should be doing!
  //create a new board that is n x n size and empty, meaning all 0's
  var solution = new Board({'n': n});
  console.log('THIS IS ME TYPING OUT THE SOLUTION BELOW');
  console.log(solution);


  //somehow put a 'piece' (really just a 1) starting in top left corner
    //we'll do this by iterating using two for loops
      //each spot we'll toggle on to see if there is a con

  for (let r = 0; r < solution.attributes['n']; r++) {
    let currentRowIndex = r;

    for (let c = 0; c < solution.attributes[0].length; c++) {
      //here is where we do work
      //toggle on
      let currentColIndex = c;
      solution.togglePiece(currentRowIndex, currentColIndex);

      //test to see if there are any conflicts
      //if conflict, toggle off
      let majorIndex = solution._getFirstRowColumnIndexForMinorDiagonalOn(currentRowIndex, currentColIndex);
      let minorIndex = solution._getFirstRowColumnIndexForMajorDiagonalOn(currentRowIndex, currentColIndex);

      // if there's no conflict
      if (!solution.hasColConflictAt(currentColIndex)) {
        break;
      } else {
        solution.togglePiece(currentRowIndex, currentColIndex);
      }


      //this is testing the whole board each time we enter the for loop
      //hasAnyMinorDiagonalConflicts hasMinorDiagonalConflictAt


      //this is only testing one major diaganal and one minor diaganal
      //we have to plug our current row index and current col index into the following:
        //_getFirstRowColumnIndexForMinorDiagonalOn <-- returns an index
        //_getFirstRowColumnIndexForMajorDiagonalOn <-- returns an index


        //then we would take these reults and run it in the following just ONE time
          //hasMajorDiagonalConflictAt
          //hasMinorDiagonalConflictAt
      //

      //
      //if (major)
      //else if no conflict, leave on
        //inside the elese if we can use the break keywork

    }
  }


  var matrix = [];

for (let r = 0; r < solution.attributes['n']; r++) {
    matrix.push(solution.attributes[r]);
}


  console.log(solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return matrix;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if (n === 1) {
    return 1;
  }

//we'll start wtih a solution count at 0
  var solutionCount = 0;

//make a new Board that is size n
  var newBoard = new Board({'n': n});

//recursion helper function
  var recursionHelper = function(r) {
    // stop recursion
    if (r === n) {
      solutionCount++;
      return;
   }

    //do some work while not stopping
    for (var i = 0; i < n; i++) {
      //check each index within the row with a toggle, if possible solution recurse
      // console.log();
      // console.log();
      console.log('r = ', r, ', i = ', i);
      console.log('board = ', newBoard);
      console.log('');
      newBoard.togglePiece(r, i);

      //do the recursion here, if it is a possible solution
      if (!newBoard.hasAnyRowConflicts() && !newBoard.hasAnyColConflicts()) { // board has no row or col conflict /*
        r++;
        recursionHelper(r);
      }
      //if not possible then toggle off
      newBoard.togglePiece(r, i);

   }
  };

//start the recursion helper function
  recursionHelper(0);



  // var solutionCount = undefined; //fixme

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
