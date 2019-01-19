function new_game() {
}

function make_move() {
   var board = get_board();

   // we found an item! take it!
   if (board[get_my_x()][get_my_y()] > 0 && get_my_item_count(board[get_my_x()][get_my_y()]) <= (.5 * get_total_item_count(board[get_my_x()][get_my_y()]))) {
       return TAKE;
   }

   var FruitAvailable = [];
   var FruitAvailableFinal = [];
   var FruitPositionsX = [];
   var FruitPositionsY = [];
   var FruitDistances = [];

   var Count = 1;
   var CountX = 0;
   var CountY = 0;
   var Distance = 0;

   while(Count < (WIDTH * HEIGHT) + 1)
   {   
       if(Count < WIDTH + 1){
        FruitAvailable.push(board[Count - 1])
       }
       FruitPositionsX.push(CountX);
       FruitPositionsY.push(CountY);
       if(CountY < WIDTH + 1){
        CountY++;
       }
       else{
        CountX++;
        CountY = 0;
       }
       Count++;
   }
   console.log(FruitPositionsX);
   console.log(FruitPositionsY);
   console.log(FruitAvailable);

   FruitAvailableFinal = [].concat.apply([], FruitAvailable);

   console.log(FruitAvailableFinal);
   
   Count = 0;

   while(Count < (FruitPositionsX.length - 1))
   {
       Distance = (Math.abs((get_my_x() - FruitPositionsX[Count]) + (get_my_y() - FruitPositionsY[Count])) + 0.01);
       FruitDistances.push(Distance);
       Count++;
   }


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