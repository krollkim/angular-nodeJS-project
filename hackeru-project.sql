-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 19, 2023 at 03:41 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hackeru-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(40) NOT NULL,
  `lastName` varchar(40) NOT NULL,
  `birthday` date DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `state` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `street` varchar(100) NOT NULL,
  `postalCode` varchar(10) NOT NULL,
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `firstName`, `lastName`, `birthday`, `email`, `phone`, `state`, `city`, `street`, `postalCode`, `isDeleted`) VALUES
(1, 'kim', 'kroll', '2000-09-15', 'kim@k', '1231233123', 'isr', 'tlv', 'rot', '111111', 0),
(2, 'thgjmm', 'fjhmg,', NULL, 'hsfgdj@sgd', '214134124', '', '0', '', '', 0),
(3, 'ki,', 'sbvcn', NULL, 'fhngd@djd', '3246343346', '', '0', '', '', 0),
(4, 'dfbdfh', 'fdhdgh', '2018-01-24', 'sfhf@fhdgj', '23153352312', 'isr', 'tlv', 'rot', '1111', 1),
(5, 'לןצל', 'לאילצע', '2023-02-08', '124@123', '124134134', '', '0', '', '', 1),
(6, 'kim', 'kkt', '2020-06-07', 'fsdfsd@124', '1242142141', '', '0', '', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(40) NOT NULL,
  `lastName` varchar(40) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `address` varchar(25) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `notes` varchar(100) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `firstName`, `lastName`, `email`, `phone`, `address`, `createdAt`, `notes`, `isDeleted`) VALUES
