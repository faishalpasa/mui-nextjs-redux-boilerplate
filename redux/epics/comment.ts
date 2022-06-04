import { of } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import type { Epic } from 'redux-observable'
import type { EpicDependencies } from 'redux/store'

import {
  COMMENT_FETCH,
  commentFetchFailure,
  commentFetchSuccess,
} from 'redux/reducers/comment'
import { snackbarOpen } from 'redux/reducers/snackbar'

import { COMMENT_GET } from 'constants/endpoints'

export const commentFetchEpic: Epic = (action$, _, { api }: EpicDependencies) => action$.pipe(
  ofType(COMMENT_FETCH),
  mergeMap((action) => api({
    endpoint: COMMENT_GET,
    host: 'https://jsonplaceholder.typicode.com',
    query: {
      postId: action.payload,
    },
  }).pipe(
    mergeMap(({ response }: any) => of(
      commentFetchSuccess(response),
      snackbarOpen({
        message: 'Comments fetched successfully',
      }),
    )),
    catchError((err) => of(
      snackbarOpen({
        message: 'Error',
      }),
      commentFetchFailure(),
    )),
  )),
)
