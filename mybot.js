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
   var ItemWeight = [];
   var EnemyFruitDistances = [];

   var Count = 0;
   var CountX = 0;
   var CountY = 0;
   var DistanceX = 0;
   var DistanceY = 0;
   var CurrentGoalWeight = 0;
   var CurrentGoalX = 0;
   var CurrentGoalY = 0;

   while(Count < (WIDTH * HEIGHT - 1))
   {   
       if(Count < WIDTH){
        FruitAvailable.push(board[Count])
       }
       FruitPositionsX.push(CountX);
       FruitPositionsY.push(CountY);
       if(CountY < HEIGHT - 1){
        CountY = CountY + 1;
       }
       else{
        CountX = CountX + 1;
        CountY = 0;
       }
       Count = Count + 1;
   }
   console.log("<=========== Logging FruitPositionsX ===========>");
   console.log(FruitPositionsX);
   console.log("<=========== Logging FruitPositionsY ===========>");
   console.log(FruitPositionsY);
   console.log("<=========== Logging FruitsAvailable ===========>");
   console.log(FruitAvailable);


   FruitAvailableFinal = [].concat.apply([], FruitAvailable);

   console.log(FruitAvailableFinal);
   
   Count = 0;

   while(Count < (WIDTH * HEIGHT))
   {
       DistanceX = (Math.abs((get_my_x() - FruitPositionsX[Count])));
       DistanceY = (Math.abs((get_my_y() - FruitPositionsY[Count])));
       FruitDistances.push((DistanceX + DistanceY + 0.01));
       DistanceX = (Math.abs((get_opponent_x() - FruitPositionsX[Count])));
       DistanceY = (Math.abs((get_opponent_y() - FruitPositionsY[Count])));
       EnemyFruitDistances.push((DistanceX + DistanceY + 0.01));
       Count = Count + 1;
   }
   console.log("<=========== Logging FruitDistances ===========>");
   console.log(FruitDistances);

   Count = 0;

   while(Count < FruitDistances.length){
       if(board[FruitPositionsX[Count]],[FruitPositionsY[Count]] > 0 && get_my_item_count(board[FruitPositionsX[Count]][FruitPositionsY[Count]]) <= (.5 * get_total_item_count(board[FruitPositionsX[Count]][FruitPositionsY[Count]])))
       {
           ItemWeight.push(1/(.5 * (get_total_item_count(FruitAvailableFinal[Count])) * (5/(FruitDistances[Count]) * (FruitDistances[Count]/EnemyFruitDistances[Count]))));
            if(ItemWeight[Count] == 0)
            {
                ItemWeight.splice(Count);
                ItemWeight.push(0.05);
            }
       }
       else{
        ItemWeight.push(0);
       } 
       if(isNaN(ItemWeight[Count]))
       {
        ItemWeight.splice(Count);
        ItemWeight.push(0);
       }
       Count = Count + 1;
   }

   console.log("<=========== Logging ItemWeights ===========>");
   console.log(ItemWeight);
   CurrentGoalWeight = (Math.max.apply(null, ItemWeight));
   CurrentGoalX = (FruitPositionsX[ItemWeight.indexOf(CurrentGoalWeight)]);
   CurrentGoalY = (FruitPositionsY[ItemWeight.indexOf(CurrentGoalWeight)]);
   console.log("<=========== Logging CurrentGoalWeight ===========>");
   console.log(CurrentGoalWeight);
   console.log("<=========== Logging Next Position ===========>");
   console.log(CurrentGoalX, CurrentGoalY);

   CurrentGoalWeight = 0;


   console.log("<=========== Moving Bot ===========>")
   if (CurrentGoalX > get_my_x()) return EAST;
   if (CurrentGoalX < get_my_x()) return WEST;
   if (CurrentGoalY > get_my_y()) return SOUTH;
   if (CurrentGoalY < get_my_y()) return NORTH;

   /* var rand = Math.random() * 4; // TO DO: Point towards fruit instead of random path generation

   if (rand < 1) return NORTH;
   if (rand < 2) return SOUTH;
   if (rand < 3) return EAST;
   if (rand < 4) return WEST; */

   //return PASS;
}

// Optionally include this function if you'd like to always reset to a 
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions. 
//function default_board_number() {
//    return 366434;
//}