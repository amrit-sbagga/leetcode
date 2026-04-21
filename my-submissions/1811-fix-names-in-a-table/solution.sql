# Write your MySQL query statement below
Select user_id, 
   CONCAT(UPPER(SUBSTRING(name, 1, 1)), LOWER(SUBSTRING(NAME, 2))) as name
FROM Users
ORDER BY user_id
