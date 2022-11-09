const DUMMY_DATA = [
    {id: 'd1', value: 10, region: 'USA'},
    {id: 'd2', value: 40, region: 'India'},
    {id: 'd3', value: 20, region: 'China'},
    {id: 'd4', value: 35, region: 'Germany'},
]

// d3.select("div")
//     .style("border", "1px solid red")
//     .selectAll('p')
//     .data(DUMMY_DATA)
//     .enter()
//     .append('p')
//     .text(dta => dta.value);

const xScale = d3.scaleBand()
    .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
    .rangeRound([0, 250])
    .padding(0.1);

const yScale = d3.scaleLinear()
    .domain([0, 50])
    .range([200, 0])

const container = d3.select('svg')
    .classed("container", true)
    .style("border", "3px solid #720964");

const bars = container
    .selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", xScale.bandwidth())
    .attr("height", (dta) => 200 - yScale(dta.value))
    .attr("x", data => xScale(data.region))
    .attr("y", data => yScale(data.value));

setTimeout(() => {
    bars.data(DUMMY_DATA.slice(0, 3)).exit().remove();
}, 2000);