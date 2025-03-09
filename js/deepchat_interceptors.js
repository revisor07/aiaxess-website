let saved_session = ""
function responseInterceptor(response) {
    if (response.SessionID) {
        saved_session = response.SessionID
    }
    return response;
  };

function requestInterceptor(requestDetails) {
    if (saved_session != ""){
        requestDetails.headers['SessionID'] = saved_session
    }
    return requestDetails;
  };
