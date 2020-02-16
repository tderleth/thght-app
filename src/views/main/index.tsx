import * as React from 'react';
import { NativeRouter, Route as ReactRoute } from 'react-router-native';
import CaptureThought from '../capture-thought/open';
import Reflect from '../reflect';

const Main: React.SFC = (): JSX.Element => (
  <NativeRouter>
    <ReactRoute key="/" exact path="/" component={CaptureThought} />
    <ReactRoute key="/reflect" exact path="/reflect" component={Reflect} />
  </NativeRouter>
);

export default Main;
