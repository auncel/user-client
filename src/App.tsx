/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Monday, 30th March 2020 8:28 pm                             *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Monday, 30th March 2020 8:28 pm                            *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2020 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routers from './pages/routers';

import './App.css';
import { BaseLayout } from './layouts/Base';

const App: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loding...</div>}>
      <Switch>
        {routers.map((router) => (
          <Route
            key={router.path}
            path={router.path}
            render={(): JSX.Element => {
              const Content = router.components;
              switch (router.layout) {
                default:
                  return (
                    <BaseLayout>
                      <Content />
                    </BaseLayout>
                  );
              }
            }}
          />
        ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
