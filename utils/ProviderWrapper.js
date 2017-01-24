import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

// HOC to wrap Provider to Component
export default function(ComposedComponent) {
  const ProviderWrapper = (props) => {
    return (
      <Provider store={store}>
        <ComposedComponent {...props} />
      </Provider>
    );
  }

  return ProviderWrapper;
};
