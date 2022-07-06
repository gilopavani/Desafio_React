-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 06-Jul-2022 às 21:44
-- Versão do servidor: 8.0.27
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `desafio`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `agenda`
--

DROP TABLE IF EXISTS `agenda`;
CREATE TABLE IF NOT EXISTS `agenda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `compromisso` varchar(45) NOT NULL,
  `informacoes` varchar(150) NOT NULL,
  `date` date NOT NULL,
  `token` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `agenda`
--

INSERT INTO `agenda` (`id`, `compromisso`, `informacoes`, `date`, `token`) VALUES
(10, 'teste 1', 'teste 1', '2022-07-05', '$2b$10$QAipgyyQUDwXsGfdMFtUQOqiDQoRGER8CF42RXk52IptSyOupnp9u');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `idusuarios` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `token` varchar(90) NOT NULL,
  PRIMARY KEY (`idusuarios`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`idusuarios`, `email`, `password`, `token`) VALUES
(18, 'gilopavani@gmail.com', '$2b$10$pcmel79OF.mDsdYi4m4KTewxA1ubCEY9nKW9N9ynYxpLgeRhPUkR6', '$2b$10$w735yF1vrm2AOYbpNinyM.vzrSMeBoI.9oi4xK8MuKPfA4KJ6X4E6'),
(19, 'teste@teste.com', '$2b$10$gPB/2ZMsC4EI1mVBcyrcQe9VWzM7dbKizJPTRKIC9W9rL4KoJr8LK', '$2b$10$Qm60m2VOVPD0gXc3K6/Ud.dgQE5bREC5WkA8alHV7.kKKIDdlJeGK'),
(20, 'testemail@asda.com', '$2b$10$rCA0Pc5SsD25drkFbXFO7.BxlAKKDvRgGyduXmT.ud/sx.9NyWeXu', '$2b$10$sgoQDupxRAuSvLaOzyePj.WSMNKgn5Gn9eRL7/7ABiscSBc5yjXpS'),
(21, 'testeteste@gmail.com', '$2b$10$7/CDcjyUA2aVeo2PQhAVS.h/WGw3ruNNmtAvb4eASmvliCPawjeTa', '$2b$10$QAipgyyQUDwXsGfdMFtUQOqiDQoRGER8CF42RXk52IptSyOupnp9u'),
(22, 'testeteste1@gmail.com', '$2b$10$z2vTnaVx0s3EsvlEPGWV7.gQcFGPDTTOUtpjKMgUJEk7FywBnEWDO', '$2b$10$l4j8fIWAp6JdOSD0RV2w6ecyjrWRg77m1M4FX/t7hcuerQHenNg8G'),
(23, 'cleiton@teste.com', '$2b$10$0Q6F1pasF7PMuazyMp8XReDN4DRto0DzLt9warsDVyv2r4zHCR8Ru', '$2b$10$QGlZcjPHxHv/jTdAmyVjX.Ia//AtTdNul21na1IxRVZAjcWeVrm0m');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
