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
    if (requestDetails.body?.messages.length === 1) {
      // Insert assistant greeting before the first user message
      requestDetails.body?.messages.unshift({
        role: 'assistant',
        text: "Welcome to Almine Rech."
      });
    }
    console.log("Messages being sent:", requestDetails.body?.messages);
    return requestDetails;
  };
