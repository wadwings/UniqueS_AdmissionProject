#include "build_heap.h"
#include<time.h>

int main(){
    srand(time(NULL));
    int x, index = rand()%100 + 20;
    int* num = (int*)malloc(sizeof(int)*index);
    for(x = 0; x < index; x++){
        num[x] = rand()%20 + 1;
        printf("%d,",num[x]);
    }
    int* heap = build_heap(num, index);
    insertHeap(heap, 100);
    deleteHeap(heap);
    freeHeap(heap);
    system("pause");
    return 0;
}