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

window.findSolution = function (row, n, board, validator, callback) {
  //if all rows exhausted
  if ( row === n) {
    callback();
    return;
  }

  //iterate over possible decisions
  for (var i = 0; i < n; i++) {
    board.togglePiece(row, i);
    if (!board[validator]()) {
      var result = findSolution(row+1, n, board, validator, callback);
      if (result) {
        return result;
      }
    }
    board.togglePiece(row, i);
  }
};


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
  var solutionCount = 0;

  //make a new Board that is size n
  var myBoard = new Board({'n': n});

  //recursion helper function
  var recursionHelper = function(r) {
    // stop recursion
    if (r === n) { //first pass is r = 0
      solutionCount++;
      return;
    }

    //do some work while not stopping
    for (var i = 0; i < n; i++) {
      myBoard.togglePiece(r, i);
      //do the recursion here, if it is a possible solution
      if (!myBoard.hasRowConflictAt(r) && !myBoard.hasColConflictAt(i)) { // board has no row or col conflict /*
        recursionHelper(r + 1);
      }
      //if not possible then toggle off
      myBoard.togglePiece(r, i);

    }
  };

  //start the recursion helper function
  recursionHelper(0);

  // var solutionCount = undefined; //fixme
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// // return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function(n) {
//   if (n === 1) {
//     return 1;
//   }

// //we'll start wtih a solution count at 0
//   var solutionCount = 0;

// //make a new Board that is size n
//   var newBoard = new Board({'n': n});
//   console.log('WERE AT THE VERY TOP OF THE ROOK COUNT PROBLEM');
//   console.log(newBoard);
//   var surfBoard = new Board({'n': n});
//   console.log(surfBoard);

// //recursion helper function
//   var recursionHelper = function(r) {
//     console.log('IN THE RECURSION LOOP!!!');
//     console.log(r);
//     // stop recursion
//     var z = r + 1;
//     if (z === n) {
//       solutionCount++;
//       return;
//    }

//     //do some work while not stopping
//     for (var i = 0; i < n; i++) {
//       //check each index within the row with a toggle, if possible solution recurse
//       // console.log();
//       // console.log();
//       console.log('r = ', r, ', i = ', i);

//       console.log('');
//       console.log('TOGGLE ON')
//       newBoard.togglePiece(r, i);
//       console.log('board = ', newBoard);

//       //do the recursion here, if it is a possible solution
//       if (!newBoard.hasAnyRowConflicts() && !newBoard.hasAnyColConflicts()) { // board has no row or col conflict /*
//         console.log('right before recursion this is the status');
//         console.log(newBoard.hasAnyRowConflicts());
//         console.log(newBoard.hasAnyColConflicts());
//         console.log(newBoard);
//         r++;
//         recursionHelper(r);
//       }
//       //if not possible then toggle off
//       console.log('toggle off')
//       newBoard.togglePiece(r, i);
//       console.log(newBoard);

//    }
//   };

// //start the recursion helper function
//   recursionHelper(0);



//   // var solutionCount = undefined; //fixme

//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// };







// // return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
// window.findNQueensSolution = function(n) {
//   var solution = undefined; //fixme


//   console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
//   return solution;
// };



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solution = board.rows();

  findSolution(0, n, board, 'hasAnyQueensConflicts', function () {
    solution = _.map(board.rows(), function(row) {
      return row.slice();
    });
  });


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};




// // return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
// window.findNQueensSolution = function(n) {
//   console.log('TESTING THE N QUEENS SOLUTION');
//   console.log(n);
//   //var solution = undefined; //fixme

//   if (n === 0) {
//     return { 'n': 0 };
//   }
//   if (n === 1) {
//     return [[1]];
//   }

//   // create new board
//   var myBoard = new Board({'n': n});
//   console.log(myBoard);


//   var recursiveHelper = function (r) {
//     console.log('entering the recursive function');
//     if (r === 0) {
//       return 1;
//     }

//     for (var i = 0; i < (n); i++) {
//       for (var j = 0; j < (n); j++) {
//         console.log('doing stuff');
//         //check if we can place a a piece here
//         //check for conflict at i, j
//         if (!myBoard.hasAnyQueenConflictsOn(i, j)) {
//           myBoard.togglePiece(i, j);

