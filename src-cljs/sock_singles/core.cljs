(ns sock-singles.core
  (:require [clojure.string :as string]
            [sock-singles.simulated :as sim]
            [sock-singles.service :as service]
            [sock-singles.parameters :as params]
            [sock-singles.util :as util]))

(enable-console-print!)

;; Socks API
(defn getParameters [] (clj->js params/parameters))
;;(def getSocks sim/getSocks)
(def getSocks service/get-socks)
(def getUsersRef service/get-users-ref)
(def getFirebaseRef service/get-firebase-ref)

;; Filters
(def colorFilter util/colorFilter)
(def lengthFilter util/lengthFilter)

;; Login
(def githubLogin service/github-login!)
(def isLoggedIn service/is-logged-in?)
(def getLoggedInUser service/get-logged-in-user)
