# Week 2

1. Create a custom directive called angActive that takes two inputs. The first input is a color that needs to be applied if the second input is true (second input is a predicate).

2. Create a custom directive called angIf that shows the contents of the template if a condition is true and hides it otherwise.

3. Create a custom directive angIfElse. (Use ContentChild or ContentChildren to get the children)

4. Create a directive called pager. It takes three inputs: data - array of items, currentPage and pageSize. Depending on the inputs it needs to list the necessary items. (use rxjs skip and take operators)

5. Create a component called grid. It has the same inputs as pager and it uses pager to present the data. The grid component needs to hold the state for the currentPage and to create buttons for the different pages (use the directive from task 1). Handle the case when there are too many pages and some of the page buttons are replaced by ... (example 1 2 3 ... 10, 1 ... 4 5 6 ... 10)