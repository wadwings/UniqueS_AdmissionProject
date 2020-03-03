#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<time.h>

static int index;
void merge(int *arr, int left, int mid, int right, int *tmp){
    int _index = left, i = left,j = mid + 1;
    while(i <=mid||j <= right){
        if((i <= mid && tmp[i] < tmp[j])||j == right + 1)
            arr[_index++] = tmp[i++];
        else
            arr[_index++] = tmp[j++];
    }
    memcpy(tmp,arr,sizeof(int)*index);
}

void divide(int *arr, int left, int right, int *tmp){
    if(left < right){
        int mid = (right  + left) / 2;
        divide(arr, left, mid,tmp);
        divide(arr, mid+1, right,tmp);
        merge(arr, left, mid, right,tmp);
    }
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
    int* tmp = (int*)malloc(sizeof(int)*index);
    memcpy(tmp,num,sizeof(int)*index);
    divide(num,0,index - 1,tmp);
    for(x = 0; x < index; x++){
        printf("%d,",num[x]);
    }
    system("pause");
    return 0;    
}