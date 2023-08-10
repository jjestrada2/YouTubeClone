-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: csc317db
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `fk_userId` int unsigned NOT NULL,
  `text` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_postId` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_author_idx` (`fk_postId`),
  KEY `author_id_idx` (`fk_userId`),
  CONSTRAINT `author_id` FOREIGN KEY (`fk_userId`) REFERENCES `users` (`id`),
  CONSTRAINT `post_Id` FOREIGN KEY (`fk_postId`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,2,'Hello','2023-08-08 14:38:37','2023-08-08 14:38:37',2),(2,2,'Hello this is my comment#2','2023-08-08 14:39:29','2023-08-08 14:39:29',2),(3,2,'Hello this is my comment#3','2023-08-08 14:39:37','2023-08-08 14:39:37',2),(4,2,'Hello this is my comment#4','2023-08-08 14:39:46','2023-08-08 14:39:46',2),(5,2,'Hello this is my comment#5','2023-08-08 14:39:53','2023-08-08 14:39:53',2),(6,2,'Hello this is my comment#1','2023-08-08 14:48:55','2023-08-08 14:48:55',3),(7,2,'Hello this is my comment#2','2023-08-08 14:49:06','2023-08-08 14:49:06',3),(8,2,'Hello this is my comment#3','2023-08-08 14:49:12','2023-08-08 14:49:12',3),(9,3,'Hello this is my comment#3','2023-08-08 14:49:20','2023-08-08 14:49:20',3),(10,3,'Hello this is my comment#3','2023-08-08 14:49:22','2023-08-08 14:49:22',3),(12,5,'Hello this is my comment#3','2023-08-08 14:49:37','2023-08-08 14:49:37',3),(13,5,'Hello this is my comment#3','2023-08-08 14:49:51','2023-08-08 14:49:51',2),(14,3,'Hello this is my comment#3','2023-08-08 14:50:00','2023-08-08 14:50:00',2),(15,9,'jgjkdsgf','2023-08-08 17:11:38','2023-08-08 17:11:38',2),(16,9,'First comment do it from the frontend','2023-08-08 17:12:28','2023-08-08 17:12:28',7),(17,9,'Comment#2','2023-08-08 17:19:29','2023-08-08 17:19:29',7),(18,9,'comment3','2023-08-08 17:19:45','2023-08-08 17:19:45',7),(19,9,'comment4','2023-08-08 17:21:38','2023-08-08 17:21:38',7),(20,9,'','2023-08-08 17:24:42','2023-08-08 17:24:42',7),(21,9,'comentbuttonprove','2023-08-08 17:25:01','2023-08-08 17:25:01',7),(22,9,'this is my longest message this is my longest message this is my longest message this is my longest message this is my longest message this is my longest message sgl;jl;jfglsjg','2023-08-08 17:26:07','2023-08-08 17:26:07',7),(23,9,'frfrge','2023-08-08 17:27:12','2023-08-08 17:27:12',7),(24,9,'juanito','2023-08-08 17:32:20','2023-08-08 17:32:20',2),(25,9,'kjhasd','2023-08-09 10:05:14','2023-08-09 10:05:14',3),(26,9,'hjghjfhj','2023-08-09 10:37:46','2023-08-09 10:37:46',2),(27,11,'This is my comment','2023-08-09 21:43:38','2023-08-09 21:43:38',2),(28,12,'hello','2023-08-09 22:07:37','2023-08-09 22:07:37',2),(29,16,'VideoSampleComment','2023-08-09 22:55:17','2023-08-09 22:55:17',19),(30,17,'Comment for sample100','2023-08-09 23:07:09','2023-08-09 23:07:09',20),(31,18,'Comment ldhvkjashvkasv','2023-08-09 23:15:24','2023-08-09 23:15:24',21),(32,19,'jkhafjkhkasfh kjhfkdjaf lol','2023-08-09 23:30:27','2023-08-09 23:30:27',22),(33,20,'Juanito jksfjklgskjg lol','2023-08-09 23:43:15','2023-08-09 23:43:15',23);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `video` varchar(4096) NOT NULL,
  `thumbnail` varchar(4096) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_userId` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `post_author_idx` (`fk_userId`),
  CONSTRAINT `post_author` FOREIGN KEY (`fk_userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (2,'Sample1','SampleVideo1','public\\uploads\\videos\\uploadVideo-1691246080661-887198029.mp4','public/uploads/images/thumbnail-uploadVideo-1691246080661-887198029.png','2023-08-05 07:34:40','2023-08-05 07:34:40',9),(3,'Sample2','SampleVideo2','public\\uploads\\videos\\uploadVideo-1691246177320-687758064.mp4','public/uploads/images/thumbnail-uploadVideo-1691246177320-687758064.png','2023-08-05 07:36:17','2023-08-05 07:36:17',9),(4,'Sample3','SampleVideo3','public\\uploads\\videos\\uploadVideo-1691246843182-915986260.mp4','public/uploads/images/thumbnail-uploadVideo-1691246843182-915986260.png','2023-08-05 07:47:23','2023-08-05 07:47:23',9),(5,'Sample4','SampleVideo4','public\\uploads\\videos\\uploadVideo-1691247171126-711068001.mp4','public/uploads/images/thumbnail-uploadVideo-1691247171126-711068001.png','2023-08-05 07:52:51','2023-08-05 07:52:51',9),(6,'Sample5','SampleVideo5','public\\uploads\\videos\\uploadVideo-1691247310818-306334813.mp4','public/uploads/images/thumbnail-uploadVideo-1691247310818-306334813.png','2023-08-05 07:55:11','2023-08-05 07:55:11',9),(7,'Sample6','SampleVideo6','public\\uploads\\videos\\uploadVideo-1691247480685-787992069.mp4','public/uploads/images/thumbnail-uploadVideo-1691247480685-787992069.png','2023-08-05 07:58:00','2023-08-05 07:58:00',9),(8,'Juan','This is my video','public\\uploads\\videos\\uploadVideo-1691642703716-48447198.mp4','public/uploads/images/thumbnail-uploadVideo-1691642703716-48447198.png','2023-08-09 21:45:04','2023-08-09 21:45:04',11),(9,'Juan','This is my video 2','public\\uploads\\videos\\uploadVideo-1691642834148-643519965.mp4','public/uploads/images/thumbnail-uploadVideo-1691642834148-643519965.png','2023-08-09 21:47:14','2023-08-09 21:47:14',11),(10,'Video','SampleVideo3','public\\uploads\\videos\\uploadVideo-1691643273375-845721715.mp4','public/uploads/images/thumbnail-uploadVideo-1691643273375-845721715.png','2023-08-09 21:54:33','2023-08-09 21:54:33',9),(11,'Example','expample description','public\\uploads\\videos\\uploadVideo-1691644102605-336473969.mp4','public/uploads/images/thumbnail-uploadVideo-1691644102605-336473969.png','2023-08-09 22:08:22','2023-08-09 22:08:22',12),(12,'family','familypost','public\\uploads\\videos\\uploadVideo-1691644262847-232703813.mp4','public/uploads/images/thumbnail-uploadVideo-1691644262847-232703813.png','2023-08-09 22:11:02','2023-08-09 22:11:02',12),(13,'family','familypost','public\\uploads\\videos\\uploadVideo-1691644266600-944249107.mp4','public/uploads/images/thumbnail-uploadVideo-1691644266600-944249107.png','2023-08-09 22:11:06','2023-08-09 22:11:06',12),(14,'VideoExample','expample description4','public\\uploads\\videos\\uploadVideo-1691644369680-587262448.mp4','public/uploads/images/thumbnail-uploadVideo-1691644369680-587262448.png','2023-08-09 22:12:51','2023-08-09 22:12:51',12),(15,'VideoExample','expample description4','public\\uploads\\videos\\uploadVideo-1691644421126-969768403.mp4','public/uploads/images/thumbnail-uploadVideo-1691644421126-969768403.png','2023-08-09 22:13:41','2023-08-09 22:13:41',12),(16,'video','ghfdg','public\\uploads\\videos\\uploadVideo-1691644560038-16174904.mp4','public/uploads/images/thumbnail-uploadVideo-1691644560038-16174904.png','2023-08-09 22:16:00','2023-08-09 22:16:00',12),(17,'NewPost1016','NewPost1016','public\\uploads\\videos\\uploadVideo-1691644628152-254058918.mp4','public/uploads/images/thumbnail-uploadVideo-1691644628152-254058918.png','2023-08-09 22:17:08','2023-08-09 22:17:08',12),(18,'SampleTitleVideo','SampleDesVideo','public\\uploads\\videos\\uploadVideo-1691645071372-189566071.mp4','public/uploads/images/thumbnail-uploadVideo-1691645071372-189566071.png','2023-08-09 22:24:31','2023-08-09 22:24:31',13),(19,'VideoSample#100','VideoSample#100Descr','public\\uploads\\videos\\uploadVideo-1691646758364-45308885.mp4','public/uploads/images/thumbnail-uploadVideo-1691646758364-45308885.png','2023-08-09 22:52:38','2023-08-09 22:52:38',16),(20,'SampleVideo100','DescSample100','public\\uploads\\videos\\uploadVideo-1691647505515-862822045.mp4','public/uploads/images/thumbnail-uploadVideo-1691647505515-862822045.png','2023-08-09 23:05:05','2023-08-09 23:05:05',17),(21,'SampleVideo101','SampleDes101','public\\uploads\\videos\\uploadVideo-1691648037038-49961312.mp4','public/uploads/images/thumbnail-uploadVideo-1691648037038-49961312.png','2023-08-09 23:13:57','2023-08-09 23:13:57',18),(22,'SampleVideo102','SampleDes102','public\\uploads\\videos\\uploadVideo-1691648907218-722466279.mp4','public/uploads/images/thumbnail-uploadVideo-1691648907218-722466279.png','2023-08-09 23:28:27','2023-08-09 23:28:27',19),(23,'SampleTitle103','SampleDes103','public\\uploads\\videos\\uploadVideo-1691649705504-543954998.mp4','public/uploads/images/thumbnail-uploadVideo-1691649705504-543954998.png','2023-08-09 23:41:47','2023-08-09 23:41:47',20);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `createdAT` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updateAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'sample1','sample1@gmail.com','$2b$05$JC9o51aK/lxj0yIDgfS5CuJvS0ceCJZiMZvftOrh7.1/KivoAdCky','2023-07-28 11:35:25','2023-07-28 11:35:25'),(3,'sample2','sample2@gmail.com','$2b$05$RAL9tNoct.XAX9Ms4bqSbunAyc7gnAv5swlPC9NKMuO996GrMVb/6','2023-07-28 11:36:36','2023-07-28 11:36:36'),(5,'sample4','sample4@mail.com','$2b$05$yPAm4tpoWmzs4qJ9N81LfO38EooDxw9XeXun1yFLrv7kcNGuol4eK','2023-07-28 12:22:42','2023-07-28 12:22:42'),(6,'sample5','sample5@mail.com','$2b$05$6OY/eCRCdwR76A.XeYoNNOShj96qrtjy5qBFHoYX93gi59JUNbpd.','2023-07-28 12:45:23','2023-07-28 12:45:23'),(7,'sample8','sample8@mail.com','$2b$05$6recaVWm2RLELRqBto1Y3e.CYHbUpaWaPXiTjK/EqHK8shH1PdbTW','2023-07-31 10:57:56','2023-07-31 10:57:56'),(8,'sample99','sample99@mail.com','$2b$05$1CariMnEkTVp9y6HSsvt3.QR1sdJ77ngPOrm8K77TsdRhdK.Cl2DW','2023-07-31 11:06:20','2023-07-31 11:06:20'),(9,'sample10','mail10@gmail.com','$2b$05$QjJZlHNN7zsnTiQr3M/c9ukJEMusmx.QbgdrKirCPqHUsapSmLAGe','2023-08-04 11:14:14','2023-08-04 11:14:14'),(10,'sample11','sample11@gmail.com','$2b$05$HbAyTADBsrASQF1z2D.21O7eHAkt4YDyHgoLbOUUG2hGq6pPIbRGO','2023-08-06 11:43:33','2023-08-06 11:43:33'),(11,'JuanJose','JuanJose@mail.com','$2b$05$zzUY5saQqObdPyXjiow.PeP6pnQ1uB6bRtgZfAh4A1Uwyd.nKlpGa','2023-08-09 21:42:32','2023-08-09 21:42:32'),(12,'Sample13','mail13@mail.com','$2b$05$hlHgHksJra7VahzfHMao9.PZTYkKudCeVDQitr8x4c.pNcF7JfGaC','2023-08-09 22:07:19','2023-08-09 22:07:19'),(13,'JuanSampleVideo','JuanSampleVideo@gmail.com','$2b$05$k5hOyWNxe8xNArZuHea6P.pcGOADGYzzknM9FuFr/lkefiYjbcYIS','2023-08-09 22:22:20','2023-08-09 22:22:20'),(14,'UserVideo','UserVideo@gamil.com','$2b$05$I.RisXG.r0ICAPWf6Hg4iOR9QTL7jWEjJ07qyxG7pzaCLjbxjvqNW','2023-08-09 22:34:22','2023-08-09 22:34:22'),(15,'JuanitoVideo','JuanitoVideo@mail.com','$2b$05$l8h8HlKm92eerqKuxTRqeO6qDRgN61aBOChkWH1SOXck/4VUXS0KC','2023-08-09 22:47:53','2023-08-09 22:47:53'),(16,'UserVideoSample','UserVideoSample@gmail.com','$2b$05$/6AnTLeJSGOKv5NGV/mEU.Z/jwObFRpVAgzpB9N9eUlfRM1mA3d/6','2023-08-09 22:50:33','2023-08-09 22:50:33'),(17,'sample100','sample100@mail.com','$2b$05$jxKyIIO5J3.ALd/IT665/e6oor2bM8QpGD8q6VrqXZ9AcnlQiG/5m','2023-08-09 23:03:06','2023-08-09 23:03:06'),(18,'sample101','sample101@gmail.com','$2b$05$wcdd7rgBVhDRO22HEnT5aeG/CIos16vxOuxruwRkW4K1CexxzHt2i','2023-08-09 23:12:09','2023-08-09 23:12:09'),(19,'sample102','sample102@gmail.com','$2b$05$BmZGcd1HNQoaT2mQ/k7xDusVoKTDOyV06giDvI5URDYFuIXgZmg4a','2023-08-09 23:26:34','2023-08-09 23:26:34'),(20,'Sample103','Sample103','$2b$05$3RaFr9Smp/61GGrD1Y.m1eOdUECvp0yW5T4I58HDBkehq3QJVxIzC','2023-08-09 23:39:54','2023-08-09 23:39:54');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-10  0:35:16
