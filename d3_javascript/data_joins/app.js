const countryData = {
    items: ["China", "India", "USA"],
    addItem(item) {
        this.items.push(item);
    },
    removeItem(index) {
        this.items.splice(index, 1);
    },
    updateItem(index, newItem) {
        this.items[index] = newItem;
    },
};

d3.select("ul")
  .selectAll("li")
  .data(countryData.items)
  .enter()
  .append("li")
  .text(data => data);

const countries = ['Germany', 'France', 'Sri Lanka']


setTimeout(() => {
    for (let country of countries) {
        countryData.addItem(country);
        d3.select("ul")
            .selectAll("li")
            .data(countryData.items, data => data)
            .enter()
            .append("li")
            .classed('added', true)
            .text(data => data);
    }
}, 2000);


setTimeout(() => {
    countryData.removeItem(0);
    d3.select("ul")
        .selectAll("li")
        .data(countryData.items, data => data)
        .exit()
        .classed("redundant", true)
        .text(data => data);
}, 4000);

setTimeout(() => {
    countryData.updateItem(1, "Russia");
    d3.select("ul")
        .selectAll("li")
        .data(countryData.items, data => data)
        .exit()
        .classed("update", true)
        .text("Russia");
}, 6000);