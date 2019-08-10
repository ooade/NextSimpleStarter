import React from 'react';

/*
first  I tried the react-media library but it wouldn't respond probably due to SSR 
then I discovered this approach and stole it from:
https://github.com/zeit/styled-jsx/issues/254

<Media query="(min-width: 978px)">
        {({ matches }) => (
        <div>
            <style jsx>{`div { background: ${matches ? 'tomato' : 'hotpink' }`}</style>
        </div>
        )}
</Media>

*/

class Media extends React.Component {
    constructor(props) {
      super(props);
      this.state = { matches: true, isMounted: false };

      this.mediaQueryChanged = this.mediaQueryChanged.bind(this);  

      this.mql = null;
    }
   
    componentDidMount() {
      if (!window.matchMedia) {
        return;
      }
   
      const mql = window.matchMedia(this.props.query);
      mql.addListener(this.mediaQueryChanged);
   
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ mql, matches: mql.matches, isMounted: true });
    }
   
    componentWillUnmount() {
      if (!window.matchMedia) {
        return;
      }
      if (this.state.mql) {
        this.state.mql.removeListener(this.mediaQueryChanged);
      }
    }
   
    mediaQueryChanged = () => {
      const { matches } = this.state.mql;
      const state = { matches };
      this.setState(state);
    };
   
    render() {
        // SSR don't display the component until it lands in the client and can tell if its mobile or desktop width 
        const { isMounted } = this.state;
      
      return (<div style={isMounted ? {display: "block"} :  {display: "none"}}>
        {this.props.children(this.state)}
      </div>)
    }
   }

export default Media;
