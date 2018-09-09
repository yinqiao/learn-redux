// import fetch from 'dva/fetch'

// export function postApi({ url, method }, data = {}, presets = [parseJSON], config = {}) {
//     const { isMock = false, timeout = 8000 } = config

//     const hookData = { type: 'get', url, isMock, data, presets, timeout, startTime: new Date() }
//     const formData = object2FromData(data);
//     return fetch(`${getRealUrl(url)}?${requestParam}`, {
//       method: 'POST',
//       mode: 'cors',
//       credentials: 'include',
//       body: formData,
//       redirect: 'manual',
//       headers: {
//         Accept: 'application/json, application/xml, text/plain, text/html, *.*',
//       },
//     })
//     .then((res) => {
//       scu.applyHook('beforeRequest', hookData, res)
//       return applyPresets(res, presets)
//     })
//     .then((res) => {
//       scu.applyHook('onRequestSuccess', hookData, res)
//       return res
//     })
//     .catch((err = {}) => {
//       devCookieReslover(getRealHost(url))
//       const { msg = '', code = '' } = err
//       scu.applyHook('onRequestFail', { ...hookData, msg, code }, err)
//       return { err }
//     })
//   }

export function fetchUser(params) {
  // return postApi({
  //   url: '/sceneTemplate/saveSceneTemplate.json',
  // }, params, presetsWithSuccessJudge)
  return {
    result: 'xxxx'
  }
}