+------------------+ +---------------------+ +----------------------+
| Users | | Products | | Orders |
+------------------+ +---------------------+ +----------------------+
| userID (PK) | | productID (PK) | | orderID (PK) |
| username | | productName | | userID (FK) |
| email | | price | | productID (FK) |
+------------------+ +---------------------+ | quantity |
+----------------------+

userID, productID, and orderID are primary keys (PK).
userID in the Orders table is a foreign key (FK) referencing the Users table.
productID in the Orders table is a foreign key (FK) referencing the Products table.
The relationships between Users, Products, and Orders are illustrated with lines connecting the tables.
Cardinality (One-to-Many) is implied based on the relationship lines.

Users to Orders (One-to-Many):

A user can place multiple orders (One-to-Many).
The userID in the Orders table is a foreign key (FK) referencing the primary key userID in the Users table.
Products to Orders (One-to-Many):

A product can appear in multiple orders (One-to-Many).
The productID in the Orders table is a foreign key (FK) referencing the primary key productID in the Products table.
Users to Products (Many-to-Many):

A user can order multiple products, and a product can be ordered by multiple users (Many-to-Many).
This relationship is achieved through the Orders table acting as a junction table.
The userID and productID in the Orders table serve as foreign keys (FK) referencing the primary keys in the Users and Products tables, respectively.