(1, 'koko', 'bobo', '321@321', '09876543213', 'tlv', '2023-02-09 20:27:25', 'tlv', 1),
(2, 'kim', 'k', 'kim@123', '50505050', 'tlv', '2023-02-09 20:27:25', 'wow', 1),
(3, 'george123', 'long', 'kim@123', '60606050', '564756867', '2023-02-14 22:32:31', '', 1),
(4, 'georgy11121', 'lolo', 'kim@123', '60606050', '564756867', '2023-02-14 22:32:31', 'im here', 0),
(5, 'sdggxfgj', 'fjvjkhhv', '123@32132', '8706i806584', 'gjl,flhvl,', '2023-02-15 17:46:34', 'gcjkvj, bn,', 0),
(6, 'kimko', 'lopo', '123@123', '050505050505', 'tlv123', '2023-02-15 22:14:41', 'amazing', 0),
(7, 'koko', 'loco', '1232143@123', '67746947956', 'gfjh,vn', '2023-02-16 00:27:59', 'cg,cgktjsrt', 1),
(8, 'fsghdzhf', 'dfxhnxcvn', '1231341@123123', '462765969', '', '2023-02-16 00:29:34', '', 1),
(9, 'cfdhh', 'dfjsfgj', '4214634@142', '576583783', '', '2023-02-16 00:30:36', '', 1),
(10, 'zdgjdnjfj', 'fxgbjmgb', '4365@4353', '583573562457', '', '2023-02-16 00:30:58', '', 1),
(11, 'dhjjdh', 'lopodopo', '123534@1232', '568538796', 'hgmnbmncb', '2023-02-16 17:19:11', 'cnb,cbn,', 1),
(12, 'kim123', 'k123', '134@123', '357687696746', '', '2023-02-16 17:27:36', '', 1),
(13, '362546', '4573657', '316456@131245', '1365247568', '', '2023-02-16 17:28:26', '', 1),
(14, 'nono', 'lolo', 'nonolo123@gmail.com', '098776548', '', '2023-02-22 01:04:29', '', 1),
(15, 'yoyo', 'bobo', 'yoboyo@gmail.com', '0987765789', '', '2023-02-22 01:04:29', '', 1),
(18, 'kimgo', 'loco', '1123@123', '1242542362', '', '2023-02-22 17:40:48', '', 1),
(19, 'vxhfg', 'dgjfj', '123@123', '6769578859', '', '2023-02-22 17:41:47', '', 1),
(20, 'לםזם', 'זםלם', 'zoko@kozo.com', '05226048908', '', '2023-02-22 21:19:51', '', 1),
(21, '123', '123', '123@123', '123123123', '', '2023-02-22 21:20:22', '', 1),
(22, '123123', '123123', '123123@123', '1233123123', '', '2023-02-22 21:20:34', '', 1),
(23, '321321', '321321', '123321@123', '12312312313', '', '2023-02-22 21:20:51', '', 1),
(24, '4321432', '4321', '123423@123', '12332432423', '', '2023-02-22 21:21:04', '', 1),
(25, '4321', '4321', '432@1234', '21321341243', '', '2023-02-22 21:21:23', '', 1),
(26, 'lobo', 'bobo', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:22:04', '', 1),
(27, 'lobo', 'bobo', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:22:06', '', 1),
(28, 'lobo', 'bobo', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:22:19', '', 1),
(29, 'lobo', 'bobo', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:22:25', '', 1),
(30, 'lobo', 'bobo', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:22:28', '', 1),
(31, 'lobo', 'bobo', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:22:31', '', 1),
(32, 'lobo', 'bobo', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:22:33', '', 1),
(33, 'lobo', 'bobo', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:22:35', '', 1),
(34, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:23', '', 1),
(35, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:27', '', 1),
(36, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:30', '', 1),
(37, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:32', '', 1),
(38, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:34', '', 1),
(39, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:36', '', 1),
(40, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:38', '', 1),
(41, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:40', '', 1),
(42, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:42', '', 1),
(43, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:45', '', 1),
(44, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:47', '', 1),
(45, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:49', '', 1),
(46, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:51', '', 1),
(47, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:53', '', 1),
(48, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:55', '', 1),
(49, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:24:58', '', 1),
(50, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:25:00', '', 1),
(51, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:25:02', '', 1),
(52, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:25:05', '', 1),
(53, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:25:07', '', 1),
(54, 'nunu', 'gono', 'nonolo123@gmail.com', '0060606050', '', '2023-02-22 21:25:43', '', 1),
(55, 'kimko', 'rolko', 'kk@kimk', '1234561234', '', '2023-03-01 18:07:10', '', 1),
(56, 'kimklo', 'olkmik', 'kimk@123', '123123123', '122', '2023-03-01 22:37:04', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `userID` int(11) NOT NULL,
  `task` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '0',
  `remark` varchar(200) NOT NULL DEFAULT '',
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userID` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `createTime`, `userID`, `task`, `status`, `level`, `remark`, `isDeleted`) VALUES
(10, '2023-01-25 00:38:55.374720', 4, 'open task', 2, 0, '', 1),
(11, '2023-01-25 00:39:49.326097', 4, 'task 1', 0, 0, 'that is a note', 0),
(12, '2023-01-25 00:39:52.993196', 4, 'task 2', 2, 0, '', 1),
(13, '2023-01-25 00:39:55.212941', 4, 'task 3', 2, 2, '', 0),
(14, '2023-01-25 00:39:57.178730', 4, 'task 4', 2, 0, '', 1),
(15, '2023-01-25 00:39:58.862566', 4, 'task 5', 2, 1, '', 1),
(16, '2023-01-29 19:55:46.221670', 4, 'task', 1, 0, '', 1),
(17, '2023-01-29 20:48:08.220656', 5, 'aaa\'s mission', 0, 0, '', 0),
(18, '2023-02-05 23:14:15.822350', 4, 'task 10', 1, 1, 'very important', 1),
(19, '2023-02-22 16:57:25.770452', 4, 'task2', 1, 1, '', 0),
(20, '2023-02-22 18:50:17.786444', 8, 'add', 1, 2, 'added!', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdTime` datetime NOT NULL,
  `fullName` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `createdTime`, `fullName`, `email`, `userName`, `password`) VALUES
(1, '2023-01-11 20:39:11', 'kim k', 'abc@abc', 'kimikimi', '123456'),
(2, '2023-01-15 18:17:03', 'donkey kong', 'rrr@eee', 'donkdonk', 'b59c67bf196a4758191e42f76670ceba'),
(3, '2023-01-15 19:37:38', 'dong long', 'rrr@eee', 'dongDeLong', 'b59c67bf196a4758191e42f76670ceba'),
(4, '2023-01-18 20:52:30', 'kim', 'rrr@eee', 'kim', 'b59c67bf196a4758191e42f76670ceba'),
(5, '2023-01-18 20:52:55', 'kk', 'rrr@eee', 'aaa', '698d51a19d8a121ce581499d7b701668'),
(6, '2023-01-18 20:53:11', 'ooo', 'rrr@eee', 'bbb', '698d51a19d8a121ce581499d7b701668'),
(7, '2023-01-22 19:06:44', 'george g', 'george@g.com', 'george', '81dc9bdb52d04dc20036dbd8313ed055'),
(8, '2023-02-22 18:50:08', 'Kim Kroll', 'kimkroll2000@gmail.com', '', ''),
(9, '2023-02-22 18:56:54', 'mik roll', 'mikro@100.com', 'micro', 'b59c67bf196a4758191e42f76670ceba');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
