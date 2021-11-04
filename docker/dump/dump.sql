-- MySQL dump 10.13  Distrib 5.7.34, for Linux (x86_64)
--
-- Host: localhost    Database: muslim_db
-- ------------------------------------------------------
-- Server version	5.7.34-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cms_collections`
--

DROP TABLE IF EXISTS `cms_collections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_collections`
(
    `id`                      int(11) NOT NULL AUTO_INCREMENT,
    `name_0`                  varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_1`                  varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_2`                  varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_3`                  varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_4`                  varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `slug`                    varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `use_in_menu`             tinyint(3) NOT NULL,
    `use_seo`                 tinyint(3) DEFAULT NULL,
    `use_parenting`           tinyint(3) DEFAULT NULL,
    `option_name`             tinyint(3) DEFAULT NULL,
    `option_content`          tinyint(3) DEFAULT NULL,
    `option_file_1`           tinyint(3) DEFAULT NULL,
    `option_file_2`           tinyint(3) DEFAULT NULL,
    `option_file_1_label`     varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `option_file_2_label`     varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `option_file_1_validator` json                                 DEFAULT NULL,
    `option_file_2_validator` json                                 DEFAULT NULL,
    `option_default_id`       int(11) DEFAULT NULL,
    `created_at`              int(11) unsigned NOT NULL,
    `updated_at`              int(11) unsigned NOT NULL,
    `manual_slug`             tinyint(3) DEFAULT '0',
    PRIMARY KEY (`id`),
    UNIQUE KEY `slug` (`slug`),
    UNIQUE KEY `index-cms_collections-slug` (`slug`),
    KEY                       `index-cms_collections-option_default_id` (`option_default_id`),
    CONSTRAINT `fkey-cms_collections-option_default_id` FOREIGN KEY (`option_default_id`) REFERENCES `cms_options` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_collections`
--

