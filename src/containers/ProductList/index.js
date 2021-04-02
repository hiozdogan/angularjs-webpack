import angular from 'angular';
import ngRoute from 'angular-route';
import MenuDemandAddProductModal from '../../components/MenuDemandAddProductModal';
import MenuDemandMyDemandsList from '../../components/MenuDemandMyDemandsList';
import MenuDemandCard from '../../components/MenuDemandCard';
import SearchBox from '../../components/SearchBox';
import BootstrapSelect from "../../directives/BootstrapSelect/";
import PriceValidation from "../../directives/PriceValidation";
import MenuDemandFormService from '../../services/MenuDemandFormService';
import template from './index.html';
import controller from './controller';
import './style.scss';

export default angular.module('productList', [ngRoute])

	.config(['$routeProvider', function ($routeProvider)
	{
		$routeProvider.when('/',
		{
			template,
			controller: 'MenuDemandFormController'
		});
	}])
	.directive('bootstrapselect', BootstrapSelect)
	.directive('priceValidation', PriceValidation)
	.component('menuDemandAddProductModal', MenuDemandAddProductModal)
	.component('menuDemandMyDemandsList', MenuDemandMyDemandsList)
	.component('menuDemandCard', MenuDemandCard)
	.component('searchBox', SearchBox)
	.controller('MenuDemandFormController', controller)
	.service('MenuDemandFormService', MenuDemandFormService)
	.name;
