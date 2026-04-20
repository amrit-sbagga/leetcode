# Write your MySQL query statement below
-- select 
--   product_id, 
--   year AS first_year, 
--   quantity,
--   price
-- from Sales
-- where (product_id, year) in (
--     select product_id, min(year)
--     from sales
--     group by product_id
-- )

SELECT s.product_id, s.year AS first_year, s.quantity, s.price
FROM Sales s
INNER JOIN (
    SELECT product_id, MIN(year) AS min_year
    FROM Sales
    GROUP BY product_id
) sub ON s.product_id = sub.product_id AND s.year = sub.min_year;


