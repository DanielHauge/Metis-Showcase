import React from 'react';
import './Main.scss';
import Head from './layout/Head';
import Body from './layout/Body';
import { ApiClient, Config } from './../api/api';



interface IProps {

}

interface IState {
  navigationConfig: Config;
  url: string;
}



export default class Main extends React.Component<IProps, IState> {

  apiClient: ApiClient;
  constructor(props: IProps) {
    super(props)
    this.apiClient = new ApiClient();
    const navigation = this.apiClient.navigationConfig();
    this.state = { navigationConfig: navigation, url: "" }
  }

  devTest() {
    console.log(this.state.navigationConfig);
    console.log("to json")

    console.log(JSON.stringify(this.state.navigationConfig))
  }


  render() {

    return (
      <div className="Main">
        <Head />
        <hr className="style-two" />
        <Body navigationConfig={this.state.navigationConfig} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={this.devTest.bind(this)}> test</button>
      </div>
    )
  };
}