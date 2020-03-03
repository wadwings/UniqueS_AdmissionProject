#include<stdio.h>
#include<stdlib.h>
#include<time.h>
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
    for(x = 1; x < index; x++){
        int value = num[x];
        y = x - 1;
        while(y >= 0&&num[y] > value){
            num[y + 1] = num[y];
            y--;
        }
        num[y + 1] = value;
    }
    for(x = 0; x < index; x++){
        printf("%d,",num[x]);
    }
    system("pause");
    return 0;    
}