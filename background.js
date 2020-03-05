// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.contentScriptQuery == "gazePoint") {
      console.log("what is going on")
      fetch('https://gazeapp-api-heroku.herokuapp.com/data')
      .then(response => response.json())
      .then(myJson => sendResponse(myJson));
      return true;
    }
  });
