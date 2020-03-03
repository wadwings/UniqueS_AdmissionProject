#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<time.h>

static int index;

void q_sort(int *arr,int left,int right,int key){
    while(arr[right] < key&&right>=left)right--;
    arr[left] = arr[right];
    while(arr[left] > key&&right>=left)left++;
    arr[right] = arr[left];
    if(left != right)
        q_sort(arr,left,right,key);
    else
        arr[left] = key;
}

int main(){
    srand(time(NULL));
    int x, y;
    index = rand()%30 + 20;
    int* num = (int*)malloc(sizeof(int)*index);
    for(x = 0; x < index; x++){
        num[x] = rand()%20 + 1;
        printf("%d,",num[x]);
    }
    printf("\n");
    //int* tmp = (int*)malloc(sizeof(int)*index);
    //memcpy(tmp,num,sizeof(int)*index);
    q_sort(num,0,index - 1,num[0]);
    for(x = 0; x < index; x++){
        printf("%d,",num[x]);
    }
    system("pause");
    return 0;    
}