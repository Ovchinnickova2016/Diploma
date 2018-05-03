
from flask import Flask,jsonify,request,abort,Response
import json
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)

@app.route('/labs1/check/', methods=['GET','POST'])
def checkAnswer():
    if(request.method=="POST"):
        content = request.get_json()
        jsonData = json.dumps(content)
        #print(jsonData)
        fh = open('data.json', 'w')
        fh.write(jsonData)
        fh.close()
        return "True" 
    elif(request.method=="GET"):
        file1 = open('data1.json').read()
        rect = json.loads(file1)
        answer = json.dumps(rect, ensure_ascii=False, indent=4)
        return answer
    f = open('data.json').read()
    student_answer = json.loads(f)
    print(type(student_answer))
    ip = student_answer["ip"]
    d2 = student_answer["d"]
    N2 = student_answer["N"]
    answer0 = student_answer["e"]
    if((ip == '')or(d2=='')or(N2=='')or(answer0=='')):
        jsonData = json.dumps({"answer":"false"}) #ответ клиенту правльный ответ или нет 
        fh = open('data1.json', 'w')#записали ответ в data1.json
        fh.write(jsonData)
        fh.close()
    else:
        d2= int(d2)
        N2 = int(N2)
        answer0 = int(answer0)
        ip2 = ip
        answer2 = [int(r) for r in list(str(answer0))]
        dd = IsTheNumberSimple(d2)
        right = [14, 10, 18, 16, 14]
        p = 0
        j = 0
        k = len(str(answer0))
        if dd is True: 
            #if N2 == 10:
            while j < k:
                right[j] = right[j] ** d2 % N2
                j += 1
        print(right,' ',answer2)
        if str(right) == str(answer2):
            if ip2 == "192.168.0.4":
                jsonData = json.dumps({"answer":"true"}) #ответ клиенту правльный ответ или нет 
                fh = open('data1.json', 'w')#записали ответ в data1.json
                fh.write(jsonData)
                fh.close()
            else:
                print('kek')
        else:
            jsonData = json.dumps({"answer":"false"}) #ответ клиенту правльный ответ или нет 
            fh = open('data1.json', 'w')#записали ответ в data1.json
            fh.write(jsonData)
            fh.close()


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

 
@app.route('/labs1/<int:num>', methods=['GET'])
def get_lab1(num):
    if num==1:
        file1 = open('templates/lab1/rect1.json').read()
        rect = json.loads(file1)
        return  json.dumps(rect, ensure_ascii=False, indent=4)#jsonify({'array': rect},{'array': rect1})
    if num==2:
        file2 = open('templates/lab1/rect2.json',encoding='utf-8').read()
        rect1 = json.loads(file2)
        return  json.dumps(rect1,ensure_ascii=False)#json.dumps(rect1,indent=2,ensure_ascii=False)

if __name__ == '__main__':
    app.debug = True
    app.run(host = '127.0.0.1',port=5000)