import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Container } from '@material-ui/core'

import reducer from '../reducer'
import { Form, LicenseList} from './'
import { Button } from '@material-ui/core'


/* eslint-disable @typescript-eslint/no-explicit-any */
const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
    && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
const replace = () => {
  /* eslint-disable @typescript-eslint/no-var-requires */
  const nextReducer = require('../reducer')
  store.replaceReducer(nextReducer)
}

if (module.hot) {
  module.hot.accept('../reducer', replace)
}


const App = () => {

  const [data, setData] = React.useState([])

  const componentDidMount = () => {
    fetch('api/licenses/')
      .then(response => response.json())
      .then(response => {
          console.log(response._embedded.licenses)
          setData(response._embedded.licenses)
      })
    
  }

  const loadFromServer = () => {
    fetch('api/licenses/')
      .then(response => response.json())
      .then(response => {
          console.log(response._embedded.licenses)
          setData(response._embedded.licenses)
      })
  }

  const onDelete = (license) => {
    fetch(license._links.self.href, {
          method: 'DELETE',
        })
        .then(loadFromServer)
  }

  const onCreate = (license) => {
    fetch('api/licenses/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(license),
      })
      .then(loadFromServer)
  }

  return (
    <Provider store={store}>
      <Container>
        <h1>React Challenge - 2021</h1>
        <Form onCreate={onCreate}/>
      </Container>

      <Container>
        <Button onClick={componentDidMount}>Show me</Button>
        <LicenseList licenses={data} onDelete={onDelete}/>
      </Container>
    </Provider>
  )
}

export default hot(module)(App)
