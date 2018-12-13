USE `burgers_db`;

DROP TABLE IF EXISTS `burgers`; -- Care

CREATE TABLE `burgers` (
    `id`           INT UNSIGNED AUTO_INCREMENT,
    `burger_name` VARCHAR(50),
    `devoured`    BOOLEAN DEFAULT FALSE,

    PRIMARY KEY (`id`)
);