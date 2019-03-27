'use strict';

var nameProduct;
var priceProduct;

nameProduct = '«Телепорт бытовой VZHIH-101»';
priceProduct = '10000';
console.log(`В наличии имеется: ${nameProduct}`);
console.log(`Стоимость товара, ${priceProduct}, Q`);

var quantityProduct = 2;
var discountPercentage = 0.1;

var paymentSumm = priceProduct * quantityProduct - priceProduct * quantityProduct * discountPercentage;
console.log(`Цена покупки составит ${paymentSumm} Q`);

var totalBudget = 52334224;
var purchasePrice = 6500;

var restAmount = totalBudget % purchasePrice;
var numPurсhaseProduct = (totalBudget - restAmount) / purchasePrice;

console.log(
	`Мы можем закупить ${numPurсhaseProduct} единиц товара, после закупки на счету останется ${restAmount} Q`
);
