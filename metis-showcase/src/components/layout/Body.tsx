import React from 'react'
import { Config, Node, NavigationType, BrowseData } from '../../api/api'
import { BrowserRouter as Switch, Route, Redirect, Router } from "react-router-dom";
import Showcase from '../pages/Showcase';
import Dashboard from '../pages/Dashboard';
import Search from '../pages/Search';
import NotFound from '../pages/404';
import Browse from '../pages/Browse';
import Container from 'react-bootstrap/Container'

interface IProps extends React.Props<Body> {
  navigationConfig: Config
}

export default class Body extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props)
  }



  walkAllNodes(currentNode: Node, contextUri: string): BrowseData[] {
    const currentBrowseData = new BrowseData(currentNode, contextUri);
    if (currentNode.children.length === 0) return [currentBrowseData]
    else return [
      ...currentNode.children.slice().map(childrenNode => this.walkAllNodes(childrenNode, "")).flat(1),
      currentBrowseData
    ]
  }



  render() {
    return (
      <div className="Body">
        <Container>
            <Switch>
              {[<Route exact path="/"> <Dashboard repoTiles={this.props.navigationConfig.featuredRepos} firstNode={this.props.navigationConfig.rootNavigationNode.data} /> </Route>,
              <Route exact path="/search"> <Search /> </Route>,
              ...this.walkAllNodes(this.props.navigationConfig.rootNavigationNode, "/").map(page => {
                switch (page.type) {
                  case NavigationType.Showcase:
                    return (<Route key={page.uri} exact path={page.uri}> <Showcase {...page} /> </Route>)
                  case NavigationType.Group:
                    return (<Route key={page.uri} exact path={page.uri}> <Browse {...page} /> </Route>)
                  default:
                    break;
                }
              }), <Route path="*" component={NotFound} ></Route>]}

            </Switch>
        </Container>

      </div>
    )
  };
}