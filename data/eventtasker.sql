-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 12 déc. 2018 à 04:26
-- Version du serveur :  5.7.19
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `eventtasker`
--

-- --------------------------------------------------------

--
-- Structure de la table `counter`
--

DROP TABLE IF EXISTS `counter`;
CREATE TABLE IF NOT EXISTS `counter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `counter`
--

INSERT INTO `counter` (`id`, `number`) VALUES
(1, 55);

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

DROP TABLE IF EXISTS `event`;
CREATE TABLE IF NOT EXISTS `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  `color` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `event`
--

INSERT INTO `event` (`id`, `name`, `description`, `date`, `color`) VALUES
(9, 'Chrismas with flo & fam !', 'Celebrating the birth of baby jesus with flo and fam! \nI need to tell flo his gift tho', '2018-12-24', '#55be49'),
(6, 'Flo is home !', 'Hes back !ll', '2018-12-22', '#e11361'),
(7, 'jjj', 'kkk', '2018-12-01', '#000000'),
(10, 'New year\'s eve w/ Flo ! ', 'idk what we\'ll do but its gonna be fun !', '2018-12-31', '#1829f5'),
(11, 'Flo\'s BirthDay !!', 'I really need to tell him his gift before tho..', '2019-02-09', '#777777'),
(12, 'Valentine\'s day <3', 'woop woop ! \nFirst time at VDay with my bf <3', '2019-02-14', '#f053e4'),
(13, '1 YEAR ANNIVERSARY !', 'YAY!', '2019-02-17', '#ff0909'),
(14, 'Vaca somewhere ?', 'let\'s go for adventures !', '2019-02-18', '#00acff'),
(15, 'Flo internship starts', 'Flo is working', '2019-04-08', '#929292');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` text NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `login`, `password`) VALUES
(1, 'flo', '5f4dcc3b5aa765d61d8327deb882cf99'),
(2, 'maddie', 'pawword');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
