
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define	MAX	10000	
int top;

int *init_stack(int* arr, int len)
{
    int *stack = (int*)malloc(sizeof(int)*MAX);
    memcpy(stack, arr, sizeof(int)*len);
	top = len;
    return stack;
}

int in_stack(int *stack, int data)
{
	if(top == MAX){
		printf("The stack has reached the limited Maximum");
		return 1;
	}
	stack[top++] = data;
	return 0;
}

int out_stack(int *stack)
{
	if(top == 0){
		printf("The stack is empty");
		return 1;
	}
	top--;
	return 0;
}

void clear_stack(int *stack)
{
	memset(stack, 0, sizeof(int)*top);
    top = 0;
}
