import React from 'react';

interface IProps {
    
}


export default class Search extends React.Component<IProps> {

  constructor(props: IProps) {
    super(props)
  }


  render() {
    return (
      <div className="Search">
          <button>Searching</button>
      </div>
    )
  };
}