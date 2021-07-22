from nasapy import Nasa
key = 'fsYuyVVQNfU6Jx8bWGI5d7vDpwcMFNfTr6Sr9m18'
nasa = Nasa(key=key)
date = '2021-7-14'
data = nasa.mars_rover(earth_date=date)
print(data)