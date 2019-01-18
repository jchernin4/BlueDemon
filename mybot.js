function new_game() {
}

function make_move() {
   var board = get_board();

   // we found an item! take it!
   if (board[get_my_x()][get_my_y()] > 0 ) {
       return TAKE;
   }

   var FruitAvailable = [];
   var FruitPositions = [];
   var Count = 1;
   var CountX = 0;
   var CountY = 0;

   console.log(WIDTH);
   while(Count < (WIDTH * HEIGHT))
   {
<<<<<<< HEAD
       FruitAvailable.push(board[CountX],[CountY]); // TO DO: Fix to show 1 or 0 instead of "Array(n)"
       FruitPositions.push(`[${CountX}, ${CountY}]`);
=======
       FruitAvailable.push(board[CountX],[CountY]);
       FruitPositions.push('[${CountX}, ${CountY}]');
>>>>>>> fffe429690232560abdba87a49edec350f1ad827
       if(CountX < WIDTH){
        CountX = CountX + 1;
       }
       else{
        CountY = CountY + 1;
        CountX = 0;
       }
       Count = Count + 1;
   }
   console.log(FruitPositions);
   console.log(FruitAvailable);

   var rand = Math.random() * 4; // TO DO: Point towards fruit instead of random path generation

   if (rand < 1) return NORTH;
   if (rand < 2) return SOUTH;
   if (rand < 3) return EAST;
   if (rand < 4) return WEST;

   return PASS;
}

// Optionally include this function if you'd like to always reset to a 
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions. 
//function default_board_number() {
//    return 123;
//}