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
    for(x = 0;x < index; x++){
        for(y = x; y < index; y++){
            if (num[y] > num[x]){
                num[y] = num[x]^num[y];
                num[x] = num[x]^num[y];
                num[y] = num[x]^num[y];
            }
        }
    }   
    for(x = 0; x < index; x++){
        printf("%d,",num[x]);
    }
    system("pause");
    return 0;
}