LOCK
TABLES `cms_collections` WRITE;
/*!40000 ALTER TABLE `cms_collections` DISABLE KEYS */;
INSERT INTO `cms_collections`
VALUES (1, 'Тип содержимого', 'Kontent turi', 'Content type', 'نوع المحتوى', 'Контент тури', 'articles', 1, 2, 0, 2, 0, 0, 0, '', '', '{
  \"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}', '{
  \"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}', NULL, 1618059827, 1624104877, 1),
       (2, 'Категори', 'Kategoriyalar', 'Categories', 'فئات', 'Категориялар', 'tags', 0, 0, 1, 2, 0, 0, 0, '', '', '{
         \"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}', '{
         \"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}', NULL, 1620284205, 1624104242, 1),
       (3, 'Использовать в слайдере', 'Slayderda ko\'rsatish','Use in Slider','تظهر على شريط التمرير','Слайдерда кўрсатиш','use-in-slider',0,0,0,1,0,0,0,'','','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}',NULL,1620290586,1624515271,0),(4,'Автор','Muallif','Author','','Муаллиф','author',1,2,0,2,21,1,0,'Rasm','','{\"maxSize\": \"5\", \"mimeType\": [\"0\", \"1\"], \"dimensionH\": \"160\", \"dimensionW\": \"160\"}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}',NULL,1620371918,1623682106,1),(5,'Пресс-служба Управления мусульман Узбекистана','O`zbekiston musulmonlar idorasi matbuot xizmati','Press service of the Muslim Board of Uzbekistan','','Ўзбекистон мусулмонлар идораси матбуот хизмати','source',0,0,0,1,0,0,0,'','','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}',17,1620380041,1623681129,0),(6,'Basmala','Basmala','Basmala','','','basmala',0,0,0,2,21,0,0,'','','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}',14,1620380411,1620381197,0);
/*!40000 ALTER TABLE `cms_collections` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `cms_collections_and_entities`
--

DROP TABLE IF EXISTS `cms_collections_and_entities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_collections_and_entities`
(
    `id`            int(11) NOT NULL AUTO_INCREMENT,
    `collection_id` int(11) DEFAULT NULL,
    `entity_id`     int(11) DEFAULT NULL,
    `type`          tinyint(3) DEFAULT NULL,
    `sort`          int(11) NOT NULL DEFAULT '1',
    `size`          tinyint(3) DEFAULT NULL,
    `created_at`    int(11) unsigned NOT NULL,
    `updated_at`    int(11) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    KEY             `index-cms_collections_and_entities-collection_id` (`collection_id`),
    KEY             `index-cms_collections_and_entities-entities_id` (`entity_id`),
    CONSTRAINT `fkey-cms_collections_and_entities-collection_id` FOREIGN KEY (`collection_id`) REFERENCES `cms_collections` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fkey-cms_collections_and_entities-entities_id` FOREIGN KEY (`entity_id`) REFERENCES `cms_entities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_collections_and_entities`
--

LOCK
TABLES `cms_collections_and_entities` WRITE;
/*!40000 ALTER TABLE `cms_collections_and_entities` DISABLE KEYS */;
INSERT INTO `cms_collections_and_entities`
VALUES (2, 1, 8, 1, 1, 3, 1620284765, 1623681250),
       (3, 2, 8, 0, 6, 12, 1620284778, 1623681185),
       (4, 3, 8, 0, 3, 2, 1620290618, 1620381098),
       (5, 4, 8, 1, 2, 3, 1620379727, 1623681256),
       (6, 5, 8, 0, 2, 2, 1620380094, 1623681235),
       (7, 6, 8, 0, 4, 2, 1620380975, 1620380975);
/*!40000 ALTER TABLE `cms_collections_and_entities` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `cms_entities`
--

DROP TABLE IF EXISTS `cms_entities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_entities`
(
    `id`                        int(11) NOT NULL AUTO_INCREMENT,
    `name_0`                    varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_1`                    varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_2`                    varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_3`                    varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_4`                    varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `slug`                      varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `text_1`                    tinyint(3) DEFAULT NULL,
    `text_2`                    tinyint(3) DEFAULT NULL,
    `text_3`                    tinyint(3) DEFAULT NULL,
    `text_4`                    tinyint(3) DEFAULT NULL,
    `text_5`                    tinyint(3) DEFAULT NULL,
    `text_6`                    tinyint(3) DEFAULT NULL,
    `text_7`                    tinyint(3) DEFAULT NULL,
    `text_1_label`              varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `text_2_label`              varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `text_3_label`              varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `text_4_label`              varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `text_5_label`              varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `text_6_label`              varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `text_7_label`              varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_1`                    tinyint(3) DEFAULT NULL,
    `file_2`                    tinyint(3) DEFAULT NULL,
    `file_3`                    tinyint(3) DEFAULT NULL,
    `file_1_label`              varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_2_label`              varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_3_label`              varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_1_validator`          json                                 DEFAULT NULL,
    `file_2_validator`          json                                 DEFAULT NULL,
    `file_3_validator`          json                                 DEFAULT NULL,
    `use_date`                  tinyint(3) DEFAULT NULL,
    `use_status`                tinyint(3) DEFAULT NULL,
    `use_in_menu`               tinyint(3) DEFAULT NULL,
    `use_seo`                   tinyint(3) DEFAULT NULL,
    `created_at`                int(11) unsigned NOT NULL,
    `updated_at`                int(11) unsigned NOT NULL,
    `use_gallery`               tinyint(3) NOT NULL DEFAULT '0',
    `manual_slug`               tinyint(3) DEFAULT '0',
    `use_views_count`           tinyint(3) DEFAULT '0',
    `disable_create_and_delete` tinyint(3) DEFAULT '0',
    `use_watermark`             tinyint(3) DEFAULT '0',
    `disable_watermark`         tinyint(3) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `slug` (`slug`),
    UNIQUE KEY `index-cms_entities-slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_entities`
--

LOCK
TABLES `cms_entities` WRITE;
/*!40000 ALTER TABLE `cms_entities` DISABLE KEYS */;
INSERT INTO `cms_entities`
VALUES (6, 'Баннеры (Размеры 350x80)', 'Bannerlar (hajmi 350x80)', 'Banners (Sizes 350x80)', '', 'Баннерлар (хажми 350x80)', 'banner', 14, 0, 0, 0, 0, 0, 0, 'Link', 'Mavzu',
        'Ma\'lumot','Muallif','','','',1,0,0,'Rasm','','','{\"maxSize\": \"5\", \"mimeType\": [\"0\", \"1\"], \"dimensionH\": \"160\", \"dimensionW\": \"160\"}','{\"maxSize\": \"20\", \"mimeType\": [\"6\", \"7\"], \"dimensionH\": \"150\", \"dimensionW\": \"150\"}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}',0,0,0,0,1618060585,1624560254,0,0,1,0,0,NULL),(7,'Реклама','Reklama','Advertising','','Реклама','advertising',14,20,20,20,0,0,0,'Link','Text 1','Text 2','Text 3','','','',1,0,0,'Rasm','','','{\"maxSize\": \"5\", \"mimeType\": [\"0\", \"1\"], \"dimensionH\": \"160\", \"dimensionW\": \"160\"}','{\"maxSize\": \"20\", \"mimeType\": null, \"dimensionH\": \"150\", \"dimensionW\": \"150\"}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}',0,0,0,2,1618060626,1624520372,0,0,1,0,0,NULL),(8,'Посты','Maqolalar','Posts','','','posts',20,42,20,0,0,0,0,'Kichik sarlavha','Ma\'lumot','Sarlavha','','','','',2,0,0,'Fayl','','','{\"maxSize\": \"500\", \"mimeType\": [\"0\", \"1\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\"], \"dimensionH\": \"32\", \"dimensionW\": \"32\"}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}',4,0,0,2,1620284737,1624510784,1,0,1,0,1,NULL),(9,'Страницы','Sahifalar','Pages','Sahifa','Сахифалар','pages',20,42,0,0,0,0,0,'Sarlavha','Matn','','','','','',0,0,0,'','','','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}',0,0,1,2,1623162927,1623162927,1,1,0,0,0,NULL),(10,'Фотогалерея','Fotogalereya','Photo gallery','','фото галлерея','photo-gallery',0,0,0,0,0,0,0,'','','','','','','',1,0,0,'Rasm','','','{\"maxSize\": \"5\", \"mimeType\": [\"0\", \"1\"], \"dimensionH\": \"150\", \"dimensionW\": \"150\"}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}','{\"maxSize\": null, \"mimeType\": null, \"dimensionH\": null, \"dimensionW\": null}',0,0,0,0,1624704255,1624704255,0,0,0,0,0,NULL);
/*!40000 ALTER TABLE `cms_entities` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `cms_item_photos`
--

DROP TABLE IF EXISTS `cms_item_photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_item_photos`
(
    `id`          int(11) NOT NULL AUTO_INCREMENT,
    `cms_item_id` int(11) DEFAULT NULL,
    `file`        varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `sort`        int(11) DEFAULT NULL,
    `created_at`  int(11) unsigned NOT NULL,
    `updated_at`  int(11) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    KEY           `index-cms_item_id` (`cms_item_id`),
    CONSTRAINT `fkey-cms_item_id` FOREIGN KEY (`cms_item_id`) REFERENCES `cms_items` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_item_photos`
--

LOCK
TABLES `cms_item_photos` WRITE;
/*!40000 ALTER TABLE `cms_item_photos` DISABLE KEYS */;
INSERT INTO `cms_item_photos`
VALUES (4, NULL, 'шимолий осктия-алания.jpg', 0, 1620296938, 1620296938),
       (7, NULL, '1.jpg', 0, 1620297009, 1620297016),
       (8, NULL, 'британия рамазон.jpg', 1, 1620297010, 1620297016),
       (9, NULL, '1.jpg', 0, 1620382797, 1620382797),
       (10, NULL, '1140521_0_0_1500_844_1440x900_80_0_1_47299239d1d19189d92e886f51d3b68e.jpg.webp', 0, 1620382797, 1620382797),
       (12, NULL, 'британия рамазон.jpg', 1, 1620382819, 1620382831),
       (19, NULL, '630.png', 1, 1623671446, 1623671480),
       (20, NULL, '631.png', 0, 1623671446, 1623671446),
       (21, NULL, '632.png', 2, 1623671446, 1623671480),
       (25, 11, 'muslimuz1.jpg', 1, 1623994976, 1623999484),
       (26, 11, '1623934066.jpg', 0, 1623994976, 1623999484),
       (27, NULL, 'muslimuz1.jpg', 3, 1624002301, 1624002301),
       (28, 25, 'diniy kitoblar 2.png', 0, 1624002421, 1624002421),
       (29, 26, '1623934066.jpg', 0, 1624267882, 1624267896),
       (30, 26, 'books.png', 1, 1624267883, 1624267896),
       (31, 27, '2.jpg', 1, 1624275713, 1624511092),
       (32, 27, '6.jpg', 0, 1624275713, 1624511092),
       (33, 27, '8.jpg', 2, 1624275713, 1624511086),
       (34, 28, 'muslimpost1.jpg', 1, 1624513088, 1624514152),
       (35, 28, 'muslimpost2.jpg', 0, 1624514145, 1624514152),
       (36, 29, 'muslimuz3.jpg', 0, 1624514814, 1624514814),
       (37, 30, '103774429-allah-translation-in-the-name-of-god-gold-background-gold-geometrical-islamic-motif-or-ornament.jpg', 0, 1624532967, 1624532967),
       (38, 31, 'muslim-background-4728869_1280.jpg', 0, 1624598036, 1624598036),
       (39, 32, '119410_367.jpeg', 0, 1624598632, 1624598632),
       (40, 33, '1.jpg', 0, 1624617163, 1624617163),
       (41, 34, '2.jpg', 0, 1624618616, 1624618616),
       (42, 39, 'muslim5.jpg', 0, 1624710821, 1624710821);
/*!40000 ALTER TABLE `cms_item_photos` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `cms_items`
--

DROP TABLE IF EXISTS `cms_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_items`
(
    `id`            int(11) NOT NULL AUTO_INCREMENT,
    `entity_id`     int(11) NOT NULL,
    `slug`          varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `text_1_0`      mediumtext COLLATE utf8_unicode_ci,
    `text_1_1`      mediumtext COLLATE utf8_unicode_ci,
    `text_1_2`      mediumtext COLLATE utf8_unicode_ci,
    `text_1_3`      mediumtext COLLATE utf8_unicode_ci,
    `text_1_4`      mediumtext COLLATE utf8_unicode_ci,
    `text_2_0`      mediumtext COLLATE utf8_unicode_ci,
    `text_2_1`      mediumtext COLLATE utf8_unicode_ci,
    `text_2_2`      mediumtext COLLATE utf8_unicode_ci,
    `text_2_3`      mediumtext COLLATE utf8_unicode_ci,
    `text_2_4`      mediumtext COLLATE utf8_unicode_ci,
    `text_3_0`      mediumtext COLLATE utf8_unicode_ci,
    `text_3_1`      mediumtext COLLATE utf8_unicode_ci,
    `text_3_2`      mediumtext COLLATE utf8_unicode_ci,
    `text_3_3`      mediumtext COLLATE utf8_unicode_ci,
    `text_3_4`      mediumtext COLLATE utf8_unicode_ci,
    `text_4_0`      mediumtext COLLATE utf8_unicode_ci,
    `text_4_1`      mediumtext COLLATE utf8_unicode_ci,
    `text_4_2`      mediumtext COLLATE utf8_unicode_ci,
    `text_4_3`      mediumtext COLLATE utf8_unicode_ci,
    `text_4_4`      mediumtext COLLATE utf8_unicode_ci,
    `text_5_0`      mediumtext COLLATE utf8_unicode_ci,
    `text_5_1`      mediumtext COLLATE utf8_unicode_ci,
    `text_5_2`      mediumtext COLLATE utf8_unicode_ci,
    `text_5_3`      mediumtext COLLATE utf8_unicode_ci,
    `text_5_4`      mediumtext COLLATE utf8_unicode_ci,
    `text_6_0`      mediumtext COLLATE utf8_unicode_ci,
    `text_6_1`      mediumtext COLLATE utf8_unicode_ci,
    `text_6_2`      mediumtext COLLATE utf8_unicode_ci,
    `text_6_3`      mediumtext COLLATE utf8_unicode_ci,
    `text_6_4`      mediumtext COLLATE utf8_unicode_ci,
    `text_7_0`      mediumtext COLLATE utf8_unicode_ci,
    `text_7_1`      mediumtext COLLATE utf8_unicode_ci,
    `text_7_2`      mediumtext COLLATE utf8_unicode_ci,
    `text_7_3`      mediumtext COLLATE utf8_unicode_ci,
    `text_7_4`      mediumtext COLLATE utf8_unicode_ci,
    `file_1_0`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_1_1`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_1_2`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_1_3`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_1_4`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_2_0`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_2_1`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_2_2`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_2_3`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_2_4`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_3_0`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_3_1`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_3_2`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_3_3`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_3_4`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `seo_values`    json                                 DEFAULT NULL,
    `date_0`        int(11) unsigned DEFAULT NULL,
    `status`        tinyint(3) DEFAULT NULL,
    `created_at`    int(11) unsigned NOT NULL,
    `updated_at`    int(11) unsigned NOT NULL,
    `main_photo_id` int(11) DEFAULT NULL,
    `views_count`   int(11) NOT NULL DEFAULT '0',
    `created_by`    int(11) DEFAULT NULL,
    `updated_by`    int(11) DEFAULT NULL,
    `date_1`        int(11) unsigned DEFAULT NULL,
    `date_2`        int(11) unsigned DEFAULT NULL,
    `date_3`        int(11) unsigned DEFAULT NULL,
    `date_4`        int(11) unsigned DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `slug` (`slug`),
    UNIQUE KEY `index-cms_items-slug` (`slug`),
    KEY             `index-cms_items-entity_id` (`entity_id`),
    KEY             `index-cms_item-photos-main` (`main_photo_id`),
    CONSTRAINT `fkey-cms_item-photos-main` FOREIGN KEY (`main_photo_id`) REFERENCES `cms_item_photos` (`id`) ON DELETE SET NULL,
    CONSTRAINT `fkey-cms_items-entity_id` FOREIGN KEY (`entity_id`) REFERENCES `cms_entities` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_items`
--

LOCK
TABLES `cms_items` WRITE;
/*!40000 ALTER TABLE `cms_items` DISABLE KEYS */;
INSERT INTO `cms_items`
VALUES (3, 7, 'https-muslim-sayti-uz-uz-articles-11', 'https://muslim.sayti.uz/uz/articles/11', NULL, NULL, NULL, NULL, 'Pедактор', 'Muxarrir', 'Editor', 'محرر', 'Мухаррир', 'MUSLIM.UZ', 'MUSLIM.UZ', 'MUSLIM.UZ', 'MUSLIM.UZ', 'MUSLIM.UZ',
        'Исламский информационно-образовательный портал', 'Islomiy ma\'lumotlar va ta\'lim portali', 'Islamic information and education portal', 'بوابة المعلومات والتعليم الإسلامية', 'Исломий маълумотлар ва таълим портали', NULL, NULL, NULL, NULL,
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'adaccf15b28f2991c31336f0eb89e5a094078093.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
    \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": \"\", \"meta_title_1\": \"\", \"meta_title_2\": \"\", \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1624511553, NULL, 1618310982, 1624511612, NULL, 0, NULL, 1, 1624511553, 1624511553, 1624511553, 1624511553),
       (11, 8, 'ganimat-kechalar', 'Ғанимат кечалар', 'Ғанимат кечалар', 'Ғанимат кечалар', 'Ғанимат кечалар', 'Ғанимат кечалар',
        '<p>&lt;p&gt;Юртимизда моҳи Рамазон! Яқиндагина уни интизорлик билан кутаётган эдик. Энди эса бу ойнинг иккинчи ўн куни &amp;ndash; мағфират даҳаси охирламоқда. Алҳамдулиллаҳ, саҳобаи киромлар йил бўйи интизор кутган мағфират ойида турибмиз.&lt;/p&gt;&lt;p&gt;Рамазон руҳан покланиш, ахлоқан юксалиш ойидир. Унда шайтонлар кишанланиб, ёмонликка чорловчи васвасаларига чек қўйилади, инсонларга ўз нафсининг ёмонликларидан қутилиб, гуноҳлардан тикланиш кишиларга ўзларини тарбиялашга имкон берилади. Зеро, бу ойда рўза тутиб, бир қатор ноқулайликларга, машаққатларга қарамай, ўзининг энг муҳим эҳтиёжларини тийган киши сабр ва чидамнинг энг юқори даражаларини ўзлаштиради. Шунинг учун ҳам, ҳадисда: &amp;laquo;У (Рамазон) сабр ойидир, сабрнинг савоби эса жаннатдир&amp;raquo;, дейилган. Ана шу жаннатга эришиш учун эса ушбу ойнинг ҳар бир лаҳзасини ғанимат билиб, улардан имкон қадар кўпроқ савоб олиб қолишдир.&lt;/p&gt;&lt;p&gt;Мўмин кун бўйи рўзадор бўлиб, савоб олади. Кечаси эса ибодат билан ўтказиш, кўпроқ истиғфор айтиб, тавба қилиш, бу ойда гуноҳлардан покланиб олиш учун берилган энг яхши имкониятдир. Бу Аллоҳ таолонинг мўмин бандаларига энг ҳайрли ўлжани &amp;ndash; савобларни, мағфиратни, раҳматни&amp;nbsp; осонлик билан қўлга киритиш онларидир.&lt;/p&gt;&lt;p&gt;Рамазон кечаларига алоҳида файз бағишлайдиган, мўминлар кўнглини илоҳий даргоҳга йўналтириб, ҳотиржамлик индирувчи ибодат бу &amp;ndash; таровеҳ намозидир. Пайғамбаримиз (соллаллоҳу алайҳи ва саллам): &amp;ldquo;Ким Аллоҳдан савоб умид этиб, Рамазон намозини (таровеҳни) ўқиса, олдинги гуноҳлари кечирилади&amp;rdquo;, дея марҳамат қилганлар&amp;nbsp;&lt;em&gt;(Имом Бухорий, Имом Муслим ривояти)&lt;/em&gt;.&lt;/p&gt;&lt;p&gt;Дастлаб тарқоқ ҳолда ўқилган таровеҳ намози Умар ибн Хаттоб (розияллоҳу анҳу) даврларига келиб жамоат ҳолида адо этила бошланди. Таровеҳ&amp;rdquo; луғатда &amp;ldquo;ором олдириш, дам бериш&amp;rdquo; маъноларида келган &amp;ldquo;тарвеҳа&amp;rdquo; сўзининг кўплик шаклидир. Истилоҳда Рамазон ойида хуфтоннинг суннати ва витр намози ўртасида ўқиладиган намозга нисбатан ишлатилади. Намознинг ҳар тўрт ракатидан сўнг тўхтаб, дам олингани учун &amp;ldquo;таровеҳ&amp;rdquo; деб ном берилган.&amp;nbsp; Мўминлар ўша даврдан ҳозир шу пайтгача ҳадиси шарифда муждаси берилган савобдан умид қилган ҳолда ана шу ибодатни адо этиб келмоқдалар.&lt;/p&gt;&lt;p&gt;Рамазон ойининг фазилатларидан яна бири бу ойда Каломуллоҳнинг нозил этилганидир. Шу сабаб бу ойда кўпроқ тиловати Қуръон қилиш мўминларнинг қалбини нурлантиради. Қуръони карим Аллоҳ таолонинг муборак каломи ўлароқ қадри баланд, тиловати ибодат бўлган энг улуғ каломдир. Шунга кўра, уни севиш, ўрганиш, тарқатиш, маъноларини ўзлаштириш ўзига хос фазилат бўлиб, Расули (акрам) бу шарафли амалларга Аллоҳ таолонинг алоҳида ажр-мукофотлари ваъда қилинган. Расулуллоҳ (соллаллоҳу алайҳи ва саллам) айтдилар: &amp;ldquo;Кимки агар Аллоҳнинг китобидан бир дона ҳарф ўқиса, бас, унга бир яхшилик ёзилади. Ва бир яхшилик эвазига ўн баробар унинг мислича мукофот бордир! Мен: &amp;ldquo;алиф лом мим&amp;rdquo; бир ҳарфдир, демайман. Балки, &amp;ldquo;алиф&amp;rdquo; бир ҳарфдир, &amp;ldquo;лом&amp;rdquo; бир ҳарфдир, &amp;ldquo;мим&amp;rdquo; бир ҳарфдир!&amp;rdquo;&amp;nbsp;&lt;em&gt;(Имом Термизий ривояти)&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Ибн Аббос (розияллоҳу анҳу)дан ривоят: &amp;laquo;Набий (соллаллоҳу алайҳи васаллам) яхшилик қилишда одамларнинг энг сахийси эдилар. У зотнинг энг сахий бўлганлари эса, Рамазонда Жаброил мулоқотларига келганда бўлар эди. Жаброил (алайҳиссалом) Рамазон тамом бўлгунча ҳар кеча У зотнинг ҳузурларига келар эди. Пайғамбар (соллаллоҳу алайҳи васаллам) унга Қуръонни арз қилар (ўқиб берар) эдилар&amp;raquo;.&lt;/p&gt;&lt;p&gt;Ислом олимлари Расули акрам (соллаллоҳу алайҳи ва саллам) Жаброил (алайҳиссалом)га Қуръони арз қилиб берганлари каби ҳар бир мўмин ушбу муборак ойда Каломуллоҳни бир бир хатм қилиши лозимлигини таъкидлаганлар.&lt;/p&gt;&lt;p&gt;Рамазон ойида ҳар кечани ибодат ва тиловат билан ўтказайлик. Токи, ғанимат бу лайзалар номаи амолимизга савоблар қилинган ой дея битилсин!&lt;/p&gt;</p>\r\n',
        '<p>&lt;p&gt;Юртимизда моҳи Рамазон! Яқиндагина уни интизорлик билан кутаётган эдик. Энди эса бу ойнинг иккинчи ўн куни &amp;ndash; мағфират даҳаси охирламоқда. Алҳамдулиллаҳ, саҳобаи киромлар йил бўйи интизор кутган мағфират ойида турибмиз.&lt;/p&gt;&lt;p&gt;Рамазон руҳан покланиш, ахлоқан юксалиш ойидир. Унда шайтонлар кишанланиб, ёмонликка чорловчи васвасаларига чек қўйилади, инсонларга ўз нафсининг ёмонликларидан қутилиб, гуноҳлардан тикланиш кишиларга ўзларини тарбиялашга имкон берилади. Зеро, бу ойда рўза тутиб, бир қатор ноқулайликларга, машаққатларга қарамай, ўзининг энг муҳим эҳтиёжларини тийган киши сабр ва чидамнинг энг юқори даражаларини ўзлаштиради. Шунинг учун ҳам, ҳадисда: &amp;laquo;У (Рамазон) сабр ойидир, сабрнинг савоби эса жаннатдир&amp;raquo;, дейилган. Ана шу жаннатга эришиш учун эса ушбу ойнинг ҳар бир лаҳзасини ғанимат билиб, улардан имкон қадар кўпроқ савоб олиб қолишдир.&lt;/p&gt;&lt;p&gt;Мўмин кун бўйи рўзадор бўлиб, савоб олади. Кечаси эса ибодат билан ўтказиш, кўпроқ истиғфор айтиб, тавба қилиш, бу ойда гуноҳлардан покланиб олиш учун берилган энг яхши имкониятдир. Бу Аллоҳ таолонинг мўмин бандаларига энг ҳайрли ўлжани &amp;ndash; савобларни, мағфиратни, раҳматни&amp;nbsp; осонлик билан қўлга киритиш онларидир.&lt;/p&gt;&lt;p&gt;Рамазон кечаларига алоҳида файз бағишлайдиган, мўминлар кўнглини илоҳий даргоҳга йўналтириб, ҳотиржамлик индирувчи ибодат бу &amp;ndash; таровеҳ намозидир. Пайғамбаримиз (соллаллоҳу алайҳи ва саллам): &amp;ldquo;Ким Аллоҳдан савоб умид этиб, Рамазон намозини (таровеҳни) ўқиса, олдинги гуноҳлари кечирилади&amp;rdquo;, дея марҳамат қилганлар&amp;nbsp;&lt;em&gt;(Имом Бухорий, Имом Муслим ривояти)&lt;/em&gt;.&lt;/p&gt;&lt;p&gt;Дастлаб тарқоқ ҳолда ўқилган таровеҳ намози Умар ибн Хаттоб (розияллоҳу анҳу) даврларига келиб жамоат ҳолида адо этила бошланди. Таровеҳ&amp;rdquo; луғатда &amp;ldquo;ором олдириш, дам бериш&amp;rdquo; маъноларида келган &amp;ldquo;тарвеҳа&amp;rdquo; сўзининг кўплик шаклидир. Истилоҳда Рамазон ойида хуфтоннинг суннати ва витр намози ўртасида ўқиладиган намозга нисбатан ишлатилади. Намознинг ҳар тўрт ракатидан сўнг тўхтаб, дам олингани учун &amp;ldquo;таровеҳ&amp;rdquo; деб ном берилган.&amp;nbsp; Мўминлар ўша даврдан ҳозир шу пайтгача ҳадиси шарифда муждаси берилган савобдан умид қилган ҳолда ана шу ибодатни адо этиб келмоқдалар.&lt;/p&gt;&lt;p&gt;Рамазон ойининг фазилатларидан яна бири бу ойда Каломуллоҳнинг нозил этилганидир. Шу сабаб бу ойда кўпроқ тиловати Қуръон қилиш мўминларнинг қалбини нурлантиради. Қуръони карим Аллоҳ таолонинг муборак каломи ўлароқ қадри баланд, тиловати ибодат бўлган энг улуғ каломдир. Шунга кўра, уни севиш, ўрганиш, тарқатиш, маъноларини ўзлаштириш ўзига хос фазилат бўлиб, Расули (акрам) бу шарафли амалларга Аллоҳ таолонинг алоҳида ажр-мукофотлари ваъда қилинган. Расулуллоҳ (соллаллоҳу алайҳи ва саллам) айтдилар: &amp;ldquo;Кимки агар Аллоҳнинг китобидан бир дона ҳарф ўқиса, бас, унга бир яхшилик ёзилади. Ва бир яхшилик эвазига ўн баробар унинг мислича мукофот бордир! Мен: &amp;ldquo;алиф лом мим&amp;rdquo; бир ҳарфдир, демайман. Балки, &amp;ldquo;алиф&amp;rdquo; бир ҳарфдир, &amp;ldquo;лом&amp;rdquo; бир ҳарфдир, &amp;ldquo;мим&amp;rdquo; бир ҳарфдир!&amp;rdquo;&amp;nbsp;&lt;em&gt;(Имом Термизий ривояти)&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Ибн Аббос (розияллоҳу анҳу)дан ривоят: &amp;laquo;Набий (соллаллоҳу алайҳи васаллам) яхшилик қилишда одамларнинг энг сахийси эдилар. У зотнинг энг сахий бўлганлари эса, Рамазонда Жаброил мулоқотларига келганда бўлар эди. Жаброил (алайҳиссалом) Рамазон тамом бўлгунча ҳар кеча У зотнинг ҳузурларига келар эди. Пайғамбар (соллаллоҳу алайҳи васаллам) унга Қуръонни арз қилар (ўқиб берар) эдилар&amp;raquo;.&lt;/p&gt;&lt;p&gt;Ислом олимлари Расули акрам (соллаллоҳу алайҳи ва саллам) Жаброил (алайҳиссалом)га Қуръони арз қилиб берганлари каби ҳар бир мўмин ушбу муборак ойда Каломуллоҳни бир бир хатм қилиши лозимлигини таъкидлаганлар.&lt;/p&gt;&lt;p&gt;Рамазон ойида ҳар кечани ибодат ва тиловат билан ўтказайлик. Токи, ғанимат бу лайзалар номаи амолимизга савоблар қилинган ой дея битилсин!&lt;/p&gt;</p>\r\n',
        '<p>&lt;p&gt;Юртимизда моҳи Рамазон! Яқиндагина уни интизорлик билан кутаётган эдик. Энди эса бу ойнинг иккинчи ўн куни &amp;ndash; мағфират даҳаси охирламоқда. Алҳамдулиллаҳ, саҳобаи киромлар йил бўйи интизор кутган мағфират ойида турибмиз.&lt;/p&gt;&lt;p&gt;Рамазон руҳан покланиш, ахлоқан юксалиш ойидир. Унда шайтонлар кишанланиб, ёмонликка чорловчи васвасаларига чек қўйилади, инсонларга ўз нафсининг ёмонликларидан қутилиб, гуноҳлардан тикланиш кишиларга ўзларини тарбиялашга имкон берилади. Зеро, бу ойда рўза тутиб, бир қатор ноқулайликларга, машаққатларга қарамай, ўзининг энг муҳим эҳтиёжларини тийган киши сабр ва чидамнинг энг юқори даражаларини ўзлаштиради. Шунинг учун ҳам, ҳадисда: &amp;laquo;У (Рамазон) сабр ойидир, сабрнинг савоби эса жаннатдир&amp;raquo;, дейилган. Ана шу жаннатга эришиш учун эса ушбу ойнинг ҳар бир лаҳзасини ғанимат билиб, улардан имкон қадар кўпроқ савоб олиб қолишдир.&lt;/p&gt;&lt;p&gt;Мўмин кун бўйи рўзадор бўлиб, савоб олади. Кечаси эса ибодат билан ўтказиш, кўпроқ истиғфор айтиб, тавба қилиш, бу ойда гуноҳлардан покланиб олиш учун берилган энг яхши имкониятдир. Бу Аллоҳ таолонинг мўмин бандаларига энг ҳайрли ўлжани &amp;ndash; савобларни, мағфиратни, раҳматни&amp;nbsp; осонлик билан қўлга киритиш онларидир.&lt;/p&gt;&lt;p&gt;Рамазон кечаларига алоҳида файз бағишлайдиган, мўминлар кўнглини илоҳий даргоҳга йўналтириб, ҳотиржамлик индирувчи ибодат бу &amp;ndash; таровеҳ намозидир. Пайғамбаримиз (соллаллоҳу алайҳи ва саллам): &amp;ldquo;Ким Аллоҳдан савоб умид этиб, Рамазон намозини (таровеҳни) ўқиса, олдинги гуноҳлари кечирилади&amp;rdquo;, дея марҳамат қилганлар&amp;nbsp;&lt;em&gt;(Имом Бухорий, Имом Муслим ривояти)&lt;/em&gt;.&lt;/p&gt;&lt;p&gt;Дастлаб тарқоқ ҳолда ўқилган таровеҳ намози Умар ибн Хаттоб (розияллоҳу анҳу) даврларига келиб жамоат ҳолида адо этила бошланди. Таровеҳ&amp;rdquo; луғатда &amp;ldquo;ором олдириш, дам бериш&amp;rdquo; маъноларида келган &amp;ldquo;тарвеҳа&amp;rdquo; сўзининг кўплик шаклидир. Истилоҳда Рамазон ойида хуфтоннинг суннати ва витр намози ўртасида ўқиладиган намозга нисбатан ишлатилади. Намознинг ҳар тўрт ракатидан сўнг тўхтаб, дам олингани учун &amp;ldquo;таровеҳ&amp;rdquo; деб ном берилган.&amp;nbsp; Мўминлар ўша даврдан ҳозир шу пайтгача ҳадиси шарифда муждаси берилган савобдан умид қилган ҳолда ана шу ибодатни адо этиб келмоқдалар.&lt;/p&gt;&lt;p&gt;Рамазон ойининг фазилатларидан яна бири бу ойда Каломуллоҳнинг нозил этилганидир. Шу сабаб бу ойда кўпроқ тиловати Қуръон қилиш мўминларнинг қалбини нурлантиради. Қуръони карим Аллоҳ таолонинг муборак каломи ўлароқ қадри баланд, тиловати ибодат бўлган энг улуғ каломдир. Шунга кўра, уни севиш, ўрганиш, тарқатиш, маъноларини ўзлаштириш ўзига хос фазилат бўлиб, Расули (акрам) бу шарафли амалларга Аллоҳ таолонинг алоҳида ажр-мукофотлари ваъда қилинган. Расулуллоҳ (соллаллоҳу алайҳи ва саллам) айтдилар: &amp;ldquo;Кимки агар Аллоҳнинг китобидан бир дона ҳарф ўқиса, бас, унга бир яхшилик ёзилади. Ва бир яхшилик эвазига ўн баробар унинг мислича мукофот бордир! Мен: &amp;ldquo;алиф лом мим&amp;rdquo; бир ҳарфдир, демайман. Балки, &amp;ldquo;алиф&amp;rdquo; бир ҳарфдир, &amp;ldquo;лом&amp;rdquo; бир ҳарфдир, &amp;ldquo;мим&amp;rdquo; бир ҳарфдир!&amp;rdquo;&amp;nbsp;&lt;em&gt;(Имом Термизий ривояти)&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Ибн Аббос (розияллоҳу анҳу)дан ривоят: &amp;laquo;Набий (соллаллоҳу алайҳи васаллам) яхшилик қилишда одамларнинг энг сахийси эдилар. У зотнинг энг сахий бўлганлари эса, Рамазонда Жаброил мулоқотларига келганда бўлар эди. Жаброил (алайҳиссалом) Рамазон тамом бўлгунча ҳар кеча У зотнинг ҳузурларига келар эди. Пайғамбар (соллаллоҳу алайҳи васаллам) унга Қуръонни арз қилар (ўқиб берар) эдилар&amp;raquo;.&lt;/p&gt;&lt;p&gt;Ислом олимлари Расули акрам (соллаллоҳу алайҳи ва саллам) Жаброил (алайҳиссалом)га Қуръони арз қилиб берганлари каби ҳар бир мўмин ушбу муборак ойда Каломуллоҳни бир бир хатм қилиши лозимлигини таъкидлаганлар.&lt;/p&gt;&lt;p&gt;Рамазон ойида ҳар кечани ибодат ва тиловат билан ўтказайлик. Токи, ғанимат бу лайзалар номаи амолимизга савоблар қилинган ой дея битилсин!&lt;/p&gt;</p>\r\n',
        '<p>&lt;p&gt;Юртимизда моҳи Рамазон! Яқиндагина уни интизорлик билан кутаётган эдик. Энди эса бу ойнинг иккинчи ўн куни &amp;ndash; мағфират даҳаси охирламоқда. Алҳамдулиллаҳ, саҳобаи киромлар йил бўйи интизор кутган мағфират ойида турибмиз.&lt;/p&gt;&lt;p&gt;Рамазон руҳан покланиш, ахлоқан юксалиш ойидир. Унда шайтонлар кишанланиб, ёмонликка чорловчи васвасаларига чек қўйилади, инсонларга ўз нафсининг ёмонликларидан қутилиб, гуноҳлардан тикланиш кишиларга ўзларини тарбиялашга имкон берилади. Зеро, бу ойда рўза тутиб, бир қатор ноқулайликларга, машаққатларга қарамай, ўзининг энг муҳим эҳтиёжларини тийган киши сабр ва чидамнинг энг юқори даражаларини ўзлаштиради. Шунинг учун ҳам, ҳадисда: &amp;laquo;У (Рамазон) сабр ойидир, сабрнинг савоби эса жаннатдир&amp;raquo;, дейилган. Ана шу жаннатга эришиш учун эса ушбу ойнинг ҳар бир лаҳзасини ғанимат билиб, улардан имкон қадар кўпроқ савоб олиб қолишдир.&lt;/p&gt;&lt;p&gt;Мўмин кун бўйи рўзадор бўлиб, савоб олади. Кечаси эса ибодат билан ўтказиш, кўпроқ истиғфор айтиб, тавба қилиш, бу ойда гуноҳлардан покланиб олиш учун берилган энг яхши имкониятдир. Бу Аллоҳ таолонинг мўмин бандаларига энг ҳайрли ўлжани &amp;ndash; савобларни, мағфиратни, раҳматни&amp;nbsp; осонлик билан қўлга киритиш онларидир.&lt;/p&gt;&lt;p&gt;Рамазон кечаларига алоҳида файз бағишлайдиган, мўминлар кўнглини илоҳий даргоҳга йўналтириб, ҳотиржамлик индирувчи ибодат бу &amp;ndash; таровеҳ намозидир. Пайғамбаримиз (соллаллоҳу алайҳи ва саллам): &amp;ldquo;Ким Аллоҳдан савоб умид этиб, Рамазон намозини (таровеҳни) ўқиса, олдинги гуноҳлари кечирилади&amp;rdquo;, дея марҳамат қилганлар&amp;nbsp;&lt;em&gt;(Имом Бухорий, Имом Муслим ривояти)&lt;/em&gt;.&lt;/p&gt;&lt;p&gt;Дастлаб тарқоқ ҳолда ўқилган таровеҳ намози Умар ибн Хаттоб (розияллоҳу анҳу) даврларига келиб жамоат ҳолида адо этила бошланди. Таровеҳ&amp;rdquo; луғатда &amp;ldquo;ором олдириш, дам бериш&amp;rdquo; маъноларида келган &amp;ldquo;тарвеҳа&amp;rdquo; сўзининг кўплик шаклидир. Истилоҳда Рамазон ойида хуфтоннинг суннати ва витр намози ўртасида ўқиладиган намозга нисбатан ишлатилади. Намознинг ҳар тўрт ракатидан сўнг тўхтаб, дам олингани учун &amp;ldquo;таровеҳ&amp;rdquo; деб ном берилган.&amp;nbsp; Мўминлар ўша даврдан ҳозир шу пайтгача ҳадиси шарифда муждаси берилган савобдан умид қилган ҳолда ана шу ибодатни адо этиб келмоқдалар.&lt;/p&gt;&lt;p&gt;Рамазон ойининг фазилатларидан яна бири бу ойда Каломуллоҳнинг нозил этилганидир. Шу сабаб бу ойда кўпроқ тиловати Қуръон қилиш мўминларнинг қалбини нурлантиради. Қуръони карим Аллоҳ таолонинг муборак каломи ўлароқ қадри баланд, тиловати ибодат бўлган энг улуғ каломдир. Шунга кўра, уни севиш, ўрганиш, тарқатиш, маъноларини ўзлаштириш ўзига хос фазилат бўлиб, Расули (акрам) бу шарафли амалларга Аллоҳ таолонинг алоҳида ажр-мукофотлари ваъда қилинган. Расулуллоҳ (соллаллоҳу алайҳи ва саллам) айтдилар: &amp;ldquo;Кимки агар Аллоҳнинг китобидан бир дона ҳарф ўқиса, бас, унга бир яхшилик ёзилади. Ва бир яхшилик эвазига ўн баробар унинг мислича мукофот бордир! Мен: &amp;ldquo;алиф лом мим&amp;rdquo; бир ҳарфдир, демайман. Балки, &amp;ldquo;алиф&amp;rdquo; бир ҳарфдир, &amp;ldquo;лом&amp;rdquo; бир ҳарфдир, &amp;ldquo;мим&amp;rdquo; бир ҳарфдир!&amp;rdquo;&amp;nbsp;&lt;em&gt;(Имом Термизий ривояти)&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Ибн Аббос (розияллоҳу анҳу)дан ривоят: &amp;laquo;Набий (соллаллоҳу алайҳи васаллам) яхшилик қилишда одамларнинг энг сахийси эдилар. У зотнинг энг сахий бўлганлари эса, Рамазонда Жаброил мулоқотларига келганда бўлар эди. Жаброил (алайҳиссалом) Рамазон тамом бўлгунча ҳар кеча У зотнинг ҳузурларига келар эди. Пайғамбар (соллаллоҳу алайҳи васаллам) унга Қуръонни арз қилар (ўқиб берар) эдилар&amp;raquo;.&lt;/p&gt;&lt;p&gt;Ислом олимлари Расули акрам (соллаллоҳу алайҳи ва саллам) Жаброил (алайҳиссалом)га Қуръони арз қилиб берганлари каби ҳар бир мўмин ушбу муборак ойда Каломуллоҳни бир бир хатм қилиши лозимлигини таъкидлаганлар.&lt;/p&gt;&lt;p&gt;Рамазон ойида ҳар кечани ибодат ва тиловат билан ўтказайлик. Токи, ғанимат бу лайзалар номаи амолимизга савоблар қилинган ой дея битилсин!&lt;/p&gt;</p>\r\n',
        '<p>&lt;p&gt;Юртимизда моҳи Рамазон! Яқиндагина уни интизорлик билан кутаётган эдик. Энди эса бу ойнинг иккинчи ўн куни &amp;ndash; мағфират даҳаси охирламоқда. Алҳамдулиллаҳ, саҳобаи киромлар йил бўйи интизор кутган мағфират ойида турибмиз.&lt;/p&gt;&lt;p&gt;Рамазон руҳан покланиш, ахлоқан юксалиш ойидир. Унда шайтонлар кишанланиб, ёмонликка чорловчи васвасаларига чек қўйилади, инсонларга ўз нафсининг ёмонликларидан қутилиб, гуноҳлардан тикланиш кишиларга ўзларини тарбиялашга имкон берилади. Зеро, бу ойда рўза тутиб, бир қатор ноқулайликларга, машаққатларга қарамай, ўзининг энг муҳим эҳтиёжларини тийган киши сабр ва чидамнинг энг юқори даражаларини ўзлаштиради. Шунинг учун ҳам, ҳадисда: &amp;laquo;У (Рамазон) сабр ойидир, сабрнинг савоби эса жаннатдир&amp;raquo;, дейилган. Ана шу жаннатга эришиш учун эса ушбу ойнинг ҳар бир лаҳзасини ғанимат билиб, улардан имкон қадар кўпроқ савоб олиб қолишдир.&lt;/p&gt;&lt;p&gt;Мўмин кун бўйи рўзадор бўлиб, савоб олади. Кечаси эса ибодат билан ўтказиш, кўпроқ истиғфор айтиб, тавба қилиш, бу ойда гуноҳлардан покланиб олиш учун берилган энг яхши имкониятдир. Бу Аллоҳ таолонинг мўмин бандаларига энг ҳайрли ўлжани &amp;ndash; савобларни, мағфиратни, раҳматни&amp;nbsp; осонлик билан қўлга киритиш онларидир.&lt;/p&gt;&lt;p&gt;Рамазон кечаларига алоҳида файз бағишлайдиган, мўминлар кўнглини илоҳий даргоҳга йўналтириб, ҳотиржамлик индирувчи ибодат бу &amp;ndash; таровеҳ намозидир. Пайғамбаримиз (соллаллоҳу алайҳи ва саллам): &amp;ldquo;Ким Аллоҳдан савоб умид этиб, Рамазон намозини (таровеҳни) ўқиса, олдинги гуноҳлари кечирилади&amp;rdquo;, дея марҳамат қилганлар&amp;nbsp;&lt;em&gt;(Имом Бухорий, Имом Муслим ривояти)&lt;/em&gt;.&lt;/p&gt;&lt;p&gt;Дастлаб тарқоқ ҳолда ўқилган таровеҳ намози Умар ибн Хаттоб (розияллоҳу анҳу) даврларига келиб жамоат ҳолида адо этила бошланди. Таровеҳ&amp;rdquo; луғатда &amp;ldquo;ором олдириш, дам бериш&amp;rdquo; маъноларида келган &amp;ldquo;тарвеҳа&amp;rdquo; сўзининг кўплик шаклидир. Истилоҳда Рамазон ойида хуфтоннинг суннати ва витр намози ўртасида ўқиладиган намозга нисбатан ишлатилади. Намознинг ҳар тўрт ракатидан сўнг тўхтаб, дам олингани учун &amp;ldquo;таровеҳ&amp;rdquo; деб ном берилган.&amp;nbsp; Мўминлар ўша даврдан ҳозир шу пайтгача ҳадиси шарифда муждаси берилган савобдан умид қилган ҳолда ана шу ибодатни адо этиб келмоқдалар.&lt;/p&gt;&lt;p&gt;Рамазон ойининг фазилатларидан яна бири бу ойда Каломуллоҳнинг нозил этилганидир. Шу сабаб бу ойда кўпроқ тиловати Қуръон қилиш мўминларнинг қалбини нурлантиради. Қуръони карим Аллоҳ таолонинг муборак каломи ўлароқ қадри баланд, тиловати ибодат бўлган энг улуғ каломдир. Шунга кўра, уни севиш, ўрганиш, тарқатиш, маъноларини ўзлаштириш ўзига хос фазилат бўлиб, Расули (акрам) бу шарафли амалларга Аллоҳ таолонинг алоҳида ажр-мукофотлари ваъда қилинган. Расулуллоҳ (соллаллоҳу алайҳи ва саллам) айтдилар: &amp;ldquo;Кимки агар Аллоҳнинг китобидан бир дона ҳарф ўқиса, бас, унга бир яхшилик ёзилади. Ва бир яхшилик эвазига ўн баробар унинг мислича мукофот бордир! Мен: &amp;ldquo;алиф лом мим&amp;rdquo; бир ҳарфдир, демайман. Балки, &amp;ldquo;алиф&amp;rdquo; бир ҳарфдир, &amp;ldquo;лом&amp;rdquo; бир ҳарфдир, &amp;ldquo;мим&amp;rdquo; бир ҳарфдир!&amp;rdquo;&amp;nbsp;&lt;em&gt;(Имом Термизий ривояти)&lt;/em&gt;&lt;/p&gt;&lt;p&gt;Ибн Аббос (розияллоҳу анҳу)дан ривоят: &amp;laquo;Набий (соллаллоҳу алайҳи васаллам) яхшилик қилишда одамларнинг энг сахийси эдилар. У зотнинг энг сахий бўлганлари эса, Рамазонда Жаброил мулоқотларига келганда бўлар эди. Жаброил (алайҳиссалом) Рамазон тамом бўлгунча ҳар кеча У зотнинг ҳузурларига келар эди. Пайғамбар (соллаллоҳу алайҳи васаллам) унга Қуръонни арз қилар (ўқиб берар) эдилар&amp;raquo;.&lt;/p&gt;&lt;p&gt;Ислом олимлари Расули акрам (соллаллоҳу алайҳи ва саллам) Жаброил (алайҳиссалом)га Қуръони арз қилиб берганлари каби ҳар бир мўмин ушбу муборак ойда Каломуллоҳни бир бир хатм қилиши лозимлигини таъкидлаганлар.&lt;/p&gt;&lt;p&gt;Рамазон ойида ҳар кечани ибодат ва тиловат билан ўтказайлик. Токи, ғанимат бу лайзалар номаи амолимизга савоблар қилинган ой дея битилсин!&lt;/p&gt;</p>\r\n',
        'Munosabat : Ғанимат кечалар ', 'Munosabat : Ғанимат кечалар ', 'Munosabat : Ғанимат кечалар ', 'Munosabat : Ғанимат кечалар ', 'Munosabat : Ғанимат кечалар ', 'Elnur Suyunov', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'live-preview.jpg', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"Юртимизда моҳи Рамазон! Яқиндагина уни интизорлик билан кутаётган эдик. Энди эса бу ойнинг иккинчи ўн куни – мағфират даҳаси охирламоқда. Алҳамдулиллаҳ, саҳобаи киромлар йил бўйи интизор кутган мағфират ойида турибмиз.\\r\\n\\r\\n\", \"meta_des_1\": \"Юртимизда моҳи Рамазон! Яқиндагина уни интизорлик билан кутаётган эдик. Энди эса бу ойнинг иккинчи ўн куни – мағфират даҳаси охирламоқда. Алҳамдулиллаҳ, саҳобаи киромлар йил бўйи интизор кутган мағфират ойида турибмиз.\\r\\n\\r\\n\", \"meta_des_2\": \"Юртимизда моҳи Рамазон! Яқиндагина уни интизорлик билан кутаётган эдик. Энди эса бу ойнинг иккинчи ўн куни – мағфират даҳаси охирламоқда. Алҳамдулиллаҳ, саҳобаи киромлар йил бўйи интизор кутган мағфират ойида турибмиз.\\r\\n\\r\\n\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"Юртимизда моҳи Рамазон! Яқиндагина уни интизорлик билан кутаётган эдик. Энди эса бу ойнинг иккинчи ўн куни – мағфират даҳаси охирламоқда. Алҳамдулиллаҳ, саҳобаи киромлар йил бўйи интизор кутган мағфират ойида турибмиз.\\r\\n\\r\\n\", \"meta_keyword_1\": \"Юртимизда моҳи Рамазон! Яқиндагина уни интизорлик билан кутаётган эдик. Энди эса бу ойнинг иккинчи ўн куни – мағфират даҳаси охирламоқда. Алҳамдулиллаҳ, саҳобаи киромлар йил бўйи интизор кутган мағфират ойида турибмиз.\\r\\n\\r\\n\", \"meta_keyword_2\": \"Юртимизда моҳи Рамазон! Яқиндагина уни интизорлик билан кутаётган эдик. Энди эса бу ойнинг иккинчи ўн куни – мағфират даҳаси охирламоқда. Алҳамдулиллаҳ, саҳобаи киромлар йил бўйи интизор кутган мағфират ойида турибмиз.\\r\\n\\r\\n\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1621750822, NULL, 1620285346, 1626049231, 26, 277, 1, NULL, 1623991144, 1623991144, 1623991144, 1623991144),
       (17, 6, '', '', '', '', NULL, NULL, '', '', '', NULL, NULL, '', '', '', NULL, NULL, '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '00000000000000000000.png', NULL, NULL, NULL,
        NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": null, \"meta_des_4\": null, \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": null, \"meta_keyword_4\": null}',
        1624011071, NULL, 1620292055, 1624011072, NULL, 0, 1, 1, 1624011071, 1624011071, 1624011071, 1624011071),
       (18, 6, '-2', '', '', '', NULL, NULL, '', '', '', NULL, NULL, '', '', '', NULL, NULL, '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '00000000000000000000.png', NULL, NULL,
        NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": null, \"meta_des_4\": null, \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": null, \"meta_keyword_4\": null}',
        NULL, NULL, 1620292063, 1620292063, NULL, 0, 1, 1, NULL, NULL, NULL, NULL),
       (19, 6, '-3', '', '', '', NULL, NULL, '', '', '', NULL, NULL, '', '', '', NULL, NULL, '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '00000000000000000000.png', NULL, NULL,
        NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": null, \"meta_des_4\": null, \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": null, \"meta_keyword_4\": null}',
        NULL, NULL, 1620292073, 1620292073, NULL, 0, 1, 1, NULL, NULL, NULL, NULL),
       (25, 8, 'sarlavha-18', 'sarlavha 18', 'sarlavha 18', 'sarlavha 18', 'sarlavha 18', 'sarlavha 18', '<p>&nbsp;malumot sarlavha 18</p>\r\n', '<p>&nbsp;malumot sarlavha 18</p>\r\n', '<p>&nbsp;malumot sarlavha 18</p>\r\n',
        '<p>&nbsp;malumot sarlavha 18</p>\r\n', '<p>&nbsp;malumot sarlavha 18</p>\r\n', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '',
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1623852325, NULL, 1623939064, 1625933384, 28, 119, 1, NULL, 1624025125, 1624025125, 1624025125, 1624025125),
       (26, 9, 'test', '', 'Test', '', '', 'Test', '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1624267882, NULL, 1624267882, 1624273474, 29, 3, 1, NULL, 1624267882, 1624267882, 1624267882, 1624267882),
       (27, 8, '-4', '', '', '', '', 'TEST TESST sada', '', '', '', '',
        '<p><strong>asdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd as</strong></p>\r\n\r\n<div class=\"embeddedContent oembed-provider- oembed-provider-youtube\" data-align=\"center\" data-maxheight=\"1080\" data-maxwidth=\"1920\" data-oembed=\"https://www.youtube.com/watch?v=7tYyFjaNRJA\" data-oembed_provider=\"youtube\" data-resizetype=\"custom\" style=\"text-align: center;\"><iframe allowfullscreen=\"true\" allowscriptaccess=\"always\" frameborder=\"0\" height=\"1080\" scrolling=\"no\" src=\"//www.youtube.com/embed/7tYyFjaNRJA?wmode=transparent&amp;jqoemcache=DLBfu\" width=\"1920\"></iframe></div>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<div class=\"embeddedContent oembed-provider-\">&nbsp;</div>\r\n\r\n<blockquote>\r\n<p>d asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda</p>\r\n\r\n<p>dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd</p>\r\n</blockquote>\r\n\r\n<p>asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd aasdda dasd asd asd asd asd asd a</p>\r\n',
        '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1624275713, NULL, 1624275713, 1624616753, 32, 43, 1, NULL, 1624275713, 1624275713, 1624275713, 1622487642),
       (28, 8, 'mirovyye-novosti', 'МИРОВЫЕ НОВОСТИ', 'DUNYO YANGILIKLАRI', 'WORLD NEWS', 'اخبار العالم', 'ДУНЁ ЯНГИЛИКЛАРИ',
        '<p>Сегодня, 24 июня, группа наших ученых во главе с председателем Управления мусульман Узбекистана муфтием Усмонхоном Алимовым проведет конференцию в медресе Сарыогач в Сарыогачском районе Туркестанской области Казахстана. В конференции примут участие главные муфтии, духовенство и духовенство.<br />\r\nМеждународная научно-практическая конференция будет посвящена благополучной жизни сыновей Абдусаттара и Абдугафора Шакира и их значительному вкладу в распространение ислама в независимом Казахстане, ответственности современной мусульманской уммы и формированию взаимопонимания.<br />\r\nТакже состоится церемония присвоения имен священнослужителей строящимся возле медресе Сариогач зданиям.<br />\r\nСледите за подробностями конференции на нашем сайте.</p>\r\n',
        '<p>Bugun, 24 iyun&nbsp;Oʼzbekiston musulmonlari idorasi raisi, muftiy Usmonxon Аlimov boshchiliklaridagi bir guruh ulamolarimiz Qozogʼistonning Turkiston viloyati Sariogʼoch tumani Sariogʼoch madrasasida marhum Аbdusattor va Аbdugʼaffor Samanovlar xotirasiga bagʼishlangan &ldquo;Din ruhoniyatining atoqli ustozlari&rdquo; nomli xalqaro ilmiy-amaliy konferentsiyada ishtirok etadilar. Mazkur anjumanga bosh muftiylar, din xodimlari hamda ruhoniyat namoyandalari qatnashadi.<br />\r\nXalqaro ilmiy-amaliy konferentsiyada rahmatli Аbdusattor va Аbdugʼaffor Shokir oʼgʼillarining barakali umri va ularning mustaqil Qozogʼistonda Islom dinining qanot yoyishiga qoʼshgan salmoqli ulushi, bugungi musulmon ummatining masʼuliyati va oʼzaro tushunishni shakllantirish masalalari kabi bir qator dolzarb mavzularda maʼruzalar qilinadi.<br />\r\nShuningdek, Sariogʼoch madrasasi yonida qurilayotgan imoratlarga din xodimlarining nomlarini berish tantanali tadbirining ochilishi boʼlib oʼtadi.<br />\r\nKonferentsiya tafsilotlarini saytimizda kuzatib boring.</p>\r\n',
        '<p>Today, June 24, a group of our scholars led by the Chairman of the Muslim Board of Uzbekistan, Mufti Usmonkhon Alimov will hold a conference &quot;Famous International Teachers of Religious Clergy&quot; dedicated to the memory of the late Abdusattor and Abdugaffor Samanov at the Sariogach Madrasa in Sariogach district of Turkestan region. The conference will be attended by chief muftis, clergy and clergy.<br />\r\nThe international scientific-practical conference will focus on the prosperous life of the sons of Abdusattar and Abdugaffor Shakir and their significant contribution to the spread of Islam in independent Kazakhstan, the responsibility of today&#39;s Muslim Ummah and the formation of mutual understanding.<br />\r\nThere will also be a grand opening ceremony to name the buildings under construction near the Sariogach Madrasah.<br />\r\nFollow the conference details on our website.</p>\r\n',
        '<p>اليوم ، 24 يونيو ، ستعقد مجموعة من علمائنا ، بقيادة رئيس مجلس المسلمين في أوزبكستان ، المفتي أوسمونخون عليموف ، مؤتمرا في مدرسة ساريوغاتش في منطقة ساريوغاش بمنطقة تركستان في كازاخستان. يحضر المؤتمر رئيس المفتين ورجال الدين ورجال الدين.<br />\r\nسيركز المؤتمر العلمي العملي الدولي على الحياة المزدهرة لأبناء عبد الستار وعبد الجفور شاكر ومساهمتهم الكبيرة في نشر الإسلام في كازاخستان المستقلة ، ومسؤولية الأمة الإسلامية اليوم وتشكيل التفاهم المتبادل.<br />\r\nكما سيقام احتفال لتسمية المباني قيد الإنشاء بالقرب من مدرسة ساريوجاش على اسم رجال الدين.<br />\r\nاتبع تفاصيل المؤتمر على موقعنا.</p>\r\n',
        '<p>Бугун, 24 июнь Ўзбекистон мусулмонлари идораси раиси, муфтий Усмонхон Алимов бошчиликларидаги бир гуруҳ уламоларимиз Қозоғистоннинг Туркистон вилояти Сариоғоч тумани Сариоғоч мадрасасида марҳум Абдусаттор ва Абдуғаффор Самановлар хотирасига бағишланган &ldquo;Дин руҳониятининг атоқли устозлари&rdquo; номли халқаро илмий-амалий конференцияда иштирок этадилар. Мазкур анжуманга бош муфтийлар, дин ходимлари ҳамда руҳоният намояндалари қатнашади.<br />\r\nХалқаро илмий-амалий конференцияда раҳматли Абдусаттор ва Абдуғаффор Шокир ўғилларининг баракали умри ва уларнинг мустақил Қозоғистонда Ислом динининг қанот ёйишига қўшган салмоқли улуши, бугунги мусулмон умматининг масъулияти ва ўзаро тушунишни шакллантириш масалалари каби бир қатор долзарб мавзуларда маърузалар қилинади.<br />\r\nШунингдек, Сариоғоч мадрасаси ёнида қурилаётган иморатларга дин ходимларининг номларини бериш тантанали тадбирининг очилиши бўлиб ўтади.<br />\r\nКонференция тафсилотларини сайтимизда кузатиб боринг.</p>\r\n\r\n<p><img alt=\"\" src=\"http://muslim.uz/images/2021/iyul/03/photo_2021-06-24_09-28-47.jpg\" /></p>\r\n',
        'Его Высочество муфтий примет участие в международной конференции в Казахстане.', 'Muftiy hazratlari Qozogʼistondagi xalqaro konferentsiyada ishtirok etadilar', 'His Highness the Mufti will attend an international conference in Kazakhstan',
        'سمو المفتي يشارك في مؤتمر دولي في كازاخستان', 'Муфтий ҳазратлари Қозоғистондаги халқаро конференцияда иштирок этадилар', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
        '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1624513088, NULL, 1624513088, 1626322404, 35, 51, 1, NULL, 1624513088, 1624513088, 1624513088, 1624512987),
       (29, 8, '-5', '', 'MUNOSABAT', '', '', 'МУНОСAБAТ', '',
        '<p>Islom dini insonlarni oʼzaro hamjihatlik, bagʼrikenglik, oʼzaro hurmat va oilaviy totuvlikka chorlaydi. Oilalar, insonlar oʼzaro hamjihat, totuv boʼlsalar jamiyat ham tinch boʼladi, tinchlik boʼlgan joyda esa taraqqiyot boʼladi.</p>\r\n\r\n<p>Inson hayoti davomida baʼzan boshqa insonlardan xafa boʼladi, ular bilan arazlashib qoladi. Bu narsa har bir insonning hayotida boʼladi. Shunday paytlarda inson boshqa insonlarni kechirishi, arazlashganligini unutib, yaxshi muomalasini davom ettirishi lozim.</p>\r\n\r\n<p>Islom dini insonlarni bir-biri bilan uch kundan ortiq arazlashishni halol hisoblamaydi.</p>\r\n\r\n<p>Аbu Hurayra roziyallohu anhudan rivoyat qilinadi: &laquo;Rasululloh sollallohu alayhi vasallam: &ldquo;Moʼmin moʼmindan uch kundan ortiq arazlashi halol emas. Аgar u uch kunni oʼtkazgan boʼlsa, oʼsha bilan uchrashib, salom bersin. Аgar uning salomiga alik qaytarsa, ikkilari ajrga sherik boʼladilar. Аgar salomga alik qaytarmasa, u gunohni oʼziga olgan boʼladi. Musulmon esa arazlashdan chiqadi&rdquo;, dedilar&raquo; (Аbu Dovud rivoyati).</p>\r\n\r\n<p>&nbsp;Аfsus bilan aytishimiz mumkinki, bugungi kunda ayrim er-xotinlar, aka-uka, opa-singil, qalin doʼstlar va hatto ota-bolalarning bir-birlarini tushunmasdan arazlashib yurishganini guvohi boʼlmoqdamiz. Bu masʼuliyatni his qilmay, huda-behudaga nizolashish natijasidir. Аrazlashganlardan soʼrasangiz hamma oʼzining haq ekanligini isbotlashga urinadi. Bu ayni xatodir. Аslida, arazlashishdan chekinish, bir-birovni kechirish fazilatdir.</p>\r\n\r\n<p>Аlloh taolo hamjihat boʼlib yashash baxtiga barchamizni muvaffaq qilsin!</p>\r\n',
        '', '',
        '<p>Ислом дини инсонларни ўзаро &nbsp;ҳамжиҳатлик, бағрикенглик, ўзаро ҳурмат ва оилавий тотувликка чорлайди. Оилалар, инсонлар ўзаро ҳамжиҳат, тотув бўлсалар жамият ҳам тинч бўлади, тинчлик бўлган жойда эса тараққиёт бўлади.</p>\r\n\r\n<p>Инсон ҳаёти давомида баъзан бошқа инсонлардан хафа бўлади, улар билан аразлашиб қолади. Бу нарса ҳар бир инсоннинг ҳаётида бўлади. Шундай пайтларда инсон бошқа инсонларни кечириши, аразлашганлигини унутиб, яхши муомаласини давом эттириши лозим.</p>\r\n\r\n<p>Ислом дини инсонларни бир-бири билан уч кундан ортиқ аразлашишни ҳалол ҳисобламайди.</p>\r\n\r\n<p>Абу Ҳурайра розияллоҳу анҳудан ривоят қилинади: &laquo;Расулуллоҳ соллаллоҳу алайҳи васаллам:<strong><em>&nbsp;&ldquo;Мўмин мўминдан уч кундан ортиқ аразлаши ҳалол эмас.&nbsp;</em></strong><strong><em>Агар у уч кунни ўтказган бўлса, ўша билан учрашиб, салом берсин. Агар унинг саломига алик қайтарса, иккилари ажрга шерик бўладилар. Агар саломга алик қайтармаса, у гуноҳни ўзига олган бўлади. Мусулмон эса аразлашдан чиқади&rdquo;,</em></strong>&nbsp;дедилар&raquo;&nbsp;<em>(Абу Довуд ривояти).</em></p>\r\n\r\n<p>&nbsp; Афсус билан айтишимиз мумкинки, бугунги кунда айрим эр-хотинлар, ака-ука, опа-сингил, қалин дўстлар ва ҳатто ота-болаларнинг бир-бирларини тушунмасдан аразлашиб юришганини гувоҳи бўлмоқдамиз. Бу масъулиятни ҳис қилмай, ҳуда-беҳудага низолашиш натижасидир. Аразлашганлардан сўрасангиз ҳамма ўзининг ҳақ эканлигини исботлашга уринади. Бу айни хатодир. Аслида, аразлашишдан чекиниш, бир-бировни кечириш фазилатдир.</p>\r\n\r\n<p>Аллоҳ таоло ҳамжиҳат бўлиб яшаш бахтига барчамизни муваффақ қилсин!</p>\r\n',
        '', 'UCh KUNDАN ORTIQ АRАZLАShISH HАLOL EMАS', '', '', 'УЧ КУНДАН ОРТИҚ АРАЗЛАШИШ ҲАЛОЛ ЭМАС', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', NULL,
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1624514814, NULL, 1624514814, 1625160668, 36, 32, 1, NULL, 1624514653, 1624514814, 1624514814, 1624514619),
       (30, 8, '-6', '', '', '', '', 'Аллоҳнинг суйган банда бўлиш учун нима қилиш керак?', '', '', '', '',
        '<p style=\"margin-left:-28,3500pt\">Инсон Аллоҳнинг суйган қули бўлиши учун нима қилиши керак? Абу Ҳурайра разияллоҳу анҳу ривоят қилган ҳадиси қудсийда билдириладики, Расули акрам соллаллоҳу алайҳи васаллам айтдилар: <strong><em>&laquo;Аллоҳу таоло айтадики, &laquo;Ҳеч бир бандам унга фарз қилинган нарсалардан кўра севимлироқ нарса билан Менга яқинлаша олмайди. Бандам Менга нафл ибодатлари билан ҳам яқинлашади. Ниҳоят Мен уни севаман&raquo;.</em></strong>&nbsp;Яъни Ҳазрати Мавлога етишиш сари йўналади. &laquo;<strong><em><u>Ҳатто уҳиббаҳу</u></em></strong>&raquo;. Ниҳоят мен у қулимни севаман. Нафл ибодатларини қилавериб яқинлашганда, ниҳоят Аллоҳ у қулини севади... Севилдими, у қул авлиё бўлади, кароматларга, фазилатларга эга бўлади.</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Аллоҳ ризосига эришишнинг энг қисқа, энг савобли &nbsp;йўли зикрдир.</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Шунинг учун тариқатда зикр вазифаларини бажарасизлар.</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">&ndash; Бошқалар қилмайди, бошқалар тарк этади, намоз ўқимайди, бошқалар унақа, бошқалар бунақа демайсизлар.</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Бизга бошқалар керак эмас, бизга Пайғамбаримиз соллаллоҳу алайҳи васаллам кераклар! Биз учун авлиёуллоҳнинг тушунчаси, олимларнинг сўзи муҳим. Бошқалар, ёмон одамлар ўрнак бўлолмайди, яхши одамлар ўрнак бўлиши керак!</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Ҳатто &laquo;Мажалла&raquo; деган Усмонийларнинг катта ҳуқуқ асарларидан бирида айтилганки: &laquo;Ботил мокисун ъалайҳ&raquo;, яъни ботил ўрнак бўлмайди.</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">&ndash; Тақсир, фалончи бундай қилади, мен ҳам шундай қилсам...</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Яхшию лекин унинг қилгани зотан ботил-да! Сен у ботилни нима учун ўрнак қилиб олаяпсан? У ўрнак бўла олмайди. Сен: &laquo;Пайғамбаримиз соллаллоҳу алайҳи васаллам бундай қилган, мен ҳам шундай қиламан&raquo;, &ndash; деб айтгин ва қилгин!</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Ботил ўрнак бўла олмайди, ҳақ ўрнак бўла олади.</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Пайғамбаримиз соллаллоҳу алайҳи васаллам қилган бўлсалар, сен ҳам қил. Лекин Шайтон қилган бўлса, сен қилма! Шайтоннинг қилгани ўрнак бўлмайди. Шайтон: &laquo;Мен ундан яхшироқман&raquo;, &ndash; деб Одам алайҳиссаломга сажда қилмаган. Аллоҳ ҳам уни жаннатдан қувди... Демак, Шайтоннинг қилганини қилмаслик учун, кибрланмаслигинг керак! Кибр шайтоннинг ахлоқидир, кибрланма, Шайтоннинг қилганини қилма!</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Ҳар кунги зикр вазифаларингиз бўлади. Нега ҳар кун? &ndash; Чунки, зикр дарвешнинг озуқасидир. Дарвеш зикрдан маънавий озуқа олади. Инсон овқат билан қувватланганидек, озиқ олганидек, дарвеш ҳам зикр билан қувватланади, озиқланади.</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">&ndash; Қачон зикр қилишимиз мумкин?</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">&ndash; Ҳар доим, ҳар вақт қила оласизлар. Зикрнинг мажбурий бир вақти бўлмаганидек, қилиниши мумкин бўлмаган вақти ҳам йўқ.</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Куннинг исталган вақтида қила оласиз. Ишингизни битириб: &laquo;Мана ишим ҳам битди, энди чеккага ўтириб, зикримни ҳам бажарай&raquo;, &ndash; деган вақтингиз бемалол бажаришингиз мумкин.</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">&ndash; Менинг ҳеч ўтирадиган ҳолим йўқ. Қари онам, отам бор, учта болам бор, уй ишлари бор, кўп ишлайман. Кечга бориб чарчаб қоламан.</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">&ndash; Бўпти, ундай бўлса вазифани йўл-йўлакай бажар. Ўтириб қилолмасанг, иш жараёнида юриб айтишинг мумкин-ку?</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">&ndash; Меҳмонхонада, дам олиш хонасида ўтира олмайман... Умуман вақт топ, қил! Картошка арчганингда, помидор тўғраганингда қил...</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Ҳатто ўтган куни бу ерга бир бўёқчи келди, қўлига чўткасини олиб, қўшиқ айтиб бўяй бошлади. У қўшиқ айтиб иш қилаяпти, сен нега зикр айтиб ишингни қила олмайсан?</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Ҳатто зикр қилиб овқат пишир. Зикрли овқатнинг файзу баракаси ҳам кўп бўлади. Еганга ҳам фойдаси бўлади. Хуллас, зикр қилиб пишир...</p>\r\n\r\n<p style=\"margin-left:-28,3500pt\">Ҳар доим зикр қилиш мумкин, баҳонага ўрин йўқ. Бешта ёки &nbsp;&nbsp;тўққизта боланг бўлса ҳам, суткаси билан &ndash; 24 соат ишласанг ҳам орада зикр қилишинг мумкин.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p style=\"text-align: right;\"><strong><em>&quot;Ислом ва ахлоқ&quot; </em></strong><em>китобидан олинди</em></p>\r\n',
        '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1624532966, NULL, 1624532967, 1626304480, 37, 42, 1, NULL, 1624532966, 1624532966, 1624532966, 1624532966),
       (31, 8, '-7', '', '', '', '', '', '', '', '', '',
        '<p>Бандаларига молиявий муомалаларни ҳалол йўллар билан амалга оширишни ва ҳаром йўллардан четланишни амр қилган Аллоҳ таолога битмас-туганмас ҳамду санолар бўлсин!</p>\r\n\r\n<p>Умматларига молиявий муомалаларни батафсил тушунтириб, уларни қандай амалга оширишни кўрсатиб берган маҳбуб Пайғамбаримизга мукаммал ва батамом салавотлар ва дурудлар бўлсин!</p>\r\n\r\n<p>Аллоҳ таоло бундай марҳамат қилади: <strong>&quot;</strong><strong>Эй одамлар! Ер юзидаги нарсалардан ҳалол-покларини енглар. Ва шайтон изидан эргашманглар, чунки у сизларга очиқ душмандир</strong><strong>&quot; </strong><em>(Бақара, 168).</em></p>\r\n\r\n<p>Ушбу ояти каримада Аллоҳ таоло фақат мўминларни эмас, балки барча одамларни ҳалол нарсаларни ейишга даъват қилмоқда. Аллоҳ таоло ер юзидаги ноз-неъматларни бандалари учун яратган, уларнинг ҳалолларидан ейишга буюрди.</p>\r\n\r\n<p>Аллоҳ таоло:<strong> &quot;Бас, намоз тугагандан сўнг ер юзи бўйлаб тарқалинг ва Аллоҳнинг фазлидан талаб қилинг ва Аллоҳни кўп эсланг, шоядки, ютуққа эришсангиз&quot;,</strong> деб марҳамат қилган <em>(Жума</em><em>,</em><em> 10).</em></p>\r\n\r\n<p>Жума сурасидаги ушбу оятда Аллоҳ таоло мўмин-мусулмонларни ер юзига тарқалиб ҳалол йўл билан ризқ топишларига тарғиб қилмоқда ва бу ишни Аллоҳ таолонинг фазлидан талаб қилиш, деб номламоқда.</p>\r\n\r\n<p>Ҳазрат Алишер Навоий бундай дейдилар: &ldquo;Тонгги уйқуни тарк этганнинг ризқу рўзи фаровон бўлади. Ғафлат босиб, тонгни уйқуда ўтказган кимса бу неъматларни фақат тушида кўради&rdquo;.</p>\r\n\r\n<p>Албатта, ризқ талаб қилишда турли ҳолатлар вужудга келиши мумкин. Мисол учун, кўпроқ ризққа эришиш мақсадида ҳаром-ҳаришга қўл уруш эҳтимоли ҳам бор. Шунинг учун Аллоҳ таоло ризқ талаб қилишга амр қилганидан сўнг бевосита: <strong>&ldquo;...</strong><strong>ва Аллоҳни кўп зикр қилинг</strong><strong>&rdquo;</strong><strong>,</strong> демоқда.</p>\r\n\r\n<p>Аллоҳ таолони кўп зикр қилиш эса, ризқ топиш ишида ҳаромни четлашга омил бўлади.</p>\r\n\r\n<p>Нўмон ибн Башир розияллоҳу анҳудан ривоят қилинади: <strong>Набий соллаллоҳу алайҳи васаллам: &laquo;Албатта, ҳалол очиқ-ойдиндир. Албатта, ҳаром очиқ-ойдиндир. Ва икковлари орасида шубҳали нарсалар бордир. У </strong>(шубҳали)<strong> нарсаларни одамларнинг кўплари билмаслар. Бас, ким шубҳалардан сақланса, дини ва обрўси учун покланган бўлади. Ким шубҳаларга тушса, ҳаромга тушади. Бу худди қўриқхона атрофида </strong>(ҳайвон)<strong> боққан чўпонга ўхшайди. Ундан ўтлаб қўйиши осон. Огоҳ бўлингким! Албатта, ҳар бир подшоҳнинг ўз қўриқхонаси бордир. Огоҳ бўлингким! Албатта, Аллоҳнинг қўриқхонаси Унинг ҳаром қилган нарсаларидир. Огоҳ бўлингким! Албатта, жасадда бир парча гўшт бордир. Қачон у солиҳ бўлса, жасаднинг ҳаммаси солиҳ бўлур. Қачон у бузуқ бўлса, жасаднинг ҳаммаси бузуқ бузилади. Огоҳ бўлингким! Ўша нарса қалбдир&raquo;, </strong>дедилар.</p>\r\n\r\n<p>Ҳалоллик &ndash; шариатимизда энг асосий масалалардан бири ҳисобланади. Зеро, ҳар бир мусулмон бажарган солиҳ амалларининг Аллоҳнинг даргоҳида қабул бўлиши, фарзандларининг салоҳияти, оиласининг фаровонлиги ва ҳадисда келганидек қалби қорайиб қотиб қолмаслиги ҳам, айнан ейдиган луқмасининг ҳалол, касби-корининг шариат кўрсатмаларига мувофиқ бўлишига боғлиқдир.</p>\r\n\r\n<p>Инсон нафси олдида, дунёда ҳалол билан ҳаромни ажратиб, ҳалолини топиб нафақа қилиши бир мунча қийин туюлади, чунки нафс, енгилликни хоҳлайди.</p>\r\n\r\n<p>Абдуллоҳ ибн Аббос розияллоҳу анҳу: <strong>&ldquo;Ҳалол касб қилиш тоғни кўчиришдан оғирдир&rdquo;</strong>, деганлар.</p>\r\n\r\n<p>Ҳаётда инсонлар турли касблар билан шуғулланишади. Жамиятда шундай тоифа одамлар ҳам борки, улар Аллоҳ ҳаром қилган ишларни ўзларига касб қилиб олганлар. &ldquo;Беҳунарнинг ҳунари-ялқовлик&rdquo;, деганларидек, бундай одамларнинг кўпчилиги аввало нафс билан қалбни фарқлай олмаганликлари, ёшликда илм, ёки ҳунар эгалламаганликлари учун кейинчалик ўзгаларнинг ризқига шерик бўлишни касб қилиб олишади. Масалан; тиланчилик, ўғрилик, зўровонлик, фоҳишалик, қиморбозлик, фирибгарлик, фолбинлик каби Аллоҳ қайтарган ишлар уларнинг касбига айланиб қолади. Бундай иллатларнинг энг ёмони, ҳаром саналган ишлар билан онгли одамларнинг шуғулланишидир.</p>\r\n\r\n<p>Хулоса қилиб айтадиган бўлсак, ҳалол касбни маҳкам тутиб, ўзгани ҳаққидан қўрқсак, ризқимиз мўл бўлади, ҳаётимиз фаровон бўлади, охиратимиз гўзал бўлади, авлоду зурриётларимиз ҳам, икки дунёда бахтли, саодатли, солиҳ кишилардан бўлади, иншаа Аллоҳ.</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p style=\"margin-left: 212.4pt; text-align: right;\"><strong>А.Маллаев</strong>,</p>\r\n\r\n<p style=\"text-align: right;\"><em>Шаҳрисабз шаҳар &laquo;Кундузак&raquo; жоме масжиди имом-хатиби</em></p>\r\n',
        '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1624598036, NULL, 1624598036, 1624598036, 38, 0, 1, 1, 1624598036, 1624598036, 1624598036, 1624598036),
       (32, 8, '-8', '', '', '', '', 'Икки муқаддас масжидда Замзам сувини ақлли роботлар тарқатмоқда ', '', '', '', '',
        '<p>&nbsp;Пандемия сабаб Саудия Арабистонидаги Масжидул Ҳаром ва Масжидун Набавий ишларининг Бош раҳбари Шайх, доктор Абдурроҳман Ас-Судайс Замзам сувини тарқатадиган ақлли роботни ишга туширди. У замзам суви идишларини одамлар аралашувисиз доимий равишда 8 соат давомида тарқатиши айтилди. &nbsp;&nbsp;</p>\r\n\r\n<p>Шайх, доктор Абдурроҳман Ас-Судайс замонавий технологиялар инсониятга хизмат қилиш учун ишлатилаётгани, айниқса, коронавирус пандемияси хатарини эслатиб: &ldquo;Бу технология Икки муқаддас масжид зиёратчилари хавфсизлигини сақлайди&rdquo;, дея таъкидлади.</p>\r\n\r\n<p>Масжидул Ҳаром ва Масжидун Набавийнинг умумий раҳбари бутун инсоният хизмат қил</p>\r\n\r\n<div class=\"embeddedContent oembed-provider-\">&nbsp;</div>\r\n\r\n<p>аётган замонавий илм-фан ва рақамли тараққиёт эришган ютуқларини мақтади. Ақлли робот идишдаги замзам сувини тарқатади ва зиёратчилар ҳаракатига тўсқинлик қилмасдан ишлайди.</p>\r\n\r\n<p style=\"text-align:right\">ЎМИ &nbsp;Халқаро алоқалар бўлими</p>\r\n',
        '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1624598632, NULL, 1624598632, 1626051660, 39, 37, 1, NULL, 1624598632, 1624598632, 1624598632, 1624598632),
       (33, 8, '-9', '', '', '', '', '“Ал-Азҳар” таълим муассасаларига қабул қилиш фақатгина Дин ишлари бўйича қўмита тавсияси асосида амалга оширилади', '', '', '', '',
        '<p>Ҳурматли Ўзбекистон Республикаси фуқаролари!</p>\r\n\r\n<p>Миср Араб Республикаси &ldquo;Ал-Азҳар&rdquo; таълим мажмуаси билан эришилган келишувга мувофиқ 2021 йилдан бошлаб Ўзбекистон Республикаси фуқаролари учун &ldquo;Ал-Азҳар&rdquo; таълим мажмуасининг барча муассасаларига қабул қилиш фақатгина Ўзбекистон Республикаси Вазирлар Маҳкамаси ҳузуридаги Дин ишлари бўйича қўмита (Кейинги ўринларда &ndash; Дин ишлари бўйича қўмита деб юритилади) тавсияси асосида амалга оширилиши белгилаб қўйилган.</p>\r\n\r\n<p>Шу муносабат билан, жорий йилдан Миср Араб Республикаси &ldquo;Ал-Азҳар&rdquo; мажмуасида таълим олиш юзасидан мурожаатлар Ўзбекистон Республикаси Вазирлар Маҳкамасининг &ldquo;Ўзбекистон Республикаси фуқароларининг хорижий диний таълим муассасаларида ўқишларини тартибга солиш чора-тадбирлари тўғрисида&rdquo; 2018 йил 13 августдаги 651-сон қарори билан Дин ишлари бўйича қўмита ҳузурида ташкил этилган Ўзбекистон Республикаси фуқароларининг хорижий диний таълим муассасаларида таълим олишига кўмаклашиш бўйича Маслаҳат кенгаши (Кейинги ўринларда &ndash; Маслаҳат кенгаши) томонидан кўриб чиқилади ҳамда Дин ишлари бўйича қўмита тавсияси асосида амалга оширилади.</p>\r\n\r\n<p>Батафсил:&nbsp;<a href=\"https://religions.uz/pages/view?id=97\">https://religions.uz</a></p>\r\n\r\n<p>Манба:&nbsp;<a href=\"https://t.me/DinQumita\">https://t.me/DinQumita</a></p>\r\n',
        '', '', '', '', '“Ал-Азҳар” таълим муассасаларига қабул қилиш фақатгина Дин ишлари бўйича қўмита тавсияси асосида амалга оширилади', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
        NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1624617163, NULL, 1624617163, 1624727891, 40, 27, 1, NULL, 1624617163, 1624617163, 1624617163, 1624617227),
       (34, 8, '-10', '', '', '', '', 'Ислом шариатига таҳдид соладиган хатар', '', '', '', '',
        '<p>Бугунги кунда&nbsp;мусулмон оламида Ислом ниқоби остидаги ақидапарастлик гуруҳларидан ташқари яна бир таҳдиднинг янги қатлами намоён бўлдики, у ҳам бўлса мазҳабcизликка чақирувчилар тоифасидир.</p>\r\n\r\n<p>Ҳаракат тарафдорларининг даъвосича, Исломда унга эътиқод қилувчи шахс учун суннийликдаги тўрт ёки фиқҳий мазҳабнинг бирига эргашишлик шарт қилинмаган. Агар мусулмон шахс бирор шаръий масалада улардан бирига эргашса, у кўр-кўрона тақлид қилгани учун хатокор ва динидан ажралган шахслар каби адашади.</p>\r\n\r\n<p>Мазкур тоифага кирувчи шахслар Исломга амал қилишнинг асосида фақатгина Китоб (Қуръон) ва Сунна туриши лозимлигини таъкидлашади. Уларнинг фикрича, бу икки манба хатолардан холи. Аммо фиқҳий мазҳабларга эргашиш эса Китоб ва Сунна таълимотидан кўра, кўпроқ шахсларнинг ижтиҳодфикрларига тақлид қилиниши билан тавсифланади. Бу эса хатога йўл қўйиш ва нуқсонлардан холи бўлишни тўлиқ кафолатлай олмайди.</p>\r\n\r\n<p>Қолаверса, Исломдаги фиқҳий мазҳаблар ҳижрий III асрдан сўнг пайдо бўлганлиги эътиборидан, бидъат ишлардан саналиб, Сунна таълимотига кўра ҳар бир динга киритилган янгилик шубҳасиз залолатга маҳкумдир. Саҳобаи-киром розияллоҳу анҳумнинг барчаси ҳам Аллоҳнинг Китоби ва Расулуллоҳ соллаллоҳу алайҳи васалламнинг суннатларигагина мурожаат қилганлар. Улар бирор-бир масалада Қуръон ва Суннадан далил тополмай қолгандагина ижтиҳодга қўл урганлар. Бу эса, асосий эътибор қаратиладиган ва эргашиладиган ҳолат. Шунинг учун ҳам мазҳаб тутиш ёки бирор-бир мужтаҳид имомга тақлид қилиш Аллоҳни қўйиб уларни Робб қилиб олишдир деб иддао қилишади.</p>\r\n\r\n<p>Ўзларини Ислом динининг фидойилари деб эълон қилаётган мазкур тоифадаги шахслар Қуръон ва Сунна турганда фиқҳий мазҳабларга эргашиш айнан мусулмонлар ўртасида ихтилофга замин бўлиши ва бу Ислом бирлигига раҳна туғдиришини жар солмоқдалар.</p>\r\n\r\n<p>Аслидачи?! Аслида, мазҳабсизлик даъвосини ёйишнинг ўзи ихтилоф манбаи бўлиб, Ислом дини, хусусан, мусулмонлар бирлигига улкан таҳдид туғдирадиган омил эканига шубҳа йўқ. Улар ўзларини бирор бир мазҳабга амал қилмасликларини даъво қиладилару, аслида намоз ва бошқа ибодатларда тўрт мазҳаб имомларидан бирига эргашадилар. Бундан бошқа иложлари ҳам йўқ. Негаки, ижтиҳод қилишга ҳар ким ҳам қодир бўла олмайди. Чунки бу ишни қилиш учун шаръий далиллардан ҳукмларни чиқариб олишга етарли даражада илмий ва ақлий қувват лозим бўлади. Лекин бир икки масалани чуқур ўрганмай туриб, ихтилоф чиқаришга усталар, масалан: &ldquo;<em><em>Мазҳаб деган нарса Расулуллоҳнинг даврларида бўлмаган, биз уларга эмас Аллоҳ ва Расулига эргашамиз</em></em>&rdquo;, &ndash; деган даъвони қиладилар. Бу ўта калтафаҳмлик ва жоҳиллик, хусусан, ғаразгўйликдан бошқа нарса эмас.</p>\r\n\r\n<p>Ислом уммати илмий салоҳият жиҳатидан икки тоифага бўлинади: биринчиси &ndash;<strong><em><u><strong><em>мужтаҳид</em></strong></u></em></strong>, иккинчиси &ndash;&nbsp;<strong><em><u><strong><em>муқаллид</em></strong></u></em></strong>лардир.</p>\r\n\r\n<p>Киши&nbsp;<strong><em><u><strong><em>мужтаҳид</em></strong></u></em></strong>&nbsp;деб эътибор қилиниши учун қуйидаги илмларни тўлиқ эгаллаган бўлиши шарт:</p>\r\n\r\n<ol>\r\n	<li><em><em>Қуръон ва тафсир илмлари.</em></em></li>\r\n	<li><em><em>Расулуллоҳ саллаллоҳу алайҳи ва салламнинг суннатлари илми.</em></em></li>\r\n	<li><em><em>Салафларнинг қавллари, ижмоъ ва ихтилофлари илми.</em></em></li>\r\n	<li><em><em>Усулул фиқҳ илми.</em></em></li>\r\n	<li><em><em>Луғат илми.</em></em></li>\r\n	<li><em><em>Қиёс илми.</em></em></li>\r\n</ol>\r\n\r\n<p><strong><em><strong><em>Муқаллид</em></strong></em></strong>&nbsp;бу &ndash; мужтаҳид бўлмаган шахс бўлиб, мужтаҳид имомларнинг бирига эргашиши лозим. Чунки у ҳукм чиқаришдаги далилларни топиш ёки аниқлашга қодир эмас. Демак, муқаллид агар Қуръон ва Суннага амал қилмоқчи бўлса, уларни билган кишилар, яъни мужтаҳидларга эргашиш, яъни тақлидга ўзўзидан мажбур бўлади.</p>\r\n\r\n<p>Ҳозирги даврда Абу Ҳанифа, Шофеий, Молик ва Аҳмад ибн Ҳанбал раҳматуллоҳи алайҳимга ўхшаш мужтаҳидлар йўқлигига ҳамма уламолар иттифоқ қилганлар. Мужтаҳидлик даъвосини қилган ёки қилаётган ёхуд фалончи мужтаҳид деб айтаётган аҳли илм йўқ. Бундай бўлиши жуда ҳам қийин. Аммо мазҳаб ичида ва янги пайдо бўлган масалаларни ҳал қилиш ёки янги фатволарда ижтиҳодлар содир бўлиб турибди.</p>\r\n\r\n<p>Бугунги кунимиздаги ҳар бир мусулмон якка тартибдаги ижтиҳод билан шуғулланиши керак, деган ҳам гап мутлақо асоссиздир. Имом Аҳмад раҳматуллоҳи алайҳи айтадилар: &ldquo;<em><em>Ким динда тақлид йўқ деса, Аллоҳ ва Унинг Расули олдида фосиқдир. Унинг сўзи Сунна ва салафи солиҳлар қарашларини рад қилишдир</em></em>&rdquo;.</p>\r\n\r\n<p>Мужтаҳид Абдуллоҳ ибн Ваҳб айтадилар: &ldquo;<em><em>Мен 360 та уламони учратдим. Агар имом Молик ва Имом Лайс бўлмаганда уларнинг илмларида адашиб кетардим&rdquo;</em></em>. Имом Моликнинг шогирди бўлган, моликия мазҳабининг мужтаҳиди ибн Ваҳб бу сўзлари билан айтмоқчики, ҳадисларни тушуниш ва унга эргашишда имом Молик тушунча бермаганда адашар экан. Яна у айтади: &ldquo;<em><em>Ҳадис илмлари, агар фиқҳ илми бўлмаса, адаштиради&rdquo;</em></em>.</p>\r\n\r\n<p>Мазҳабдан юз ўгириш салафи солиҳ йўлидан юз ўгириш бўлиб, шубҳасиз адашишга олиб боради. Шунинг учун ҳам замонамизнинг машҳур алломаларидан доктор Муҳаммад Саид Рамазон Бутий: &ldquo;<em><em>Мазҳабсизлик Ислом шариатига таҳдид соладиган хатарли бидъатдир</em></em>&rdquo;, &ndash; деган.</p>\r\n\r\n<p>Шу ўринда мазҳабсизликни даъво қилаётганларнинг айтаётган сўзларига ҳужжат келтира олмаслиги ва қилаётган даъволарининг асоссиз эканлигига доктор Муҳаммад&nbsp;Саййид Рамазон&nbsp;Бутий ва мазҳабсизлик даъвоси тарғиботчиси Носируддин Албоний иккиси ўртасида кечган баҳснинг баъзи қирраларини келтириш билан бу мавзуни якунлаймиз.</p>\r\n\r\n<p>&ndash; Сиз Аллоҳнинг ҳукмларини англашда қандай услубни қўллайсиз? Уларни Қуръон ва Суннадан оласизми ёки мужтаҳид имомларданми?</p>\r\n\r\n<p>&ndash; Мен имомларнинг фикрларини ва уларнинг ҳужжатларини кўриб чиқаман-да, сўнг Қуръон ва Суннага энг яқин бўлган фикрга суянаман.</p>\r\n\r\n<p>&ndash; Жуда яхши .Айтинг-чи, ҳар бир мусулмон имомларнинг ҳужжатларини кўриб чиқиб, сўнг улардан Қуръон ва Суннага кўпроқ мос келадиганига эргашиши шартми?</p>\r\n\r\n<p>&ndash; Ҳа.</p>\r\n\r\n<p>&ndash; Бундан чиқди ҳамма одамлар ҳам худди мазҳаб имомлари каби ижтиҳод даражасига эга экан-да. Бунинг устига уларнинг салоҳияти яна ҳам юқорироқ, яна ҳам етук экан. Ахир буюк-буюк имомларнинг фикрларини баҳолайдиган ёки ушбу фикрлар ҳақида Қуръон ва Сунна мезони асосида ҳукм чиқара оладиган одам имомлардан ҳам илмлироқ бўлади-да! Хўп, Сиз Қуръонни етти қироатнинг қайсинисида қироат қиласиз?</p>\r\n\r\n<p>&ndash; &ldquo;Ҳафс&rdquo; қироати билан.</p>\r\n\r\n<p>&ndash; Ҳар доим шу қироат билан ўқийсизми ёки ҳар куни ҳар хил қироат биланми?</p>\r\n\r\n<p>&ndash; Йўқ, мен ҳар доим фақат &ldquo;Ҳафс&rdquo; кироати билан ўқийман.</p>\r\n\r\n<p>&ndash; Хўш, нима учун сиз буни ўзингиз учун вожиб қилиб олдингиз? Ахир Аллоҳ таоло сизга Қуръонни фақат Пайғамбар соллаллоҳу алайҳи васалламдан ривоят қилингандек ўқишни буюрган-ку?</p>\r\n\r\n<p>&ndash; Чунки мен бошқа қироатларни ўргана олмаганман. Менга фақат шу қироатда ўқиш осон.</p>\r\n\r\n<p>&ndash; Фиқҳни Шофеий мазҳаби бўйича ўрганган бир киши сиз бошқа қироатларни ўргана олмаганингизга ўхшаб, бошқа мазҳабларни ўргана олмаган. Унга дин аҳкомларини фақат шу имомдан ўрганиш осон бўлган. Агар сиз у барча имомларнинг ижтиҳодини ўрганиб, ҳукмларни уларнинг ҳаммасидан олиши шарт десангиз, у ҳолда ўзингиз ҳам барча қироатларни ўрганишингиз лозим бўлади-ку! Агар ўзингизни қобилиятим йўқ деб оқлайдиган бўлсангиз, унда ўша муқаллидни ҳам оқлашингиз керак бўлади.</p>\r\n\r\n<p>&ndash; Айтайлик, диний аҳкомларни бажаришни энди бошлаган, ҳали Ислом илмларидан ҳеч нарса олиб улгурмаган ўспирин бола Парвардигорнинг &ldquo;<strong><strong>Машриқу мағриб Аллоҳникидир, қаёққа қарасангиз Аллоҳнинг юзи бор. Албатта, Аллоҳ кенг қамровли, билувчи зотдир</strong></strong>&rdquo;&nbsp;<em><em>(Бақара, 115)</em></em>&nbsp;оятини ўқиди. У бу оятни &ldquo;Мусулмон одам намозида юзини хоҳлаган томонга буриши мумкин экан, оятнинг маъноси буни аниқ кўрсатиб турибди&rdquo; деб тушунди. Бола тўрт буюк имомлар намозда юзни фақат Каъба томонга буриш керак деб иттифоқ қилишганини, уларда бу ҳақда далиллар борлигини эшитган экан, лекин ўша ҳужжатларни ўрганмаган. Хўш, у намозга турганида нима қилади? Ўзида бор ҳужжатга эргашадими ёки иттифоқ бўлиб, бунга тескари ҳукм чиқарган имомларгами?</p>\r\n\r\n<p>&ndash; У ўз эътиқодига эргашиши лозим!!!</p>\r\n\r\n<p>&ndash; У масалан, машриққа қараб намоз ўқиса, намози дуруст бўладими?</p>\r\n\r\n<p>&ndash; Ҳа. Чунки у ўз шахсий эътиқодига эргашиши лозим!</p>\r\n\r\n<p>&ndash; Агар шахсий эътиқоди унга қўшнининг аёли билан зино қилиш, хамр ичиш, қўшнисининг молини ноҳақ тортиб олишда ҳеч қандай гуноҳ йўқ, деб ишонтирадиган бўлса-чи? Унинг &ldquo;шахсий эътиқоди&rdquo; бўлганлиги учун Аллоҳ таоло унга бу нарсаларни ҳалол қиладими?</p>\r\n\r\n<p>У бироз сукут қилиб, сўнг деди:</p>\r\n\r\n<p>&ndash; Нима бўлганда ҳам, сиз мендан сўраган ушбу ҳолат воқеликдан узоқ ва ҳаётда юз бериши мумкин эмас.</p>\r\n\r\n<p>&ndash; Бу хаёл эмас, аксинча, бундай нарсалар ва бундан ҳам ажабланарли ҳодисалар ҳаётда тез-тез учраб турибди! Ислом, Қуръон ва Сунна ҳақида илмга эга бўлмаган ўспирин тасодифан ушбу оятни эшитиб ёки ўқиб қолиб, ундаги зоҳирий маънога қараса, ҳар қандай араб тушунадиган нарсани тушунади: намозхон юзини истаган тарафга бурса ҳам &ldquo;гуноҳ йўқ&rdquo; экан! Ваҳоланки, у ҳамманинг бошқа томонга эмас, айнан Каъбага қараб намоз ўқишини кўриб турибди. Яъни мусулмонлар орасида Исломдан ҳеч нарса билмайдиган одамлар бор экан, бундай бўлиши табиий ва ҳар қачон юз бериши мумкин. Қисқаси, бу ҳолат хоҳ воқелик бўлсин, хоҳ хаёлий, сиз бу ҳақда чиқарган ҳукм хаёлий эмас эди. Сиз шахсий фикрни ҳар қандай ҳолатда ҳам ҳукм чиқариш учун асос бўлади, деб ҳисобладингиз.</p>\r\n\r\n<p>&ndash; Текшириб кўриши керак.&nbsp;Ахир у бирорта ҳадис ёки бошқа оятни ўқимаганми?</p>\r\n\r\n<p>&ndash; Унда мана бу саволимга жавоб беринг. Бир кишининг фарзанди бор. Бола касал бўлди, дейлик, шамоллаб қолди. Шаҳардаги ҳамма табиблар уни текшириб, унга фалон дорини бериш керак дейишди. Улар боланинг отасига унга пенициллин уколидан эҳтиёт бўлишни уқтириб, бу боланинг ўлимига олиб келади, деб айтишди. Бироқ боланинг отаси пенициллин шамоллашда ёрдам беради деб тиббий журналларда ўқиган эди. У бу масалада ўзининг билимларига асосланиб, табибларнинг маслаҳатини рад этади, чунки уларнинг ҳужжат-далилларини билмайди. У шахсий фикрига суяниб, боласига пенициллин укол қилдиради. Натижада бола Аллоҳнинг ҳузурига йўл олади. Ўша отани маҳкамага тортиш керакми? Бу ерда унинг гуноҳи борми?</p>\r\n\r\n<p>У бироз ўйланиб турди ва жавоб берди:</p>\r\n\r\n<p>&ndash; Булар бошқа-бошқа масалалар.</p>\r\n\r\n<p>&ndash; Аксинча, булар айни бир хил масалалар. Худди бояги ўспирин олимларнинг иттифоқ қилган фикрларини эшитгани каби ота ҳам барча табибларнинг фикрларини эшитди. Лекин у фақат тиббий журналда ўқиган маълумотига таянди, худди бояги ўспирин Аллоҳнинг Китобидан ўқиган битта матнига таянгани каби. Иккаласи ҳам ўз шахсий фикрини қўллади!</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><strong><strong>Сардор САИДОВ</strong></strong><strong><strong>,</strong></strong></p>\r\n\r\n<p><em><em>Қарши тумани&nbsp;</em></em><em><em>&quot;</em></em><em><em>Сарой</em></em><em><em>&quot;</em></em><em><em>&nbsp;масжиди имоми</em></em></p>\r\n',
        '', '', '', '', 'Ислом шариатига таҳдид соладиган хатар', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL,
        NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1624618616, NULL, 1624618616, 1624618616, 41, 3, 1, 1, 1624618616, 1624618616, 1624618616, 1624506949),
       (35, 10, '-11', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'muslimuz3.jpg',
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1624704273, NULL, 1624704273, 1624704273, NULL, 0, 1, 1, 1624704273, 1624704273, 1624704273, 1624704273),
       (36, 10, '-12', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
        'muslimpost2.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1624704283, NULL, 1624704283, 1624704283, NULL, 0, 1, 1, 1624704283, 1624704283, 1624704283, 1624704283),
       (37, 10, '-13', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL,
        'muslimpost1.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1624704296, NULL, 1624704296, 1624704296, NULL, 0, 1, 1, 1624704296, 1624704296, 1624704296, 1624704296),
       (38, 10, '-14', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'muslimuz1.jpg',
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1624704347, NULL, 1624704347, 1624704347, NULL, 0, 1, 1, 1624704347, 1624704347, 1624704347, 1624704347),
       (39, 8, '-15', '', '', '', '', 'Уламоларимиз масжид ва маҳаллаларда аҳоли билан маърифий суҳбатлар қуришмоқда', '', '', '', '',
        '<p>Хабар берганимиздек, бугун, 25 июнь куни Ўзбекистон мусулмонлари идораси раиси, муфтий Усмонхон Алимов ҳазратлари бошчилигидаги бир гуруҳ уламоларнинг пойтахтимиз ва Тошкент вилояти ташрифлари&nbsp;<a href=\"http://old.muslim.uz/index.php/yangiliklar-2016/uzbekistan/item/27485-muftij-azratlari-boshchiligidagi-ulamolarning-navbatdagi-tashrif-manzili-toshkent-sha-ri-va-toshkent-viloyati\">бошланди</a>. Уламоларимиз ташриф давомида Тошкент вилоятидаги масжидларда жума намозини адо этиш асносида жамоатга таъсирли маъруза қилиб&nbsp;<a href=\"https://azon.uz/content/views/muftiy-usmonhon-alimov-azon-uz-ni-eng-as\">бердилар.</a></p>\r\n\r\n<p>***</p>\r\n\r\n<p><strong>Масжидда аҳоли билан учрашув</strong></p>\r\n\r\n<p>Дин ишлари бўйича қўмита раисининг биринчи ўринбосари Музаффар Комилов ва Тошкент шаҳар бош имом-хатиби ўринбосари Абдуқаҳҳор Юнусов Янгийўл туманидаги &ldquo;Эски қовунчи&rdquo; жоме масжидида аҳоли билан учрашди, уларнинг дарду ташвишларини тинглади.</p>\r\n\r\n<p>Шунингдек, уламолар &ldquo;Ёшлик&rdquo;, &ldquo;Гулистон&rdquo;, &ldquo;Қовунчи&rdquo;, &ldquo;Пистали&rdquo; ва &ldquo;Дархон&rdquo; маҳаллалари аҳолиси билан ҳам дилдан суҳбат қуришди. Учрашув жуда кўтаринки кайфиятда бўлиб ўтди.</p>\r\n\r\n<p>***</p>\r\n\r\n<p><strong>Янги хонақоҳ биноси кўздан кечирилди</strong></p>\r\n\r\n<p>Ўзбекистон мусулмонлари идораси раисининг маслаҳатчиси, таниқли олим Салоҳиддин домла Шарипов Ангрен шаҳридаги &ldquo;Облиқ&rdquo; жоме масжидининг янги қурилаётган биносини кўздан кечирди. Устоз қурилиш жараёни билан яқиндан танишиб, ўзининг қимматли маслаҳатларини берди.</p>\r\n\r\n<p>***</p>\r\n\r\n<p><strong>Эҳтиёжманд оилалар эътиборда</strong></p>\r\n\r\n<p>Тошкент вилоятига уламоларнинг ташрифи давомида маънавий-маърифий учрашув, олис ва чекка ҳудудлардаги аҳоли вакиллари билан юзма-юз мулоқотлар, таниқли уламолар иштирокида жоме масжидларда суҳбатлар ўтказилиши баробарида эҳтиёжманд оилалар ҳолидан ҳам хабар олинмоқда.</p>\r\n\r\n<p>&nbsp;Ана шундай тадбирлардан бири Бўка туманида бўлиб ўтди. Нуриддин домла Холиқназаров, Собиржон домла Рустамов, Баҳриддин домла Шарипов ҳамда Хумоюддин Тошболтаевлар тумандаги кам таъминланган, боқувчисини йўқотган оилалар ҳолидан хабар олишди.</p>\r\n\r\n<p>Тошкент вилояти бош имом-хатиби Жасурбек домла Раупов ҳамда Олмалиқ шаҳар бош имом-хатиби Ҳусниддин домла Ортиқов шаҳардаги кам таъминланган, боқувчисини йўқотган оилалар ҳолидан хабар олишди.</p>\r\n\r\n<p>&ldquo;Вақф&rdquo; хайрия жамоат фонди томонидан ажратилган совға-саломлар учта ана шундай оилага етказиб берилди.</p>\r\n\r\n<p>***</p>\r\n\r\n<p><strong>Аҳли илмлар унутилмайди</strong></p>\r\n\r\n<p>Тошкент вилоятига ташриф буюрган уламолар кун тартибидан инсон манфаатларига хизмат қиладиган, аҳолининг маънавий-маърифий савиясини юксалтирадиган, одамларни эртанги кундан рози бўлиб яшашга ундайдиган ҳеч бир масала эътибордан четда қолмаяпти.</p>\r\n\r\n<p>Жумладан, уламоларимиз дин учун хизмат қилиб ўтган азиз инсонларнинг оила аъзоларини зиёрат қилишни ҳам унутишмади.</p>\r\n\r\n<p>Ўзбекистон мусулмонлари идораси раисининг биринчи ўринбосари Ҳомиджон домла Ишматбеков, раис ўринбосари Иброҳимжон домла Иномов, раис маслаҳатчиси Салоҳиддин домла Шарипов, Муҳаммадайюбхон домла Ҳомидов ва бошқа уламолар кўп йиллар давомида динимиз равнақи йўлида катта хизмати сингган Тошкент вилоятининг собиқ бош имом-хатиби марҳум Хайрулла домла Турматовнинг оиласи ҳолидан хабар олишди. Марҳум уламо ҳақига Қуръони карим тиловат қилиниб, Хайрулла домланинг амалга оширган хайрли ишлари эсга олинди.</p>\r\n\r\n<p>***</p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/1.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/2.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/3.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/4.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/5.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/6.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/7.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/8.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/9.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/10.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/11.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/12.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/13.JPG\" /></p>\r\n\r\n<p><img alt=\"\" src=\"http://old.muslim.uz/images/2021/ToshShahVil/25062021/14.JPG\" /></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Уламоларимизнинг сафарлари давом этмоқда. Тафсилотларни кузатиб боринг.</p>\r\n\r\n<p><strong>Ўзбекистон мусулмонлари идораси матбуот хизмати</strong></p>\r\n',
        '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1624710751, NULL, 1624710751, 1625739919, 42, 28, 1, NULL, 1624710751, 1624710751, 1624710751, 1624710746),
       (40, 10, '-16', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'muslim9.jpg',
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1624792966, NULL, 1624792966, 1624792966, NULL, 0, 1, 1, 1624792966, 1624792966, 1624792966, 1624792966),
       (41, 10, '-17', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'muslim8.jpg',
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1624792976, NULL, 1624792976, 1624792976, NULL, 0, 1, 1, 1624792976, 1624792976, 1624792976, 1624792976),
       (42, 10, '-18', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'muslim7.jpg',
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1624792983, NULL, 1624792983, 1624792983, NULL, 0, 1, 1, 1624792983, 1624792983, 1624792983, 1624792983),
       (43, 10, '-19', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'muslim5.jpg',
        NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1624792991, NULL, 1624792991, 1624792991, NULL, 0, 1, 1, 1624792991, 1624792991, 1624792991, 1624792991);
/*!40000 ALTER TABLE `cms_items` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `cms_menu`
--

DROP TABLE IF EXISTS `cms_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_menu`
(
    `id`           int(11) NOT NULL AUTO_INCREMENT,
    `title_0`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `title_1`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `title_2`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `title_3`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `title_4`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `type`         tinyint(3) NOT NULL,
    `type_helper`  varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `created_at`   int(11) unsigned NOT NULL,
    `updated_at`   int(11) unsigned NOT NULL,
    `tree`         int(11) NOT NULL,
    `lft`          int(11) NOT NULL,
    `rgt`          int(11) NOT NULL,
    `depth`        int(11) NOT NULL,
    `menu_type_id` int(11) NOT NULL,
    `created_by`   int(11) DEFAULT NULL,
    `updated_by`   int(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY            `idx-cms_menu-menu_typ_id` (`menu_type_id`),
    CONSTRAINT `fkey-cms_menu-menu_type_id` FOREIGN KEY (`menu_type_id`) REFERENCES `cms_menu_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_menu`
--

LOCK
TABLES `cms_menu` WRITE;
/*!40000 ALTER TABLE `cms_menu` DISABLE KEYS */;
INSERT INTO `cms_menu`
VALUES (1, 'Main menu', 'Main menu', 'Main menu', NULL, NULL, 1, NULL, 1620282071, 1620282071, 1, 1, 20, 0, 1, 1, 1),
       (2, 'siyrat', 'siyrat', 'siyrat', 'siyrat', 'siyrat', 1, '', 1620282119, 1624258492, 1, 4, 5, 1, 1, 1, 1),
       (3, 'media', 'media', 'media', 'media', 'media', 1, '', 1620282146, 1624258529, 1, 12, 13, 1, 1, 1, 1),
       (4, 'video', 'video', 'video', 'video', 'video', 3, 'video', 1620282162, 1624258518, 1, 10, 11, 1, 1, 1, 1),
       (5, 'audio', 'audio', 'audio', 'audio', 'audio', 3, 'audio', 1620282186, 1624258538, 1, 14, 15, 1, 1, 1, 1),
       (6, 'media', 'media', 'media', 'media', 'media', 1, '', 1620282235, 1624258502, 1, 6, 9, 1, 1, 1, 1),
       (7, 'image', 'image', 'image', 'image', 'image', 3, 'image', 1620282249, 1624258511, 1, 7, 8, 2, 1, 1, 1),
       (8, 'Home', 'Home', 'Home', 'Home', 'Home', 2, '', 1624013718, 1624013718, 1, 2, 3, 1, 1, 1, 1),
       (9, 'Контакты', 'Kontaktlar', 'Contacts', 'جهات الاتصال', 'Контактлар', 2, 'site/contacts', 1624255432, 1624255432, 1, 16, 17, 1, 1, 1, 1),
       (10, 'asdasd', 'asda', 'asdasd', 'asdasd', 'asdsa', 10, '26', 1624267929, 1624267929, 1, 18, 19, 1, 1, 1, 1);
/*!40000 ALTER TABLE `cms_menu` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `cms_menu_type`
--

DROP TABLE IF EXISTS `cms_menu_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_menu_type`
(
    `id`         int(11) NOT NULL AUTO_INCREMENT,
    `slug`       varchar(255) NOT NULL,
    `name_0`     varchar(255) DEFAULT NULL,
    `name_1`     varchar(255) DEFAULT NULL,
    `name_2`     varchar(255) DEFAULT NULL,
    `name_3`     varchar(255) DEFAULT NULL,
    `name_4`     varchar(255) DEFAULT NULL,
    `created_at` int(11) unsigned NOT NULL,
    `updated_at` int(11) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `slug` (`slug`),
    UNIQUE KEY `index-cms_collections-slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_menu_type`
--

LOCK
TABLES `cms_menu_type` WRITE;
/*!40000 ALTER TABLE `cms_menu_type` DISABLE KEYS */;
INSERT INTO `cms_menu_type`
VALUES (1, 'main', 'main', 'main', 'main', NULL, NULL, 1620282071, 1620282071);
/*!40000 ALTER TABLE `cms_menu_type` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `cms_options`
--

DROP TABLE IF EXISTS `cms_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_options`
(
    `id`            int(11) NOT NULL AUTO_INCREMENT,
    `collection_id` int(11) NOT NULL,
    `slug`          varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `name_0`        varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_1`        varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_2`        varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_3`        varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `name_4`        varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `content_0`     mediumtext COLLATE utf8_unicode_ci,
    `content_1`     mediumtext COLLATE utf8_unicode_ci,
    `content_2`     mediumtext COLLATE utf8_unicode_ci,
    `content_3`     mediumtext COLLATE utf8_unicode_ci,
    `content_4`     mediumtext COLLATE utf8_unicode_ci,
    `file_1_0`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_1_1`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_1_2`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_1_3`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_1_4`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_2_0`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_2_1`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_2_2`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_2_3`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `file_2_4`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `seo_values`    json                                 DEFAULT NULL,
    `sort`          int(11) NOT NULL DEFAULT '1',
    `created_at`    int(11) unsigned NOT NULL,
    `updated_at`    int(11) unsigned NOT NULL,
    `tree`          int(11) NOT NULL,
    `lft`           int(11) NOT NULL,
    `rgt`           int(11) NOT NULL,
    `depth`         int(11) NOT NULL,
    `created_by`    int(11) DEFAULT NULL,
    `updated_by`    int(11) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `slug` (`slug`),
    UNIQUE KEY `index-cms_options-slug` (`slug`),
    KEY             `index-cms_options-collection_id` (`collection_id`),
    CONSTRAINT `fkey-cms_options-collection_id` FOREIGN KEY (`collection_id`) REFERENCES `cms_collections` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_options`
--

LOCK
TABLES `cms_options` WRITE;
/*!40000 ALTER TABLE `cms_options` DISABLE KEYS */;
INSERT INTO `cms_options`
VALUES (1, 1, 'Articles_option', 'Articles option', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1618059827, 1618059827, 1, 1, 12, 0, NULL, NULL),
       (2, 1, 'news', 'Новости', 'Yangiliklar', 'News', 'أخبار', 'Янгиликлар', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        1, 1620283902, 1624510425, 1, 2, 3, 1, 1, 1),
       (3, 1, 'articles', 'Статьи', 'Maqolalar', 'Articles', 'مقالات', 'Мақолалар', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        2, 1620283946, 1624510467, 1, 4, 5, 1, 1, 1),
       (4, 1, 'videos', 'Видео', 'Videolar', 'Videos', 'أشرطة فيديو', 'Видеолар', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        3, 1620284032, 1624510504, 1, 6, 7, 1, 1, 1),
       (5, 1, 'audios', 'Аудио', 'Audiolar', 'Audios', 'أوديولار', 'Aудиолар', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        4, 1620284080, 1624510548, 1, 8, 9, 1, 1, 1),
       (6, 1, 'books', 'Книги', 'Kitoblar', 'Books', 'كتب', 'Китоблар', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '{
         \"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',
        5, 1620284114, 1624510597, 1, 10, 11, 1, 1, 1),
       (7, 2, 'Tags_option', 'Tags option', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1620284205, 1620284205, 7, 1, 8, 0, 1, 1),
       (8, 2, 'ro-za', 'ro\'za','ro\'za', 'ro\'za',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1620284226,1620284226,7,2,5,1,1,1),(9,3,'Use_in_slider_option','Use_in_slider option',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1620290586,1620290586,9,1,4,0,1,1),(10,3,'foydalanish','Foydalanish',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1620290671,1620290772,9,2,3,1,1,1),(11,4,'Author_option','Author option',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"meta_des_0\": null, \"meta_des_1\": null, \"meta_des_2\": null, \"meta_des_3\": null, \"meta_des_4\": null, \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": null, \"meta_keyword_1\": null, \"meta_keyword_2\": null, \"meta_keyword_3\": null, \"meta_keyword_4\": null}',1,1620371918,1620371918,11,1,6,0,1,1),(12,5,'Source_option','Source option',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1620380041,1620380041,12,1,4,0,1,1),(13,6,'Basmala_option','Basmala option',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1620380411,1620380411,13,1,4,0,1,1),(14,6,'yoqish','Yoqish','Yoqish','Yoqish','Yoqish','Yoqish','','','','','<h1 style=\"font-style: italic;\"><span style=\"font-size:72px\">Basmala</span></h1>\r\n',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1620381060,1620381060,13,2,3,1,1,1),(15,4,'dilshod','Dilshodbek','Dilshodbek','Dilshodbek','Dilshodbek','Dilshodbek','<p>malumot: Dilshodbel</p>\r\n','','','','','Dilshodbek.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',1,1621750789,1623938961,11,2,3,1,1,1),(16,2,'test','test','test','test','test','test',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,1623670755,1623670755,7,3,4,2,1,1),(17,5,'ko-rsatish','Ko`rsatish',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1623681053,1623681060,12,2,3,1,1,1),(18,4,'musulmonlar-idorasi','Пресс-служба Управления мусульман Узбекистана','Oʼzbekiston musulmonlari idorasi Matbuot xizmati','Press Service of the Muslim Board of Uzbekistan','الخدمة الصحفية للمجلس الإسلامي لأوزبكستان','Ўзбекистон мусулмонлари идораси Матбуот хизмати','','','','','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'{\"meta_des_0\": \"\", \"meta_des_1\": \"\", \"meta_des_2\": \"\", \"meta_des_3\": \"\", \"meta_des_4\": \"\", \"meta_title_0\": null, \"meta_title_1\": null, \"meta_title_2\": null, \"meta_title_3\": null, \"meta_title_4\": null, \"meta_keyword_0\": \"\", \"meta_keyword_1\": \"\", \"meta_keyword_2\": \"\", \"meta_keyword_3\": \"\", \"meta_keyword_4\": \"\"}',1,1624513233,1624513233,11,4,5,1,1,1),(19,2,'world-news','МИРОВЫЕ НОВОСТИ','DUNYO YANGILIKLАRI','WORLD NEWS','اخبار العالم','ДУНЁ ЯНГИЛИКЛАРИ',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3,1624515680,1624515680,7,6,7,1,1,1);
/*!40000 ALTER TABLE `cms_options` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `cms_options_and_items`
--

DROP TABLE IF EXISTS `cms_options_and_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_options_and_items`
(
    `option_id` int(11) NOT NULL,
    `item_id`   int(11) NOT NULL,
    KEY         `index-cms_options_and_items-option_id` (`option_id`),
    KEY         `index-cms_options_and_items-item_id` (`item_id`),
    CONSTRAINT `fkey-cms_options_and_items-item_id` FOREIGN KEY (`item_id`) REFERENCES `cms_items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fkey-cms_options_and_items-option_id` FOREIGN KEY (`option_id`) REFERENCES `cms_options` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_options_and_items`
--

LOCK
TABLES `cms_options_and_items` WRITE;
/*!40000 ALTER TABLE `cms_options_and_items` DISABLE KEYS */;
INSERT INTO `cms_options_and_items`
VALUES (3, 31),
       (17, 31),
       (14, 31),
       (3, 34),
       (18, 34),
       (17, 34),
       (14, 34),
       (2, 27),
       (15, 27),
       (17, 27),
       (14, 27),
       (19, 27),
       (2, 25),
       (15, 25),
       (17, 25),
       (10, 25),
       (14, 25),
       (19, 25),
       (2, 11),
       (15, 11),
       (17, 11),
       (10, 11),
       (14, 11),
       (8, 11),
       (5, 28),
       (18, 28),
       (17, 28),
       (10, 28),
       (14, 28),
       (19, 28),
       (2, 39),
       (18, 39),
       (17, 39),
       (14, 39),
       (2, 33),
       (18, 33),
       (17, 33),
       (14, 33),
       (2, 32),
       (18, 32),
       (17, 32),
       (14, 32),
       (3, 30),
       (18, 30),
       (17, 30),
       (14, 30),
       (2, 29),
       (18, 29),
       (17, 29),
       (14, 29),
       (16, 29);
/*!40000 ALTER TABLE `cms_options_and_items` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `cms_options_and_menu_types`
--

DROP TABLE IF EXISTS `cms_options_and_menu_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_options_and_menu_types`
(
    `id`           int(11) NOT NULL AUTO_INCREMENT,
    `option_id`    int(11) NOT NULL,
    `menu_type_id` int(11) NOT NULL,
    `created_at`   int(11) unsigned NOT NULL,
    `updated_at`   int(11) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    KEY            `index-cms_options_and_menu_types_option_id` (`option_id`),
    KEY            `index-cms_options_and_menu_types_menu_type_id` (`menu_type_id`),
    CONSTRAINT `fkey-cms_options_and_menu_types_menu_type_id` FOREIGN KEY (`menu_type_id`) REFERENCES `cms_menu_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fkey-cms_options_and_menu_types_option_id` FOREIGN KEY (`option_id`) REFERENCES `cms_options` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_options_and_menu_types`
--

LOCK
TABLES `cms_options_and_menu_types` WRITE;
/*!40000 ALTER TABLE `cms_options_and_menu_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `cms_options_and_menu_types` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `cms_unit_categories`
--

DROP TABLE IF EXISTS `cms_unit_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_unit_categories`
(
    `id`         int(11) NOT NULL AUTO_INCREMENT,
    `slug`       varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `title`      varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `created_at` int(11) unsigned NOT NULL,
    `updated_at` int(11) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `slug` (`slug`),
    UNIQUE KEY `index-cms_unit_categories-slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_unit_categories`
--

LOCK
TABLES `cms_unit_categories` WRITE;
/*!40000 ALTER TABLE `cms_unit_categories` DISABLE KEYS */;
INSERT INTO `cms_unit_categories`
VALUES (1, 'socials', 'Ijtimoiy tarmoqlar', 1618060680, 1618060680),
       (2, 'basmala', 'Basmala', 1620380552, 1620380552),
       (3, 'contact-information', 'Kontakt malumotlari', 1624255616, 1624255616);
/*!40000 ALTER TABLE `cms_unit_categories` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `cms_unit_units`
--

DROP TABLE IF EXISTS `cms_unit_units`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cms_unit_units`
(
    `id`             int(11) NOT NULL AUTO_INCREMENT,
    `category_id`    int(11) NOT NULL,
    `sort`           tinyint(3) NOT NULL,
    `slug`           varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `label`          varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `size`           int(11) NOT NULL,
    `type`           int(11) NOT NULL,
    `inputValidator` int(11) DEFAULT '1',
    `data_0`         text COLLATE utf8_unicode_ci,
    `data_1`         text COLLATE utf8_unicode_ci,
    `data_2`         text COLLATE utf8_unicode_ci,
    `data_3`         text COLLATE utf8_unicode_ci,
    `data_4`         text COLLATE utf8_unicode_ci,
    `created_at`     int(11) unsigned NOT NULL,
    `updated_at`     int(11) unsigned NOT NULL,
    PRIMARY KEY (`id`),
    KEY              `index-cms_unit_units-slug` (`slug`),
    KEY              `index-cms_unit_units-updated_at` (`updated_at`),
    KEY              `index-cms_unit_units-category_id` (`category_id`),
    CONSTRAINT `fkey-cms_unit_units-category_id` FOREIGN KEY (`category_id`) REFERENCES `cms_unit_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cms_unit_units`
--

LOCK
TABLES `cms_unit_units` WRITE;
/*!40000 ALTER TABLE `cms_unit_units` DISABLE KEYS */;
INSERT INTO `cms_unit_units`
VALUES (1, 1, 1, 'telegram', 'Telegram', 6, 26, 4, 'https://t.me/muslimuzportal', NULL, NULL, NULL, 'https://t.me/muslim_uz', 1618060932, 1624007096),
       (2, 1, 2, 'instagram', 'Instagram', 6, 26, 4, 'http://www.instagram.com/muslimuzportali', NULL, NULL, NULL, 'https://t.me/muslim_uz', 1618060954, 1624007096),
       (3, 1, 3, 'facebook', 'Facebook', 6, 26, 4, 'http://www.facebook.com/muslimuzportal', NULL, NULL, NULL, 'https://t.me/muslim_uz', 1618060971, 1624007096),
       (4, 1, 4, 'twitter', 'Twitter', 6, 26, 4, '', NULL, NULL, NULL, 'https://t.me/muslim_uz', 1618060989, 1624007096),
       (5, 1, 5, 'youtube', 'Youtube', 6, 26, 4, 'https://www.youtube.com/channel/UCLbdL0ibb4zqlqe7LRNOSNQ', NULL, NULL, NULL, 'https://t.me/muslim_uz', 1618061013, 1624007096),
       (6, 2, 1, 'basmala', 'Basmala', 12, 21, 1, '<p>Басмала</p>\r\n', '<p>Basmala</p>\r\n', '<p>Basmala</p>\r\n', '<p>Basmala arabic</p>\r\n', '<p>Basmala</p>\r\n', 1620380572, 1623670232),
       (7, 1, 6, 'tiktok', 'Tiktok', 6, 26, 1, NULL, NULL, NULL, NULL, 'https://t.me/muslim_uz', 1624104352, 1624104368),
       (8, 3, 1, 'maps', 'Joylashuv', 4, 25, 1, 'Управление мусульман Узбекистана, Алмазор', 'Oʼzbekiston Musulmonlari Idorasi, Olmozor', 'Board of Muslims of Uzbekistan, Almazor', 'مجلس مسلمي أوزبكستان ، المازور',
        'Ўзбекистон Мусулмонлари Идораси, Олмозор', 1624255685, 1624256360),
       (9, 3, 2, 'working-time', 'Ish vaqti', 4, 25, 1, 'Часы работы: с 9:00 до 18:00.', 'Ish vaqti: 09:00 dan 18:00 gacha', 'Hours: 9am to 6pm', 'ساعات العمل: من 9 صباحًا حتى 6 مساءً', 'Иш вақти: 09:00 дан 18:00 гача', 1624255758, 1624256360),
       (10, 3, 3, 'email1', 'email', 4, 26, 1, 'info@muslim.uz', NULL, NULL, NULL, 'muslim@email.com', 1624255774, 1624260286),
       (12, 3, 5, 'tell-number1', 'telefon raqam 1', 6, 26, 1, 'http://asd.sd', '', '', '', '', 1624255851, 1624260403),
       (13, 3, 6, 'email2', 'email 2 ', 4, 26, 1, 'noreply@muslim.uz', NULL, NULL, NULL, 'example@muslimgmail.com', 1624256505, 1624260286),
       (14, 3, 7, 'tell-number2', 'telefon raqam 2', 6, 26, 1, '987654321', NULL, NULL, NULL, '(+91) 1247-4576', 1624256652, 1624260286),
       (15, 3, 4, 'fax', 'Fax', 6, 26, 1, 'asdasd', NULL, NULL, NULL, NULL, 1624260660, 1624260673);
/*!40000 ALTER TABLE `cms_unit_units` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feedback`
(
    `id`          int(11) NOT NULL AUTO_INCREMENT,
    `full_name`   varchar(255) NOT NULL,
    `email_phone` varchar(255) NOT NULL,
    `message`     text,
    `created_at`  int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK
TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback`
VALUES (1, 'Dilshod', '+998913395682', 'zxczc', 1624114563),
       (2, 'Dilshod', 'ruzimurodovdilshod@email.com', 'test', 1624255466),
       (3, 'asdasd', 'adad', '', 1624618379),
       (4, 'test', '+998913395682', 'test matn', 1624621826),
       (5, 'Dilshod', 'xcsadas', 'asdasd', 1624622476),
       (6, 'dsdfsdfsdfsdfsdfsdf', 'sdfsdfsdfsdfsdfsdf', 'sdfsdfsdfsdf', 1624622507),
       (7, 'dsfsdfsdfsdfsdfsdfsdfsdfsdfsdfvzcx', 'zxczxc', 'zxcxz', 1624622556),
       (8, 'salom', 'test', 'test11', 1625134639);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `migration`
--

DROP TABLE IF EXISTS `migration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migration`
(
    `version`    varchar(180) NOT NULL,
    `apply_time` int(11) DEFAULT NULL,
    PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migration`
--

LOCK
TABLES `migration` WRITE;
/*!40000 ALTER TABLE `migration` DISABLE KEYS */;
INSERT INTO `migration`
VALUES ('m000000_000000_base', 1618059662),
       ('m130524_201442_init', 1618059664),
       ('m190124_110200_add_verification_token_column_to_user_table', 1618059665),
       ('m191004_072253_create_menu_table', 1618059665),
       ('m200305_121442_create_unit_categories_table', 1618059665),
       ('m200305_121443_create_unit_units_table', 1618059665),
       ('m200502_133940_add_user', 1618059666),
       ('m201207_131825_create_collections_table', 1618059666),
       ('m201208_111804_create_options_table', 1618059666),
       ('m201210_060118_create_entities_table', 1618059667),
       ('m201212_035644_create_items_table', 1618059667),
       ('m201212_036644_create_item_photos_table', 1618059667),
       ('m201218_061950_create_collections_and_entities_table', 1618059667),
       ('m201219_132100_create_options_and_items_table', 1618059668),
       ('m201219_132101_add_column_entity_and_items_table', 1618059668),
       ('m201219_132102_add_photos_to_item_table', 1618059669),
       ('m210117_232103_add_views_count_and_auto_slug_to_items_table', 1618059669),
       ('m210126_065034_add_columns_to_cms_menu_table', 1618059669),
       ('m210128_053616_create_cms_menu_type_table', 1618059670),
       ('m210201_145334_add_columns_to_cms_options_table', 1618059670),
       ('m210201_165334_add_columns_to_cms_collections_table', 1620279569),
       ('m210201_175334_add_columns_to_cms_entities_table', 1620279570),
       ('m210303_142524_create_table_feedback', 1624114008),
       ('m210415_102713_create_table_regions', 1624549419),
       ('m210507_132100_fixes', 1621690047),
       ('m210611_102100_fix_menu_title_5', 1623496982),
       ('m210618_084000_fix_fkeys', 1623990103),
       ('m210624_120535_create_namoz_time_table', 1624549419),
       ('m211219_176100_create_options_and_menu_types_table', 1620279570),
       ('m211229_176101_add_to_entities_watermark_table', 1620279570),
       ('m211329_176101_add_created_by_and_updated_by_columns', 1620279574),
       ('m211429_176101_rename_entity_wetermark_column', 1620279574);
/*!40000 ALTER TABLE `migration` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `namoz_time`
--

DROP TABLE IF EXISTS `namoz_time`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `namoz_time`
(
    `id`        int(11) NOT NULL AUTO_INCREMENT,
    `name`      varchar(255) NOT NULL,
    `parent_id` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `namoz_time`
--

LOCK
TABLES `namoz_time` WRITE;
/*!40000 ALTER TABLE `namoz_time` DISABLE KEYS */;
/*!40000 ALTER TABLE `namoz_time` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `regions`
--

DROP TABLE IF EXISTS `regions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `regions`
(
    `id`        int(11) NOT NULL AUTO_INCREMENT,
    `name`      varchar(255) NOT NULL,
    `parent_id` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regions`
--

LOCK
TABLES `regions` WRITE;
/*!40000 ALTER TABLE `regions` DISABLE KEYS */;
/*!40000 ALTER TABLE `regions` ENABLE KEYS */;
UNLOCK
TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user`
(
    `id`                   int(11) NOT NULL AUTO_INCREMENT,
    `username`             varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `auth_key`             varchar(32) COLLATE utf8_unicode_ci  NOT NULL,
    `password_hash`        varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `password_reset_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    `email`                varchar(255) COLLATE utf8_unicode_ci NOT NULL,
    `status`               smallint(6) NOT NULL DEFAULT '10',
    `created_at`           int(11) NOT NULL,
    `updated_at`           int(11) NOT NULL,
    `verification_token`   varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `username` (`username`),
    UNIQUE KEY `email` (`email`),
    UNIQUE KEY `password_reset_token` (`password_reset_token`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK
TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user`
VALUES (1, 'adm!n', '9LKBHCTJ2n_G0Flkc3iazm42JpJEk-NO', '$2y$13$Mf6VKcdvZXG2lDPepPrjKuqJhGpTfUc.T21n3IEB/GguWKw8Uf/T.', NULL, 'a@a.a', 10, 1618059666, 1618059666, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK
TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-15 17:21:50
