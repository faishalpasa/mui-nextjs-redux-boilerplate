import React from 'react'

import {
  Box,
  Button,
  Divider,
  Typography
} from '@mui/material'

import type { PropsFromSelector } from './basicSelector'

interface ViewProps extends PropsFromSelector {
  handleFetchNewsComment: (newsId: number) => void
}

const BasicView = ({
  handleFetchNewsComment,
  news,
}: ViewProps) => (
  <Box flex={1}>
    <Typography component="h2" variant="h4" sx={{ textAlign: 'center', paddingBottom: 1 }}>
      Without Observable
    </Typography>

    <Divider />

    <Box pt={2}>
      <Typography component="h3" variant="h5" sx={{ paddingBottom: 1 }}>
        Fetching Data
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleFetchNewsComment(1)}
        disabled={news.isLoading}
      >
        Fetch News Comment
      </Button>
      <Box>
        <ul>
          {news.comments.map(comment => (
            <li key={comment.id}>
              <Typography>{comment.body}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  </Box>
)

export default BasicView