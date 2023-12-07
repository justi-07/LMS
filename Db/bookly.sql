/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 5.5.8-log : Database - bookly
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bookly` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `bookly`;

/*Table structure for table `bookings` */

DROP TABLE IF EXISTS `bookings`;

CREATE TABLE `bookings` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `b_id` varchar(100) NOT NULL,
  `m_id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL COMMENT 'book name',
  `cdate` varchar(100) NOT NULL COMMENT 'current date',
  `rdate` varchar(100) NOT NULL COMMENT 'return date',
  `status` varchar(100) NOT NULL,
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

/*Data for the table `bookings` */

insert  into `bookings`(`booking_id`,`b_id`,`m_id`,`name`,`cdate`,`rdate`,`status`) values (22,'4','3','Tom And Jerry','2023-02-23T06:03:03.778Z','2023-03-02T06:03:03.778Z','Returned'),(23,'5','3','The Great Father','2023-02-23T06:03:06.450Z','2023-03-02T06:03:06.450Z','collected'),(24,'4','3','Tom And Jerry','2023-02-23T06:03:27.530Z','2023-03-02T06:03:27.530Z','Returned'),(25,'4','28','Tom And Jerry','2023-02-23T06:38:55.729Z','2023-03-02T06:38:55.729Z','Returned'),(26,'4','28','Tom And Jerry','2023-02-23T06:39:07.905Z','2023-03-02T06:39:07.905Z','Returned');

/*Table structure for table `books` */

DROP TABLE IF EXISTS `books`;

CREATE TABLE `books` (
  `b_id` int(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `genres` varchar(100) NOT NULL,
  `stock` varchar(100) NOT NULL,
  `language` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

/*Data for the table `books` */

insert  into `books`(`b_id`,`name`,`author`,`genres`,`stock`,`language`,`description`) values (4,'Tom And Jerry','James','Fiction','2','English','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'),(5,'The Great Father','Steve','romance','2','English,Malayalam','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry');

/*Table structure for table `login` */

DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
  `l_id` int(11) NOT NULL AUTO_INCREMENT,
  `reg_id` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT '1',
  PRIMARY KEY (`l_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

/*Data for the table `login` */

insert  into `login`(`l_id`,`reg_id`,`email`,`password`,`type`,`status`) values (1,'0','admin@gmail.com','admin','ADMIN','1'),(2,'1','midhun@gmail.com','123','USER','1'),(3,'3','m@gmail.com','123','USER','1'),(4,'4','a@gmail.com','123','USER','0'),(5,'5','joyel@gmail.com','123','USER','1'),(6,'6','reshmi@gmail.com','123','USER','1'),(7,'7','gari@gmail.com','123','USER','0'),(8,'8','alen@gmail.com','123','USER','1'),(14,'25','abccc@fdgfgh.f','123','USER','0'),(15,'26','akhil@gmail.com','123','USER','1'),(16,'27','mridhul@gmail.com','123','USER','1'),(17,'28','raju@gmail.com','112233','USER','1');

/*Table structure for table `members` */

DROP TABLE IF EXISTS `members`;

CREATE TABLE `members` (
  `m_id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `fullname` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `department` varchar(100) NOT NULL,
  `semester` varchar(100) NOT NULL,
  `regno` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

/*Data for the table `members` */

insert  into `members`(`m_id`,`fullname`,`phone`,`department`,`semester`,`regno`,`gender`,`email`,`password`) values (1,'Midhun S','9876543210','Bsc cs','6','ATASSCS010','male','midhun@gmail.com','123'),(3,'Manu   ','9874543541','BCOM','5','ATASSCS015','male','m@gmail.com','123'),(4,'Ajin','9879846546','BA English','4','ATASSCS019','male','a@gmail.com','123'),(5,'Joyel','9657112001','BBA','5','ATASSCS012','male','joyel@gmail.com','123'),(6,'Reshmi','9622211546','BCA','6','ATASSCS14','female','reshmi@gmail.com','123'),(7,'Gari','9644565468','BCOM','2','ATASSCOM22','male','gari@gmail.com','123'),(11,'alen','9535435146','BBA','3','ATASSCS056','male','alen@gmail.com','123'),(22,'sdfsfd','9987987987','sffs','s','sdfqf','male','aaa@gmail.com','123'),(23,'ww','9858498140','w','w','w','male','ssssg@fdgfgh.f','123'),(24,'SSSSFHJGH','9896555555','NYFJ','NJH','FJFJFJJFJ','male','FG@GMAIOL.COM','123'),(25,'ww','9858498140','w','w','w','male','abccc@fdgfgh.f','123'),(26,'Akhil ','9665446546','Django','5','AATTDS00','male','akhil@gmail.com','123'),(27,'Mridhul','9567751546','Marketing','3','MARK09','male','mridhul@gmail.com','123'),(28,'Raju','9947589658','BCA','1','123456','male','raju@gmail.com','112233');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
