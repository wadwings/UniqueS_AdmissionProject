#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX 100000
int end__heap;
int __small;


void swap(int *arr, int x, int y){
    arr[x] = arr[x]^arr[y];
    arr[y] = arr[x]^arr[y];
    arr[x] = arr[x]^arr[y];
}

void swap_big(int *arr, int index){
    if(index*2 + 1 < end__heap&&arr[index] < arr[index*2 + 1])swap(arr, index, index*2 + 1);
    if(index*2 + 2 < end__heap&&arr[index] < arr[index*2 + 2])swap(arr, index, index*2 + 2);
}

void swap_small(int *arr, int index){
    if(index*2 + 1 < end__heap&&arr[index] > arr[index*2 + 1])swap(arr, index, index*2 + 1);
    if(index*2 + 2 < end__heap&&arr[index] > arr[index*2 + 2])swap(arr, index, index*2 + 2);
}

void bigHeap(int *arr, int index){
    __small = 0;
    if(index*2 + 1 < end__heap)bigHeap(arr, index*2 + 1);
    if(index*2 + 2 < end__heap)bigHeap(arr, index*2 + 2);
    swap_big(arr, index);
    if(index*2 + 1 < end__heap)bigHeap(arr, index*2 + 1);
    if(index*2 + 2 < end__heap)bigHeap(arr, index*2 + 2);
}

void smallHeap(int *arr, int index){
    __small = 1;
    if(index*2 + 1 < end__heap)smallHeap(arr, index*2 + 1);
    if(index*2 + 2 < end__heap)smallHeap(arr, index*2 + 2);
    swap_small(arr, index);
    if(index*2 + 1 < end__heap)smallHeap(arr, index*2 + 1);
    if(index*2 + 2 < end__heap)smallHeap(arr, index*2 + 2);
}

void insertHeap(int *arr, int num){
    if(end__heap + 1 <= MAX){
        arr[end__heap] = num;
        end__heap++;
        if(__small)smallHeap(arr, 0);
        else bigHeap(arr, 0);
    }
    else printf("The heap has reached the limited Maximum");
}

void deleteHeap(int *arr){
    arr[0] = arr[--end__heap];
    if(__small)smallHeap(arr, 0);
    else bigHeap(arr, 0);
}

void freeHeap(int *heap){
    free(heap);
}

int *build_heap(int *arr, int len){
    end__heap = ( MAX > len ? len : MAX);
    int* heap=(int*)malloc(sizeof(int)*MAX);
    memcpy(heap, arr, sizeof(int)*end__heap);
    bigHeap(heap, 0);
    return heap;
}