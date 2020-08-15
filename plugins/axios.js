export default function ({ $axios, error }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
    console.log(config);
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
  // $axios.onError(e => {
  //   if (e.response.status === 403) {
  //     error({ statusCode: 403, message: "forbidden" })
  //   }
  //   if (e.response.status === 404) {
  //     error({ statusCode: 404, message: e })
  //   }
  //   if (e.response.status === 500) {
  //     error({ statusCode: 500, message: "server error" })
  //   }
  // })
}