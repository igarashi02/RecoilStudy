import React from 'react';
import ReactDOM from 'react-dom';

// Recoil
import { RecoilRoot } from 'recoil'

// Components
import { Todo } from './pages/Todo.jsx'

ReactDOM.render(
  <RecoilRoot>
    <Todo />
  </RecoilRoot>,
  document.getElementById('root')
)
