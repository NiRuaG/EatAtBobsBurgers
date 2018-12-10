USE `burgers_db`;

TRUNCATE TABLE `burgers`; -- Care

INSERT INTO `burgers` 
    (`burger_name`, `devoured`)
VALUES 
    ("New Bacon-ings Burger" , FALSE),
    ("Rest in Peas Burger"   , TRUE ),
    ("Fig-eta Bout It Burger", FALSE)
;

SELECT * FROM `burgers`; --Run Query