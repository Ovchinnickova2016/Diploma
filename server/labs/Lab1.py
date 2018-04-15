import json

#функция проверки ответа
def CheckAnswer(json):
    json  
    ip = "192.168.0.4"
    d2 = 3
    N2 = 10
    answer = 40264
    answer2 = str(answer)
    ch = ['#', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ','Э', 'Ю', 'Я']
    dd = False
    dd = IsTheNumberSimple(d2)
    right = ['14', '10', '18', '16', '14']
    p = 0
    j = 0
    k = len(answer)
    if dd==True & N2==10:
        for p,j in range (k) :
     #       for j in range(k): #int p = 0, j=0, p < answer.length, p=+1, j=+1:
      	    right[j] = (right[p] ** d2)%N2
    else:
        print("Неправильные данные!")
    right = str(right)
    itog = str(answer2)
    if right==itog &  ip == "192.168.0.4":
        print('Right! Good job!')
    else:
        print("Wrong answer")


#проверка является ли число простым.
def IsTheNumberSimple(n):
    if n < 2:
        return False
    if n == 2:
        return True
    i = 2
    for i in range(n):
        if n % i == 0:
            return False
        i=+1
        return True 
