
from flask import Flask,jsonify,request
import json
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)

rect = json.load(open('templates/test.json'))

@app.route('/', methods=['GET','POST'])
def get_tasks():
    #value = request.json['rect']
    return jsonify({'array': rect})

if __name__ == '__main__':
    app.debug = True
    app.run(host = '127.0.0.1',port=5005)