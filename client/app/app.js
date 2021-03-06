/*
 * Copyright (c) 2018 Samsung Electronics Co., Ltd. , (c) Center of Informatics
 * Federal University of Pernambuco.
 * All rights reserved.
 *
 * This software is a confidential and proprietary information of Samsung
 * Electronics, Inc. ("Confidential Information").  You shall not disclose such
 * Confidential Information and shall use it only in accordance with the terms
 * of the license agreement you entered into with Samsung Electronics.
 */
(function () {

	"use strict"

	angular.module('petShopApp', ['ngRoute', 'ngResource']).config(['$routeProvider', config]);

	function config($routeProvider) {

		$routeProvider.when('/', {
			templateUrl: './features/pet/pet.html',
			controller: 'PetController',
			controllerAs: 'petController'
		}).when('/order/:id', {
			templateUrl: './features/order/order.html',
			controller: 'OrderController',
			controllerAs: 'orderController'
		}).
		otherwise({
			redirectTo: '/'
		});
	}

})();