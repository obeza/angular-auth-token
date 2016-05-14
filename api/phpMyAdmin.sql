-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Sam 14 Mai 2016 à 20:56
-- Version du serveur: 5.5.33
-- Version de PHP: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données: `auth-token`
--

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(32) NOT NULL,
  `passe` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `email`, `passe`, `token`) VALUES
(1, 'test@mail.com', '77cccf0d7a72ee0036f6f1a239d5c47ee8799014', '9ac501999501c9410d1169fa22d09a4f24515113'),
(2, 'olivier@mail.com', '77cccf0d7a72ee0036f6f1a239d5c47ee8799014', ''),
(3, 'nicolas@mail.com', '418d940643b1975d62234ee01246ad4b58904184', '90b6a4867120c486eb1a570883e750758c108d0f'),
(4, 'michelle@mail.com', '7212a9e01329ea93a57f574bd9bf77695d5fdca4', '');
