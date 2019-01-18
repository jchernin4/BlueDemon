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
       FruitAvailable.push(board[CountX],[CountY]);
       FruitPositions.push('[${CountX}, ${CountY}]');
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

   var rand = Math.random() * 4;

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