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

   var Count = 0;
   var CountX = 0;
   var CountY = 0;
   var DistanceX = 0;
   var DistanceY = 0;

   while(Count < (WIDTH * HEIGHT))
   {   
       if(Count < WIDTH){
        FruitAvailable.push(board[Count])
       }
       FruitPositionsX.push(CountX);
       FruitPositionsY.push(CountY);
       if(CountY < WIDTH){
        CountY = CountY + 1;
       }
       else{
        CountX = CountX + 1;
        CountY = 0;
       }
       Count = Count + 1;
   }
   console.log(FruitPositionsX);
   console.log(FruitPositionsY);
   console.log(FruitAvailable);


   FruitAvailableFinal = [].concat.apply([], FruitAvailable);

   console.log(FruitAvailableFinal);
   
   Count = 0;

   while(Count < (WIDTH * HEIGHT))
   {
       DistanceX = (Math.abs((get_my_x() - FruitPositionsX[Count])));
       DistanceY = (Math.abs((get_my_y() - FruitPositionsY[Count])));
       console.log(DistanceX);
       console.log(DistanceY);
       FruitDistances.push((DistanceX + DistanceY + 0.01));
       Count = Count + 1;
   }

   console.log(FruitDistances);

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