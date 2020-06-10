
import Counter from '../src/Counter';
import {store} from '../src/Store';
import { Provider } from 'react-redux';

export default function Home() {
  return (
    <div className="container">
        <Provider store={store}>
          <Counter />
        </Provider>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
