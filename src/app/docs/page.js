"use client"
import PageHeader from '@/components/PageHeader'
import { Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const MyDocumentation = () => {
  return (
    <PageHeader title="Install">
        <Container>
            <Grid container>
              <Grid item xs={12}>
                  <Stack>
                      <Typography variant='h2'>
                        Dokumentasiku - Overview
                      </Typography>
                      <Typography variant='h4' color='grey.400'>
                        Contekan ajaib untuk mempermudah hidup
                      </Typography>
                  </Stack>
                  <Stack mt={5} spacing={3}>
                      <Typography variant='h3'>
                        Introduction
                      </Typography>
                      <Typography variant='p' color='grey.400'>
                        Selamat datang di "Dokumentasiku" - Sebuah Sumber Terbuka yang Membantu Pekerjaan Anda! Saya bangga mempersembahkan platform inovatif ini untuk membantu Anda dalam proyek-proyek Anda. Khususnya yang mengerjakan dengan React + Material UI
                      </Typography>
                      <Typography variant='p' color='grey.400'>
                        Di "Dokumentasiku," saya berkomitmen untuk menyediakan alat yang Anda butuhkan untuk menghemat waktu dan tenaga dalam pekerjaan Anda. Apakah Anda mencari fungsi-fungsi kustom yang telah diuji, komponen-komponen yang teruji, atau sumber daya lainnya, Anda akan menemukannya di sini.
                      </Typography>
                      <Typography variant='p' color='grey.400'>Di "Dokumentasiku," saya yakin bahwa berbagi pengetahuan adalah kunci untuk kemajuan teknologi. Inilah mengapa saya berkomitmen untuk menjadi komunitas terbuka yang mengedepankan kolaborasi dan pertukaran ide.</Typography>
                  </Stack>
                </Grid>
            </Grid>
        </Container>
    </PageHeader>
  )
}

export default MyDocumentation