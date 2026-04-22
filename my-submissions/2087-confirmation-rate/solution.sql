# Write your MySQL query statement below
SELECT s.user_id,
ROUND(Avg(if(c.action = 'confirmed', 1, 0)), 2) as confirmation_rate
from Signups s
LEFT JOIN Confirmations c
on s.user_id = c.user_id
GROUP BY s.user_id
