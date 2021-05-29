buyer
    buyerid-string-primary key
    buyername-string
    latitude-double
    longitude-double
    buyerImage-string(url)
    Address-string
    phone-int
    email-string
    password-string

farmer
     farmerid-string primary key
     name-string
     phone-int
     email-string
     password-string
     timestamp

products
       productId-string primary key
       name-string
       price-int
       buyerId-string foreign key

APIS

1) register buyer
https://farmeasy07.herokuapp.com/buyer/register
Request-Post
{
    "name": "big farm"
    "phone": 9786544435
    "email": "bigfarm@gjhjk.com"
    "password": ""gfdtr66557jgjh65yhvf"
    "latitude": 26.6575
    "longitude": 96.65756
    "address": drgtfh,uii,uyiu
    "buyerImage": "http://ygyjjnhjb.com"

}
Response
{

}

2) add product
https://farmeasy07.herokuapp.com/product/addProduct
Request-Post
{
    "buyerid":"BU20215316221223",
}
Response
{

}

3) Products by buyerid
https://farmeasy07.herokuapp.com/product/bybuyerid
Request- Post
{
    "chefid": "CF20215316221223"
}
Reponse
{
    "response": [
        {
            
        }
    ]
}

4) Nearby buyers
https://farmeasy07.herokuapp.com/buyer/nearByBuyer
Request-Post
{
    "latitude":26.9124,
    "longitude":75.7873
}

Response
{
    "ans": [
        {
            
        }
    ]
}

For farmer

5)register farmer
https://farmeasy07.herokuapp.com/farmer/register
request- post
{
     "name": sgchgv
     "phone": 9876554567
     "email": "ghvvv@ghj.com"
     "password": "dghhhhhvny6vv5yvhvhc"
}

Response
{

}

6) Login Farmer
https://farmeasy07.herokuapp.com/farmer/login
Request-Post
{
    "email":"a@gmail.com",
    "password":"abcd"
}
Response
{
    "status": true
}

7) login buyer
https://farmeasy07.herokuapp.com/buyer/login
Request-Post
{
    "email":"a@gmail.com",
    "password":"abcd"
}
Response
{
    "status": true
}