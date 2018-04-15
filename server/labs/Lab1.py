import json
def checkAnswer():
    json  
    ip = "192.168.0.4"
    ip2 = str(ip)
    d2 = 3
    N2 = 10
    answer0 = 40264
    answer = [4, 0, 2, 6, 4]
    answer2 = str(answer)
    print(answer2)
    dd = False
    dd = IsTheNumberSimple(d2)
    print(dd)
    right = [14, 10, 18, 16, 14]
    p = 0
    j = 0
    k = len(str(answer0))
    print(k)
    print(N2)
    if dd==True:
        if N2==10:
            while j < k:
      	        right[j] = right[j] ** d2 % N2
      	        print (right[j])
      	        j+=1
    else:
        print("wrong")
    right = str(right)
    print(right)
    itog = answer2
    print(itog)
    if right==itog:
        if ip2 == "192.168.0.4":
            print('Right! Good job!')
    else:
        print("Wrong answer")


def IsTheNumberSimple(n):
    if n < 2:
        return False
    if n == 2:
        return True
    l = 2
    for l in range(n):
        if n % 2 == 0:
            return False
        else:
            return True 

checkAnswer()