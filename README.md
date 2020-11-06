## I. Tools Used: 

    - $ npm install 
    - $ npm install --save express
    - $ npm install --save body-parser
    - $ npm install --save ejs pug express-handlebars
    - $ npm install --save express-handlebars@3.0
    - $ npm install --save mysql2

    - https://www.mysql.com/
        MySQL Community Server
        https://dev.mysql.com/downloads/mysql/
        > download DMG file

        MySQL Workbench: 
        https://dev.mysql.com/downloads/workbench/
        
        Go to /Desktop/Trung/Programs > open workbench

        setup video > video 138

    - $ npm install --save sequelize

    - MongoDB atlas (cloud database, no need to install)
        +, Just need to login, see login in password app
        +, Setting up MongoDB: Video 178
    
    - npm install --save mongodb

    - MongoDB Compass: GUI for MongoDb data
        +, help us to explore and manipulate our
        cloud MongoDB atlas
    https://www.mongodb.com/products/compass
    > install to machine to use
    > use at set up guide at video 184

## II. Core Concepts: 
    1. What is MongoDB: 
        - NoSQL database
        - Store data in JSON data format, 
            Very similar to a javascript object
        - MongoDB consists of: Collections and Documents

    2. Relation in NoSQL: 
        - Duplicate data of different documents of different Collections
        - See this image to understand: 
            https://drive.google.com/file/d/1KGGRvG-4OYQG4F2mWKH17cxPTD-s4WKN/view?usp=sharing

        - There are actually 2 options for Relations in NoSQL: 
            +, Nested / Embedded Documents: Duplicate and Embed needed data into existing documents 
            +, References: refer to the needed data into existing document
            +, See this image for demonstration: 
            https://drive.google.com/file/d/1FvAAuPhCR-zgg4_M0XL8GIv6hCaO_GWp/view?usp=sharing

    3. NoSQL Characteristics: 
        - No Data Schema > No required structure
        - Fewer Data Relations: you can relate documents
            (by referencing) but you don't have to 
		- You shouldn't Relate data too much or your queries
            become slow
    
## III. Module Notes: 

    1. Setting up connection with MongoDB: 
        - Code in 2nd Commit
        - See ./util/database.js for how to setup connection
        - See app.js for how to establish a connection
    
    2. Using Database connection and Creating Products: 
        - Code in 3rd Commit
        - See app.js for how to establish a connection
        - See ./util/database.js for how to setup connection
        - See ./models/product.js for how to save data in the database
        - See ./controllers/admin.js for how to add data with 
            /admin/add-product page

            => http://localhost:3000/admin/add-product
            now functioning

    3. Fetching Products
        a. Fetching all products: 
            - Code in 4th Commit
            - ./models/product.js: under fetchAll() to see 
                how to fetch All products from DB
            - ./controllers/shop.js under getProducts() and 
                getIndex() to see how to execute Fetching
        
        b. Fetching a single product (by id): 
            - Code in 5th Commit
            - ./models/products.js: findById() to fetch any
                single product with id correctly
            - ./controllers/product.js: getProduct() to use
                findById() and render

            now we can go to '/products/ and hit 'Details' 
            > it should work

    4. Finishing CRUD operations: 
        - Create and Read was in part 3
        - Now we work with Update and Delete

        a. Updating Products: 
            - Code in 7th Commit
            - Fetch data for '/admin/products' in ./controllers/admin.js
                under getEditProduct()
            - Update Operations with database: ./models/product.js under
                save()
            - Update products and rendering: ./controllers/admin.js 
                under postEditProduct()
        
        b. Deleting Products: 
            - Code in 8th Commit
            - MongoDB delete operation in ./models/products under deleteById()
            - Excute delete operation and re-direct in ./controllers/admin.js 
                under postDeleteProduct(). Now you can CRUD any admin products

    5. Other operations:
        - Creating an user: 
            +, code in 9th Commit
            +, user created manually in mongo compass
            +, See ./models/user.js to see the user class and methods
            +, See app.js for how to find an user by id and insert
                user reference into the request   

        - Storing a product with user id stored: 
            +, Code in 10th Commit
            +, See ./models/product.js and ./controllers/admin.js   
            +, See 'products' collections, the field userId store the user id
                by accessing request data     
                
        - Adding a single Item To Cart: 
            +, Code in 11st Commit
            +, See ./models/user.js: under addToCart() for adding to Cart
                operation
            +, See ./controllers/shop.js: under postCard() for handling adding
                to cart action
        
        - Storing multiple Items into Cart: 
            +, Code in 12nd Commit
            +, See in ./models/user.js: under addToCart() to see how to 
                store multiple Items

        - Rendering '/cart' page: 
            +, Code in 13rd Commit - rendering cart
            +, See in ./models/user.js: under getCart() for getting all 
                products in cart with correct data format

        - Deleting products in '/cart': Self coded 
            +, Code in 14th Commit
            +, See in ./models/user.js: under deleteById() to see
                database operations
            +, see in ./controllers/shop.js: under postCartDeleteProduct()
                for execution
        
        - Adding and Getting Orders: 
            +, Code in 15th Commit
            +, Adding Orders: 
                > ./models/user.js: under addOrder() for operation
                > ./controllers/shop.js: postOrder() for execution
            +, Get Orders: 
                > ./models/user.js: under getOrders() for operation
                > ./controllers/shop.js: getOrders() for execution

## IV. Other Notes: 
    1. What is in this module: 
        - What is MongoDB
        - Using MongoDB driver in Node.js App

    2. Module Summary: 
        See image in this link: 
        https://drive.google.com/file/d/1Zmb-Vze3z2ClLyJOJgDMVgXqUxrKZ1JI/view?usp=sharing

    3. MongoDB documentations: 
        - Official Docs: 
            https://docs.mongodb.com/manual/

        - SQL vs NosQL: 
            https://academind.com/learn/web-dev/sql-vs-nosql/

        - More about mongoDB: 
            https://academind.com/learn/mongodb/
        
