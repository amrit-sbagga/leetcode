# Write your MySQL query statement below
# getting error - Every derived table must have its own alias, what is wrong in this query?
select results
from (
    select name as results
    from users
    join MovieRating
    using (user_id)
    group by name
    order by count(*) desc, name asc
    limit 1
) as t1
UNION ALL (
    select title as results
    from Movies
    join MovieRating
    using (movie_id)
    where extract(year from created_at) = 2020
    and extract(month from created_at) = 2
    group by title
    order by avg(rating) desc, title asc
    limit 1
);
