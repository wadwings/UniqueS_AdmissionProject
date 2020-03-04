#include "tree_traverse.h"

int main(){
    int num[20];
    for(int i = 0; i < 20; i++)num[i] = i + 1;
    int *heap = build_heap(num, 20);
    recursive_preorder(heap, 0);
    system("pause");
    return 0;
}