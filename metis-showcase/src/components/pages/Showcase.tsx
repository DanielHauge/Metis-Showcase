import React from 'react';

interface IProps {
    title: String;
    uri: String;
}


export default class Showcase extends React.Component<IProps> {

  // constructor(props: IProps) {
  //   super(props)
  // }

  componentDidMount(){
      console.log(this.props.title, " mounted")
  }


  render() {
    return (
      <div className="Showcase">
        Showcase
          <h1>{this.props.title}</h1>
          <button>{this.props.uri}</button>

      </div>
    )
  };
}