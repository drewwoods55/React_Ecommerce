CREATE DATABASE  IF NOT EXISTS `ecom` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecom`;
-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: localhost    Database: ecom
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int DEFAULT NULL,
  `image` text,
  `description` text,
  `size` text,
  `price` double(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'assets/images/aj1.jpeg','Shattered Backboard 1s','Mens: US 9',875.00),(2,'assets/images/bape.jpeg','Bape Hoodie','Mens: US XL',399.00),(3,'assets/images/offwhite.jpeg','oFF-White Blazers','Mens: US 13',960.00),(4,'assets/images/basketball.jpeg','Complex Con BasketBall','Indoor/Outdoor',120.00),(5,'assets/images/aj1.jpeg','Shattered Backboard 1s','Mens: US 9',875.00),(6,'assets/images/suppants.jpeg','Supreme Fox Sweatpants','Mens: US XL',320.00),(7,'assets/images/450slate.jpeg','Yeezy 450 Slate','Mens: US 12',550.00),(8,'assets/images/aj1.jpeg','Shattered Backboard 1s','Mens: US 9',875.00),(9,'assets/images/aj1.jpeg','Shattered Backboard 1s','Mens: US 9',875.00),(10,'assets/images/aj1.jpeg','Shattered Backboard 1s','Mens: US 9',875.00),(11,'assets/images/aj1.jpeg','Shattered Backboard 1s','Mens: US 9',875.00),(12,'assets/images/aj1.jpeg','Shattered Backboard 1s','Mens: US 9',875.00);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-28 12:39:18
