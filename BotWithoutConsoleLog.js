function new_game() {
}

function make_move() {
   var board = get_board();

   // we found an item! take it!
   if (board[get_my_x()][get_my_y()] > 0)
   {
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
   var ItemWeightVar = 0;

   while(Count < (WIDTH * HEIGHT))
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


   FruitAvailableFinal = [].concat.apply([], FruitAvailable);

   
   Count = 0;

   while(Count < (WIDTH * HEIGHT))
   {
       DistanceX = (Math.abs((get_my_x() - FruitPositionsX[Count -1])));
       DistanceY = (Math.abs((get_my_y() - FruitPositionsY[Count - 1])));
       FruitDistances.push((DistanceX + DistanceY + 0.01));
       DistanceX = (Math.abs((get_opponent_x() - FruitPositionsX[Count - 1])));
       DistanceY = (Math.abs((get_opponent_y() - FruitPositionsY[Count - 1])));
       EnemyFruitDistances.push((DistanceX + DistanceY + 0.01));
       Count = Count + 1;
   }
   FruitDistances.splice(Count);

   Count = 0;

   while(Count < FruitDistances.length - 1){
       if(FruitAvailableFinal[Count] != 0)
       {
            ItemWeight.push((5/FruitDistances[Count]) * (3 * get_total_item_count(FruitAvailableFinal[Count]))/((get_my_item_count(FruitAvailableFinal[Count]) + 0.01)) * (0.8/(.5 * get_total_item_count(FruitAvailableFinal[Count]))));
            ItemWeightVar = ItemWeight[Count];
            if(EnemyFruitDistances[Count]/FruitDistances[Count] < 1 || isNaN(EnemyFruitDistances[Count]/FruitDistances[Count]))
            {
                ItemWeight.splice(Count);
                ItemWeight.push(ItemWeightVar * 0.5);
            }   
            else
            {
             ItemWeight.splice(Count);
             ItemWeight.push(ItemWeightVar * 1.5);
            }
            if(isNaN(ItemWeight[Count]))
            {
                ItemWeight.splice(Count);
                ItemWeight.push(0.05);
            }
       }
       else
       {
            ItemWeight.push(0);
            if(isNaN(ItemWeight[Count]))
            {
                ItemWeight.splice(Count);
                ItemWeight.push(0);
            }
        }
        Count = Count + 1;
        }

   CurrentGoalWeight = (Math.max.apply(null, ItemWeight));
   CurrentGoalX = (FruitPositionsX[ItemWeight.indexOf(CurrentGoalWeight)]);
   CurrentGoalY = (FruitPositionsY[ItemWeight.indexOf(CurrentGoalWeight)]);

   CurrentGoalWeight = 0;

   
   if (CurrentGoalX > get_my_x()) return EAST;
   if (CurrentGoalX < get_my_x()) return WEST;
   if (CurrentGoalY > get_my_y()) return SOUTH;
   if (CurrentGoalY < get_my_y()) return NORTH;

   return PASS;

    }
   /* var rand = Math.random() * 4; // TO DO: Point towards fruit instead of random path generation

   if (rand < 1) return NORTH;
   if (rand < 2) return SOUTH;
   if (rand < 3) return EAST;
   if (rand < 4) return WEST; */

   //return PASS;
// Optionally include this function if you'd like to always reset to a 
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions. 
/* function default_board_number() {
    return 366434;
} */