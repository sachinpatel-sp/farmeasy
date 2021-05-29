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
    "name": "big farm2",
    "phone": "9786544435",
    "email": "bigfarm@gjhjk.com",
    "password": ""gfdtr66557jgjh65yhvf",
    "latitude": 26.6575,
    "longitude": 96.65756,
    "address": "drgtfh,uii,uyiu",
    "buyerImage": "http://ygyjjnhjb.com"

}
Response
{
    "buyerId": "BU2021529145043452"
}

2) add product
https://farmeasy07.herokuapp.com/product/addProduct
Request-Post
{
    "name": "Sugarcane",
    "buyerid": "BU2021529145043452",
    "price": 250,
    "adminPassword": "root"
}
Response
{
    "message": "Inserted Successfully To Products Table"
}

3) Products by buyerid
https://farmeasy07.herokuapp.com/product/bybuyerid
Request- Post
{
    "buyerid": "BU2021529145043452"
}
Reponse
{
    "response": [
        {
            "productId": "PD202152915427357",
            "name": "Paddy",
            "price": 250,
            "buyerid": "BU2021529145043452",
            "createdAt": "2021-05-29T15:04:27.359Z",
            "updatedAt": "2021-05-29T15:04:27.359Z"
        },
        {
            "productId": "PD202152915439177",
            "name": "Wheat",
            "price": 250,
            "buyerid": "BU2021529145043452",
            "createdAt": "2021-05-29T15:04:39.177Z",
            "updatedAt": "2021-05-29T15:04:39.177Z"
        },
        {
            "productId": "PD202152915446972",
            "name": "Maze",
            "price": 250,
            "buyerid": "BU2021529145043452",
            "createdAt": "2021-05-29T15:04:46.972Z",
            "updatedAt": "2021-05-29T15:04:46.972Z"
        },
        {
            "productId": "PD20215291550809",
            "name": "Sugarcane",
            "price": 250,
            "buyerid": "BU2021529145043452",
            "createdAt": "2021-05-29T15:05:00.809Z",
            "updatedAt": "2021-05-29T15:05:00.809Z"
        }
    ]
}

4) Nearby buyers
https://farmeasy07.herokuapp.com/buyer/nearByBuyer
Request-Post
{
    "latitude": 26.6575,
    "longitude": 96.65756
}

Response
{
    "ans": [
        {
            "buyerid": "BU2021529144624155",
            "buyername": "big farm",
            "latitude": 26.6575,
            "longitude": 96.65756,
            "Address": "drgtfh,uii,uyiu",
            "buyerImage": null,
            "email": "bigfarm@gjhjk.com",
            "phone": "9786544435"
        },
        {
            "buyerid": "BU2021529145043452",
            "buyername": "big farm2",
            "latitude": 26.6575,
            "longitude": 96.65756,
            "Address": "drgtfh,uii,uyiu",
            "buyerImage": null,
            "email": "bigfarm@gjhjk.com",
            "phone": "9786544435"
        }
    ]
}

For farmer

5)register farmer
https://farmeasy07.herokuapp.com/farmer/register
request- post
{
     "name": "sgchgv",
     "phone": 9876554567,
     "email": "ghvvv@ghj.com",
     "password": "dghhhhhvny6vv5yvhvhc"
}

Response
{
    "farmerId": "FR2021529151420787"
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