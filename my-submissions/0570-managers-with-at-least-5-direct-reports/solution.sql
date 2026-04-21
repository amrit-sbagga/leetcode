# Write your MySQL query statement below
SELECT name
FROM Employee
WHERE id IN (
    SELECT managerId FROM Employee
    GROUP BY managerId 
    HAVING count(managerId) >= 5
)

-- SELECT a.name 
-- FROM Employee a 
-- JOIN Employee b ON a.id = b.managerId 
-- GROUP BY b.managerId 
-- HAVING COUNT(*) >= 5
