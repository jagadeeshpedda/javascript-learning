'''a = int(input("Enter a Number :"))
b = int(input("Enter a Number :"))
result1, result2 = a//b, a/b
print(f"{result1}\n{result2}")

n = int(input("Enter a Number : "))


for i in range(n):
    print(i ** 2)

n = int(input())
arr = map(int, input().split())
arr = sorted(set(list(arr)))
print(arr[len(arr)-2])

import math
n = int(input("Enter a Number : "))
result = math.factorial(n)
print(f"Factorial of a number is : {result}")

a = int(input("Enter a Value : "))
b = int(input("Enter b Value : "))
a, b = b, a

print(a, b)

class solution:
    def reverseofNumber(num : str) -> str:
        name = str(num)
        return name[::-1]
    
    num = int(input("Enter a Number : "))
    print(f"The Reversed Number is :", reverseofNumber(num))'''


def ageEligibility(age : int) -> int:
    if age:
        age >= 18
        return ("Adult!")
    elif age < 18:
        return("Teen!")
age = int(input("Enter Your age : "))

print(ageEligibility(age))


