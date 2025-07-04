-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2025 at 04:16 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hms`
--

-- --------------------------------------------------------

--
-- Table structure for table `refclient`
--

CREATE TABLE `refclient` (
  `ClientID` int(11) NOT NULL,
  `ClientName` varchar(255) DEFAULT NULL,
  `RegNo` int(11) DEFAULT NULL,
  `PhoneNumber` int(11) DEFAULT NULL,
  `ClientAddr` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `refclient`
--

INSERT INTO `refclient` (`ClientID`, `ClientName`, `RegNo`, `PhoneNumber`, `ClientAddr`) VALUES
(1012, 'Мнголын алт ХХК', 0, 0, 'dsvsda'),
(1032, 'Баялаг энержи', 0, 0, 'dfbfb '),
(1098, 'SGS', 0, 0, ' dfbfbfөмбөм');

-- --------------------------------------------------------

--
-- Table structure for table `refdetail`
--

CREATE TABLE `refdetail` (
  `DetailID` int(11) NOT NULL,
  `DetailTypeID` int(11) DEFAULT NULL,
  `DetailName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `refdetail`
--

INSERT INTO `refdetail` (`DetailID`, `DetailTypeID`, `DetailName`) VALUES
(1, 1, 'Якорь'),
(2, 2, 'БУсад'),
(3, 1, 'Кабель');

-- --------------------------------------------------------

--
-- Table structure for table `refdetailtype`
--

