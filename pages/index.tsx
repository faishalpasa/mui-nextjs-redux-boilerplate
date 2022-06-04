import React from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import { Button, Typography } from '@mui/material'
import type { NextPage } from 'next'

import { appThemeSet } from 'redux/reducers/app'
import { commentFetch } from 'redux/reducers/comment'
import styles from 'styles/Home.module.css'
import config from 'config'

const Home: NextPage = () => {
  const dispatch = useDispatch()

  const handleChangeTheme = () => {
    dispatch(appThemeSet('dark'))
  }

  const handleFetchComment = () => {
    dispatch(commentFetch(1))
  }
  return (
  <div className={styles.container}>
    <Head>
      <title>{config.appName}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Typography component="h1" className={styles.title}>
        {config.appName}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleChangeTheme}>
        Change Theme
      </Button>
      <Button variant="contained" color="primary" onClick={handleFetchComment}>
        Dispatch Comment
      </Button>
    </main>
  </div>
)
  }

export default Home
