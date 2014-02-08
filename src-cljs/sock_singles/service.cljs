(ns sock-singles.service
  (:require [sock-singles.util :as util :refer [gen-promise]]))

(enable-console-print!)

(def firebase (js/Firebase. "https://luminous-fire-8648.firebaseio.com"))

(defn github-login! []
  (let [promise (gen-promise)
        auth (js/FirebaseSimpleLogin. firebase (fn [err user]
                                                 (when err
                                                   (.reject promise err))
                                                 (when user
                                                   (.resolve promise user))))]
    (.login auth "github")
    promise))

(def githubLogin github-login!)
