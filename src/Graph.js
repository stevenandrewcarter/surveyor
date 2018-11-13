import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'

class Graph extends Component {
  constructor (props) {
    super(props)
    this.createGraph = this.createGraph.bind(this)
  }

  componentDidMount() {
    this.createGraph()
  }

  componentDidUpdate() {
    this.createGraph()
  }

  createGraph() {
    const links = this.props.data.links.map(d => Object.create(d))
    const nodes = this.props.data.nodes.map(d => Object.create(d))
    const simulation = forceSimulation(nodes, links).on("tick", ticked)
    const node = this.node
    select(node)
      .append('g')
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .enter().append("line")
      .attr("stroke-width", d => Math.sqrt(d.value))

    select(node)
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("r", 5)
      .attr("fill", color)
      .call(drag(simulation))

    // const dataMax = max(this.props.data)
    // const yScale = scaleLinear()
    //   .domain([0, dataMax])
    //   .range([0, this.props.size[1]])
    // select(node)
    //   .selectAll('rect')
    //   .data(this.props.data)
    //   .enter()
    //   .append('rect')
    //
    // select(node)
    //   .selectAll('rect')
    //   .data(this.props.data)
    //   .exit()
    //   .remove()
    //
    // select(node)
    //   .selectAll('rect')
    //   .data(this.props.data)
    //   .style('fill', '#fe9922')
    //   .attr('x', (d, i) => i * 25)
    //   .attr('y', d => this.props.size[1] - yScale(d))
    //   .attr('height', d => yScale(d))
    //   .attr('width', 25)
  }

  render () {
    return (
      <svg ref={node => this.node = node} width={500} height={500}>
      </svg>
    )
  }
}

export default Graph