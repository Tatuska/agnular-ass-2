/**
 * Created by siryog on 19/12/16.
 */
(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service(" ShoppingListCheckOffService", ShoppingListCheckOffService);
    AlreadyBoughtController.$inject = [" ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        // var itemAdder =this;

        // itemAdder.itemName="";
        // itemAdder.itemQuantity="";
        // itemAdder.addItem=function () {
        //     ToBuyController.addItem(itemAdder.itemName,itemAdder.itemQuantity);
        // }

        var boughtItem = this;

        boughtItem.boughtList =  ShoppingListCheckOffService.getboughtItems();

        // showList.removeItem = function (itemIndex) {
        //     ShoppingListCheckOffService.removeItem(itemIndex);
        // };

            }

    ToBuyController.$inject = [" ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService) {

var buyItem=this;
        
        buyItem.items=ShoppingListCheckOffService.getItems();

        buyItem.removeItem=function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);

        }
    }

    function ShoppingListCheckOffService() {

        var service = this;
        var items = [{ name: "cookies", quantity: 10 },{ name: "coke", quantity: 5 },{ name: "pizza", quantity: 2 },
            { name: "juice", quantity: 4 },{ name: "tomato", quantity: 6 },{ name: "paprika", quantity: 7 }];
        var boughtList=[];
        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };

            items.push(item);
        };


    service.removeItem = function (itemIndex) {
        boughtList.push(items[itemIndex]);
        items.splice(itemIndex, 1);


    };
        service.getItems = function () {
            return items;
        };
        service.getboughtItems = function () {
            return boughtList;
        };
}
})();