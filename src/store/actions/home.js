// import apiConfig from '../../lib/api-config'

// export function getNewsList (me, page) {
//   let newListApi = apiConfig.newsListApi(page)
//   function stream (me, newListApi) {
//     stream.fetch(
//       {
//         method: 'GET',
//         url: newListApi,
//         type: 'json'
//       },
//       function (ret) {
//         if (!ret.ok) {
//           me.getResult = 'request failed'
//         } else {
//           me.getResult = JSON.stringify(ret.data)
//           me.getResult = JSON.parse(me.getResult)
//           me.Result.push(me.getResult)
//         }
//       },
//       function (response) {
//         me.getResult = 'bytes received:' + response.length
//       }
//     )
//   }
// }
