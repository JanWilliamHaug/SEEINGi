//environment.js
import * as Updates from "expo-updates";

var environments = {
  staging: {
    FIREBASE_API_KEY: "AIzaSyBBB6ubBLnyf7f0gQx-HsGe4s3AXF8AxM8",
    FIREBASE_AUTH_DOMAIN: "https://seeingi-67994.firebaseapp.com/",
    FIREBASE_DATABASE_URL: "https://seeingi-67994-default-rtdb.firebaseio.com/",
    FIREBASE_PROJECT_ID: "seeingi-67994",
    FIREBASE_STORAGE_BUCKET:
      "https://console.firebase.google.com/project/seeingi-67994/storage/seeingi-67994.appspot.com/files",
    FIREBASE_MESSAGING_SENDER_ID: "527033943156",
    GOOGLE_CLOUD_VISION_API_KEY:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDxPKaztwMZOQUl\nJpwZxqbcoVAb2QERXNMA/3P8hozFLKypckHfCFZI35SgNGT2A0Nq4F/gLR/lfMgv\nEn8oA9kwYoeeWplZ1FAINSA6geDz1eL0s7gFAv62YkLgZyCa89VjVcwTZximodLZ\nkbWHWdgqD8EOTefEjgrnUKmya76nQzh6J9nJUeSiGueLx8HHZonXlHyYA6bY3aPp\nHW7NbtrijRJPtmDvSS+DDsCps1p6xHig5d6YGT4mz3NRhLcc5mfxF43zLeWsmoP7\nLndSpZxSKP0JZYMtCY7tpKw1QBeXENyBBrWPx9LwZu2ylA+j8A/DLsEbg8ptEFGJ\nHIHCfMsPAgMBAAECggEAcO+1lXYs9653p6xbMUAMl0bYA6mEs/WyfQma6dKt7ZNc\nJBnvF7TF/GjbomLVD014zvzLNd66S4wvBcaRjBC9Kcc++ZYtq93XN/hzJaDvSQhN\nr8TBdmswBv+akocFPzW/JTmiCEVgR4aD+UKbawnXRt3IQmObiSv8k81yHKsPfyry\n7f2RaePrEN1/u0qCP7R0RBh8ZKJYcLrKTFGl/YN62ts0ywgunJOtsRNCHhNeHFBP\n5IQVy2dRuOc113M2sSqPNXei25VQvBcWWY20iL2rg1qYz4tKwrG12gdbwZ65Yit1\n7j6t/CMddVHAHe/aIFTtjFzjW6p/Th6lIU14SseMHQKBgQD/MAPc1M4epR3utXO3\n4fUGY3suVKcHdNvNB+l/225WD3WsdrFu0iErFiyyWtikc2QP+jxTNImqjtd4bKcp\nfAU0gyXwu4a4hL8BFqnVgRle1iE54kGNMgX3BvIEMqdFyd+2EIpgIBPoWHhFL/9G\nkRx6QXGhN8fI7OrSuICb9k380wKBgQDyAUQUQWmafEsCvBXF1Y0MWYNwVpJG2IFk\nAoQRmIG8bdBfzxtrJqL5Ktz7M77YbLEUOc8zm7BGWWDXv6XC5FulpbtPXjVPaXMR\ngwqTAS04DoEwKL7sYZBKRuIiXiqBmhZrhBNzS86WJYMaZ8ofYmR2YLs0IqXVHWPI\nqoxF6n0jVQKBgA648XAbIu0nr4tnEo8ITT+aG7A3mA9ZEZlJnJIQ0dPLPom9q0zu\neJVoyRldHmSWd65oTHSsckjRxuKeuiItkotOCbFS0Fny5qYkbZXwxcrv5ajWQdvo\nh+mRkALn/TiMhgiV+bXEBAICoKW1ODAVDSSMhAa+Fhukd4PCu0DEPAmbAoGBAJ68\nW9ZZbZZKTr1Vd4aTY3glQsSt1DaqDnz19YDBIt/gu9wMMfTfm+iJx/bxYw38hU45\n+QHl7gLG33HEoEqslLybb7hIl/kltrdW19nC3NE3Gl/nagwMlqNRyUQ3tfPaiTgu\nor9uiuwLYOoyB+78D99h5Yj17QZTx764t1eozjodAoGBAMi5iWyC5w2bec57Sr8U\nIOVUlnKCHjpbIvCP2UMY4lT/GUG6DR3iTss7q1mp1MaYFVCTochZPOLpcVXr79uD\nu5YoU49GAPkKfcbwD4o4NhK8/bzWPbDkoAfW0wOAET7JVxnpqvt6wul/j8FbBxDf\n5qYPoWR/5e01t7mdZGWbo8n2\n-----END PRIVATE KEY-----\n",
  },
  production: {
    // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
  },
};

function getReleaseChannel() {
  let releaseChannel = Updates.releaseChannel;
  if (releaseChannel === {}) {
    return "staging";
  } else if (releaseChannel === "staging") {
    return "staging";
  } else {
    return "staging";
  }
}
function getEnvironment(env) {
  console.log("Release Channel: ", getReleaseChannel());
  return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;
