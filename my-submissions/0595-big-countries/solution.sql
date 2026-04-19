# Write your MySQL query statement below
# EXPLAIN analyze
# EXPLAIN
SELECT name, population, area 
from World
where area >= 3000000

# OR
UNION

SELECT name, population, area 
from World where
population >= 25000000
