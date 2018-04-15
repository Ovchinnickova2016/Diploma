import json
def checkAnswer():
    json  
    ip = "192.168.0.4"
    ip2 = str(ip)
    d2 = 3
    N2 = 10
    answer = 40264
    answer2 = str(answer)
    dd = False
    dd = IsTheNumberSimple(d2)
    right = ['14', '10', '18', '16', '14']
    p = 0
    j = 0
    k = len(str(answer))
    if dd==True & N2==10:
        for p,j in range (k) :
      	    right[j] = (right[p] ** d2)%N2
    else:
        print("wrong")
    right = str(right)
    itog = str(answer2)
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