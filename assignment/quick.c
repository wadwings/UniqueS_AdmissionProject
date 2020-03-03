#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<time.h>

void q_sort(int *arr,int left,int right){
    int tmp = arr[left],i = left, j = right;
    if(i < j){
        while(i != j){
            while(arr[j] >= tmp && i < j)j--;
            if(i < j)arr[i] = arr[j];
            while(arr[i] < tmp && i < j)i++;
            if(i < j)arr[j] = arr[i];
        }
        arr[i] = tmp;
        q_sort(arr,left,i-1);
        q_sort(arr,i+1,right);
    }
}

int main(){
    srand(time(NULL));
    int x, y, index = rand()%30 + 20;;
    
    int* num = (int*)malloc(sizeof(int)*index);
    for(x = 0; x < index; x++){
        num[x] = rand()%20 + 1;
        printf("%d,",num[x]);
    }
    printf("\n"); 
    //int* tmp = (int*)malloc(sizeof(int)*index);
    //memcpy(tmp,num,sizeof(int)*index);
    q_sort(num,0,index - 1);
    for(x = 0; x < index; x++){
        printf("%d,",num[x]);
    }
    system("pause");
    return 0;    
}