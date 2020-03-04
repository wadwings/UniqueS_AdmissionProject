#include "build_heap.h"

int judge(int i){
    if (i >= 0 && i < end__heap)return 1;
    return 0;
}

void recursive_preorder(int *tree, int index){
    printf("%d\t",tree[index]);
    if(judge((index+1)*2))recursive_preorder(tree, (index+1)*2);
    if(judge((index+1)*2 + 1))recursive_preorder(tree, (index+1)*2 + 1);
}

void recursive_inorder(int *tree, int index){
    if(judge((index+1)*2))recursive_preorder(tree, (index+1)*2);
    printf("%d\t",tree[index]);
    if(judge((index+1)*2 + 1))recursive_preorder(tree, (index+1)*2 + 1);
}

void recursive_postorder(int *tree, int index){
    if(judge((index+1)*2))recursive_preorder(tree, (index+1)*2);
    if(judge((index+1)*2 + 1))recursive_preorder(tree, (index+1)*2 + 1);
    printf("%d\t",tree[index]);
}

void iterative_preoder(int *tree){
    
}