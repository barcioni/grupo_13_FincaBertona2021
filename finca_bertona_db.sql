-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2021 at 02:22 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finca_bertona_db`
--
CREATE DATABASE IF NOT EXISTS `finca_bertona_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `finca_bertona_db`;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Ruta 15', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Calle Funes', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `varietal` varchar(255) DEFAULT NULL,
  `graduacion` decimal(10,0) DEFAULT NULL,
  `barrica` varchar(400) DEFAULT NULL,
  `guarda` varchar(400) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(400) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `brand_id`, `year`, `varietal`, `graduacion`, `barrica`, `guarda`, `description`, `image`, `price`, `currency`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2016, 'Malbec', '14', '8 meses', '8 a 10 años', 'Color rojo rubí intenso. Aromas a frutos como moras y frambuesas con sutiles notas especiadas. Posee una gran estructura, aportada por el intenso carácter frutado y especias, donde destaca un largo final y persistencia.', 'botella-ruta15.png', '1000', '$', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 1, 2017, 'Malbec', '14', '8 meses', '8 a 10 años', 'Color rojo rubí intenso. Aromas a frutos como moras y frambuesas con sutiles notas especiadas. Posee una gran estructura, aportada por el intenso carácter frutado y especias, donde destaca un largo final y persistencia.', 'botella-ruta15.png', '900', '$', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 2018, 'Malbec', '14', '8 meses', '8 a 10 años', 'Color rojo rubí intenso. Aromas a frutos como moras y frambuesas con sutiles notas especiadas. Posee una gran estructura, aportada por el intenso carácter frutado y especias, donde destaca un largo final y persistencia.', 'botella-ruta15.png', '800', '$', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 2, 2018, 'Malbec', '14', '4 meses', '3 a 5 años', 'Vino joven que estaca por su carácter frutado y un excelente equilibrio entre taninos, alcohol y acidez.', 'botella-funes.png', '700', '$', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 2, 2019, 'Malbec', '14', '4 meses', '3 a 5 años', 'Vino joven que estaca por su carácter frutado y un excelente equilibrio entre taninos, alcohol y acidez.', 'botella-funes.png', '500', '$', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 2, 2020, 'Malbec', '14', '4 meses', '3 a 5 años', 'Vino joven que estaca por su carácter frutado y un excelente equilibrio entre taninos, alcohol y acidez.', 'botella-funes.png', '400', '$', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210810051910-brands.js'),
('20210810052035-products.js'),
('20210810053554-users.js'),
('20210810054417-carts.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `fechaDeNacimiento` datetime NOT NULL,
  `domicilio` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT 'guestUserDefault.png',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `email`, `admin`, `fechaDeNacimiento`, `domicilio`, `clave`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Prueba', 'Prueba', 'prueba@prueba.com', 0, '2021-07-22 00:00:00', 'Prueba', '$2a$10$vd5rfV2qAiJ7UjNKEh1UX.ofhkxrs7dRH9LR7w3n3rdp74ludwRjW', 'guestUserDefault.png', '2021-08-19 05:39:25', '2021-08-19 05:39:25'),
(2, 'Prueba', 'Prueba', 'prueba@prueba.com', 0, '2021-07-22 00:00:00', 'Prueba', '$2a$10$azWGcwErcg8ze.T0C.i5JudnS9YyDUSkUXZ5f6p8yHTqwiGVGlMES', 'guestUserDefault.png', '2021-08-19 05:41:38', '2021-08-19 05:41:38'),
(3, 'Prueba', 'Prueba', 'prueba@prueba.com', 0, '2021-07-22 00:00:00', 'Prueba', '$2a$10$SBfWwGB5swBDzfUh9yFoFOiW1ndpGmX3iiU//eyOePVqapQTcBE1K', 'guestUserDefault.png', '2021-08-19 05:43:10', '2021-08-19 05:43:10'),
(4, 'Prueba', 'Prueba', 'prueba@prueba.com', 0, '2021-07-22 00:00:00', 'Prueba', '$2a$10$LRGfAnLGBkAty3vQDR3MseSQ66vlQV3lViDOVgW.3Yin8paGlpojm', 'guestUserDefault.png', '2021-08-19 05:43:20', '2021-08-19 05:43:20'),
(5, 'Prueba', 'Prueba', 'prueba@prueba.com', 0, '2021-07-22 00:00:00', 'Prueba', '$2a$10$iteoNYvdvaJtT6dtUVBnGemHu3GidT271YQKXDAk/2dgttjo5ORXa', 'guestUserDefault.png', '2021-08-19 05:45:00', '2021-08-19 05:45:00'),
(6, 'María Adela del Rosario', 'Bertona', 'rosariobertona96@gmail.com', 1, '2021-07-22 00:00:00', 'Calle 123', '$2a$10$Hmz.fXOsxuK0I0x8G/SNq.lOt5mANsvgbDtMaNsNBt.y2Tho27kDe', 'guestUserDefault.png', '2021-08-19 05:46:38', '2021-08-19 05:46:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
