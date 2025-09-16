-- Last updated: 9/16/2025, 3:10:47 PM
-- Write your PostgreSQL query statement below
select name as Customers from Customers where id not in (
SELECT CustomerId
FROM Orders);
