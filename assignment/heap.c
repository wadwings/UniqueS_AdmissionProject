#include"build_heap.h"
#include<time.h>

void sortarr(int* heap, int* arr, int index){
    arr[index] = *heap;
    deleteHeap(heap);
    if(index > 0)sortarr(heap, arr, index - 1);
}

int main(){
    srand(time(NULL));
    int x, y, index;
    index = 1000;
    int* num = (int*)malloc(sizeof(int)*index);
    for(x = 0; x < index; x++){
        num[x] = rand()%20 + 1;
    }
    printf("\n");
    int* heap = build_heap(num, index);
    sortarr(heap, num, index);
    for(x = 0; x < index; x++){
    }
    printf("所用时间: %d",clock());
    system("pause");
    return 0;
}