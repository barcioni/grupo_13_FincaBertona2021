-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2021 at 03:49 PM
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

DROP TABLE IF EXISTS `brands`;
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

DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `current_price` int(11) NOT NULL,
  `release_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `product_id`, `quantity`, `current_price`, `release_date`) VALUES
(1, 3, 5, 4, 500, '2021-09-20 21:19:01'),
(2, 3, 5, 4, 500, '2021-09-20 21:20:38'),
(3, 3, 5, 4, 500, '2021-09-20 21:21:55'),
(4, 3, 5, 7, 500, '2021-09-20 21:40:11');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
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
  `stock` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `brand_id`, `year`, `varietal`, `graduacion`, `barrica`, `guarda`, `description`, `image`, `price`, `currency`, `stock`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2016, 'Malbec', '14', '8 meses', '8 a 10 años', 'Color rojo rubí intenso. Aromas a frutos como moras y frambuesas con sutiles notas especiadas. Posee una gran estructura, aportada por el intenso carácter frutado y especias, donde destaca un largo final y persistencia.', 'botella-ruta15.png', '1000', '$', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 2017, 'Malbec', '14', '8 meses', '8 a 10 años', 'Color rojo rubí intenso. Aromas a frutos como moras y frambuesas con sutiles notas especiadas. Posee una gran estructura, aportada por el intenso carácter frutado y especias, donde destaca un largo final y persistencia.', 'botella-ruta15.png', '900', '$', 12, '0000-00-00 00:00:00', '2021-09-20 22:35:17'),
(3, 1, 2018, 'Malbec', '14', '8 meses', '8 a 10 años', 'Color rojo rubí intenso. Aromas a frutos como moras y frambuesas con sutiles notas especiadas. Posee una gran estructura, aportada por el intenso carácter frutado y especias, donde destaca un largo final y persistencia.', 'botella-ruta15.png', '800', '$', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 2, 2018, 'Malbec', '14', '4 meses', '3 a 5 años', 'Vino joven que estaca por su carácter frutado y un excelente equilibrio entre taninos, alcohol y acidez.', 'botella-funes.png', '700', '$', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 2, 2019, 'Malbec', '14', '4 meses', '3 a 5 años', 'Vino joven que estaca por su carácter frutado y un excelente equilibrio entre taninos, alcohol y acidez.', 'botella-funes.png', '500', '$', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 2, 2020, 'Malbec', '14', '4 meses', '3 a 5 años', 'Vino joven que estaca por su carácter frutado y un excelente equilibrio entre taninos, alcohol y acidez.', 'botella-funes.png', '400', '$', 10, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 1, 2022, 'Prueba', '6', 'Prueba', 'Prueba', 'PRUEBAPRUEBAPRUEBAPRUEBAPRUEBA', 'botella-ruta15.png', '500', '$', 15, '2021-09-20 21:04:09', '2021-09-20 21:04:09');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
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

DROP TABLE IF EXISTS `users`;
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
(1, 'María Adela del Rosario', 'Bertona', 'rosariobertona96@gmail.com', 1, '2021-07-22 00:00:00', 'Calle 123', '$2a$10$rbgCkQehKQ.YqQbsvQdpvOW2xT/9VQbsgPS9f2/aHFp7x7B4KNr0C', 'user-1626501051316.JPG', NULL, NULL),
(2, 'Barbara', 'Arcioni', 'barcioni7@gmail.com', 1, '2021-07-22 00:00:00', 'asdfghjk 254689', '$2a$10$48cYYaWGBmqZ7LUSHn/a6OU92UhWjqY1NwitWBpks47EqFiupzgH2', 'guestUserDefault.png', NULL, NULL),
(3, 'Usuario', 'Prueba', 'usuarioprueba@gmail.com', 0, '2021-07-22 00:00:00', 'PruebaPruebaPrueba', '$2a$10$35Yus7NbAhc/OlzdfPzIjONouDO1rg7m0HEnEUirSCicp691lqzta', 'guestUserDefault.png', '2021-09-20 21:18:12', '2021-09-20 21:18:12');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
