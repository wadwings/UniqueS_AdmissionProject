#include "build_stack.h"
#include <time.h>

int main(){
    srand(time(NULL));
    int x, index = rand()%100 + 20;
    int* num = (int*)malloc(sizeof(int)*index);
    for(x = 0; x < index; x++){
        num[x] = rand()%20 + 1;
        printf("%d,",num[x]);
    }
    int* stack = init_stack(num, index);
    in_stack(stack, 100);
    out_stack(stack);
    clear_stack(stack);
    system("pause");
    return 0;
}