//           if (recursiveHelper(r - 1) === 1) {
//             return 1;
//           }
//           //myBoard.togglePiece(i, j);
//         }

//       }

//     }
//     return 0;






//   };


//   console.log('THIS IS THE BOARD WE ARE SEARCHING FOR');
//   recursiveHelper(n);
//   console.log('PRINTING my board');
//   console.log(myBoard);

//   var matrix = [];

//   for (let r = 0; r < myBoard.attributes['n']; r++) {
//       matrix.push(myBoard.attributes[r]);
//   }



//     return matrix;

// };

  // iterate over currentRow
  // put 1st piece at (0, 0)

  // check for conflict
    // if no conflict
    // place a piece at the same row, next col

  // check for conflict
    // there's a conflict
    // remove the most recent piece that we just placed (1, 0)
    // recursively get to the next row, same column, place a piece there

  // check for conflict

  // assuming that got to the last piece (last row, or last colum)
    // check for conflict, there's a conflict
    // backtrack to the 3rd piece
      // move 3rd piece down 1 row, same column

  // assuming that





  // //make a new Board that is size n
  // var myBoard = new Board({'n': n});
  // var matrix = [];
  // //recursion helper function
  // var recursionHelper = function(r) {
  //   // stop recursion
  //   if (r === n) {
  //     console.log('OK WE HAVE FOUND A SOLUTION!!!!!!!!!!!!')
  //     //var matrix = [];
  //     for (var r = 0; r < myBoard.attributes['n']; r++) {
  //       matrix.push(myBoard.attributes[r]);
  //     }
  //     console.log('THIS IS THE SOLUTION MATRIX');
  //     console.log(matrix);
  //     return matrix;
  //   }

  //   //do some work while not stopping
  //   for (var i = 0; i < n; i++) {
  //     console.log('TURNING A PIECE ON');
  //     myBoard.togglePiece(r, i);
  //     //do the recursion here, if it is a possible solution
  //     let majorIndex = myBoard._getFirstRowColumnIndexForMinorDiagonalOn(r, i);
  //     let minorIndex = myBoard._getFirstRowColumnIndexForMajorDiagonalOn(r, i);
  //     // if (!myBoard.hasRowConflictAt(r) && !myBoard.hasColConflictAt(i) && !myBoard.hasMajorDiagonalConflictAt(majorIndex) && !myBoard.hasMinorDiagonalConflictAt(minorIndex)) { // board has no row or col conflict /*
  //     //   recursionHelper(r + 1);
  //     // }

  //     if (!myBoard.hasAnyQueensConflicts()) {
  //       recursionHelper(r + 1);
  //     }
  //     //if not possible then toggle off
  //     console.log('turning a piece off');
  //     myBoard.togglePiece(r, i);

  //   }

  // };

  // //start the recursion helper function
  // recursionHelper(0);




  // // var matrix = [];

  // // for (let r = 0; r < myBoard.attributes['n']; r++) {
  // // matrix.push(myBoard.attributes[r]);
  // // }
  // console.log('this is the output matrix');
  // console.log(matrix);

  // // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // // return solution;

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(matrix));
  // return matrix;










// // return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
// window.countNQueensSolutions = function(n) {
//   var solutionCount = undefined; //fixme

//   console.log('Number of solutions for ' + n + ' queens:', solutionCount);
//   return solutionCount;
// };


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n === 2 || n === 3) {
    return 0;
  }

  var solutionCount = 0; //fixme
  var myBoard = new Board({'n': n});

  //recursion helper function
  var recursionHelper = function(r) {
    // stop recursion
    if (r === n) {
      solutionCount++;
      return;
    }



    //do some work while not stopping
    for (var i = 0; i < n; i++) {
      myBoard.togglePiece(r, i);
      //do the recursion here, if it is a possible solution
      // if (!myBoard.hasAnyQueensConflicts()) {
      if (!myBoard.hasAnyQueenConflictsOn(r, i)) {
        recursionHelper(r + 1);
      }
      //if not possible then toggle off
      myBoard.togglePiece(r, i);

    }
  };




  //start the recursion helper function
  recursionHelper(0);



  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};