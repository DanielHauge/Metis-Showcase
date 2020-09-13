import React from 'react'
import { Config, Node, NavigationType, BrowseData } from '../../api/api'
import { Route, match as Match } from "react-router-dom";
import Showcase from '../pages/Showcase';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/404';
import Browse from '../pages/Browse';
import Container from 'react-bootstrap/Container'

interface IProps extends React.Props<Body> {
  navigationConfig: Config
}

export default class Body extends React.Component<IProps> {

  // constructor(props: IProps) {
  //   super(props)
  // }


  render() {
    return (
      <div className="Body">
        <Container>
          <div>
            <Route exact path="/:1/:2/:3/:4/:5/" render={({ match }) => this.findComponent(match)} />
            <Route exact path="/:1/:2/:3/:4/" render={({ match }) => this.findComponent(match)} />
            <Route exact path="/:1/:2/:3/" render={({ match }) => this.findComponent(match)} />
            <Route exact path="/:1/:2/" render={({ match }) => this.findComponent(match)} />
            <Route exact path="/:1/" render={({ match }) => this.findComponent(match)} />
            <Route exact path="/"> <Dashboard repoTiles={this.props.navigationConfig.featuredRepos} firstNode={this.props.navigationConfig.rootNavigationNode.data} /> </Route>

          </div>
        </Container>

      </div>
    )
  } findComponent(match: Match<any>): any {
    console.log(match);
    const root = this.props.navigationConfig.rootNavigationNode;
    try {
      const component = this.navigate(
        this.navigate(
          this.navigate(
            this.navigate(
              this.navigate(root,
                match.params["1"]),
              match.params["2"]),
            match.params["3"]),
          match.params["4"]),
        match.params["5"]);
        if (component.data.type === NavigationType.Group){
          return (<Browse {...new BrowseData(component)} /> )
        } else{
          return (<Showcase title={component.data.title} uri={component.data.uri}/>)
        }
    } catch (error) {
      return (<NotFound></NotFound>)
    };
    
  }

  navigate(node: Node, key: string): Node {
    if (!key) return node;
    const newNode = node.Children.get(key);
    if (key === this.props.navigationConfig.rootNavigationNode.data.uri) return node;
    if (!newNode)throw new Error('key was not defined.');
    return newNode;
  }

  ;
}




