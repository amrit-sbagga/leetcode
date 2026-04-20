# Write your MySQL query statement below
select 
   stu.student_id, 
   stu.student_name, 
   sub.subject_name, 
   count(exa.subject_name) as attended_exams
from Students stu
JOIN Subjects sub
LEFT JOIN Examinations exa
on stu.student_id = exa.student_id
AND sub.subject_name = exa.subject_name
group by stu.student_id, sub.subject_name
order by stu.student_id asc, sub.subject_name asc
