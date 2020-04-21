import React from 'react';
import './Main.scss';
import Head from './layout/Head';
import Body from './layout/Body';


interface IProps {

}

interface IState {
  lol: string;
}

export default class Main extends React.Component<IProps, IState> {



  componentDidMount() {
    this.setState(state => {})
  }


  render() {
    return (
      <div className="Main">
        <Head />
        <hr className="style-two" />
        <Body />
      </div>
    )
  };
}