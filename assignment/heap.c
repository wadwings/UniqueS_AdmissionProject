#include<stdio.h>
#include<stdlib.h>
#include<time.h>

typedef struct Node{
    int num;
    struct Node *prev, *left, *right;
}heap;

void buildHeap(heap* cur, int *arr, int len, int index){
    heap *left, *right;
    if(len >= index){
        cur->num = arr[index];
        if(index * 2 + 1 <= len){
            cur->left = (heap*)malloc(sizeof(heap));
            cur->left->prev = cur;
            buildHeap(cur->left,arr,len,index * 2 + 1);
            if(index * 2 + 2 <= len){
                cur->right = (heap*)malloc(sizeof(heap));
                cur->right->prev = cur;
                buildHeap(cur->right,arr,len,index * 2 + 2);
            }
            else cur->right = NULL;
        }
        else{
            cur->left = NULL;
            cur->right = NULL;
        }
    }
}

void swapleaf(heap* cur){
    if(cur->left!=NULL)
        if(cur->num < cur->left->num){
            cur->num = cur->num^cur->left->num;
            cur->left->num = cur->num^cur->left->num;
            cur->num = cur->num^cur->left->num;
    }
    if(cur->right!=NULL)
        if(cur->num < cur->right->num){
            cur->num = cur->num^cur->right->num;
            cur->right->num = cur->num^cur->right->num;
            cur->num = cur->num^cur->right->num;
    }
}

void sortHeap(heap* cur){
    if(cur->left!=NULL)sortHeap(cur->left);
    if(cur->right!=NULL)sortHeap(cur->right);
    swapleaf(cur);
    if(cur->left!=NULL)sortHeap(cur->left);
    if(cur->right!=NULL)sortHeap(cur->right);
}

void search(heap *head, heap* cur){
    if(cur->left!=NULL)search(head,cur->left);
    else if(cur->right!=NULL)search(head,cur->right);
    else if(cur==head);
    else{
        head->num = cur->num;
        if(cur->prev->left == cur)cur->prev->left=NULL;
        else if(cur->prev->right == cur)cur->prev->right=NULL;
        free(cur);
    }
}

void sortarr(heap* head, int* arr, int index){
    sortHeap(head);
    arr[index] = head->num;
    search(head,head);
    if(index > 0)sortarr(head,arr,index - 1);
}

int main(){
    srand(time(NULL));
    int x, y, index;
    index = rand()%100 + 20;
    int* num = (int*)malloc(sizeof(int)*index);
    for(x = 0; x < index; x++){
        num[x] = rand()%20 + 1;
        printf("%d,",num[x]);
    }
    printf("\n");
    heap *head = (heap*)malloc(sizeof(heap));
    head->prev = NULL;
    buildHeap(head, num, index - 1, 0);
    sortarr(head, num, index - 1);
    for(x = 0; x < index; x++){
        printf("%d,",num[x]);
    }
    system("pause");
    return 0;
}