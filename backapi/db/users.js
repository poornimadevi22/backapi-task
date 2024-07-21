const mongoose=require('mongoose');
const fs = require('fs');
const User=require('../db/schema')

const users = [
    [
        {
            "id": 1,
            "first_name": "James",
            "last_name": "Butt",
            "company_name": "Benton, John B Jr",
            "city": "New Orleans",
            "state": "LA",
            "zip": 70116,
            "email": "jbutt@gmail.com",
            "web": "http://www.bentonjohnbjr.com",
            "age": 70
        },
        {
            "id": 2,
            "first_name": "Josephine",
            "last_name": "Darakjy",
            "company_name": "Chanay, Jeffrey A Esq",
            "city": "Brighton",
            "state": "MI",
            "zip": 48116,
            "email": "josephine_darakjy@darakjy.org",
            "web": "http://www.chanayjeffreyaesq.com",
            "age": 48
        },
        {
            "id": 3,
            "first_name": "Michael",
            "last_name": "Johnson",
            "company_name": "Web Innovations",
            "city": "Austin",
            "state": "TX",
            "zip": 73301,
            "email": "michael.johnson@webinnovations.com",
            "web": "http://www.webinnovations.com",
            "age": 40
        },
        {
            "id": 4,
            "first_name": "Emily",
            "last_name": "Davis",
            "company_name": "Creative Inc",
            "city": "Seattle",
            "state": "WA",
            "zip": 98101,
            "email": "emily.davis@creativeinc.com",
            "web": "http://www.creativeinc.com",
            "age": 27
        },
        {
            "id": 5,
            "first_name": "David",
            "last_name": "Brown",
            "company_name": "Market Gurus",
            "city": "Chicago",
            "state": "IL",
            "zip": 60601,
            "email": "david.brown@marketgurus.com",
            "web": "http://www.marketgurus.com",
            "age": 45
        },
        {
            "id": 6,
            "first_name": "Sarah",
            "last_name": "Wilson",
            "company_name": "Finance Experts",
            "city": "Miami",
            "state": "FL",
            "zip": 33101,
            "email": "sarah.wilson@financeexperts.com",
            "web": "http://www.financeexperts.com",
            "age": 32
        },
        {
            "id": 7,
            "first_name": "Robert",
            "last_name": "Martinez",
            "company_name": "Health Plus",
            "city": "Denver",
            "state": "CO",
            "zip": 80201,
            "email": "robert.martinez@healthplus.com",
            "web": "http://www.healthplus.com",
            "age": 38
        },
        {
            "id": 8,
            "first_name": "Jessica",
            "last_name": "Anderson",
            "company_name": "Travel World",
            "city": "Las Vegas",
            "state": "NV",
            "zip": 89101,
            "email": "jessica.anderson@travelworld.com",
            "web": "http://www.travelworld.com",
            "age": 31
        },
        {
            "id": 9,
            "first_name": "Charles",
            "last_name": "Thompson",
            "company_name": "Foodies Delight",
            "city": "Portland",
            "state": "OR",
            "zip": 97201,
            "email": "charles.thompson@foodiesdelight.com",
            "web": "http://www.foodiesdelight.com",
            "age": 50
        },
        {
            "id": 10,
            "first_name": "Lisa",
            "last_name": "White",
            "company_name": "Artistry Studios",
            "city": "Los Angeles",
            "state": "CA",
            "zip": 90001,
            "email": "lisa.white@artistrystudios.com",
            "web": "http://www.artistrystudios.com",
            "age": 28
        }
    ]
    
];


