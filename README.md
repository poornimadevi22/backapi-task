# backapi-task
NodeJS  Backend Assignment

  Here in front end I used simple html form, with nodejs setup in backend to save datas of users we have connected schema(mongoose) of mongodb. To run setup using nodemon server.js 

- How long did it take you to complete this assignment?
    for me it takes nearly 6 hr to complete the full process from  front end to backend without any debugs.

  - What about this assignment did you find most challenging?
       API documentation and logging nothing much than troubleshooting and debugging

  - What about this assignment did you find unclear?
      API documentation and logging


  - What challenges did you face that you did not expect?
      Cross-Origin Requests and Preflight Handling,I did not initially anticipate the complexity of handling preflight OPTIONS requests

  - Do you feel like this assignment has an appropriate level of difficulty?
       No, it creates an API which is not at all difficult task,  only when it comes with full stack project only it becomes slight delay and challenging one as fresher


  - Briefly explain your decisions to use tools, frameworks and libraries like fastapi, DRF etc.
       I dont know about Django, FastAPI supports asynchronous programming, which is beneficial for handling high-concurrency situations and improving the performance of I/O-bound operations.
       Automatic Documentation: It generates interactive API documentation using Swagger UI and ReDoc out-of-the-box, making it easier to test and understand the API endpoints.



  - Did you make certain assumptions and decisions around the application? Please elaborate on your reasonings.
  Performance vs. Feature Set: If the project demands high performance and concurrency, FastAPI is selected due to its asynchronous capabilities. Conversely, if the project requires a feature-rich framework with built-in authentication and a mature ecosystem, DRF is preferred.
  Integration with Existing Systems: If the application is already using Django or requires features like an admin interface, DRF is chosen to leverage existing Django infrastructure. For new projects where performance is a primary concern, FastAPI is chosen for its modern design and efficiency.
