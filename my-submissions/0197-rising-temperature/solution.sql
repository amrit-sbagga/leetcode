# Write your MySQL query statement below
-- select w1.id 
-- from Weather w1, Weather w2
-- where DATEDIFF(w1.recordDate, w2.recordDate) = 1
-- and w1.temperature > w2.temperature;

select w1.id 
from Weather w1
INNER JOIN Weather w2 
ON DATEDIFF(w1.recordDate, w2.recordDate) = 1
where w1.temperature > w2.temperature;
