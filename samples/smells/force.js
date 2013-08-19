this.updateItem = function(item, data) {
    var index = this.items.indexOf(item);

    item.name = data.name;
    item.price = data.price;

    this.items.remove(item);
    this.items.splice(index, null, item);
};