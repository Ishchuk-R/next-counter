
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Styled from './styles';

import {
  decrement, increment, counter, asyncIncrement,
} from '../Store';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(counter);

  return (
    <Styled.Counter>
      <Styled.Count>{count}</Styled.Count>
      <Styled.BtnPanel>
        <Styled.Btn
          type="button"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Add one
        </Styled.Btn>
        <Styled.Btn
          type="button"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Sub one
        </Styled.Btn>
        <Styled.Btn
          onClick={() => {
            dispatch(asyncIncrement());
          }}
          className="btn"
          type="button"
        >
          Add one async
        </Styled.Btn>
      </Styled.BtnPanel>
    </Styled.Counter>
  );
}