CREATE TABLE `refdetailtype` (
  `DetailTypeID` int(11) NOT NULL,
  `DetailTypeName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `refdetailtype`
--

INSERT INTO `refdetailtype` (`DetailTypeID`, `DetailTypeName`) VALUES
(1, 'Цахилгаан хөдөлгүүр'),
(2, 'Ротор');

-- --------------------------------------------------------

--
-- Table structure for table `refstate`
--

CREATE TABLE `refstate` (
  `StateID` int(11) NOT NULL,
  `StateName` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `refstate`
--

INSERT INTO `refstate` (`StateID`, `StateName`) VALUES
(1, 'Хүлээлгэн өгсөн'),
(2, 'Засварлах боломжгүй'),
(3, 'Засвар хийгдэж байгаа'),
(4, 'Задаргаа хийгдсэн'),
(5, 'Хүлээн авсан'),
(6, 'Суурилагдаагүй'),
(7, 'Суурилагдсан');

-- --------------------------------------------------------

--
-- Table structure for table `refuzleg`
--

CREATE TABLE `refuzleg` (
  `UzlegID` int(11) NOT NULL,
  `DetailID` int(11) DEFAULT NULL,
  `UzlegName` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `refuzleg`
--

INSERT INTO `refuzleg` (`UzlegID`, `DetailID`, `UzlegName`) VALUES
(1, 1, 'Коллекторд ховил сууж элэгдсэн эсэх'),
(2, 2, 'Якорь стартерд хавирсан эсэх'),
(3, 1, 'ыбөыбысс  бөыа'),
(4, 2, 'рлоололхолх');

-- --------------------------------------------------------

--
-- Table structure for table `refwork`
--

CREATE TABLE `refwork` (
  `WorkID` int(11) NOT NULL,
  `WorkCode` varchar(255) DEFAULT NULL,
  `WorkName` varchar(255) DEFAULT NULL,
  `WorkState` varchar(255) DEFAULT NULL,
  `ProjectName` varchar(255) DEFAULT NULL,
  `ClientID` int(11) DEFAULT NULL,
  `BegDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `DesignType` varchar(255) DEFAULT NULL,
  `Qnty` double DEFAULT NULL,
  `Total` varchar(255) DEFAULT NULL,
  `Descr` varchar(255) DEFAULT NULL,
  `IsActive` bit(1) DEFAULT NULL,
  `CreatedUser` varchar(255) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT NULL,
  `UpdatedUser` varchar(255) DEFAULT NULL,
  `UpdatedDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `refwork`
--

INSERT INTO `refwork` (`WorkID`, `WorkCode`, `WorkName`, `WorkState`, `ProjectName`, `ClientID`, `BegDate`, `EndDate`, `DesignType`, `Qnty`, `Total`, `Descr`, `IsActive`, `CreatedUser`, `CreatedDate`, `UpdatedUser`, `UpdatedDate`) VALUES
(1, '25-05', 'Урсгал засвар №УРПГ-1111', 'Хүлээлгэн өгсөн', '', 1032, '2025-01-21 00:00:00', '2025-02-03 00:00:00', 'ДК-724 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'Admin', '2025-01-29 19:57:27', 'tugsuurandaldavaa@gmail.com', '2025-02-08 17:55:33'),
(2, '25-02', 'Ургасл засвар №УУАП-1210', 'Хүлээлгэн өгсөн', '', 1032, '2025-01-07 00:00:00', '2025-01-20 00:00:00', 'ДК-724 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 17:59:01', 'tugsuurandaldavaa@gmail.com', '2025-02-01 22:40:12'),
(3, '25-03', 'Их засвар №УУАУ-1210 ', 'Засварлах боломжгүй', '', 1032, '2025-01-07 00:00:00', NULL, 'ДК-724 цахилгаан хөдөлгүүр', 1, NULL, 'Засварлах боломжгүй якорын ган зүрхэвч ашиглах боломжгүй. Актлах саналтай', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 18:04:21', 'tugsuurandaldavaa@gmail.com', '2025-02-02 17:29:33'),
(4, '25-04', 'Урсгал засвар  №УАХР-12911', 'Хүлээлгэн өгсөн', '', 1032, '2025-01-21 00:00:00', '2025-02-06 00:00:00', 'ДК-724 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 18:07:00', 'tugsuurandaldavaa@gmail.com', '2025-02-08 17:55:33'),
(5, '25-06', 'Урсгал засвар №УУПГ-1010', 'Хүлээлгэн өгсөн', '', 1032, '2025-01-21 00:00:00', '2025-02-06 00:00:00', 'ДК-724 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 18:14:32', 'tugsuurandaldavaa@gmail.com', '2025-02-08 17:55:33'),
(6, '25-07', 'Их засвар №1730', 'Засвар хийгдэж байгаа', '', 1032, '2025-01-24 00:00:00', '2025-02-14 00:00:00', 'ДПВ-200 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 18:19:56', 'tugsuurandaldavaa@gmail.com', '2025-02-02 16:25:45'),
(7, '24-47', 'Их засвар №ПГПУ-0708', 'Хүлээлгэн өгсөн', '', 1032, '2024-09-30 00:00:00', '2025-01-20 00:00:00', 'ЭК-590 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 18:24:48', 'tugsuurandaldavaa@gmail.com', '2025-02-02 11:26:43'),
(8, '24-60', 'Дунд шатны засвар №ПГПУ-0908', 'Хүлээлгэн өгсөн', '', 1032, '2024-11-11 00:00:00', '2025-01-20 00:00:00', 'ЭК-590 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 18:27:51', 'tugsuurandaldavaa@gmail.com', '2025-02-02 13:07:10'),
(9, '24-62', 'Дунд шатны засвар №127209', 'Хүлээлгэн өгсөн', '', 1032, '2024-12-23 00:00:00', '2025-01-20 00:00:00', 'СГТ-1400 генератор', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 18:33:50', 'tugsuurandaldavaa@gmail.com', '2025-02-02 14:00:09'),
(10, '25-14', 'Их засвар №127160', 'Засварлах боломжгүй', '', 1032, '2024-01-16 00:00:00', NULL, 'СГТ-1400 генератор', 1, NULL, 'Гол гулзайсан засварлах боломжгүй Актлах саналтай', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 19:00:42', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:12:12'),
(11, '25-15', 'Их засвар №126012', 'Засварлах боломжгүй', '', 1032, '2024-01-29 00:00:00', NULL, 'СГТ-1400 генератор', 0, NULL, 'Гол хугарсан засварлах боломжгүй. Актлах саналтай', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 19:00:42', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:12:12'),
(12, '24-42', 'Их засвар №128357', 'Засвар хийгдэж байгаа', '', 1032, '2024-08-01 00:00:00', NULL, 'СГТ-1400 генератор', 1, NULL, 'Баталгаат засвар', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 19:00:42', 'tugsuurandaldavaa@gmail.com', '2025-02-02 16:28:25'),
(13, '24-46', 'Их засвар №239-0808', 'Засвар хийгдэж байгаа', '', 1032, '2024-09-27 00:00:00', NULL, 'ЭДП-600 цахилгаан хөдөлгүүр', 1, NULL, 'Grandaas ирсэн', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 19:00:42', 'tugsuurandaldavaa@gmail.com', '2025-02-12 18:04:26'),
(14, '24-61', 'Их засвар №ПГУХ-0908', 'Задаргаа хийгдсэн', '', 1032, '2024-12-23 00:00:00', NULL, 'ЭК-590 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 19:00:42', 'tugsuurandaldavaa@gmail.com', '2025-02-02 16:39:48'),
(15, '25-08', 'Их засвар №УЕТА-0411', 'Засвар хийгдэж байгаа', '', 1032, '2024-10-17 00:00:00', NULL, 'ДК-724 цахилгаан хөдөлгүүр', 1, NULL, 'Баталгаат засвар', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 19:22:36', 'tugsuurandaldavaa@gmail.com', '2025-02-02 16:33:35'),
(16, '25-16', 'Их засвар Хятад', 'Засварлах боломжгүй', '', 1032, '2023-05-31 00:00:00', NULL, 'ДК-724 цахилгаан хөдөлгүүр', 1, NULL, 'Актлах саналтай', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 19:28:20', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:12:12'),
(17, '25-17', 'Их засвар №ПГЕА-№1008', 'Засварлах боломжгүй', '', 1032, '2023-07-05 00:00:00', NULL, 'ЭК-590 цахилгаан хөдөлгүүр', 1, NULL, 'Актлах саналтай', b'1', 'tugsuurandaldavaa@gmail.com', '2025-01-31 19:30:34', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:12:12'),
(18, '25-01', 'Урсгал засвар №ЕХПУ-1112', 'Хүлээлгэн өгсөн', '', 1032, '2025-01-07 00:00:00', '2025-02-20 00:00:00', 'ДК-724 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-01 15:37:12', 'tugsuurandaldavaa@gmail.com', '2025-02-01 16:58:33'),
(19, '25-18', 'Урсгал засвар №2078-1118', 'Хүлээлгэн өгсөн', '', 1012, '2025-01-15 00:00:00', '2025-01-17 00:00:00', 'ГСН-500 генератор', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-01 16:06:05', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:12:12'),
(20, '25-19', '№3205-0918', 'Хүлээлгэн өгсөн', '', 1012, '2024-12-20 00:00:00', '2025-01-13 00:00:00', 'ЭДП-600 цахилгаан хөдөлгүүр', 1, NULL, '2024,01,13 хүлээлгэн өгсөн', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-02 17:05:38', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:12:12'),
(21, '25-20', 'Их засвар №3182-0818', 'Засвар хийгдэж байгаа', '', 1012, '2025-01-30 00:00:00', NULL, 'ЭДП-600 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-02 17:41:08', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:12:12'),
(22, '25-21', 'ИХ засвар №1912-0814', 'Хүлээн авсан', '', 1098, '2025-01-03 00:00:00', NULL, 'ЭДП-600 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-02 17:53:46', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:12:12'),
(23, '25-22', 'ИХ засвар №1426-1212', 'Задаргаа хийгдсэн', '', 1098, '2024-11-20 00:00:00', NULL, 'ЭДП-600 цахилгаан хөдөлгүүр', 1, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-02 17:53:46', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:12:12'),
(24, '25-23', '№1411-1212', 'Засвар хийгдэж байгаа', '', 1012, '2025-02-03 00:00:00', NULL, 'ЭДП-600 цахилгаан хөдөлгүүр', 0, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-03 11:57:29', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:12:12'),
(25, '25-09', '№УЕЕВ-0511', 'Засвар хийгдэж байгаа', '', 1032, '2025-02-05 00:00:00', NULL, 'ДК-724 цахилгаан хөдөлгүүр', 0, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-05 16:51:00', 'tugsuurandaldavaa@gmail.com', '2025-02-12 21:04:38'),
(26, '25-10', '№УУУХ-1110', 'Засвар хийгдэж байгаа', '', 1032, '2025-02-05 00:00:00', NULL, 'ДК-724 цахилгаан хөдөлгүүр', 0, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-05 16:53:31', 'tugsuurandaldavaa@gmail.com', '2025-02-12 21:04:38'),
(27, '25-11', 'УАТА-0911', 'Засвар хийгдэж байгаа', '', 1032, '2025-02-05 00:00:00', NULL, 'ДК-724 цахилгаан хөдөлгүүр', 0, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-05 16:55:22', 'tugsuurandaldavaa@gmail.com', '2025-02-12 21:04:38'),
(28, '25-13', '№УАПТ-0811', 'Засварлах боломжгүй', '', 1032, '2025-02-05 00:00:00', NULL, 'ДК-724 цахилгаан хөдөлгүүр', 0, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-05 16:59:56', 'tugsuurandaldavaa@gmail.com', '2025-02-08 17:58:24'),
(29, '25-12', '№УЕКХ-0711', 'Засвар хийгдэж байгаа', '', 1032, '2025-02-05 00:00:00', NULL, 'ДК-724 цахилгаан хөдөлгүүр', 0, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-05 16:59:56', 'tugsuurandaldavaa@gmail.com', '2025-02-12 21:04:38'),
(30, '25-24', '2018-0818', 'Хүлээлгэн өгсөн', '', 1012, '2024-12-09 00:00:00', '2025-01-15 00:00:00', 'ГСН-500 генератор', 0, NULL, '', b'1', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:35:43', 'tugsuurandaldavaa@gmail.com', '2025-02-12 20:38:03');

-- --------------------------------------------------------

--
-- Table structure for table `uzlegjournal`
--

CREATE TABLE `uzlegjournal` (
  `JournalID` int(11) NOT NULL,
  `Ognoo` datetime DEFAULT NULL,
  `ClientID` varchar(255) DEFAULT NULL,
  `WorkID` int(11) DEFAULT NULL,
  `UzlegID` int(11) DEFAULT NULL,
  `IsYesNo` bit(1) DEFAULT NULL,
  `StateID` int(11) DEFAULT NULL,
  `AttachFileName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uzlegjournal`
--

INSERT INTO `uzlegjournal` (`JournalID`, `Ognoo`, `ClientID`, `WorkID`, `UzlegID`, `IsYesNo`, `StateID`, `AttachFileName`) VALUES
(2, '2025-02-05 00:00:00', '1012', 1, 1, b'1', 1, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `refclient`
--
ALTER TABLE `refclient`
  ADD PRIMARY KEY (`ClientID`);

--
-- Indexes for table `refdetail`
--
ALTER TABLE `refdetail`
  ADD PRIMARY KEY (`DetailID`);

--
-- Indexes for table `refdetailtype`
--
ALTER TABLE `refdetailtype`
  ADD PRIMARY KEY (`DetailTypeID`);

--
-- Indexes for table `refstate`
--
ALTER TABLE `refstate`
  ADD PRIMARY KEY (`StateID`);

--
-- Indexes for table `refuzleg`
--
ALTER TABLE `refuzleg`
  ADD PRIMARY KEY (`UzlegID`);

--
-- Indexes for table `refwork`
--
ALTER TABLE `refwork`
  ADD PRIMARY KEY (`WorkID`);

--
-- Indexes for table `uzlegjournal`
--
ALTER TABLE `uzlegjournal`
  ADD PRIMARY KEY (`JournalID`);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
