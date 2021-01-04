#include <stdio.h>
#define MAX_SIZE 20

double promedio(int arreglo[],int n)
{
    int i;
    double result=0;
    for ( i = 0; i < n; i++)
    {
        result+=arreglo[i];
    }
    return result/n;
}
int main()
{
    int n,i;
    int numbers[MAX_SIZE];

   
    scanf("%d",&n);

    

    for ( i = 0; i < n; i++)
    {
           scanf("%d",&numbers[i]);

    }
    double result= promedio(numbers,n);
    printf("%lf\n",result);
    
    return 0;
}