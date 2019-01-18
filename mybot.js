function new_game() {
}

function make_move() {
   var board = get_board();

   // we found an item! take it!
   if (board[get_my_x()][get_my_y()] > 0 ) {
       return TAKE;
   }

   var FruitAvailable = [];
   var FruitAvailableFinal = [];
   var FruitPositions = [];

   var Count = 1;
   var CountX = 0;
   var CountY = 0;

   console.log(WIDTH);
   while(Count < (WIDTH * HEIGHT) + 1)
   {   
       if(Count < WIDTH + 1){
        FruitAvailable.push(board[Count - 1])
       }
       FruitPositions.push(`[${CountX}, ${CountY}]`);
       if(CountX < WIDTH + 1){
        CountY = CountY + 1;
       }
       else{
        CountX = CountX + 1;
        CountY = 0;
       }
       Count = Count + 1;
   }
   console.log(FruitPositions);
   console.log(FruitAvailable);

   Count = 0;

   FruitAvailableFinal = [].concat.apply([], FruitAvailable);

   console.log(FruitAvailableFinal);


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