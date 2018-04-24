import json


file1 = open('../data.json').read()
rect = json.loads(file1)
student_answer = json.dumps(rect, ensure_ascii=False, indent=4)

def checkAnswer(student_answer):
    student_answer = json.loads(student_answer)
    print(type(student_answer))
    ip = student_answer["ip"]
    d2 = student_answer["d"]
    N2 = student_answer["N"]
    answer0 = student_answer["e"]
    d2= int(d2)
    N2 = int(N2)
    answer0 = int(answer0)
    ip2 = ip

    answer2 = [int(r) for r in list(str(answer0))]
    print(answer2)
    dd = IsTheNumberSimple(d2)
    print(dd)
    right = [14, 10, 18, 16, 14]
    p = 0
    j = 0
    k = len(str(answer0))
    print(k)
    print(N2)
    print(dd)
    if dd is True:
        if N2 == 10:
            while j < k:
                right[j] = right[j] ** d2 % N2
                print(right[j])
                j += 1
    else:
        print("wrong")
    if str(right) == str(answer2):
        if ip2 == "192.168.0.4":
            print('Right! Good job!')
        else:
            print(right, answer2, ip2)
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


checkAnswer(student_answer)