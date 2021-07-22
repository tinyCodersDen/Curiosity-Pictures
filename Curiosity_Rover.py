from flask import *
from nasapy import Nasa
key = 'YOUR API KEY HERE'
nasa = Nasa(key=key)
app = Flask('Curiosity Rover')
@app.route('/')
@app.route('/home',methods=['POST','GET'])
def home():
    earth_date = request.args.get('date')
    data = nasa.mars_rover(earth_date=earth_date)
    print(data)
    return render_template('home.html',earth_date=earth_date,data=data)
if __name__=='__main__':
    app.run(debug=True)
