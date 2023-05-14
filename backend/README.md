1. Create Postgres Database <p>
  a. To create a Postgres database, use the command 'docker compose up dev-db -d' in the terminal. This will create a Postgres database instance.<br>
  b. Alternatively, you can edit the database URL in the file 'src/prisma.prisma.service.ts'.

2. Install NPM Packages <p>
  a. To install the necessary npm packages, enter the command 'npm install' in the terminal.
  
3. Update your Prisma schem a<p>
  a. To apply the migrations run -> 'npx prisma migrate dev' then wipe previous data and provide new migration name - eg :prismamig 

4. Run Server<p>
  a. To run the server, enter the command 'npm run start dev' in the terminal. This will start the server and allow you to access the API.

5. GET http://localhost:5000/employee <p>

   This endpoint is used to retrieve a list of all employees in the system.

   **Request**

   No request body is required.
   
6. POST http://localhost:5000/employee <p>

    Description:
    This endpoint is used to create a new employee record.

    URL Params:
    None

    Body Params:
    - name (string): The name of the employee.
    - designation (string): designation of the employee.
    - empType (string): The type of the employee.
    - experience (string): years of experience of the employee.

    Success Response:
    Code: 200 
    Content: {
        "id": [integer],
        "name": [string],
        "experience": [string],
        "empType": [string],
        "designation": [string]
    }

    Error Response:
    Code: 400 
    Content: {
        "error": "Bad Request"
    }

7. PUT http://localhost:5000/employee/{employee_id} <p>

    Description:
    This endpoint allows users to update an existing employee.

    Body:
    { 
        "field1": "value1",
        "field2": "value2"
    }

    Response:
    Status Code: 200 OK

    Body:
    {
        "success": true,
        "data": {
            "field1": "value1",
            "field2": "value2"
        }
    }
  
  8. DELETE http://localhost:5000/employee/{employee_id} <p>

    Description:
    This endpoint is used to delete an existing employee from the system.

    Parameters: 
    id - The employee's ID (required).
