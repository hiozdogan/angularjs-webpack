import angular from 'angular';
import ngRoute from 'angular-route';
import ProductList from './containers/ProductList';
import './theme/global.scss';

export default angular.module('myApp', [
  ngRoute,
  ProductList
])
