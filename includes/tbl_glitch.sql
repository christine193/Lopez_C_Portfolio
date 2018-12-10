-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 10, 2018 at 03:31 AM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_glitch`
--

DROP TABLE IF EXISTS `tbl_glitch`;
CREATE TABLE IF NOT EXISTS `tbl_glitch` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `glitch_desc` varchar(200) NOT NULL,
  `glitch_thumb` varchar(50) NOT NULL,
  `glitch_image` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_glitch`
--

INSERT INTO `tbl_glitch` (`ID`, `glitch_desc`, `glitch_thumb`, `glitch_image`) VALUES
(1, '', 'spaceThumb1.jpg', 'spaceGirl_large.jpg'),
(2, '', 'spaceThumb2.jpg', 'spaceGirl2_large.png'),
(3, '', 'spaceThumb3.jpg', 'spaceGirl3_large.png'),
(4, '', 'spaceThumb4.jpg', 'spaceGirl4_large.png'),
(5, '', 'statueThumb1.jpg', ''),
(6, '', 'statueThumb2.jpg', ''),
(7, '', 'statueThumb3.jpg', ''),
(8, '', 'statueThumb4.jpg', ''),
(9, '', 'bustThumb1.jpg', ''),
(10, '', 'bustThumb2.jpg', ''),
(11, '', 'bustThumb3.jpg', ''),
(12, '', 'bustThumb4.jpg', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
