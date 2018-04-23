import json

student_answer = json.dumps({
"ip": "192.168.0.4",
"d2": 3,
"N2": 10,
"answer0": 40264
})


def checkAnswer(student_answer):
    student_answer = json.loads(student_answer)
    ip = student_answer["ip"]
    d2 = student_answer["d2"]
    N2 = student_answer["N2"]
    answer0 = student_answer["answer0"]

    ip2 = ip

    answer2 = [int(r) for r in list(str(answer0))]
# print(answer2)
    dd = IsTheNumberSimple(d2)
# print(dd)
    right = [14, 10, 18, 16, 14]
    p = 0
    j = 0
    k = len(str(answer0))
# print(k)
# print(N2)
    if dd is True:
        if N2 == 10:
            while j < k:
                right[j] = right[j] ** d2 % N2
# print(right[j])
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