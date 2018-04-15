
from flask import Flask,jsonify,request,abort,Response
import json
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)

@app.route('/labs1/check/', methods=['GET','POST'])
def postJsonHandler():
    if(request.method=="POST"):
        content = request.get_json()
        jsonData = json.dumps(content)
        #print(jsonData)
        fh = open('data.json', 'w')
        fh.write(jsonData)
        fh.close()
        return "True" 
    else:
        file1 = open('data.json').read()
        rect = json.loads(file1)
        return  json.dumps(rect, ensure_ascii=False, indent=4)
 
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