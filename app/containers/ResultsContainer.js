import React, {Component} from 'react'
import Results from '../components/Results'
import {battle} from '../utils/githubHelpers'

class ResultsContainer extends Component{
  constructor () {
    super()
    this.state = {
      isLoading: true,
      scores: []
    }
  }
  async componentDidMount () {
    const scores = await battle(this.props.location.state.playersInfo)
    try {
      this.setState({
        scores: scores,
        isLoading: false
      })
    } catch (error) {
        console.warn('Error in ResutlsContainer:', error);
    }
  }
  render () {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores} />
    )
  }
}

export default ResultsContainer;
